import 'normalize.css';					// resetCss
import FastClick from 'fastclick';		// moblieEvent
import network from './network';		// http
import browser from './browser';		// browser

window.GLOBAL = {
	network,
	browser,
	init(){
		// toMoblieEvent
		if('addEventListener' in document) {
			document.addEventListener('DOMContentLoaded', ()=>{
				FastClick.attach(document.body);
			}, false);
		}

		// px => rem
		const docEl = document.documentElement,
			resizeEvt = 'orientationchange' in Window ? 'orientationchange' : 'resize',
			recalc = () => {
				const clientWidth = docEl.clientWidth;
				if(!clientWidth) return;
				docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
			};
				
		if(!document.addEventListener) return;

		window.addEventListener(resizeEvt, recalc, false);
		document.addEventListener('DOMContentLoaded', recalc, false);

	}
}

GLOBAL.init();