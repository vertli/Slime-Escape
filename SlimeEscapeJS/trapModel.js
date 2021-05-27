class TrapModel {

    constructor(x, y, triggered) {
        this.x = x;
        this.y = y;
        this.triggered = triggered;
    } // end constructor()

    getX() {
        return this.x;
    } // end getX()

    getY() {
        return this.y;
    } // end getY()

    setStatus() {
        this.triggered = !this.triggered;
    } // end setStatus()

    isTriggered() {
        return this.triggered;
    } // end isTriggered()

} // end class TrapModel