#pragma strict

var speed : float = 100.0;
var rotationSpeed : float = 200.0;
var bullet : Rigidbody;
var bulletspeed : float = 5000.0;
static var health:int = 100;
static var score:int = 0;
var explosion : GameObject;
var healthbar: UnityEngine.UI.Slider;  
var healthtext: UI.Text;
var scoretext: UI.Text;
var gameovertext: UI.Text;
var restartbutton: GameObject;
var aud: AudioSource; 
var shootsound: AudioClip;
var exsound: AudioClip;

function Start () 
{
	Time.timeScale = 0;
	restartbutton.SetActive(false);
	gameovertext.gameObject.SetActive(false);
	var healthtext = GameObject.Find("Health Percentage").GetComponent(GUIText);
	aud = GetComponent.<AudioSource>();
}

function Update () 
{
	//Debug.Log("health: "+health);
	healthbar.value = health;
	healthtext.text = health.ToString()+"%";
	scoretext.text = "Score: "+score.ToString();
	
	
	var translation : float = Input.GetAxis ("Vertical") * speed;
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	
	translation *= Time.deltaTime;
	rotation *= Time.deltaTime;
	
	transform.Translate (0, 0, translation);
	transform.Rotate (0, rotation, 0);
	
	
    transform.position.x = Mathf.Clamp(this.transform.position.x,-200,218);
	transform.position.y = Mathf.Clamp(this.transform.position.y,-84,91);
	health = Mathf.Clamp(health,0,100);
	
	if (Input.GetButtonDown("Jump")) 
	{
        FireBullet();
    }
    
    if(health<=0)
    {
    	gameovertext.text = "Game Over! Your score is "+score.ToString()+".";
    	Debug.Log(score.ToString());
    	gameovertext.gameObject.SetActive(true);
    	Time.timeScale=0;
    	restartbutton.SetActive(true);
    }

}

function OnCollisionEnter (col : Collision)
{	
	var explosionClone : GameObject = Instantiate(explosion, col.gameObject.transform.position, Quaternion(0,0,0,0));
    explosionClone.tag = "explosion";
    Destroy(col.gameObject);
    Destroy(explosionClone,1.1); 
  	health-=20;  	  	
}

function FireBullet () 
{
	//Debug.Log("Firebullet");
    var bulletClone : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
    bulletClone.tag = "bullet";
    bulletClone.transform.Rotate(90,0,0);
    bulletClone.AddForce(transform.forward * bulletspeed);
    Physics.IgnoreCollision(bulletClone.GetComponent.<Collider>(), GetComponent.<Collider>());  
    Destroy(bulletClone.gameObject,3.5);
    aud.Play(); //pewpew      
}