(()=>{var t={868:(t,n,e)=>{var r={"./at_at.png":754,"./c3po.png":561,"./darth_vader.png":983,"./death_star.png":95,"./falcon.png":841,"./r2d2.png":210,"./stormtrooper.png":117,"./tie_ln.png":125,"./yoda.png":142};function a(t){var n=o(t);return e(n)}function o(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=868},754:(t,n,e)=>{"use strict";t.exports=e.p+"83e94ed545ed2cebf0dc.png"},561:(t,n,e)=>{"use strict";t.exports=e.p+"2823e9f7f760f4022047.png"},983:(t,n,e)=>{"use strict";t.exports=e.p+"bdd3168b96cddbcf45ce.png"},95:(t,n,e)=>{"use strict";t.exports=e.p+"dc4f8b75c78b373bba39.png"},841:(t,n,e)=>{"use strict";t.exports=e.p+"4b81074feda41b20e68e.png"},210:(t,n,e)=>{"use strict";t.exports=e.p+"660936cb6cf17db542ae.png"},117:(t,n,e)=>{"use strict";t.exports=e.p+"3935b90913ca7fa38106.png"},125:(t,n,e)=>{"use strict";t.exports=e.p+"b131684af77f5b52e3dd.png"},142:(t,n,e)=>{"use strict";t.exports=e.p+"b0668a451b219d61340f.png"}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r={},a=function(){function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.random();t(this,a),this.name=n,r[n]?this.img=r[n].cloneNode():(this.img=new Image,this.img.src=e(868)("./".concat(n,".png")),r[n]=this.img)}var o,i;return o=a,i=[{key:"preload",value:function(){a.symbols.forEach((function(t){return new a(t)}))}},{key:"symbols",get:function(){return["at_at","c3po","darth_vader","death_star","falcon","r2d2","stormtrooper","tie_ln","yoda"]}},{key:"random",value:function(){return this.symbols[Math.floor(Math.random()*this.symbols.length)]}}],null&&n(o.prototype,null),i&&n(o,i),Object.defineProperty(o,"prototype",{writable:!1}),a}();function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(n,e,r){var o=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.reelContainer=n,this.idx=e,this.symbolContainer=document.createElement("div"),this.symbolContainer.classList.add("icons"),this.reelContainer.appendChild(this.symbolContainer),this.animation=this.symbolContainer.animate([{transform:"none",filter:"blur(0)"},{filter:"blur(2px)",offset:.5},{transform:"translateY(-".concat(10*Math.floor(this.factor)/(3+10*Math.floor(this.factor))*100,"%)"),filter:"blur(0)"}],{duration:1e3*this.factor,easing:"ease-in-out"}),this.animation.cancel(),r.forEach((function(t){return o.symbolContainer.appendChild(new a(t).img)}))}var n,e;return n=t,(e=[{key:"factor",get:function(){return 1+Math.pow(this.idx/2,2)}},{key:"renderSymbols",value:function(t){for(var n=document.createDocumentFragment(),e=3;e<3+10*Math.floor(this.factor);e++){var r=new a(e>=10*Math.floor(this.factor)-2?t[e-10*Math.floor(this.factor)]:void 0);n.appendChild(r.img)}this.symbolContainer.appendChild(n)}},{key:"spin",value:function(){var t=this,n=new Promise((function(n){return t.animation.onfinish=n})),e=new Promise((function(n){return setTimeout(n,1e3*t.factor)}));return this.animation.play(),Promise.race([n,e]).then((function(){"finished"!==t.animation.playState&&t.animation.finish();for(var n=t.symbolContainer.children.length-3,e=0;e<n;e++)t.symbolContainer.firstChild.remove()}))}}])&&o(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(n){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),a.preload(),this.currentSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.nextSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.container=n,this.reels=Array.from(this.container.getElementsByClassName("reel")).map((function(t,n){return new i(t,n,e.currentSymbols[n])})),this.spinButton=document.getElementById("spin"),this.spinButton.addEventListener("click",(function(){return e.spin()})),this.autoPlayCheckbox=document.getElementById("autoplay"),r.inverted&&this.container.classList.add("inverted"),this.config=r}var n,e;return n=t,(e=[{key:"spin",value:function(){var t=this;return this.currentSymbols=this.nextSymbols,this.nextSymbols=[[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()]],this.onSpinStart(this.nextSymbols),Promise.all(this.reels.map((function(n){return n.renderSymbols(t.nextSymbols[n.idx]),n.spin()}))).then((function(){return t.onSpinEnd(t.nextSymbols)}))}},{key:"onSpinStart",value:function(t){var n,e;this.spinButton.disabled=!0,null===(n=(e=this.config).onSpinStart)||void 0===n||n.call(e,t)}},{key:"onSpinEnd",value:function(t){var n,e,r=this;if(this.spinButton.disabled=!1,null===(n=(e=this.config).onSpinEnd)||void 0===n||n.call(e,t),this.autoPlayCheckbox.checked)return window.setTimeout((function(){return r.spin()}),200)}}])&&c(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}(),d={inverted:!1,onSpinStart:function(t){console.log("onSpinStart",t)},onSpinEnd:function(t){console.log("onSpinEnd",t)}};new l(document.getElementById("slot"),d)})()})();