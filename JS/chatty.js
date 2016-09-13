var Chatty = (function () {
  var fixedMessages = [];

  return {
    appendNewMessage: function(newMessage) {
      fixedMessages.push({'value':newMessage});
      printMessages(fixedMessages);
    },
    loadFixedMessages: function() {
    var messageLoader = new XMLHttpRequest();
    messageLoader.addEventListener("load", function() {
    fixedMessages = JSON.parse(this.responseText);
    fixedMessages = fixedMessages.messages;
    printMessages(fixedMessages);

    });
    messageLoader.open("GET", "storedMessages.JSON");
    messageLoader.send();

    },
    eraseMessages: function(msgId) {
      fixedMessages.splice(msgId, 1);
    }

}

})();