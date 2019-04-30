var r = 0, g = 0, b = 0;
var slider;
var able_to_draw = false;
var last_x, last_y;
var clear_button;

function setup ( )
{
  createCanvas(1000, 1000);
  
  slider = createSlider(1, 20, 5);
  slider.position(340, 10);
  
  textSize(20);
  textAlign(CENTER, CENTER);
  background(255);
  
  button = createButton('Clear canvas');
  button.position(120, 15);
  button.mousePressed(clearCanvas);
}
function draw ( )
{
  noStroke();
  fill(255);
  rect(0, 0, 1000, 50);
  stroke(0);
  fill(0);
  rect(0, 0, 20, 20);
  fill(100);
  rect(20, 0, 20, 20);
  fill(0, 0, 255);
  rect(40, 0, 20, 20);
  fill(255, 0, 0);
  rect(60, 0, 20, 20);
  fill(255, 255, 0);
  rect(80, 0, 20, 20);
  
  fill(255);
  rect(0, 20, 20, 20);
  fill(185, 122, 87);
  rect(20, 20, 20, 20);
  fill(255, 127, 39);
  rect(40, 20, 20, 20);
  fill(163, 73, 164);
  rect(60, 20, 20, 20);
  fill(0, 255, 0);
  rect(80, 20, 20, 20);
  
  noStroke();
  fill(0);
  //text('Color:', 145, 20);
  text('Size:', 260, 22);
  
  stroke(1);
  strokeWeight(5);
  line(0, 50, 1000, 50);
  line(110, 50, 110, 0);
  line(225, 50, 225, 0);
  
  strokeWeight(2);
  fill(r, g, b);
  //rect(175, 10, 20, 20);
  
  circle(310, 22, slider.value());
}
function mouseClicked()
{
  if (mouseX <= 20 && mouseY <= 20)
    set_rgb(0, 0, 0);
  else if (mouseX <= 40 && mouseY <= 20)
    set_rgb(100, 100, 100);
  else if (mouseX <= 60 && mouseY <= 20)
    set_rgb(0, 0, 255);
  else if (mouseX <= 80 && mouseY <= 20)
    set_rgb(255, 0, 0);
  else if (mouseX <= 100 && mouseY <= 20)
    set_rgb(255, 255, 0);
  
  else if (mouseX <= 20 && mouseY <= 40)
    set_rgb(255, 255, 255);
  else if (mouseX <= 40 && mouseY <= 40)
    set_rgb(185, 122, 87);
  else if (mouseX <= 60 && mouseY <= 40)
    set_rgb(255, 127, 39);
  else if (mouseX <= 80 && mouseY <= 40)
    set_rgb(163, 73, 164);
  else if (mouseX <= 100 && mouseY <= 40)
    set_rgb(0, 255, 0);
}
function set_rgb(red, green, blue)
{
  r = red; g = green; b = blue;
}
function mouseDragged()
{
  if (!able_to_draw)
      return;
      
  noStroke();
  
	//if (Math.sqrt((last_x - mouseX)*(last_x - mouseX) +
	//  (last_y - mouseY)*(last_y - mouseY)) >= 1/*slider.value() */)
	{
	  var x_step, y_step, x, y;
	  if (Math.abs(last_x - mouseX) > Math.abs(last_y - mouseY))
	  {
		x_step = Math.sign(mouseX - last_x);
		y_step = (mouseY - last_y) / Math.abs(last_x - mouseX);
		
		for (x = last_x, y = last_y; x != mouseX; x += x_step, y += y_step)
		  circle(x, y, slider.value());
	  }
	  else// if (Math.abs(last_x - mouseX) <= Math.abs(last_y - mouseY))
	  {
		y_step = Math.sign(mouseY - last_y);
		x_step = (mouseX - last_x) / Math.abs(last_y - mouseY);
		
		for (x = last_x, y = last_y; y != mouseY; x += x_step, y += y_step)
		  circle(x, y, slider.value());
	  }
	}
  circle(mouseX, mouseY, slider.value());
  last_x = mouseX;
  last_y = mouseY;
}
function mousePressed()
{
  if (mouseY <= 50)
    able_to_draw = false;
  else
  {
    able_to_draw = true;
    noStroke();
    circle(mouseX, mouseY, slider.value());
    last_x = mouseX;
    last_y = mouseY;
  }  
}
function clearCanvas()
{
  fill(255);
  noStroke();
  rect(0, 50, 1000, 1000);
}