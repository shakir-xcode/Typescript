// Typescript specific
// Enums allow us to define us a set of named constants
var Position;
(function (Position) {
    Position[Position["RIGHT"] = 0] = "RIGHT";
    Position[Position["LEFT"] = 1] = "LEFT";
    Position[Position["FRONT"] = 2] = "FRONT";
    Position[Position["BACK"] = 3] = "BACK";
})(Position || (Position = {}));
var ArrowKey;
(function (ArrowKey) {
    ArrowKey[ArrowKey["TOP"] = 0] = "TOP";
    ArrowKey[ArrowKey["RIGHT"] = 1] = "RIGHT";
    ArrowKey[ArrowKey["DOWN"] = 2] = "DOWN";
    ArrowKey[ArrowKey["LEFT"] = 3] = "LEFT";
})(ArrowKey || (ArrowKey = {}));
function checkFrontPos(objPosition) {
    return objPosition === Position.FRONT;
}
function checkKey(key) {
    switch (key) {
        case ArrowKey.TOP:
            console.log("TOP key pressed...");
            break;
        case ArrowKey.RIGHT:
            console.log("RIGHT key pressed...");
            break;
        case ArrowKey.DOWN:
            console.log("DOWN key pressed...");
            break;
        case ArrowKey.LEFT:
            console.log("LEFT key pressed...");
            break;
        default:
            console.log("wrong key pressed");
    }
}
checkKey(ArrowKey.RIGHT);
