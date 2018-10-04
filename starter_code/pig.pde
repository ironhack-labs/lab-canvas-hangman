
float x, y, w;

void setup() {
  x = 100;
  y = 200;
  w = 115;
}

void draw() {
  stroke(0);
  strokeWeight(w/50);

  //Pig

  //tail
  noFill();
  ellipse(x+w+w/3.8, y+w/1.28, w/10, w/10);
  arc(x+w+w/3.8, y+w/1.2, w/5, w/5, 3, PI + HALF_PI);
  arc(x+w+w/3.2, y+w/1.3, w/5, w/5, 3, PI + HALF_PI);

  //body
  fill(#fad1d1);
  rect(x, y, w+w/6, w, w/6);

  //tongue
  fill(#e3b3ad);
  ellipse(x+w/1.5, y+w/1.4, w/6, w/8);

  //snout
  fill(#fad1d1);
  rect(x+w/5, y+w/3, w/1.3, w/2.5, w/3);
  fill(#e3b3ad);
  rect(x+w/3.3, y+w/2.4, w/12, w/4, w/6);
  rect(x+w/1.3, y+w/2.4, w/12, w/4, w/6);

  //eyes
  fill(#000000);
  ellipse(x+w/3.8, y+w/5, w/14, w/14);
  ellipse(x+w/1.11, y+w/5, w/14, w/14);

  //ears
  fill(#fad1d1);
  arc(x+w/14, y+w/14, w/5, w/5, 0, HALF_PI);
  arc(x+w+w/14, y+w/14, w/5, w/5, 1.5, PI);
}
