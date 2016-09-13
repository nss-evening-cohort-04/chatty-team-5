var Chatty = (function (deleteMessages) {

deleteMessages.removeFromDOM = function(DOMId) {
  var parent = DOMId.parentNode;
  parent.removeChild(DOMId);
};
deleteMessages.removeFromArray = function(DivId){
	Chatty.eraseMessages(DivId);
};
deleteMessages.removeAllFromArray = function(DOMArray) {
  for (var i = 0; i < DOMArray.length; i++) {
  	var eachDiv = DOMArray[i];
  	var eachDivId = eachDiv[i];
  	Chatty.eraseMessages(eachDivId);
  }
}
return deleteMessages

})(Chatty || {});