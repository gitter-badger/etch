var etchExt = new (function(){
	var exts = {};
	
	this.new = function(name) {
		exts[name] = {
			blocks: {},
			menus: {}
		};
		return new (function(extName){
			var name = extName;
			
			this.setBlock = function(info) {
				etchExt.setBlock(name, info);
			};
			
			this.setMenu = function(info) {
				etchExt.setBlock(name, info);
			};
		})(name);
	};
	
	this.setBlock = function(name, info) {
		var blockName = info.name;
		delete info.name;
		exts[name].blocks[blockName] = info;
	};
	
	this.setMenu = function(name, info) {
		exts[name].menus[info.name] = info.menu;
	};
	
	this.__defineGetter__('exts', function(){
		return exts;
	});
})();

testExt = etchExt.new('test');