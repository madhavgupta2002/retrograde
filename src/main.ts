import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Black background

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
    opacity: 0.9,
    map: gridTexture
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
scene.add(cylinder);

// Create orbital paths - Using more accurate relative distances
// Earth's orbit radius: 1 AU (astronomical unit)
// Mars's orbit radius: 1.524 AU
const earthOrbitRadius = 2.5;
const marsOrbitRadius = earthOrbitRadius * 1.524; // ~ 3.81

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

// Directional arrow for sight line
const createArrow = () => {
    const arrowGeometry = new THREE.ConeGeometry(0.1, 0.4, 8);
    const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0x5555ff });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    scene.add(arrow);
    return arrow;
};
const arrow = createArrow();

// Create a small white sphere for the trail template
const trailSphereGeometry = new THREE.SphereGeometry(0.03, 8, 8);
const trailSphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Array to store the trail spheres
const maxTrailPoints = 300; // Reduced for better performance with spheres
const trailSpheres = [];

// Orbital parameters - using more accurate relative periods
// Earth's year: 365.25 days
// Mars's year: 686.98 days (ratio of ~1.881 to Earth)
const T = 5; // Base period for animation cycle in arbitrary time units
const earthPeriod = T;
const marsPeriod = T * 1.881; // Mars' orbital period relative to Earth's

const omegaEarth = (2 * Math.PI) / earthPeriod;
const omegaMars = (2 * Math.PI) / marsPeriod;

// Animation control
let time = 0;
let animationSpeed = 1;
let isPaused = false;
let trailIndex = 0;

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
    titleDiv.style.color = '#fff';
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
        // Remove all spheres from the scene
        trailSpheres.forEach(sphere => {
            scene.remove(sphere);
        });
        trailSpheres.length = 0;
        trailIndex = 0;
        time = 0;
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
    infoPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    infoPanel.style.color = '#fff';
    infoPanel.style.borderRadius = '5px';
    infoPanel.style.fontFamily = 'Arial, sans-serif';
    infoPanel.style.fontSize = '14px';
    infoPanel.style.lineHeight = '1.4';
    infoPanel.style.zIndex = '100';
    infoPanel.style.border = '1px solid #444';

    infoPanel.innerHTML = `
        <h3 style="margin-top: 0; margin-bottom: 10px;">Retrograde Motion of Mars</h3>
        <p>This simulation shows how Mars appears to move backwards in the sky when viewed from Earth.</p>
        <p>- <span style="color: #FFB000;">Yellow</span>: Sun</p>
        <p>- <span style="color: #3333ff;">Blue</span>: Earth</p>
        <p>- <span style="color: #ff3333;">Red</span>: Mars</p>
        <p>- <span style="color: #ffffff;">White spheres</span>: Apparent path of Mars as seen from Earth</p>
        <p>The loop in the trail shows the retrograde motion when Earth overtakes Mars in its orbit.</p>
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

// Function to map values from one range to another
const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

// Calculate the next trail point (every few frames)
let frameCount = 0;
const FRAMES_BETWEEN_TRAIL_POINTS = 5; // Adjust this to control trail density

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (!isPaused) {
        time += 0.005 * animationSpeed; // Reduced speed for smoother motion

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

        // Update arrow position and rotation
        const direction = new THREE.Vector3().subVectors(
            new THREE.Vector3(mars.position.x, mars.position.y, mars.position.z),
            new THREE.Vector3(earth.position.x, earth.position.y, earth.position.z)
        ).normalize();

        // Scale line of sight for arrow placement
        const lineLength = new THREE.Vector3().subVectors(
            new THREE.Vector3(mars.position.x, mars.position.y, mars.position.z),
            new THREE.Vector3(earth.position.x, earth.position.y, earth.position.z)
        ).length();

        const arrowPosition = new THREE.Vector3(
            earth.position.x + direction.x * (lineLength * 0.7),
            earth.position.y + direction.y * (lineLength * 0.7),
            earth.position.z + direction.z * (lineLength * 0.7)
        );

        arrow.position.copy(arrowPosition);
        arrow.lookAt(mars.position);

        // Only add a new trail point every few frames
        frameCount++;
        if (frameCount >= FRAMES_BETWEEN_TRAIL_POINTS) {
            frameCount = 0;

            // Calculate intersection with cylinder to show apparent position of Mars on celestial sphere
            const Ex = earth.position.x;
            const Ey = earth.position.y;
            const Ez = earth.position.z;
            const Dx = mars.position.x - Ex;
            const Dy = mars.position.y - Ey;
            const Dz = mars.position.z - Ez;

            // Calculate the scaling factor for the line to reach the cylinder
            const cylinderRadius = 8;

            // Better intersection calculation that accounts for y-coordinate
            const a = Dx * Dx + Dy * Dy + Dz * Dz;
            const b = 2 * (Ex * Dx + Ez * Dz); // Note: Ey*Dy is omitted because we're only checking XZ distance to cylinder wall
            const c = Ex * Ex + Ez * Ez - cylinderRadius * cylinderRadius;

            const discriminant = b * b - 4 * a * c;

            if (discriminant > 0) {
                // Line intersects cylinder
                const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                // Choose the correct intersection point
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

                    // Create a new sphere at the trail point
                    const trailSphere = new THREE.Mesh(trailSphereGeometry, trailSphereMaterial);
                    trailSphere.position.set(Px, Py, Pz);
                    scene.add(trailSphere);

                    // Add to our array and remove oldest if we exceed max points
                    trailSpheres.push(trailSphere);
                    if (trailSpheres.length > maxTrailPoints) {
                        const oldestSphere = trailSpheres.shift();
                        if (oldestSphere) {
                            scene.remove(oldestSphere);
                        }
                    }
                }
            }
        }
    }

    controls.update();
    renderer.render(scene, camera);
}

animate(); 