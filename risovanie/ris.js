function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')
 let pi = Math.PI;

  ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "red";
ctx.fillStyle="red";
ctx.arc(150, 150, 85, 0, 2*pi, false);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "orange";
ctx.fillStyle="orange";
ctx.arc(250, 150, 85, 0, 2*pi, false );
ctx.stroke();
ctx.fill(); 
}