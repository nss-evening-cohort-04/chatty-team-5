var Chatty = (function () {
  var fixedMessages = [];
  
  return {
    appendNewMessage: function(newMessage, userId) {
      console.log("newmessages", fixedMessages);
      fixedMessages.push({'chat':newMessage, 'user':userId});
      printMessages(fixedMessages);     
    },
    loadFixedMessages: function() {
    var myFiles = [ "json/msg-one.json", "json/msg-two.json", "json/msg-three.json", "json/msg-four.json", "json/msg-five.json" ];
      for (var i = 0; i < myFiles.length; i++) {
        var messageLoader = new XMLHttpRequest();
        messageLoader.addEventListener("load", function() {
          var data = JSON.parse(this.responseText);
          for (var j = 0; j < data.messages.length; j++) {
            fixedMessages.push(data.messages[j]);
            printMessages(fixedMessages);
          } 
        });
        messageLoader.open("GET", myFiles[i]);
        messageLoader.send();
      }
    },
    eraseMessages: function(msgId) {
          var index = fixedMessages.indexOf(msgId);
          fixedMessages.splice(index, 1);
          console.log("deleter", fixedMessages);  
    },
    eraseAllMessages: function(eraseArray) {
      fixedMessages = [];
    },
    editMessages: function(msgId, newMsg, newUser) {
      fixedMessages[msgId].chat = newMsg;
      fixedMessages[msgId].user = newUser;
      console.log(newUser);
    },
    getMessages: function() {
      return fixedMessages;
    }
}
})();