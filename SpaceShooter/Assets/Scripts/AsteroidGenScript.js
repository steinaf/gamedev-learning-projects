#pragma strict

var asteroid : Rigidbody;
var timecounter:float = 0;

function Start () 
{
	Physics.IgnoreLayerCollision(8,9,false);

}

function Update () 
{
	timecounter+=Time.deltaTime;
	if(timecounter>3)
	{
		var position: Vector3 = Vector3(Random.Range(-200.0, 200.0), 110, 0);
		var asteroidClone : Rigidbody = Instantiate(asteroid, position, Quaternion(0,0,0,0));
		asteroidClone.gameObject.tag = "asteroid";
		asteroidClone.transform.Rotate(90,0,0);
		asteroidClone.AddForce(Vector3(0,-1,0)*1000);
		asteroidClone.AddTorque(Vector3(Random.Range(0,1000),Random.Range(0,1000),Random.Range(0,1000)));
		Destroy(asteroidClone.gameObject,15);
		timecounter=0;
	}

}