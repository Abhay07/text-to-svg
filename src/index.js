import TextToSvg from './svg.js';
import * as opentype from 'opentype.js';


export default class WritingAnimation extends TextToSvg {

	static load(url, cb) {
	    opentype.load(url, (err, font) => {
	      if (err !== null) {
	        return cb(err, null);
	      }

	      return cb(null, new WritingAnimation(font));
	    });
  	}

	animateText(text,domElementId){
		const attributes = {fill: '#fff', stroke: 'black'};
		let options = options || {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
		const el = document.getElementById(domElementId);
		const pathsCount = super.getPath(text).length;
		const svg = super.getSVG(text, options);
		el.innerHTML = svg;
		const style = document.createElement('style');
		let styleText = `
			.textPath{
				stroke-dasharray: 1000;
				stroke-dashoffset: 1000;
				animation: pathAnimation 4s linear forwards;
			}
			@keyframes pathAnimation{
				100%{
					stroke-dashoffset: 0;
				}
			}
		`;
		for(let i=0;i<pathsCount;i++){
			styleText+=`
				.textPath${i}{
					animation-delay: ${i}s;
				}

			`
		}

		style.innerHTML = styleText;

		const ref = document.querySelector('body');
		ref.parentNode.insertBefore(style, ref);
		console.log('working')
	}
}



