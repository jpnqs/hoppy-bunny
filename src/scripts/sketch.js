
var bunny = new Bunny();
var platforms = new PlatformManager();
var bunnyDir = '';

if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(() => {
        setupDeviceOrientationInput();
    });
} else {
    setupDeviceOrientationInput();
}

function setupDeviceOrientationInput() {
    window.addEventListener('deviceorientation', ev => {

        var alpha = Math.round(ev.alpha);
    
        bunny.sideForce = Math.floor(alpha / 10);
    
    }, true); 
}


window.addEventListener('keydown', (ev) => {
    if (ev.code == 'ArrowLeft') {
        bunny.left();
    } else if (ev.code == 'ArrowRight') {
        bunny.right();
    }

});

platforms.createPlatform();

function setup() {
    createCanvas(400, 800);
    frameRate(60);
}

function draw() {
    background(220);
    bunny.update();
    bunny.draw();
    platforms.draw();
}