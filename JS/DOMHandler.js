var userInput = document.getElementById("user-input");
var messageContainer = document.getElementById("entered-messages");

function printMessages (json) {
  var counter = 0;
  messageContainer.innerHTML = "";
  for (var i = 0; i < json.length; i++) {
    messageContainer.innerHTML += "<div id=message-" + counter + ">" + json[i].value + " " + "<button id=delete-button>Delete</button></div>";
    counter++;
    // console.log(json);
  }
}

document.querySelector("body").addEventListener("click", function(e) {
  if (e.target.id === "delete-button") {
    var elementToDelete = e.target.parentNode;
    Chatty.removeFromDOM(elementToDelete);
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