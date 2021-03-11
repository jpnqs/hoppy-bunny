
const downForce = 0.5;

class Bunny {

    constructor() {
        this.height = 50;
        this.width = 50;
        this.x = 200;
        this.y = 0;
        this.lastHop = Date.now();
        this.upForce = 8.5;
        this.sideForce = 0;
    }

    update() {

        var tempY = this.y;
        tempY += (downForce * this.calcForceMult()) - this.upForce;

        if (tempY + (this.height / 2) < 800) {
            this.y = tempY;
        } else {
            this.hop();
        }

        this.x += this.sideForce;


    }

    hop() {
        this.lastHop = Date.now();
    }

    left() {
        this.x -= 1;
    }

    right() {
        this.x += 1;
    }

    calcForceMult() {
        var res = (Date.now() - this.lastHop) / 70;
        return res;
    }

    draw() {
        fill(255, 0, 0, 255);
        rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

}