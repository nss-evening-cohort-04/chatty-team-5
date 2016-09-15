var Chatty = (function (deleteMessages) {

deleteMessages.removeFromDOM = function(DOMId) {
	var parent = DOMId.parentNode;
	parent.removeChild(DOMId);
};
deleteMessages.removeFromArray = function(DivId){
	Chatty.eraseMessages(DivId);
};
deleteMessages.removeAllFromArray = function(DOMArray) {
  	Chatty.eraseAllMessages(DOMArray);
}
return deleteMessages

})(Chatty || {});