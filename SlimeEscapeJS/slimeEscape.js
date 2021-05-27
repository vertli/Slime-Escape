let canvas = document.getElementById("gameCanvas");
canvas.width = 600;
canvas.height = 400;

let ctx = canvas.getContext("2d");
let slime;
let map;
let curLevel = 1;
let isLeftMap = false;
let maxLevel = 7;

function gameMenu() {
    // gameStart()
    // help()
} // end gameMenu()

function gameStart() {
    // asset
    map = setMap();
    slime = new Slime(map.getSlimeInitX(), map.getSlimeInitY());

    // game loop
    while(true) {
        // read key
        // arrowkeys to move and push
        // [R] to restart
        document.addEventListener("keyup", (event) => {
            if (event.key === "ArrowUp") moveUp();
            if (event.key === "ArrowDown") moveDown();
            if (event.key === "ArrowLeft") moveLeft();
            if (event.key === "ArrowRight") dmoveRight();
            if (event.key === "R" || event.key === "r") resetLevel();
        });

        if (map.isAllTrapTriggered() && map.isDoorClosed()) map.openDoor();
        if (!map.isAllTrapTriggered() && !map.isDoorClosed()) map.closeDoor();
        if (isLeftMap && curLevel !== maxLevel) {
            isLeftMap = false;
            curLevel++;
            resetLevel();
        } // end if
        if (isLeftMap && curLevel === maxLevel) {
            // GAME END!
            break;
        } // end if
        // update        
    } // end while()
} // end gameStart()

function moveUp() {
    let curX = slime.getCurX();
    let curY = slime.getCurY();
    if (isBox(curX, curY-1) && map.isPassable(curX, curY-2)) {
        let box = map.getBox(curX, curY-1);
        setTrip(box.getX(), box.getY());
        box = map.pushBox(box, "up");
        setTrip(box.getX(), box.getY());
        if (map.isTrap(curX, curY-2)) {
            map.resetTrapTrigger(curX, curY-2);
        } // end if
    } else if (0 < curY && map.isPassable(curX, curY-1)) {
        slime.goUp();
    } // end if..else if
} // end moveUp()

function moveDown() {
    let curX = slime.getCurX();
    let curY = slime.getCurY();
    if (isBox(curX, curY+1) && map.isPassable(curX, curY+2)) {
        let box = map.getBox(curX, curY+1);
        setTrip(box.getX(), box.getY());
        box = map.pushBox(box, "down");
        setTrip(box.getX(), box.getY());
    } else if (curY < map.getMapRow() && map.isPassable(curX, curY+1)) {
        slime.goDown();
    } else if (curY === map.getLeaveMapPositionY()) {
        isLeftMap = true;
    } // end if..else if
} // end moveDown()

function moveLeft() {
    let curX = slime.getCurX();
    let curY = slime.getCurY();
    if (isBox(curX-1, curY) && map.isPassable(curX-2, curY)) {
        let box = map.getBox(curX-1, curY);
        setTrip(box.getX(), box.getY());
        box = map.pushBox(box, "left");
        setTrip(box.getX(), box.getY());
    } else if (0 < curX && map.isPassable(curX-1, curY)) {
        slime.goLeft();
    } // end if..else if
} // end moveLeft()

function moveRight() {
    let curX = slime.getCurX();
    let curY = slime.getCurY();
    if (isBox(curX+1, curY) && map.isPassable(curX+2, curY)) {
        let box = map.getBox(curX+1, curY);
        setTrip(box.getX(), box.getY());
        box = map.pushBox(box, "right");
        setTrip(box.getX(), box.getY());
        if (map.isTrap(curX+2, curY)) {
            map.resetTrapTrigger(curX+2, curY);
        } // end if
    } else if (curX < map.getMapCol() && map.isPassable(curX+1, curY)) {
        slime.goRight();
    } // end if..else if
} // end moveRight()

function resetLevel() {
    map = setMap();
    slime.setPos(map.getSlimeInitX(), map.getSlimeInitY());
} // end resetLevel()

function setMap() {
    switch(curLevel) {
        case 1:
                return new LevelOneModel();
        // add the rest
    } // end switch
} // setMap()

function setTrip(x, y) {
    if (map.isTrap(x, y)) map.resetTrapTrigger(x, y);
} // end setTrip()