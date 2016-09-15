var Chatty = (function () {
  var fixedMessages = [];

  return {
    appendNewMessage: function(newMessage) {
      console.log("newmessages", fixedMessages);
      fixedMessages.push({'chat':newMessage});
      printMessages(fixedMessages);
      
    },
    loadFixedMessages: function() {
      var loadFile = function (filePath, done) {
      var xhr = new XMLHTTPRequest();
      xhr.onload = function () { return done(this.responseText) }
      xhr.open("GET", filePath, true);
      xhr.send();
        };

    var myFiles = [ "json/msg-one.json", "json/msg-two.json", "json/msg-three.json", "json/msg-four.json", "json/msg-five.json" ];

    myFiles.forEach(function (file, i) {
    loadFile(file, function (responseText) {
        // we set jsonData[i] to the parse data since the requests
        // will not necessarily come in order
        // so we can't use JSONdata.push(JSON.parse(responseText));
        // if the order doesn't matter, you can use push
        fixedMessages[i] = JSON.parse(responseText);
        // or you could choose not to store it in an array.
        // whatever you decide to do with it, it is available as
        // responseText within this scope (unparsed!)
    })
})
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