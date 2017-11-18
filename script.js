var noSquares=6;
var colors = genRandomColors(noSquares);
var message = document.getElementById("message");

var pickedColor = pickColor();
var boxes= document.querySelectorAll(".square");

for (let i=0; i<boxes.length; i++){
  // set intial colors
  boxes[i].style.backgroundColor=colors[i];
  //console.log(colors[i]);
  
  // act when clicked
  boxes[i].addEventListener("click", function(){
    console.log(pickedColor,this.style.backgroundColor);
    if (this.style.backgroundColor===pickedColor){
      message.textContent="Congrats! correct! "
      document.getElementById("newcol").textContent = "Play Again?"
      changeColor();
       }
    
    else{
      this.style.backgroundColor="#232323";
      message.textContent="Try Again!";
    }
  });
}

function changeColor(){
  for (let j=0; j<boxes.length; j++){
        boxes[j].style.backgroundColor=pickedColor;
      }
  document.querySelector(".header").style.backgroundColor=pickedColor;
}

function pickColor(){
  var randomIndex = Math.floor(Math.random()*colors.length);
  return colors[randomIndex];
  }

var pkdclr=document.getElementById("pkdclr");
pkdclr.textContent = pickedColor.toUpperCase();

function genRandomColors(n){
  var arr = [];
  // push n numbers of random colors into the array
  for (var i=0; i<n; i++){
    var genCol="rgb(" + Math.floor(Math.random()*256) +", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
    arr.push(genCol);
  }
    return arr;
}

// when new colors button is pressed
document.getElementById("newcol").addEventListener("click",function(){  
  colors=genRandomColors(noSquares);
  pickedColor=pickColor();
  
  for (let i=0; i<boxes.length; i++){
  // set intial colors
  boxes[i].style.backgroundColor=colors[i];}  
  pkdclr.textContent = pickedColor.toUpperCase();  
  // let the heaser background color back to lightblue
  document.querySelector(".header").style.backgroundColor="#add8e6";
  if(document.getElementById("newcol").textContent=="Play Again?"){
    document.getElementById("newcol").textContent = "New Colors";
    document.getElementById("message").textContent=" ";    
  }
})

document.getElementById("easy").addEventListener("click", function(){
  noSquares=3;  
})

document.getElementById("hard").addEventListener("click", function(){
  noSquares=6;  
})