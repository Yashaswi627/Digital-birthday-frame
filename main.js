function setup() {
    canvas = createCanvas(500, 430)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 50, 400, 330)

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(48, 50, 60);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(448, 380, 60);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(48, 380, 60);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(448, 50, 60);

    fill(210, 1, 23);
    stroke(210, 1, 23);
    rect(77, 380, 342, 15);

    fill(210, 1, 23);
    stroke(210, 1, 23);
    rect(77, 50, 342, 15);

    fill(210, 1, 23);
    stroke(210, 1, 23);
    rect(447, 79, 15, 272);

    fill(210, 1, 23);
    stroke(210, 1, 23);
    rect(47, 79, 15, 272);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(48, 50, 15, 60);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(48, 50, 60, 15);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(448, 50, 15, 60);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(448, 50, 60, 15);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(48, 380, 15, 60);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(48, 380, 60, 15);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(448, 380, 15, 60);

    fill(200, 72, 123);
    stroke(200, 72, 123);
    ellipse(448, 380, 60, 15);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(48, 50, 15);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(448, 380, 15);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(48, 380, 15);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(448, 50, 15);
}