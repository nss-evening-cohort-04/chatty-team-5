//Get DOM Elements
var userInput = document.getElementById("user-input");
var editInput = document.getElementById("edit-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
var current_time = new moment().format("LT");
var messages = document.getElementsByClassName("messages");
var userDiv = document.getElementById("choose-user").children;
var user = "";
//Parse array and print message to DOM
function printMessages (localArrayOfMessages) {
  var counter = 0;
  if (localArrayOfMessages.length >= 20) {
    localArrayOfMessages.shift();
  }
  messageContainer.innerHTML = "";
  for (var i = 0; i < localArrayOfMessages.length; i++) {

    messageContainer.innerHTML += "<div id=" + counter + " class=messages><p>"+localArrayOfMessages[i].chat + "</p><p>" + current_time + "</p><p>" + localArrayOfMessages[i].user + "</p><button id=edit-button class=btn btn-default>Edit</button><button id=delete-button class=btn btn-default>Delete</button></div>";
    counter++;
  }
}
//Event Listener on Body
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
    var timeEdit = elementToEdit.children[1];
    var userEdit = elementToEdit.children[2];
    console.log(userEdit);
    editButton(targetMessage, timeEdit, userEdit);
    userInput.classList.add("hidden");
    editInput.classList.remove("hidden");
  }
  if (e.target.type === "radio") {
    userInput.focus();
  }
});
//Event Listener on User Input
userInput.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    var newMessage = userInput.value;
    clearMessages.removeAttribute("disabled");
      for (var i = 0; i < userDiv.length; i++){
        var eachUser = userDiv[i];
          if (eachUser.checked){
            user= eachUser.value;
            if (newMessage === "" || user === ""){
              userInput.focus();
              Chatty.getMessages();
            }  else {
              Chatty.appendNewMessage(newMessage, user);
              userInput.value = "";
            } 
          }
       }
  }
});
//Edit Button Function
function editButton (targetedMessage, newTime, userName) {
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
        Chatty.editMessages(messageToEditId, editInput.value, userName);
        userInput.classList.remove("hidden");
        editInput.classList.add("hidden");
        userInput.value = "";
        userInput.focus();
      }
    });
}
//Load XHR
Chatty.loadFixedMessages();
//Dark Theme
var darkThemeChecked = document.getElementById("dark-theme");
  function makeDarkTheme(){
    if (darkThemeChecked.checked === true){
      document.querySelector("body").style.backgroundColor = "";
      document.querySelector("body").style.color = "";
      document.querySelector("body").classList.add("darktheme");
}
    else {
    document.querySelector("body").classList.remove("darktheme");
  }
}
//Large Theme
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

