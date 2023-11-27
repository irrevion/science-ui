class Utils {
	repeat(x, f) {
		var i = 1;
		while (i<=x) {
			f(i);
			i++;
		}
	}
}

export default new Utils;