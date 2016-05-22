var async = new (function(){
	var whenList = [];
	
	this.when = function(testFn, callback) {
		whenList.push({
			testFn: testFn,
			callback: callback
		});
	};
	
	testWhen = function() {
		whenList.forEach
	}
})();