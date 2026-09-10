import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      items,
      paymentMethod,
      discount = 0
    } = req.body;

    if (!customerName || !customerEmail || !customerPhone || !items || items.length === 0) {
      return res.status(400).json({ message: 'All required order fields and at least one item must be provided' });
    }

    if (!['phonepe', 'gpay', 'cod'].includes(paymentMethod)) {
      return res.status(400).json({ message: 'Invalid payment method' });
    }

    // Calculate totals
    let subtotal = 0;
    let mrpTotal = 0;
    const formattedItems = items.map((item) => {
      const price = Number(item.price);
      const mrp = Number(item.mrp || item.price);
      const quantity = Number(item.quantity || 1);
      subtotal += price * quantity;
      mrpTotal += mrp * quantity;
      return {
        product: item.productId || item._id,
        name: item.name,
        price,
        mrp,
        quantity,
        unit: item.unit || '1 pc'
      };
    });

    const taxAmount = Math.round(subtotal * 0.05); // 5% GST
    const deliveryFee = subtotal >= 499 ? 0 : 49;
    const totalAmount = Math.max(0, subtotal + taxAmount + deliveryFee - Number(discount));
    const savingsAmount = (mrpTotal - subtotal) + Number(discount);

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}-${randomSuffix.toString().slice(-3)}`;
    const invoiceNumber = `DMART-INV-${new Date().getFullYear()}-${randomSuffix}`;

    let paymentStatus = 'PENDING';
    let transactionId = '';

    if (paymentMethod === 'cod') {
      paymentStatus = 'CASH_ON_DELIVERY';
      transactionId = `COD-${randomSuffix}`;
    } else {
      // UPI payments (PhonePe / Google Pay)
      paymentStatus = 'COMPLETED';
      transactionId = `${paymentMethod.toUpperCase()}-UPI-${Date.now()}-${randomSuffix.toString().slice(-4)}`;
    }

    const newOrder = await Order.create({
      orderNumber,
      invoiceNumber,
      user: req.user ? req.user.id : undefined,
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      items: formattedItems,
      subtotal,
      discount: Number(discount),
      taxAmount,
      deliveryFee,
      totalAmount,
      savingsAmount,
      paymentMethod,
      paymentStatus,
      transactionId,
      orderStatus: 'CONFIRMED'
    });

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder,
      invoice: {
        invoiceNumber: newOrder.invoiceNumber,
        orderNumber: newOrder.orderNumber,
        date: newOrder.createdAt,
        customerName: newOrder.customerName,
        customerEmail: newOrder.customerEmail,
        customerPhone: newOrder.customerPhone,
        shippingAddress: newOrder.shippingAddress,
        items: newOrder.items,
        subtotal: newOrder.subtotal,
        discount: newOrder.discount,
        taxAmount: newOrder.taxAmount,
        deliveryFee: newOrder.deliveryFee,
        totalAmount: newOrder.totalAmount,
        savingsAmount: newOrder.savingsAmount,
        paymentMethod: newOrder.paymentMethod,
        paymentStatus: newOrder.paymentStatus,
        transactionId: newOrder.transactionId
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to process order', error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error: error.message });
  }
};

export const getOrderByInvoice = async (req, res) => {
  try {
    const order = await Order.findOne({ invoiceNumber: req.params.invoiceNumber });
    if (!order) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invoice', error: error.message });
  }
};
