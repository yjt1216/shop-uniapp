#// #ifdef APP-PLUS
import service from 'app.js'
// #endif

let apple = {}
if(typeof service !== 'undefined') {
	apple = service;
}

export default apple;