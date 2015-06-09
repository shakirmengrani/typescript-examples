
enum DoorStep{
	Open,
	Close,
	Lock
}
window.onload = ()=>{
	var myDoor = DoorStep.Open;
	console.log("My Dooy stage " + myDoor);
}