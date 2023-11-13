//console.log("Hello World, I'm script.js!");
//Task 3

class Box extends Particle { //draws square
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

//Task 1
const books = [
  { title: 1984, author: "George Orwell" },
  { title: "In Search of Lost Time", author: "Marcel Proust" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Moby Dick", author: "Herman Melville" }
]
class Triangles {
  //configuration de l'objet
  constructor(triX, triY, speedX, speedY){
      this.x = triX;
      this.y = triY;
      this.speedX = speedX;
      this.speedY = speedY;
  }
  show(){
      triangle(this.x, this.y, this.x + 25, this.y + 40, this.x -25, this.y + 40);
  }
  move(){
      this.x += this.speedX;
      this.y += this.speedY;
      if(this.x > width || this.x < 0){
          this.speedX *= -1;
      }
      if(this.y > height || this.y < 0){
          this.speedY = this.speedY * -1;
      }
  }
}
let p1, p2, p3, p4, spots;
let amt = 0;

function setup() {
  createCanvas(700, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p4 = new Triangles(250, 400, 4, 4);
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p4.show();
  p4.move();
}

myFunction = () => {
  document.getElementById("content").style.color = "blue";
}

updateContent = () => {
  document.getElementById("content").innerText = "Bye-Bye World!";
}

updateColor = () => {
  document.getElementById("color").style.color = "blue";
}

console.log("Output without Orwell's book")
const result = books.filter((book) => !book.author.includes("Orwell"));
console.log(result)

console.log("Output without Orwell's and Melville's book")
const result1 = books.filter((book) => !book.author.includes("Orwell") && !book.author.includes("Melville"));
console.log(result1)