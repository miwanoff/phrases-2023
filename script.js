const phrases = [
  "This house is beautiful",
  "It's raining cats and dogs",
  "Kill two birds with one stone",
];

const phrase = phrases[0];

const dropField = document.getElementById("words");

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  // dataTransfer
  event.dataTransfer.setData("text" , event.target.textContent);
}

function drop(event) {
  event.preventDefault();
  // dataTransfer
  const data = event.dataTransfer.getData("text");
  console.log(data);
}


