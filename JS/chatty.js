var Chatty = (function () {
  var fixedMessages = [];

  return {
    appendNewMessage: function(newMessage) {
      fixedMessages.push({'chat':newMessage});
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
    },
    editMessages: function(msgId, newMsg) {
      // console.log(fixedMessages[msgId]);

      fixedMessages[msgId].chat = newMsg;
      //fixedMessages.fill(newMsg, msgId, 1);
      console.log(fixedMessages);
    }

}



})();