import 'normalize.css';					// resetCss
import FastClick from 'fastclick';		// moblieEvent

// click => touch
((doc)=>{
	if('addEventListener' in doc) {
		doc.addEventListener('DOMContentLoaded', ()=>{
			FastClick.attach(document.body);
		}, false);
	}
})(document);

// px => rem
((doc, win) => {
	const docEl = doc.documentElement,
		  resizeEvt = 'orientationchange' in Window ? 'orientationchange' : 'resize',
		  recalc = () => {
			  const clientWidth = docEl.clientWidth;
			  if(!clientWidth) return;
			  docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
		  };
		     
	if(!doc.addEventListener) return;

	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
