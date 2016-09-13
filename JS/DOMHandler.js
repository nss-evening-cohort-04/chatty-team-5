
var userInput = document.getElementById("user-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
var messages = document.getElementsByClassName("messages");
var editing = false;
function printMessages (json) {
  var counter = 0;
  messageContainer.innerHTML = "";
  for (var i = 0; i < json.length; i++) {
    messageContainer.innerHTML += "<div id=" + counter + " class=messages>" + json[i].value + " " + "<button id=edit-button>Edit</button><button id=delete-button>Delete</button></div>";
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
     if (e.target.id === "edit-button") {
      editing = true;
      // console.log(messageContainer.children);
      var messageToEditId = e.target.parentElement.id;
      userInput.value = document.getElementById(messageToEditId).firstChild.data
      userInput.focus();
      userInput.addEventListener("keypress",function(e){
          if (e.keyCode !== 13) {
        document.getElementById(messageToEditId).firstChild.data = userInput.value;
      } else if (e.keyCode == 13) {
        Chatty.editMessages(messageToEditId, userInput.value);
        editing = false;
        userInput.value = "";
        messageToEditId = "";
      }
    })
      // document.getElementById(messageToEdit).firstChild.data = userInput.value;

  }


});


userInput.addEventListener("keypress", function(e) {
  if (e.keyCode == 13 && !editing) {
    var newMessage = userInput.value;
    Chatty.appendNewMessage(newMessage);
    userInput.value = "";
  }

});


Chatty.loadFixedMessages();


var darkThemeChecked = document.getElementById("dark-theme");
  function makeDarkTheme(){
    if (darkThemeChecked.checked === true){
    document.querySelector("body").classList.add("darktheme");
}
    else {
    document.querySelector("body").classList.remove("darktheme");
  }
}


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

