//console.log("Hello World, I'm script.js!");
//Task 3

class Box extends Particle {
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

let p1, p2;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
}

myFunction = () => {
    document.getElementById("content").style.color = "blue";
}

updateContent = () => {
    document.getElementById("content").innerText = "Bye-Bye World!";
}
const result = books.filter((book) => !book.author.includes("Orwell"));
console.log(result)

const result1 = books.filter((book) => !book.author.includes("Orwell") && !book.author.includes("Melville"));
console.log(result1)