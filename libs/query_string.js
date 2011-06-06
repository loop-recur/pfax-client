var QueryString = function() {
	
	function getValue(name) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}
	
	return {getValue: getValue};
}
