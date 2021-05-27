class BoxModel {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    } // end constructor

    getX() {
        return this.x;
    } // end getX()

    getY() {
        return this.y;
    } // end getY()

    pushUp() {
        this.y--;
    } // end pushUp()

    pushDown() {
        this.y++;
    } // end pushDown()

    pushLeft() {
        this.x--;
    } // end pushLeft()

    pushRight() {
        this.x++;
    } // end pushRight()

} // end class BoxModel