// Typescript specific
// Enums allow us to define us a set of named constants

enum Position {
  RIGHT,
  LEFT,
  FRONT,
  BACK,
}

enum ArrowKey {
  TOP,
  RIGHT,
  DOWN,
  LEFT,
}

enum Status {
  PENDING = 432,
  SHIPPED = 465,
  DELIVERED = 533,
}

function checkFrontPos(objPosition: Position): boolean {
  return objPosition === Position.FRONT;
}

function checkKey(key: ArrowKey): void {
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
