var DoorStep;
(function (DoorStep) {
    DoorStep[DoorStep["Open"] = 0] = "Open";
    DoorStep[DoorStep["Close"] = 1] = "Close";
    DoorStep[DoorStep["Lock"] = 2] = "Lock";
})(DoorStep || (DoorStep = {}));
window.onload = function () {
    var myDoor = DoorStep.Open;
    console.log("My Dooy stage " + myDoor);
};
