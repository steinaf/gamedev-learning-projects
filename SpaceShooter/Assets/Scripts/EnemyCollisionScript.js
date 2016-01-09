#pragma strict

var explosion : GameObject;
var timecounter:float = 0;
var bullet : Rigidbody;
var bulletspeed : float = 5000.0;
var target: Transform;
var targetPosition:Vector3;
var ps:PlayerScript;
var aud: AudioSource; 

function Start () 
{
	target = GameObject.Find("Player").transform;
	aud = GetComponent.<AudioSource>();
}

function Update () 
{
	timecounter+=Time.deltaTime;
	if((timecounter>1)&&(this.transform.position.y>-90))
	{		
		FireBullet();
		timecounter=0;
	}
	targetPosition = Vector3(target.position.x,target.position.y,target.position.z);
	
	g_TargetDir = targetPosition - this.transform.forward;
	
	
	//this.transform.forward = g_TargetDir;
	transform.LookAt(targetPosition);
	transform.Rotate(0,0,270);
}

var g_TargetDir : Vector3;

function OnCollisionEnter (col : Collision)
{
	//Debug.Log("bulletcollision");
	
    if((col.gameObject.tag == "bullet")||(col.gameObject.tag == "enemybullet"))
    {    	      
        Destroy(col.gameObject);
        var explosionClone : GameObject = Instantiate(explosion, transform.position, Quaternion(0,0,0,0));
        explosionClone.tag = "explosion";
        Destroy(this.gameObject);
        Destroy(explosionClone,1.1);            
        ps.score+=10;    
    }  
}

function FireBullet () 
{
	//Debug.Log("Firebullet");
    var bulletClone : Rigidbody = Instantiate(bullet, transform.position+Vector3(0,0,0), transform.rotation);
    bulletClone.tag = "enemybullet";
    bulletClone.transform.Rotate(90,0,0);
    bulletClone.AddForce(transform.forward * bulletspeed);    
    Physics.IgnoreCollision(bulletClone.GetComponent.<Collider>(), GetComponent.<Collider>());    
    Destroy(bulletClone.gameObject,3.5); 
    aud.Play();	//pewpew
}