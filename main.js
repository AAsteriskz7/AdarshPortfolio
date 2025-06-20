gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

let scene, camera, renderer, points, linesMesh, mouseX = 0, mouseY = 0;
const container = document.getElementById('three-canvas-container');
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let animationFrameId = null;

const PARTICLE_COUNT = window.innerWidth < 768 ? 35 : 50;
const MAX_DISTANCE = 90; //connection size between particles
const PARTICLE_SPEED = 0.02;
const EDGE_BIAS_RADIUS = 110; //keeps particles so they are not too close the center

let particleVelocities = [];
let particlesGeometry, pointsMaterial, lineGeometry, lineMaterial;

function initThreeJS() {
    try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 220);

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
                const spread = 300;
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
        const bounds = 290;
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

document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('#hero-text h1');
    const heroSubheading = document.querySelector('#hero-text p');
    const heroPhoto = document.getElementById('hero-photo');
    const scrollArrow = document.querySelector('.scroll-down-arrow');

    // Hero Text and Arrow Animations
    if (heroHeading && heroSubheading) {
        const headingText = heroHeading.textContent.trim();
        heroHeading.textContent = ''; // Clear heading for typewriter

        const subheadingText = heroSubheading.textContent.trim();
        heroSubheading.textContent = ''; // Clear subheading for word animation
        const subheadingWords = subheadingText.split(' ');

        subheadingWords.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.display = 'inline-block'; // Necessary for y transform
            heroSubheading.appendChild(span);
        });

        const tl = gsap.timeline();

        // Set initial state for heading (already cleared)
        // 1. Typewriter for Heading
        tl.to(heroHeading, {
            text: headingText,
            duration: 1.5,
            ease: "power1.inOut",
        });

        // 2. Staggered Reveal for Subheading
        const subheadingSpans = heroSubheading.querySelectorAll('span');
        gsap.set(subheadingSpans, { opacity: 0, y: 20 }); // Initial state for spans

        tl.to(subheadingSpans, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
        }, "-=0.5"); // Start slightly before the heading finishes for a smoother transition

        // 3. Scroll-Down Arrow Animation (added to the main timeline)
        if (scrollArrow) {
            tl.fromTo(scrollArrow,
                { opacity: 0, y: 0, scale: 0.8 },
                {
                    opacity: 1,
                    y: -10,
                    scale: 1.05,
                    duration: 1.2,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                },
            ">"); // Start after previous animations complete
        }

    } else {
        console.error('Hero text elements not found for animation.');
    }

    // Hero Photo Animations
    if (heroPhoto) {
        // Initial State
        gsap.set(heroPhoto, { opacity: 0, scale: 0.8 });

        // Scroll-Triggered Animation
        gsap.to(heroPhoto, {
            opacity: 1,
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: "#hero",
                start: "top 70%", // A bit earlier to ensure it's visible as user scrolls
                end: "bottom center",
                scrub: 1,
                // markers: true, // Uncomment for debugging
            }
        });

        // Mouse Interaction
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xPercent = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const yPercent = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1

            gsap.to(heroPhoto, {
                rotationY: xPercent * 5, // Max 5 degrees
                rotationX: -yPercent * 5, // Max 5 degrees
                duration: 0.7,
                ease: "power1.out",
                overwrite: 'auto'
            });
        });
    } else {
        console.error('Hero photo element not found for animation.');
    }

    // Section Title Animations (h2 elements)
    const sectionTitles = gsap.utils.toArray('section > h2');
    sectionTitles.forEach(title => {
        const originalText = title.textContent;
        title.textContent = ''; // Clear existing text
        const chars = originalText.split('');

        chars.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block'; // Allows transform
            if (char === ' ') { // Handle spaces for layout
                span.style.minWidth = '0.25em';
            }
            title.appendChild(span);
        });

        const charSpans = title.querySelectorAll('span');
        gsap.set(charSpans, { opacity: 0, x: -20 });

        gsap.to(charSpans, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                // markers: true, // for debugging
            }
        });
    });

    // Helper function for staggered list animations
    function animateStaggeredList(elementsOrSelector, triggerSelector, staggerAmount = 0.2, yOffset = 30, start = "top 80%", xOffset = 0) {
        const elements = gsap.utils.toArray(elementsOrSelector);
        if (elements.length === 0) {
            // console.warn(`No elements found for selector: ${elementsOrSelector} in animateStaggeredList`);
            return;
        }

        gsap.set(elements, { opacity: 0, y: yOffset, x: xOffset });

        gsap.to(elements, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8, // Standardized duration, can be parameterized if needed
            stagger: staggerAmount,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: triggerSelector || elements[0].parentNode, // Default to parent if no trigger specific
                start: start,
                // markers: true, // for debugging
            }
        });
    }

    // "About Me" Paragraph Animation (#about p)
    animateStaggeredList('#about p', '#about');

    // Skills Section Content Stagger (#skills .grid > div)
    // These divs have reveal-left and reveal-right. We can use the helper to animate them from bottom,
    // or create specific animations if we want to keep left/right reveal.
    // For now, let's use a consistent y reveal.
    animateStaggeredList('#skills .grid > div', '#skills .grid', 0.1);

    // Extensions Section Cards Stagger (#apps .card)
    animateStaggeredList('#apps .card', '#apps', 0.15);

    // CS Projects Section Cards Stagger (#cs-projects .card)
    animateStaggeredList('#cs-projects .card', '#cs-projects', 0.15);

    // Skill Bar Animations
    const skillBars = gsap.utils.toArray('.skill-bar');
    skillBars.forEach(skillBar => {
        const targetWidth = skillBar.dataset.skillLevel || "0%";
        const targetPercentage = parseInt(targetWidth, 10); // Get numerical value for counter

        gsap.set(skillBar, { width: "0%", opacity: 0 }); // Initial state

        let counter = { value: 0 };

        gsap.to(skillBar, {
            width: targetWidth,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: skillBar.parentElement, // Trigger based on the parent div
                start: "center bottom", // Start when center of parent hits bottom of viewport
                // markers: true, // for debugging
                once: true, // Animate only once
            },
            onUpdate: function() {
                // This onUpdate is for the skillBar tween itself, not ideal for counter
            },
            onComplete: function() {
                 // Ensure final text is accurate, though counter should handle this too
                skillBar.textContent = targetPercentage + '%';
            }
        });

        // Separate tween for the counter, synced by the same ScrollTrigger logic essentially
        // We want this to start when the skillBar's parent is triggered
        gsap.to(counter, {
            value: targetPercentage,
            duration: 1.2, // Same duration as width animation
            ease: 'power2.out', // Same ease
            scrollTrigger: {
                trigger: skillBar.parentElement,
                start: "center bottom",
                once: true,
            },
            onUpdate: function() {
                skillBar.textContent = Math.round(counter.value) + '%';
            }
        });
    });

    // Interactive Hover Effect for Project/Extension Cards
    const interactiveCards = gsap.utils.toArray('#apps .card, #cs-projects .card');
    interactiveCards.forEach(card => {
        gsap.set(card, { perspective: "1000px" }); // Set perspective for 3D effect

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8, // Lift up
                rotationX: 2, // Tilt slightly
                rotationY: 4, // Tilt slightly
                scale: 1.02, // Slight scale to match original CSS hover
                boxShadow: "0px 15px 25px rgba(0,0,0,0.2)", // Enhanced shadow
                duration: 0.35,
                ease: "power2.out",
                overwrite: 'auto'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1.0, // Back to normal scale
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", // Resting shadow - adjust if needed
                duration: 0.35,
                ease: "power2.out",
                overwrite: 'auto'
            });
        });
    });

    // Custom Mouse Cursor Trail Effect
    const cursorDot = document.createElement('div');
    cursorDot.id = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const cursorTrail = document.createElement('div');
    cursorTrail.id = 'cursor-dot-trail';
    document.body.appendChild(cursorTrail);

    gsap.set([cursorDot, cursorTrail], {
        position: 'fixed',
        top: 0,
        left: 0,
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0,
        pointerEvents: 'none'
    });

    let isFirstMove = true;

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;

        if (isFirstMove) {
            gsap.to(cursorDot, {
                x: clientX,
                y: clientY,
                opacity: 1,
                scale: 1,
                duration: 0.1,
                ease: "power1.out"
            });
            gsap.to(cursorTrail, {
                x: clientX,
                y: clientY,
                opacity: 0.4, // Trail less opaque
                scale: 1,   // Trail starts at normal scale then CSS makes it bigger
                duration: 0.3,
                ease: "power1.out"
            });
            isFirstMove = false;
        } else {
            gsap.to(cursorDot, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power1.out"
            });
            gsap.to(cursorTrail, {
                x: clientX,
                y: clientY,
                duration: 0.3, // Slower for trailing effect
                ease: "power1.out"
            });
        }
    });

    window.addEventListener('mousedown', () => {
        gsap.to(cursorDot, { scale: 1.5, duration: 0.15, ease: 'power1.out' });
    });

    window.addEventListener('mouseup', () => {
        gsap.to(cursorDot, { scale: 1, duration: 0.15, ease: 'power1.out' });
    });

    document.body.addEventListener('mouseleave', () => {
        gsap.to([cursorDot, cursorTrail], { opacity: 0, scale: 0, duration: 0.2, ease: 'power1.out' });
        isFirstMove = true; // Reset for when mouse re-enters
    });

    document.body.addEventListener('mouseenter', (e) => {
        // This event is mainly to handle re-entry after a mouseleave from body.
        // The mousemove event will handle the actual positioning and fade-in.
        // We can force an initial quick fade-in here if needed, but mousemove should cover it.
         if (isFirstMove) { // If mouse left body and re-enters, treat as first move
            gsap.to([cursorDot, cursorTrail], {opacity:0, scale:0, duration:0}); // instant hide if not already
         }
    });
});