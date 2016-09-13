var userInput = document.getElementById("user-input");
var messageContainer = document.getElementById("entered-messages");

function printMessages (json) {
  var counter = 0;
  messageContainer.innerHTML = "";
  for (var i = 0; i < json.length; i++) {
    messageContainer.innerHTML += "<div id=" + counter + ">" + json[i].value + " " + "<button id=delete-button>Delete</button></div>";
    counter++;
    
  }

}

document.querySelector("body").addEventListener("click", function(e) {
  if (e.target.id === "delete-button") {
    var elementToDelete = e.target.parentNode;
    Chatty.removeFromDOM(elementToDelete);
    var idToDelete = e.target.parentNode.id;
    Chatty.removeFromArray(idToDelete);
  }



});


userInput.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    var newMessage = userInput.value;
    Chatty.appendNewMessage(newMessage);
    userInput.value = "";
  }

});

Chatty.loadFixedMessages();



var greenYellow = document.getElementById("greenYellow");
var yellowBlue = document.getElementById("yellowBlue");
var blueGreen = document.getElementById("blueGreen");
var redPink = document.getElementById("redPink");
var themeSubmit = document.getElementById("themeSubmit");

themeSubmit.addEventListener('click', function(){
  if (redPink.checked === true){ 
    document.querySelector("body").classList.add("red-pink");
  }
  if (blueGreen.checked === true) {
    document.querySelector("body").classList.add("blue-green");
  }
  if (yellowBlue.checked === true) {
    document.querySelector("body").classList.add("yellow-blue");
  }
  if (greenYellow.checked === true) {
    document.querySelector("body").classList.add("green-yellow");
  }
});