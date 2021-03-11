

class Platform {

    constructor(x = 0, y = 0) {
        this.height = 10;
        this.width = 100;
        this.x = x;
        this.y = y;
        this.active = true;

    }

    draw() {
        fill(0, 0, 255, 255);
        rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    setActive(val) {
        this.active = val;
    }

}

class PlatformManager {

    constructor() {
        this.platforms = [];
    }

    draw() {
        this.platforms.forEach(platform => platform.draw());
    }

    createPlatform() {
        var platform = new Platform(200, 200);
        this.platforms.push(platform);
    }

}