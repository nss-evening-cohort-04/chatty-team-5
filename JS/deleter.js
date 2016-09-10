var Chatty = (function (deleteMessages) {

deleteMessages.removeFromDOM = function(DOMId) {
  var parent = DOMId.parentNode;
  parent.removeChild(DOMId);
};

return deleteMessages

})(Chatty || {});