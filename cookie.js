/**
 * MIT license
 */
var cookie = {
	get: function (name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) return (decodeURIComponent(arr[2]));
		return "";
	},
	set: function (name, value, expires, domain) {
		var str = name + "=" + encodeURIComponent(value);
		if (expires > 0) {
			var date = new Date();
			var ms = expires;
			date.setTime(date.getTime() + ms);
			str += ";expires=" + date.toGMTString();
		}
		str += ";"+ (domain ? "domain=" + domain + ";" : "") + ";path=/";
		document.cookie = str;
	},
	remove: function (name, domain) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		document.cookie = name + "=;" + (domain ? "domain=" + domain + ";" : "") + "expires=" + exp.toGMTString() + ";path=/";
	},
	clear: function (domain) {
		var arr = document.cookie.match(new RegExp("([^ ;][^;]*)(?=(=[^;]*)(;|$))", "gi"));
		for(var i in arr){
			cookie.remove(arr[i], domain);
		}
	}
};

export default cookie

