
var userInput = document.getElementById("user-input");
var editInput = document.getElementById("edit-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
var current_time = new moment().format("LT");
var messages = document.getElementsByClassName("messages");
function printMessages (localArrayOfMessages) {

  var counter = 0;
  if (localArrayOfMessages.length >= 20) {
    localArrayOfMessages.shift();
  }
  messageContainer.innerHTML = "";
  for (var i = 0; i < localArrayOfMessages.length; i++) {

    messageContainer.innerHTML += "<div id=" + counter + " class=messages><p>"+localArrayOfMessages[i].chat + "</p><p>" + current_time + "</p><button id=edit-button>Edit</button><button id=delete-button>Delete</button></div>";
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
      clearMessages.setAttribute("disabled", true);
    }
  }
  if (e.target.id === "edit-button") {
    var targetMessage = e.target;
    var elementToEdit = e.target.parentNode;
    var timeEdit = elementToEdit.children[1]
    editButton(targetMessage, timeEdit);
    userInput.classList.add("hidden");
    editInput.classList.remove("hidden");
  }
});
userInput.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    var newMessage = userInput.value;
    Chatty.appendNewMessage(newMessage);
    userInput.value = "";
  }
});
function editButton (targetedMessage, newTime) {
      var messageToEdit = "";
      messageToEditId = targetedMessage.parentElement.id;
      editInput.value = document.getElementById(messageToEditId).querySelector("p").innerHTML;
      editInput.focus();
      editInput.addEventListener("keypress",function(e){
          if (e.keyCode !== 13) {
        document.getElementById(messageToEditId).querySelector("p").innerHTML = editInput.value;
      } else if (e.keyCode == 13) {
        newTime.innerHTML = "";
        newTime.innerHTML = new moment().format("LT");
        Chatty.editMessages(messageToEditId, editInput.value);
        userInput.classList.remove("hidden");
        editInput.classList.add("hidden");
        userInput.value = "";
        userInput.focus();
      }
    });
}


Chatty.loadFixedMessages();


var darkThemeChecked = document.getElementById("dark-theme");
  function makeDarkTheme(){
    if (darkThemeChecked.checked === true){
    document.querySelector("body").classList.add("darktheme");
    document.querySelector("body").classList.remove("green-yellow");
    document.querySelector("body").classList.remove("yellow-blue");
    document.querySelector("body").classList.remove("blue-green");
    document.querySelector("body").classList.remove("red-pink");
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

//Change Theme Modal
var backgroundColor = document.getElementById("backgroundColor");
var fontColor = document.getElementById("fontColor");
var themeSubmit = document.getElementById("themeSubmit");

themeSubmit.addEventListener('click', function(){
  var first = backgroundColor.value;
  var second = fontColor.value;
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector("body").style.backgroundColor = first;
  document.querySelector("body").style.color = second;

});

