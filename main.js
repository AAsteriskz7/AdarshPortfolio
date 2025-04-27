let scene, camera, renderer, points, linesMesh, mouseX = 0, mouseY = 0;
const container = document.getElementById('three-canvas-container');
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let animationFrameId = null;

const PARTICLE_COUNT = window.innerWidth < 768 ? 35 : 50;
const MAX_DISTANCE = 60;
const PARTICLE_SPEED = 0.02;
const EDGE_BIAS_RADIUS = 90;

let particleVelocities = [];
let particlesGeometry, pointsMaterial, lineGeometry, lineMaterial;

function initThreeJS() {
    try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 160);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        if (points) { scene.remove(points); points.geometry.dispose(); points.material.dispose(); points = null; }
        if (linesMesh) { scene.remove(linesMesh); linesMesh.geometry.dispose(); linesMesh.material.dispose(); linesMesh = null; }

        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const colors = new Float32Array(PARTICLE_COUNT * 3);
        const color = new THREE.Color();
        const baseColors = [0x3b82f6, 0xa855f7, 0x22c55e];
        particleVelocities = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            let x, y, z;
            do {
                const spread = 170;
                x = (Math.random() - 0.5) * spread;
                y = (Math.random() - 0.5) * spread;
                z = (Math.random() - 0.5) * spread;
            } while (Math.sqrt(x*x + y*y + z*z) < EDGE_BIAS_RADIUS);
            positions[i3] = x; positions[i3 + 1] = y; positions[i3 + 2] = z;
            color.setHex(baseColors[Math.floor(Math.random() * baseColors.length)]);
            colors[i3] = color.r; colors[i3 + 1] = color.g; colors[i3 + 2] = color.b;
            particleVelocities.push(new THREE.Vector3((Math.random()-0.5)*PARTICLE_SPEED, (Math.random()-0.5)*PARTICLE_SPEED, (Math.random()-0.5)*PARTICLE_SPEED));
        }

        particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        pointsMaterial = new THREE.PointsMaterial({ 
            size: 1.5, // Reduce from 2.0
            vertexColors: true, 
            blending: THREE.AdditiveBlending, 
            transparent: true, 
            opacity: 0.7, 
            depthWrite: false 
        });
        points = new THREE.Points(particlesGeometry, pointsMaterial);
        scene.add(points);

        const maxLineVertices = PARTICLE_COUNT * (PARTICLE_COUNT - 1) * 3;
        const linePositions = new Float32Array(maxLineVertices);
        lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
        lineMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false });
        linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(linesMesh);

        window.removeEventListener('resize', onWindowResize);
        document.removeEventListener('mousemove', onDocumentMouseMove);
        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousemove', onDocumentMouseMove, false);

        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animateThreeJS();

    } catch (error) { console.error("Error initializing Three.js:", error); if (container) container.style.display = 'none'; }
}

function onWindowResize() {
     windowHalfX = window.innerWidth / 2; windowHalfY = window.innerHeight / 2;
    if (camera && renderer && container) { camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(container.clientWidth, container.clientHeight); }
}

function onDocumentMouseMove(event) { mouseX = (event.clientX - windowHalfX) / windowHalfX; mouseY = (event.clientY - windowHalfY) / windowHalfY; }

function animateThreeJS() {
    animationFrameId = requestAnimationFrame(animateThreeJS);
    if (!points?.geometry?.attributes?.position || !linesMesh?.geometry?.attributes?.position || !particleVelocities || particleVelocities.length !== PARTICLE_COUNT) return;

    const positions = points.geometry.attributes.position.array;
    const linePositions = linesMesh.geometry.attributes.position.array;
    let vertexPos = 0; let lineCount = 0;
    const maxVerticesInLineBuffer = linePositions.length;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3; if (!particleVelocities[i]) continue;
        positions[i3] += particleVelocities[i].x; positions[i3 + 1] += particleVelocities[i].y; positions[i3 + 2] += particleVelocities[i].z;
        const bounds = 160;
        if (positions[i3] < -bounds || positions[i3] > bounds) particleVelocities[i].x *= -1;
        if (positions[i3 + 1] < -bounds || positions[i3 + 1] > bounds) particleVelocities[i].y *= -1;
        if (positions[i3 + 2] < -bounds || positions[i3 + 2] > bounds) particleVelocities[i].z *= -1;

        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
             const j3 = j * 3; const dx = positions[i3] - positions[j3]; const dy = positions[i3 + 1] - positions[j3 + 1]; const dz = positions[i3 + 2] - positions[j3 + 2];
             const distSq = dx * dx + dy * dy + dz * dz;
             if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
                 if (vertexPos < maxVerticesInLineBuffer - 6) {
                     linePositions[vertexPos++] = positions[i3]; linePositions[vertexPos++] = positions[i3 + 1]; linePositions[vertexPos++] = positions[i3 + 2];
                     linePositions[vertexPos++] = positions[j3]; linePositions[vertexPos++] = positions[j3 + 1]; linePositions[vertexPos++] = positions[j3 + 2];
                     lineCount++;
                 } else { break; }
             }
        }
         if (vertexPos >= maxVerticesInLineBuffer - 6) break;
    }

    points.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.setDrawRange(0, lineCount * 2);

    if(camera) { const targetX = mouseX * 40; const targetY = -mouseY * 40; camera.position.x += (targetX - camera.position.x) * 0.01; camera.position.y += (targetY - camera.position.y) * 0.01; camera.lookAt(scene.position); }
    if(renderer && scene && camera) { renderer.render(scene, camera); }
}

 window.onload = function() { if (container) { initThreeJS(); } else { console.error("Three.js container not found."); } };

const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const skillBar = entry.target.querySelector('.skill-bar');
            if (skillBar) {
                skillBar.style.width = skillBar.getAttribute('data-skill-level');
            }
        } else {
            entry.target.classList.remove('visible');
            const skillBar = entry.target.querySelector('.skill-bar');
             if (skillBar) {
                 skillBar.style.width = '0%';
             }
        }
    });
}, {
    threshold: 0.2,
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const headerOffset = document.querySelector('header')?.offsetHeight || 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    });
});
