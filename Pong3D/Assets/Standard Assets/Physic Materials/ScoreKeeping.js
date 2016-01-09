#pragma strict

var winningScore : int = 10;
var customGuiStyle : GUIStyle;
private var gameOver : boolean = false;
private var gameStarted : boolean = false;

function Awake() {
DontDestroyOnLoad (gameObject);
}

function Update() 
{
if (player1Score >= winningScore || player2Score >= winningScore) gameOver = true;
if (gameOver && Application.loadedLevel != "GameOver") 
Application.LoadLevel("GameOver");
}

static var player1Score : int = 0;
static var player2Score : int = 0;
function OnGUI ()
{
GUI.Label (Rect (0, 10, Screen.width, 100), player1Score +" | "+ player2Score, customGuiStyle);

if (!gameStarted)
{
if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2), 120 , 30), "Two Players")) 
{
GameObject.Find("paddle2").GetComponent(PaddleAutoControl).enabled = false;
GameObject.Find("paddle2").GetComponent(PaddleController2).enabled = true;
gameStarted = true;
GameObject.Find("BallLauncher").SendMessage("LaunchBall", 1);
}
if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+40, 120 , 30), 
"Single Player")) 
{
GameObject.Find("paddle2").GetComponent(PaddleAutoControl).enabled = true;
GameObject.Find("paddle2").GetComponent(PaddleController2).enabled = false;
gameStarted = true;
GameObject.Find("BallLauncher").SendMessage("LaunchBall", 2);
}
}


if (gameOver) 
{
if (player1Score > player2Score) GUI.Label (Rect (0, Screen.height/2, Screen.width , 100), 
"PLAYER ONE WINS!", customGuiStyle);
else GUI.Label (Rect ( 0, Screen.height/2, Screen.width , 100), "PLAYER TWO WINS!", 
customGuiStyle);
if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+40, 120 , 60), 
"New Game")) 
{
player1Score = 0;
player2Score = 0; 
gameOver = false;
Destroy(gameObject);
Application.LoadLevel(0);
}
}
}