#pragma strict
var speed : float = 1.0;
private var ball : Transform;
function Update () {
if (GameObject.FindWithTag("Ball"))
{
ball = GameObject.FindWithTag("Ball").transform;
if (ball.position.y > 0) transform.position.x = Mathf.Lerp( transform.position.x, 
ball.position.x, speed * Time.deltaTime);
transform.position.x = Mathf.Clamp( transform.position.x, -14, 14);
}
}
function OnCollisionEnter(collision : Collision)
{
var velo = collision.rigidbody.velocity.magnitude;
collision.rigidbody.velocity.x = (collision.transform.position.x -
transform.position.x)*8;
if (collision.rigidbody.velocity.magnitude < velo) collision.rigidbody.velocity *= 
velo/collision.rigidbody.velocity.magnitude;
}