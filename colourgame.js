var colors = generateRandomColors(6);
var pickedColor = pickColor();
document.querySelector("#colorDisplay").textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");
var num = 6;


	for(var i=0 ; i<modeButtons.length ; i++)
  	 {
       modeButtons[i].addEventListener("click", function() {
  	   modeButtons[0].classList.remove("selected");
  	   modeButtons[1].classList.remove("selected");
  	   this.classList.add("selected");
  	 	 if(this.textContent === "EASY"){
             num = 3;
  	 	  }
  	 	else{
             num = 6; 
  	      }	
  	     Res();
      });
    }


  function Res(argument) {
  	colors = generateRandomColors(num);
      pickedColor = pickColor();
      for(var i=0 ; i<squares.length ; i++){
  	    if(colors[i]) {
            squares[i].style.display = "block";
  	    	squares[i].style.backgroundColor = colors[i];}	
  	    else {
  	    	squares[i].style.display = "none";}
  	 }
        document.querySelector("#colorDisplay").textContent = pickedColor;	
        h1.style.backgroundColor = "steelblue";
        messageDisplay.textContent = "";
        resetButton.textContent = "New colours";
  }
  

  resetButton.addEventListener("click", function() {
      Res();
  });
 
  
 
  for(var i=0 ; i<squares.length ; i++)
  	 {
  	    //add intitial colours to the squares.
  	    squares[i].style.backgroundColor = colors[i];	

        //add click listener to the squares.
        squares[i].addEventListener("click", function(){

        //grab and compare the clicked colour.
        var clickedColor = this.style.backgroundColor; 
         if(clickedColor == pickedColor)
           {
               messageDisplay.textContent = "Correct...!!";
               changeColors(pickedColor);
               h1.style.backgroundColor = pickedColor;          
               resetButton.textContent = "Play Again??"
           }
         else
           {
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again...!!";
           }  
        });
  	 }

     
     function changeColors(pickedColor)
     {
     	  for(var j=0 ; j<squares.length ; j++)
               	 {
               	 	squares[j].style.backgroundColor = pickedColor;
               	 }
     }
      

     function pickColor() {
      	 var random = Math.floor(Math.random() * colors.length)
      	 return colors[random];
      } 

      
      function generateRandomColors(num) {
      	   var arr = [];
      	for(var i=0 ; i<num ; i++)
         {
            arr.push(randomColor());
      	 }
      	   return arr;
      }


      function randomColor() {
      	var r = Math.floor(Math.random()*256); 
      	var g = Math.floor(Math.random()*256);
      	var b = Math.floor(Math.random()*256);
          return "rgb(" + r + ", " + g + ", " + b + ")" ;   
      }