#pragma strict

var playbutton:GameObject;
var gameovertext:GameObject;
var restartbutton:GameObject;
var ps:PlayerScript;

function Start () {

}

function Update () {

}

function PlayGame()
{
	Time.timeScale = 1.0;
	playbutton.SetActive(false);
	gameovertext.SetActive(false);
	restartbutton.SetActive(false);
	
}

function RestartGame()
{
	Application.LoadLevel(Application.loadedLevel);	
	gameovertext.SetActive(false);
	restartbutton.SetActive(false);
	ps.score=0;		
	ps.health=100;	
}

