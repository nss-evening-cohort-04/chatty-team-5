
var userInput = document.getElementById("user-input");
var messageContainer = document.getElementById("entered-messages");
var clearMessages = document.getElementById("clear-messages");
var time = moment().format('LT');

function printMessages (json) {
  var counter = 0;
  messageContainer.innerHTML = "";
  for (var i = 0; i < json.length; i++) {
    messageContainer.innerHTML += "<div id=" + counter + ">" + time + " " + json[i].value + " " + "<button id=delete-button>Delete</button></div>";
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

