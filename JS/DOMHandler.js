
var userInput = document.getElementById("user-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
var messages = document.getElementsByClassName("messages");
var notEditing = true;
function printMessages (json) {
  var counter = 0;
  messageContainer.innerHTML = "";
  for (var i = 0; i < json.length; i++) {
    messageContainer.innerHTML += "<div id=" + counter + " class=messages><p>" + json[i].value + " " + "</p><button id=edit-button>Edit</button><button id=delete-button>Delete</button></div>";
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
    if (allDivs.length != 0){
      Chatty.removeAllFromArray(allDivs);
      messageContainer.innerHTML = "";
    } else {
      clearMessages.classList.add("disabled");
    }
  }
     if (e.target.id === "edit-button") {
      var targetMessage = e.target;
      notEditing = false;
      editButton(targetMessage);

     }


});


userInput.addEventListener("keypress", function(e) {
  if (notEditing) {
  if (e.keyCode == 13) {
    var newMessage = userInput.value;
    Chatty.appendNewMessage(newMessage);
    userInput.value = "";
  }
}

});



function editButton (targetedMessage) {
      var messageToEdit = "";
      messageToEditId = targetedMessage.parentElement.id;
      userInput.value = document.getElementById(messageToEditId).querySelector("p").innerHTML;
      userInput.focus();
      userInput.addEventListener("keypress",function(e){
          if (e.keyCode !== 13) {
        document.getElementById(messageToEditId).querySelector("p").innerHTML = userInput.value;
      } else if (e.keyCode == 13) {
        console.log(e);
        Chatty.editMessages(messageToEditId, userInput.value);
        notEditing = true;
        userInput.value = "";
        userInput.blur();
      }
    })
      // document.getElementById(messageToEdit).firstChild.data = userInput.value;

  }

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

