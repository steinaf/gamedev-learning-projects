#pragma strict
var ballPrefab : Transform;
var initialSpeed : float = 1.0;
var player1 : Transform;
var player2 : Transform;
var timerSound : AudioClip;
var launchSound : AudioClip;

function LaunchBall (player : int) {
var newball : Transform;
if (player == 1) 
{
newball = Instantiate(ballPrefab, player1.position + Vector3(0,1,0), 
Quaternion.identity);
newball.parent = player1;
audio.clip = timerSound;
audio.Play();
yield WaitForSeconds(1);
audio.Play();
yield WaitForSeconds(1);
audio.clip = launchSound;
audio.Play();
newball.parent = null;
newball.rigidbody.AddForce( Vector3( 0, 1, 0) * initialSpeed ) ;
}
else
{
newball = Instantiate(ballPrefab, player2.position + Vector3(0,-1,0), 
Quaternion.identity);
newball.parent = player2;
audio.clip = timerSound;
audio.Play();
yield WaitForSeconds(1);
audio.Play();
yield WaitForSeconds(1);
audio.clip = launchSound;
audio.Play();
newball.parent = null;
newball.rigidbody.AddForce( Vector3( 0, -1, 0) * initialSpeed ) ;
}
}