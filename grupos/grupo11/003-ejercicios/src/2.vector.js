export class Vector {

    constructor(initialX, initialY) {
        if (initialX && initialY) {
            this.x = initialX;
            this.y = initialY;
        } else {
            this.x = 0;
            this.y = 0;
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

    sumar(anotherVector) {
        return new Vector(this.getX() + anotherVector.getX(), this.getY() + anotherVector.getY());
    }

}