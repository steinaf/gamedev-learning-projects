#pragma strict
function Update ()
{
transform.position.x = Camera.main.ScreenToWorldPoint (Input.mousePosition).x ;
transform.position.x = Mathf.Clamp( transform.position.x, -14, 14);
}

function OnCollisionEnter(collision : Collision)
{
var velo = collision.rigidbody.velocity.magnitude;
collision.rigidbody.velocity.x = (collision.transform.position.x -
transform.position.x)*8;
if (collision.rigidbody.velocity.magnitude < velo) collision.rigidbody.velocity *= 
velo/collision.rigidbody.velocity.magnitude;
}