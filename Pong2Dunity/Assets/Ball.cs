using UnityEngine;
using System.Collections;

public class Ball : MonoBehaviour {
	// Speed to be modified in the Inspector
	public float speed = 2.0f;
	
	void Start() {
		// Give the ball some initial movement direction
		GetComponent<Rigidbody2D>().velocity = Vector2.one.normalized * speed;
	}
}