(this["webpackJsonptriomino-tiling-visualizer"]=this["webpackJsonptriomino-tiling-visualizer"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),i=(a(11),a(12),a(1)),s=a(4),o=a(5),u=function(){function e(t,a){var n=this;Object(s.a)(this,e),this.equals=function(e){return n.x===e.x&&n.y===e.y},this.isToLeftOf=function(e){return n.x===e.x-1&&n.y===e.y},this.isToRightOf=function(e){return n.x===e.x+1&&n.y===e.y},this.isAbove=function(e){return n.x===e.x&&n.y===e.y-1},this.isBelow=function(e){return n.x===e.x&&n.y===e.y+1},this._x=t,this._y=a}return Object(o.a)(e,[{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}}]),e}();function m(e,t,a){var n=Math.pow(2,t-1);return 1===a?e:2===a?new u(e.x+n,e.y):new u(4===a?e.x:e.x+n,e.y+n)}function d(e,t,a){var n=e.x+Math.pow(2,t-1)-1,l=e.y+Math.pow(2,t-1)-1;return 1===a?new u(n,l):2===a?new u(n+1,l):new u(4===a?n:n+1,l+1)}var f=function(e,t,a){var n=[],l=function(e,t){n.push([e,t.x,t.y])};return l(0,a),function e(t,a,n){if(0===a)return;if(1===a)n.equals(t)?l(3,n):n.isToRightOf(t)?l(4,n):n.isBelow(t)?l(2,n):l(1,n);else{for(var c=function(e,t,a){var n=e.x+Math.pow(2,t-1)-1,l=e.y+Math.pow(2,t-1)-1;return a.x<=n&&a.y<=l?1:a.x<=n?4:a.y<=l?2:3}(t,a,n),r=1;r<=4;++r){var i=r!==c?d(t,a,r):n;r!==c&&l(5,i),e(m(t,a,r),a-1,i)}l((c+2-1)%4+1,d(t,a,c))}}(e,t,a),n},b=(a(13),function(e){var t=this,a=e.n,c=e.tiles,r=e.tileGrid,s=e.index,o=function(e,t){return Math.pow(2,a)*e+t},u=function(e){for(var a=[],n=0;n<e;++n){a[n]=new Array(e);for(var c=0;c<e;++c)a[n][c]=l.a.createElement("td",{className:"cell",onClick:r.bind(t,c,n),key:o(n,c)})}return a},m=Object(n.useState)(u(2)),d=Object(i.a)(m,2),f=d[0],b=d[1];Object(n.useEffect)((function(){b(u(Math.pow(2,a)))}),[a]);var y=Object(n.useState)(s),E=Object(i.a)(y,2),v=E[0],p=E[1];Object(n.useEffect)((function(){var e=function(e){if(e<c.length){var t=Object(i.a)(c[e],3);!function(e,t,a,n){switch(e){case 0:f[a][t]=l.a.createElement("td",{key:o(a,t),className:"cell cell-0"});break;case 5:f[a][t]=l.a.createElement("td",{key:o(a,t),className:"cell cell-5"});break;case 3:f[a][t+1]=l.a.createElement("td",{key:o(a,t+1),className:"cell cell-1 cell-N"}),f[a+1][t]=l.a.createElement("td",{key:o(a+1,t),className:"cell cell-1 cell-W"}),f[a+1][t+1]=l.a.createElement("td",{key:o(a+1,t+1),className:"cell cell-1 cell-SE"});break;case 4:f[a][t-1]=l.a.createElement("td",{key:o(a,t-1),className:"cell cell-2 cell-N"}),f[a+1][t]=l.a.createElement("td",{key:o(a+1,t),className:"cell cell-2 cell-E"}),f[a+1][t-1]=l.a.createElement("td",{key:o(a+1,t-1),className:"cell cell-2 cell-SW"});break;case 1:f[a][t-1]=l.a.createElement("td",{key:o(a,t-1),className:"cell cell-3 cell-S"}),f[a-1][t]=l.a.createElement("td",{key:o(a-1,t),className:"cell cell-3 cell-E"}),f[a-1][t-1]=l.a.createElement("td",{key:o(a-1,t-1),className:"cell cell-3 cell-NW"});break;case 2:f[a][t+1]=l.a.createElement("td",{key:o(a,t+1),className:"cell cell-4 cell-S"}),f[a-1][t]=l.a.createElement("td",{key:o(a-1,t),className:"cell cell-4 cell-W"}),f[a-1][t+1]=l.a.createElement("td",{key:o(a-1,t+1),className:"cell cell-4 cell-NE"})}}(t[0],t[1],t[2])}};if(v<=s)for(var n=1;n<s-v+1;++n)e(v+n);else{!function(e,a){for(var n=0;n<a;++n){e[n]=new Array(a);for(var c=0;c<a;++c)e[n][c]=l.a.createElement("td",{className:"cell",onClick:r.bind(t,c,n),key:o(n,c)})}}(f,Math.pow(2,a));for(var u=0;u<=s;++u)e(u)}p(s)}),[s]);var h=Object(n.useState)(0),g=Object(i.a)(h,2),N=g[0],k=g[1],w=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=function(){var e=w.current.clientWidth;k("min(".concat(e/Math.pow(2,a)-3,"px, ").concat(15/Math.pow(2,a)+1,"rem)"))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[a]);var x={"--cell-width":N,"--cell-height":N};return l.a.createElement("div",{className:"grid",ref:w},l.a.createElement("table",{className:"grid-table",style:x},l.a.createElement("tbody",null,f.map((function(e,t){return l.a.createElement("tr",{key:t},e)})))))}),y=(a(14),function(e){var t=e.running,a=e.setRunning,n=e.index,c=e.setIndex,r=e.maxIndex,i=e.speed,s=e.setSpeed,o=function(e){c((function(t){return t+e}))},u=-1===n,m=n===r,d=l.a.createElement("button",{type:"button",className:"btn btn-controls",onClick:function(){c(-1)},disabled:u,"aria-disabled":u},l.a.createElement("i",{className:"gg-play-backwards"})),f=l.a.createElement("button",{type:"button",className:"btn btn-controls",onClick:function(){o(-1)},disabled:u,"aria-disabled":u},l.a.createElement("i",{className:"gg-play-track-prev"})),b=l.a.createElement("button",{type:"button",className:"btn btn-controls",onClick:function(){a(!t)},disabled:-1===r,"aria-disabled":-1===r},t?l.a.createElement("i",{className:"gg-play-pause"}):l.a.createElement("i",{className:"gg-play-button"})),y=l.a.createElement("button",{type:"button",className:"btn btn-controls",onClick:function(){o(1)},disabled:m,"aria-disabled":m},l.a.createElement("i",{className:"gg-play-track-next"})),E=l.a.createElement("button",{type:"button",className:"btn btn-controls",onClick:function(){c(r)},disabled:m,"aria-disabled":m},l.a.createElement("i",{className:"gg-play-forwards"}));return l.a.createElement("div",{className:"controls"},l.a.createElement("div",{className:"btn-group",role:"group","aria-label":"tiling controls"},d,f,b,y,E),l.a.createElement("div",{className:"speed-control"},l.a.createElement("small",{className:"text-muted"},"slow"),l.a.createElement("input",{type:"range",className:"slider",min:"1",max:"15",step:"0.5",value:i,onChange:function(e){s(e.target.value)}}),l.a.createElement("small",{className:"text-muted"},"fast")))}),E=(a(15),function(){var e=this,t=Object(n.useState)(1),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),m=o[0],d=o[1],E=Object(n.useState)(!1),v=Object(i.a)(E,2),p=v[0],h=v[1],g=Object(n.useState)(5),N=Object(i.a)(g,2),k=N[0],w=N[1],x=function(e){h(!1),r(e),d([]),C(-1)},O=Object(n.useState)(-1),j=Object(i.a)(O,2),S=j[0],C=j[1];Object(n.useEffect)((function(){p&&(S===m.length-1?h(!1):setTimeout((function(){C((function(e){return e===S?e+1:e}))}),1e3/k))}),[p,S]);var M=m.length-1,z={running:p,setRunning:h,index:S,setIndex:C,maxIndex:M,speed:k,setSpeed:w},I=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,T={"--cell-transition-time":1e3/(1.5*k)+"ms","--cell-border":I?"2px solid black":"1.5px solid black"};return l.a.createElement("div",{className:"tiler",style:T},l.a.createElement("h4",null,"Click on any cell to start the visualization"),l.a.createElement("div",{className:"btn-group",role:"group","aria-label":"grid size selection"},[1,2,3,4,5,6].map((function(t){var a,n=Math.pow(2,t),r=c===t,s=(a={btn:!0,active:r},Object.entries(a).filter((function(e){var t=Object(i.a)(e,2);return t[0],t[1]})).map((function(e){var t=Object(i.a)(e,2),a=t[0];return t[1],a})).join(" "));return l.a.createElement("button",{type:"button",className:s,onClick:x.bind(e,t),"aria-pressed":r,key:t},n," \xd7 ",n)}))),l.a.createElement(b,{n:c,tiles:m,tileGrid:function(e,t){C(-1),d(f(new u(0,0),c,new u(e,t))),h(!0)},index:S}),l.a.createElement(y,z))});var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"banner"},l.a.createElement("h1",{className:"title"},"Triomino Tiling Visualizer")),l.a.createElement(E,null),l.a.createElement("div",{className:"footer banner"},"Created by Taesung Hwang for ICS 46. Inspiration and reference code provided by Professor Shindler."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.6bcc6156.chunk.js.map