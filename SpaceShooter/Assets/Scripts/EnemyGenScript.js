#pragma strict

var enemy : Rigidbody;
var timecounter:float = 0;

function Start () {

}

function Update () 
{
	timecounter+=Time.deltaTime;
	if(timecounter>5)
	{
		var position: Vector3 = Vector3(Random.Range(-150.0, 150.0), 110, 0);
		var enemyClone : Rigidbody = Instantiate(enemy, position, Quaternion(0,0,0,0));
		enemyClone.gameObject.tag = "enemy";
		enemyClone.transform.Rotate(-90,0,0);
		enemyClone.AddForce(Vector3(0,-1,0)*1000);
		Destroy(enemyClone.gameObject,15);
		timecounter=0;
	}

}