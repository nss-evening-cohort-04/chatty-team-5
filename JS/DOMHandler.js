
var userInput = document.getElementById("user-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
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
  if (e.target.id === "clear-messages") {
    var allDivs = messageContainer.children;
    console.log(messageContainer);
    console.log(allDivs);
    if (allDivs.length != 0){
      Chatty.removeAllFromArray(allDivs);
      messageContainer.innerHTML = "";
    } else {
      clearMessages.classList.add("disabled");
      console.log("hi");
    }  
    
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

<<<<<<< HEAD

var darkThemeChecked = document.getElementById("dark-theme");
  function makeDarkTheme(){
    if (darkThemeChecked.checked === true){
    document.querySelector("body").classList.add("darktheme");
}
    else {
    document.querySelector("body").classList.remove("darktheme");
  }
}

var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"];
};



=======
var largethemeChecked = document.getElementById("large-text"); 
function checkboxLarge() {
  if (largethemeChecked.checked === true) {
    document.querySelector("body").classList.add("largetheme");
    document.querySelector("input").classList.add("largetheme");  
  }
  else {
    document.querySelector("body").classList.remove("largetheme");
    document.querySelector("input").classList.remove("largetheme");
  }
};
>>>>>>> 43378f4c0bd8c46204ae19effd9ec0dafd0c1573
