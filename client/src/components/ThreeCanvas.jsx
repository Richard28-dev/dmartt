import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({
  modelType = 'smartphone',
  primaryColor = '#1e293b',
  secondaryColor = '#38bdf8',
  accentColor = '#0f172a',
  metalness = 0.8,
  roughness = 0.25,
  isWireframe = false,
  autoRotate = true,
  height = '380px'
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 400;
    const heightPx = currentMount.clientHeight || 380;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const blueRimLight = new THREE.PointLight(0x00a8ff, 2.5, 20);
    blueRimLight.position.set(-6, 3, -4);
    scene.add(blueRimLight);

    const warmFillLight = new THREE.PointLight(0xffaa44, 1.8, 20);
    warmFillLight.position.set(6, -3, 3);
    scene.add(warmFillLight);

    // Group for product model
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Materials
    const mainMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(primaryColor),
      metalness: metalness,
      roughness: roughness,
      wireframe: isWireframe
    });

    const secondaryMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(secondaryColor),
      metalness: 0.9,
      roughness: 0.1,
      wireframe: isWireframe
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentColor),
      metalness: 0.5,
      roughness: 0.5,
      wireframe: isWireframe
    });

    // Build Model based on modelType
    if (modelType === 'smartphone') {
      // Body chassis
      const bodyGeom = new THREE.BoxGeometry(2.2, 4.4, 0.22, 16, 16, 4);
      const bodyMesh = new THREE.Mesh(bodyGeom, mainMaterial);
      bodyMesh.castShadow = true;
      modelGroup.add(bodyMesh);

      // Glass Screen
      const screenGeom = new THREE.PlaneGeometry(2.0, 4.2);
      const screenMat = new THREE.MeshPhysicalMaterial({
        color: 0x050b14,
        roughness: 0.05,
        metalness: 0.1,
        transmission: 0.6,
        thickness: 0.2,
        reflectivity: 0.9
      });
      const screenMesh = new THREE.Mesh(screenGeom, screenMat);
      screenMesh.position.z = 0.12;
      modelGroup.add(screenMesh);

      // Camera Bump
      const bumpGeom = new THREE.BoxGeometry(0.8, 1.4, 0.12);
      const bumpMesh = new THREE.Mesh(bumpGeom, accentMaterial);
      bumpMesh.position.set(0.5, 1.2, -0.14);
      modelGroup.add(bumpMesh);

      // Camera Lenses
      for (let i = 0; i < 3; i++) {
        const lensGeom = new THREE.CylinderGeometry(0.16, 0.16, 0.16, 32);
        const lensMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.95, roughness: 0.1 });
        const lensMesh = new THREE.Mesh(lensGeom, lensMat);
        lensMesh.rotation.x = Math.PI / 2;
        lensMesh.position.set(0.5, 1.6 - i * 0.4, -0.16);
        modelGroup.add(lensMesh);
      }
    } else if (modelType === 'headphone') {
      // Headband Arc
      const headbandCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-1.6, -0.2, 0),
        new THREE.Vector3(0, 2.2, 0),
        new THREE.Vector3(1.6, -0.2, 0)
      );
      const headbandGeom = new THREE.TubeGeometry(headbandCurve, 64, 0.14, 16, false);
      const headbandMesh = new THREE.Mesh(headbandGeom, mainMaterial);
      modelGroup.add(headbandMesh);

      // Left & Right Ear Cups
      [-1.65, 1.65].forEach((xPos, idx) => {
        const cupGeom = new THREE.CylinderGeometry(0.7, 0.7, 0.45, 32);
        const cupMesh = new THREE.Mesh(cupGeom, secondaryMaterial);
        cupMesh.rotation.z = Math.PI / 2;
        cupMesh.position.set(xPos, -0.4, 0);
        modelGroup.add(cupMesh);

        // Cushion
        const cushionGeom = new THREE.TorusGeometry(0.65, 0.18, 16, 32);
        const cushionMesh = new THREE.Mesh(cushionGeom, accentMaterial);
        cushionMesh.rotation.y = Math.PI / 2;
        cushionMesh.position.set(xPos + (idx === 0 ? 0.2 : -0.2), -0.4, 0);
        modelGroup.add(cushionMesh);
      });
    } else if (modelType === 'can') {
      // Beverage Can
      const canGeom = new THREE.CylinderGeometry(1.2, 1.2, 3.4, 48);
      const canMesh = new THREE.Mesh(canGeom, mainMaterial);
      canMesh.castShadow = true;
      modelGroup.add(canMesh);

      // Can Rim & Top
      const rimGeom = new THREE.TorusGeometry(1.2, 0.08, 16, 48);
      const rimMesh = new THREE.Mesh(rimGeom, secondaryMaterial);
      rimMesh.rotation.x = Math.PI / 2;
      rimMesh.position.y = 1.7;
      modelGroup.add(rimMesh);

      const bottomRim = rimMesh.clone();
      bottomRim.position.y = -1.7;
      modelGroup.add(bottomRim);
    } else if (modelType === 'bottle') {
      // Bottle Body
      const bodyGeom = new THREE.CylinderGeometry(1.1, 1.1, 2.5, 32);
      const bodyMesh = new THREE.Mesh(bodyGeom, mainMaterial);
      bodyMesh.position.y = -0.5;
      modelGroup.add(bodyMesh);

      // Bottle Neck
      const neckGeom = new THREE.CylinderGeometry(0.4, 1.0, 1.2, 32);
      const neckMesh = new THREE.Mesh(neckGeom, mainMaterial);
      neckMesh.position.y = 1.2;
      modelGroup.add(neckMesh);

      // Cap / Pump
      const capGeom = new THREE.CylinderGeometry(0.45, 0.45, 0.5, 32);
      const capMesh = new THREE.Mesh(capGeom, secondaryMaterial);
      capMesh.position.y = 1.95;
      modelGroup.add(capMesh);
    } else if (modelType === 'jar') {
      // Glass Jar
      const jarGeom = new THREE.CylinderGeometry(1.3, 1.25, 2.4, 32);
      const jarMesh = new THREE.Mesh(jarGeom, mainMaterial);
      modelGroup.add(jarMesh);

      // Lid
      const lidGeom = new THREE.CylinderGeometry(1.35, 1.35, 0.4, 32);
      const lidMesh = new THREE.Mesh(lidGeom, secondaryMaterial);
      lidMesh.position.y = 1.35;
      modelGroup.add(lidMesh);
    } else {
      // Box / Package / Pouch
      const boxGeom = new THREE.BoxGeometry(2.4, 3.2, 1.5);
      const boxMesh = new THREE.Mesh(boxGeom, mainMaterial);
      boxMesh.castShadow = true;
      modelGroup.add(boxMesh);

      // Ribbon / Accent Label
      const labelGeom = new THREE.BoxGeometry(2.45, 1.0, 1.55);
      const labelMesh = new THREE.Mesh(labelGeom, secondaryMaterial);
      modelGroup.add(labelMesh);
    }

    // Add decorative floating 3D particle dust
    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00b05b,
      size: 0.12,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Drag Interaction / Orbiting Logic
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rotationVelocity.y = deltaX * 0.008;
      rotationVelocity.x = deltaY * 0.008;

      modelGroup.rotation.y += rotationVelocity.y;
      modelGroup.rotation.x += rotationVelocity.x;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      modelGroup.rotation.y += deltaX * 0.008;
      modelGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart);
    domElement.addEventListener('touchmove', onTouchMove);
    domElement.addEventListener('touchend', onMouseUp);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDragging) {
        if (autoRotate) {
          modelGroup.rotation.y += 0.012;
        }
        // Floating bob effect
        modelGroup.position.y = Math.sin(elapsedTime * 2) * 0.12;
      }

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      domElement.removeEventListener('touchmove', onTouchMove);
      domElement.removeEventListener('touchend', onMouseUp);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelType, primaryColor, secondaryColor, accentColor, metalness, roughness, isWireframe, autoRotate]);

  return <div ref={mountRef} className="three-canvas-container" style={{ height }} />;
}
