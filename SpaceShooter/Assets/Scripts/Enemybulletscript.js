#pragma strict

var explosion : GameObject;

function Start () {

}

function Update () 
{

}

function OnCollisionEnter (col : Collision)
{
    if((col.gameObject.tag == "bullet")||(col.gameObject.tag == "enemybullet"))
    {
        Destroy(col.gameObject);
        var explosionClone : GameObject = Instantiate(explosion, transform.position, Quaternion(0,0,0,0));
        explosionClone.tag = "explosion";
        Destroy(this.gameObject);        
    }
}