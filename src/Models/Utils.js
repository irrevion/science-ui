import cfg from '../config.json';

class Utils {
	cfg(n) {
		if (process.env.NODE_ENV=='production') {
			return (cfg.prod?.[n] || cfg[n]);
		} else if (process.env.NODE_ENV=='development') {
			return (cfg.dev?.[n] || cfg[n]);
		} else if (process.env.NODE_ENV=='test') {
			return (cfg.test?.[n] || cfg[n]);
		}
		return cfg[n];
	}

	repeat(x, f) {
		var i = 1;
		while (i<=x) {
			f(i);
			i++;
		}
	}
}

export default new Utils;