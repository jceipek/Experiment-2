#pragma strict

var other : GameObject;

function Update () {

if (Input.GetKeyDown ("f")){
	if (other.light.intensity != 0)
		other.light.intensity = 0;
	else 
		other.light.intensity = .6;
	
}

}