
setInterval(update, 5)

var div = document.getElementById("rectangle2");

function moveRight(){
     div.style.left = div.offsetLeft + 1 + "px" 
    
}

function moveLeft(){
  div.style.left = Math.abs(div.offsetLeft - 1) + "px";
  //div.style.left = div.offsetLeft - 1 + "px";

}
    
   
     
    function update() {
      if (div.style.left != 1150 + "px") {
       return moveRight()
      } 
      else if (div.style.left == 1150 + "px") {
        return moveLeft()
        //setTimeout(moveLeft, 5000) 
      } 
     }
