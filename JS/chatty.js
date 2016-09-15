var Chatty = (function () {
  var fixedMessages = [];

  return {
    appendNewMessage: function(newMessage) {
      console.log("newmessages", fixedMessages);
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
        // if (msgId === undefined) {
        //   fixedMessages = [];
        //   console.log("empty", fixedMessages);
        // } else {
          var index = fixedMessages.indexOf(msgId);
          fixedMessages.splice(index, 1);
          console.log("deleter", fixedMessages); 
        // }  
    },
    eraseAllMessages: function(eraseArray) {
      fixedMessages = [];
    },
    editMessages: function(msgId, newMsg) {
      fixedMessages[msgId].chat = newMsg;
      //fixedMessages.fill(newMsg, msgId, 1);
      //console.log(fixedMessages);
    },
    getMessages: function() {
      return fixedMessages;
    }

}

})();