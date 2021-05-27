class DoorModel {

    constructor(topLeftPos) {
        this.topLeftX = topLeftPos[0];
        this.topLeftY = topLeftPos[1];
        this.status = false;
    } // end constructor()

    getStatus() {
        return this.status;
    } // end getStatus()

    open() {
        this.status = true;
    } // end open()

    close() {
        this.status = false;
    } // end close()

    getTopLeftX() {
        return this.topLeftX;
    } // end getTopLeftX()

    getTopLeftY() {
        return this.topLeftY;
    } // end getTopLeftY()

} // end class DoorModel