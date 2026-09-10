import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pythonScriptPath = path.join(__dirname, '../ai_engine.py');

export const chatWithAI = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ message: 'Query string is required' });
    }

    // Call python script
    execFile('python', [pythonScriptPath, JSON.stringify({ query })], async (error, stdout, stderr) => {
      let aiResult;
      if (error || !stdout) {
        // Fallback response if python has an unexpected execution error
        aiResult = {
          reply: `Here to help with your DMart shopping! How can I assist with groceries, electronics, or checkout?`,
          intent: 'GENERAL_HELP',
          chips: ['Top 3D Deals', 'Groceries & Staples', 'Payment Methods']
        };
      } else {
        try {
          aiResult = JSON.parse(stdout.trim());
        } catch (parseErr) {
          aiResult = {
            reply: stdout.trim(),
            intent: 'GENERAL_HELP',
            chips: ['Top Deals', 'View Cart']
          };
        }
      }

      // If python recommended a product by name, find the product in MongoDB to provide full product data & 3D specs
      let recommendedProduct = null;
      if (aiResult.recommend_product_name) {
        recommendedProduct = await Product.findOne({
          name: { $regex: aiResult.recommend_product_name, $options: 'i' }
        });
      } else if (aiResult.target) {
        recommendedProduct = await Product.findOne({
          name: { $regex: aiResult.target, $options: 'i' }
        });
      }

      res.json({
        ...aiResult,
        recommendedProduct
      });
    });
  } catch (err) {
    res.status(500).json({ message: 'AI Assistant error', error: err.message });
  }
};
