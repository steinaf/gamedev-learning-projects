#pragma strict

var explosion : GameObject;
var ps:PlayerScript;
var aud: AudioSource; 

function Start () 
{
	aud = GetComponent.<AudioSource>();
}

function Update () {

}

function OnCollisionEnter (col : Collision)
{
	//Debug.Log("bulletcollision");
    if((col.gameObject.tag == "bullet")||(col.gameObject.tag=="enemybullet"))
    {    	
        Destroy(col.gameObject);
        var explosionClone : GameObject = Instantiate(explosion, transform.position, Quaternion(0,0,0,0));
        explosionClone.tag = "explosion";               
        Destroy(this.gameObject);
        Destroy(explosionClone,1.1);  
        ps.score+=5;       
    }
}

