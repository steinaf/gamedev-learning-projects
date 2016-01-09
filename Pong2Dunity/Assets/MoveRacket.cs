using UnityEngine;
using System.Collections;

public class MoveRacket : MonoBehaviour {

	public KeyCode up;
	public KeyCode down;
	
	// Update is called once per frame
		void FixedUpdate () 
		{
			// up key pressed?
			if (Input.GetKey(up)) {
				transform.Translate(new Vector2(0.0f, 0.1f));
			}
			
			// down key pressed?
			if (Input.GetKey(down)) {
				transform.Translate(new Vector2(0.0f, -0.1f));
			}
	
		}
}
