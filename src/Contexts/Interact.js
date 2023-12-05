import { createContext } from 'react';

export default createContext({
	fnTest: function() {
		console.log('Interact context created');
	},
	set: function(n, v) {
		this[n] = v;
	}
});