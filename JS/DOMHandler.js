
var userInput = document.getElementById("user-input");
var editInput = document.getElementById("edit-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
var time = moment().format('LT');
var messages = document.getElementsByClassName("messages");
var notEditing = true;
function printMessages (localArrayOfMessages) {

  var counter = 0;
  if (localArrayOfMessages.length >= 20) {
    localArrayOfMessages.shift();
  }
  messageContainer.innerHTML = "";
  for (var i = 0; i < localArrayOfMessages.length; i++) {
    messageContainer.innerHTML += "<div id=" + counter + " class=messages><p>" + time + localArrayOfMessages[i].chat + " " + "</p><button id=edit-button>Edit</button><button id=delete-button>Delete</button></div>";
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
function editButton (targetedMessage) {
      var messageToEdit = "";
      messageToEditId = targetedMessage.parentElement.id;
      editInput.value = document.getElementById(messageToEditId).querySelector("p").innerHTML;
      editInput.focus();
      editInput.addEventListener("keypress",function(e){
          if (e.keyCode !== 13) {
        document.getElementById(messageToEditId).querySelector("p").innerHTML = editInput.value;
      } else if (e.keyCode == 13) {
        console.log(e);
        Chatty.editMessages(messageToEditId, editInput.value);
        notEditing = true;
        userInput.value = "";
        userInput.classList.remove("hidden");
        editInput.classList.add("hidden");
      }
    })
      // document.getElementById(messageToEdit).firstChild.data = userInput.value;

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
var greenYellow = document.getElementById("greenYellow");
var yellowBlue = document.getElementById("yellowBlue");
var blueGreen = document.getElementById("blueGreen");
var redPink = document.getElementById("redPink");
var themeSubmit = document.getElementById("themeSubmit");

function selectOnlyThis(id){
  var myCheckbox = document.getElementsByName("myCheckbox");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
};

themeSubmit.addEventListener('click', function(){
  if (redPink.checked === true){ 
    document.querySelector("body").classList.add("red-pink");
    document.querySelector("body").classList.remove("green-yellow");
    document.querySelector("body").classList.remove("yellow-blue");
    document.querySelector("body").classList.remove("blue-green");
  }
  if (blueGreen.checked === true) {
    document.querySelector("body").classList.add("blue-green");
    document.querySelector("body").classList.remove("green-yellow");
    document.querySelector("body").classList.remove("yellow-blue");
    document.querySelector("body").classList.remove("red-pink");
  }
  if (yellowBlue.checked === true) {
    document.querySelector("body").classList.add("yellow-blue");
    document.querySelector("body").classList.remove("green-yellow");
    document.querySelector("body").classList.remove("blue-green");
    document.querySelector("body").classList.remove("red-pink");
  }
  if (greenYellow.checked === true) {
    document.querySelector("body").classList.add("green-yellow");
    document.querySelector("body").classList.remove("yellow-blue");
    document.querySelector("body").classList.remove("blue-green");
    document.querySelector("body").classList.remove("red-pink");
  }

});

