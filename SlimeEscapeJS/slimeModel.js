class SlimeModel {

    constructor(x, y) {
        this.preX = x;
        this.preY = y;
        this.curX = x;
        this.curY = y;
    } // end constructor()

    setPos(x, y) {
        this.preX = x;
        this.preY = y;
        this.curX = x;
        this.curY = y;
    } // end setPos()

    getCurX() {
        return this.curX;
    } // end getCurX()

    getCurY() {
        return this.curY;
    } // end getCurY()

    getPreX() {
        return this.preX;
    } // end getPreX()

    getPreY() {
        return this.preY;
    } // end getPreY()

    goUp() {
        this.preY = this.curY;
        this.curY++;
    } // end goUp()

    goDown() {
        this.preY = this.curY;
        this.curY--;
    } // end goDown()

    goLeft() {
        this.preX = this.curX;
        this.curX--;
    } // end goLeft()

    goRight() {
        this.preX = this.curX;
        this.X++;
    } // end goRight()

} // end class SlimeModel