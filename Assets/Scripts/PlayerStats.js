
var health = 3;
var swingDelay = 1;
var jumpStrength: int = 10;
var moveSpeed = 5;
var isGrounded;
var rb: Rigidbody2D;

var groundCheck: Transform;
var groundCheckRadius = .1;
var whatIsGround: LayerMask;
var grounded: System.Boolean;

function FixedUpdate(){
    isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);
}

function Start () {
    rb = GetComponent.<Rigidbody2D>();
}

function Update () {
    if(Input.GetButtonDown("A_1") && isGrounded){
        rb.velocity.y = jumpStrength;
    }

    rb.velocity.x = moveSpeed * Input.GetAxis("L_XAxis_1");
    
}
