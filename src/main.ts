import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // White background

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 3;
controls.maxDistance = 20;

// Cylinder for celestial sphere
const cylinderGeometry = new THREE.CylinderGeometry(8, 8, 6, 64, 1, true);
const gridTexture = new THREE.TextureLoader().load(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTExLTA3VDE2OjEwOjA4KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMS0wN1QxNjoxMToxNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0xMS0wN1QxNjoxMToxNiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YzI4YTAyMC1mY2Q1LTRiZmYtOWZiYy0xY2QwMmVjYzU3ZmUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphZGVmZTBmMC01YjExLTZiNDUtYjJkOS0zNzBjNDZkYmExNGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYWJhMjA5Zi1mY2QwLTQ5MjUtOGFlNS01OGNiY2ZjZmVjOTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNhYmEyMDlmLWZjZDAtNDkyNS04YWU1LTU4Y2JjZmNmZWM5MSIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0wN1QxNjoxMDowOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YzI4YTAyMC1mY2Q1LTRiZmYtOWZiYy0xY2QwMmVjYzU3ZmUiIHN0RXZ0OndoZW49IjIwMTgtMTEtMDdUMTY6MTE6MTYrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6NHhITAAABG0lEQVR42u3WQQqDMBCF4UmrJy8e1VC7q1hvH3VRpF1kDAaJJpkM/wdhFk7yZgyPJOu6ZpkG0cxCwDA8p2kalXUL7DFxtm3L6rou3JcAgIVJCCgrAQA5ATw3NZYk5JznzgT45p8FnHJ5YwD0NEaHACEEIOGOQHj0wm2/v74Ivx5w3AswvEIwCwQ4BLr4ZgXQAAAAAAAEAAAAAAQAAAAABAAAAOAAgC/Bb7c/AfimrIoAAAAA/xJpDmBVFQAAAAAAAAAAAAAAgnJYnhUQN4+6ApwDRvkW6G0fACxNMB2wG1D1fIJr/vIBAPHJNQACAAAQgAAAAAgAAAggAAAABAAAABAAAAACAAAQgAAEIAABCEBgwAfdGqf/jDnA6QAAAABJRU5ErkJggg=='
);
const cylinderMaterial = new THREE.MeshBasicMaterial({
    color: 0x222222,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.6,
    map: gridTexture
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
scene.add(cylinder);

// Add a white ground plane 
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
plane.position.y = -0.5;
scene.add(plane);

// Create orbital paths - Earth is on XZ plane
const earthOrbitRadius = 2.5;
const marsOrbitRadius = 4;

// Earth orbit path
const earthOrbitGeometry = new THREE.BufferGeometry();
const earthOrbitPoints = [];
for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    earthOrbitPoints.push(new THREE.Vector3(
        earthOrbitRadius * Math.cos(angle),
        0,
        earthOrbitRadius * Math.sin(angle)
    ));
}
earthOrbitGeometry.setFromPoints(earthOrbitPoints);
const earthOrbitMaterial = new THREE.LineBasicMaterial({ color: 0x3333ff });
const earthOrbit = new THREE.Line(earthOrbitGeometry, earthOrbitMaterial);
scene.add(earthOrbit);

// Mars orbit path with slight tilt (approximately 1.85° relative to Earth's ecliptic)
const marsEclipticTilt = 1.85 * Math.PI / 180; // Convert degrees to radians
const marsOrbitGeometry = new THREE.BufferGeometry();
const marsOrbitPoints = [];
for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    // Calculate position in the tilted plane
    const x = marsOrbitRadius * Math.cos(angle);
    const z = marsOrbitRadius * Math.sin(angle);
    const y = z * Math.sin(marsEclipticTilt); // Apply the tilt

    marsOrbitPoints.push(new THREE.Vector3(x, y, z * Math.cos(marsEclipticTilt)));
}
marsOrbitGeometry.setFromPoints(marsOrbitPoints);
const marsOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xff3333 });
const marsOrbit = new THREE.Line(marsOrbitGeometry, marsOrbitMaterial);
scene.add(marsOrbit);

// Sun
const sunGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFBF00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Add a glow effect to the sun
const sunLight = new THREE.PointLight(0xFFBF00, 1, 10);
sun.add(sunLight);

// Earth
const earthGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x3333ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Mars
const marsGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);

// Line of sight from Earth to Mars
const sightLineGeometry = new THREE.BufferGeometry();
const sightLinePositions = new Float32Array(6); // 2 points, 3 coordinates each
sightLineGeometry.setAttribute('position', new THREE.BufferAttribute(sightLinePositions, 3));
const sightLineMaterial = new THREE.LineBasicMaterial({ color: 0x5555ff });
const sightLine = new THREE.Line(sightLineGeometry, sightLineMaterial);
scene.add(sightLine);

// Trail for the apparent path of Mars
const maxTrailPoints = 2000;
const trailGeometry = new THREE.BufferGeometry();
const trailPositions = new Float32Array(maxTrailPoints * 3); // x, y, z for each point
trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));

// Use a gradient for the trail from white to pink
const trailColors = new Float32Array(maxTrailPoints * 3);
trailGeometry.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));

const trailMaterial = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
});
const trail = new THREE.Points(trailGeometry, trailMaterial);
scene.add(trail);

let trailIndex = 0;

// Orbital parameters
const T = 5; // Base period for animation
const earthPeriod = T;
const marsPeriod = T * 1.88; // Mars' orbital period relative to Earth's

const omegaEarth = (2 * Math.PI) / earthPeriod;
const omegaMars = (2 * Math.PI) / marsPeriod;

// Animation control
let time = 0;
let animationSpeed = 1;
let isPaused = false;

// Add UI controls
const createUIControls = () => {
    const uiContainer = document.createElement('div');
    uiContainer.style.position = 'absolute';
    uiContainer.style.bottom = '20px';
    uiContainer.style.width = '100%';
    uiContainer.style.textAlign = 'center';
    uiContainer.style.userSelect = 'none';
    document.body.appendChild(uiContainer);

    const titleDiv = document.createElement('div');
    titleDiv.textContent = 'Apparent Motion of Mars';
    titleDiv.style.color = '#333';
    titleDiv.style.fontSize = '24px';
    titleDiv.style.fontWeight = 'bold';
    titleDiv.style.position = 'absolute';
    titleDiv.style.top = '20px';
    titleDiv.style.width = '100%';
    titleDiv.style.textAlign = 'center';
    document.body.appendChild(titleDiv);

    // Stop button
    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'Stop';
    stopBtn.style.margin = '0 10px';
    stopBtn.style.padding = '8px 16px';
    stopBtn.style.borderRadius = '20px';
    stopBtn.style.border = 'none';
    stopBtn.style.background = '#333';
    stopBtn.style.color = 'white';
    stopBtn.style.cursor = 'pointer';
    stopBtn.onclick = () => {
        isPaused = true;
        animationSpeed = 0;
    };
    uiContainer.appendChild(stopBtn);

    // Slow button
    const slowBtn = document.createElement('button');
    slowBtn.textContent = 'Slow';
    slowBtn.style.margin = '0 10px';
    slowBtn.style.padding = '8px 16px';
    slowBtn.style.borderRadius = '20px';
    slowBtn.style.border = 'none';
    slowBtn.style.background = '#333';
    slowBtn.style.color = 'white';
    slowBtn.style.cursor = 'pointer';
    slowBtn.onclick = () => {
        isPaused = false;
        animationSpeed = 0.5;
    };
    uiContainer.appendChild(slowBtn);

    // Fast button
    const fastBtn = document.createElement('button');
    fastBtn.textContent = 'Fast';
    fastBtn.style.margin = '0 10px';
    fastBtn.style.padding = '8px 16px';
    fastBtn.style.borderRadius = '20px';
    fastBtn.style.border = 'none';
    fastBtn.style.background = '#333';
    fastBtn.style.color = 'white';
    fastBtn.style.cursor = 'pointer';
    fastBtn.onclick = () => {
        isPaused = false;
        animationSpeed = 2;
    };
    uiContainer.appendChild(fastBtn);

    // Reset button
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.margin = '0 10px';
    resetBtn.style.padding = '8px 16px';
    resetBtn.style.borderRadius = '20px';
    resetBtn.style.border = 'none';
    resetBtn.style.background = '#333';
    resetBtn.style.color = 'white';
    resetBtn.style.cursor = 'pointer';
    resetBtn.onclick = () => {
        time = 0;
        trailIndex = 0;
        trailGeometry.setDrawRange(0, 0);
        isPaused = false;
        animationSpeed = 1;
    };
    uiContainer.appendChild(resetBtn);
};

// Create the UI
createUIControls();

// Create a small info panel to explain the simulation
const createInfoPanel = () => {
    const infoPanel = document.createElement('div');
    infoPanel.style.position = 'absolute';
    infoPanel.style.top = '80px';
    infoPanel.style.right = '20px';
    infoPanel.style.width = '250px';
    infoPanel.style.padding = '15px';
    infoPanel.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    infoPanel.style.color = '#333';
    infoPanel.style.borderRadius = '5px';
    infoPanel.style.fontFamily = 'Arial, sans-serif';
    infoPanel.style.fontSize = '14px';
    infoPanel.style.lineHeight = '1.4';
    infoPanel.style.zIndex = '100';
    infoPanel.style.border = '1px solid #ddd';

    infoPanel.innerHTML = `
    <h3 style="margin-top: 0; margin-bottom: 10px;">Retrograde Motion of Mars</h3>
    <p>This simulation shows how Mars appears to move backwards in the sky when viewed from Earth.</p>
    <p>- <span style="color: #FFB000;">Yellow</span>: Sun</p>
    <p>- <span style="color: #3333ff;">Blue</span>: Earth</p>
    <p>- <span style="color: #ff3333;">Red</span>: Mars</p>
    <p>- <span style="color: pink;">Pink trail</span>: Apparent path of Mars as seen from Earth on the celestial sphere</p>
    <p>The simulation includes the ~1.85° tilt between Earth and Mars orbital planes.</p>
  `;

    document.body.appendChild(infoPanel);
};

createInfoPanel();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (!isPaused) {
        time += 0.01 * animationSpeed;

        // Update Earth position
        earth.position.x = earthOrbitRadius * Math.cos(omegaEarth * time);
        earth.position.z = earthOrbitRadius * Math.sin(omegaEarth * time);

        // Update Mars position with tilt
        const marsAngle = omegaMars * time;
        mars.position.x = marsOrbitRadius * Math.cos(marsAngle);
        const zBeforeTilt = marsOrbitRadius * Math.sin(marsAngle);
        mars.position.y = zBeforeTilt * Math.sin(marsEclipticTilt); // Apply tilt to y-coordinate
        mars.position.z = zBeforeTilt * Math.cos(marsEclipticTilt); // Adjusted z-coordinate

        // Update line of sight
        sightLinePositions[0] = earth.position.x;
        sightLinePositions[1] = earth.position.y;
        sightLinePositions[2] = earth.position.z;
        sightLinePositions[3] = mars.position.x;
        sightLinePositions[4] = mars.position.y;
        sightLinePositions[5] = mars.position.z;
        sightLineGeometry.attributes.position.needsUpdate = true;

        // Calculate intersection with cylinder to show apparent position of Mars on celestial sphere
        const Ex = earth.position.x;
        const Ey = earth.position.y;
        const Ez = earth.position.z;
        const Dx = mars.position.x - Ex;
        const Dy = mars.position.y - Ey;
        const Dz = mars.position.z - Ez;

        // Calculate the scaling factor for the line to reach the cylinder
        const cylinderRadius = 8;
        const a = (Dx * Dx) + (Dz * Dz); // Ignoring Y for simplification
        const b = 2 * (Ex * Dx + Ez * Dz);
        const c = (Ex * Ex) + (Ez * Ez) - (cylinderRadius * cylinderRadius);

        const discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
            // Line intersects cylinder
            const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            // Choose the intersection in the direction of Mars from Earth
            let t;
            if (t1 > 0 && t2 > 0) {
                t = Math.min(t1, t2); // Choose the closer intersection
            } else if (t1 > 0) {
                t = t1;
            } else if (t2 > 0) {
                t = t2;
            }

            if (t !== undefined) {
                // Calculate the intersection point
                const Px = Ex + t * Dx;
                const Py = Ey + t * Dy;
                const Pz = Ez + t * Dz;

                // Add point to trail
                trailPositions[trailIndex * 3] = Px;
                trailPositions[trailIndex * 3 + 1] = Py;
                trailPositions[trailIndex * 3 + 2] = Pz;

                // Add color gradient based on time - gives a nice fade from red to pink
                const hue = (time * 0.1) % 1;
                trailColors[trailIndex * 3] = 1.0;  // R (always high for pinkish color)
                trailColors[trailIndex * 3 + 1] = 0.5 + 0.3 * Math.sin(hue * Math.PI * 2); // G 
                trailColors[trailIndex * 3 + 2] = 0.7 + 0.3 * Math.cos(hue * Math.PI * 2); // B

                trailIndex = (trailIndex + 1) % maxTrailPoints;
                trailGeometry.attributes.position.needsUpdate = true;
                trailGeometry.attributes.color.needsUpdate = true;
                trailGeometry.setDrawRange(0, Math.min(trailIndex + 1, maxTrailPoints));
            }
        }
    }

    controls.update();
    renderer.render(scene, camera);
}

animate(); 