/*! art-template@4.0.0 | https://github.com/aui/art-template */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.template=t():e.template=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(13),i=r(1),u=r(14),c=r(16),a=r(6),s=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===t?"undefined":n(t))?r=t:r.source=t;var s=r.filename,f=void 0!==r.cache?r.cache:i.cache;if(f&&s){var p=f.get(s);if(p)return p}if(r=u(r,i),!(t=r.source))try{var l=a(s,r.root);t=c(l),r.filename=l,r.source=t}catch(e){var y={path:s,name:"Compile Error",message:"template not found: "+e.message,stack:e.stack};if(r.onerror)return r.onerror(y);throw y}var m=new o(r),h=function t(n){try{return t.source(n)}catch(t){if(!r.compileDebug)return r.cache=null,r.compileDebug=!0,e(r)(n);if(r.onerror)return r.onerror(t)();throw t}};try{h.source=m.build(),f&&s&&f.set(s,h)}catch(e){if(r.onerror)return r.onerror(e);throw e}return h.toString=function(){return h.source.toString()},h};e.exports=s},function(e,t,r){"use strict";var n=r(12),o=r(7),i=r(11),u={filename:null,source:null,openTag:"<%",closeTag:"%>",escapeSymbol:"=",rawSymbol:"-",escape:!0,cache:i,parseExpression:null,parseString:null,imports:o,onerror:n,compileDebug:!1,root:"/",extension:".html"};e.exports=u},function(e,t,r){"use strict";(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(e){}}).call(t,r(10))},function(e,t,r){"use strict"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,r){"use strict";var n={abstract:!0,await:!0,boolean:!0,break:!0,byte:!0,case:!0,catch:!0,char:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,double:!0,else:!0,enum:!0,export:!0,extends:!0,false:!0,final:!0,finally:!0,float:!0,for:!0,function:!0,goto:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,int:!0,interface:!0,let:!0,long:!0,native:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,short:!0,static:!0,super:!0,switch:!0,synchronized:!0,this:!0,throw:!0,transient:!0,true:!0,try:!0,typeof:!0,var:!0,void:!0,volatile:!0,while:!0,with:!0,yield:!0};e.exports=function(e){return n.hasOwnProperty(e)}},function(e,t,r){"use strict";var n=r(3),o=r(2),i=function(e,t,r){if(o){var i=r?n.dirname(r):"";return n.resolve(t,i,e)}return e};e.exports=i},function(e,t,r){"use strict";var n={$include:function(e,t,n,o){var i=r(0);return e=r(6)(e,o,n),i({filename:e})(t)},$escape:function(e){var t={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};return function e(t){return"string"!=typeof t&&(t="function"==typeof t?e(t.call(t)):null===t?"":JSON.stringify(t)||""),t}(e).replace(/&(?![\w#]+;)|[<>"']/g,function(e){return t[e]})}};e.exports=n},function(e,t,r){"use strict";var n=r(0),o=function(e,t,r){return n(e,r)(t)};e.exports=o},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(8),i=r(0),u=r(1),c=function(e,t){return"object"===(void 0===t?"undefined":n(t))?o({filename:e},t):i({filename:e,source:t})};c.render=o,c.compile=i,c.defaults=u,e.exports=c},function(e,t,r){"use strict";var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},function(e,t,r){"use strict";var n={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=n},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){var t=JSON.stringify(e,null,2);return"object"===("undefined"==typeof console?"undefined":n(console))&&console.error("Template Error:",t),function(){return"{Template Error}"}};e.exports=o},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(15),u=r(17),c=r(5),a="$data",s=function(e,t){return e.hasOwnProperty(t)},f=JSON.stringify,p=function(){function e(t){var r=this;n(this,e);var o=t.openTag,i=t.closeTag,c=t.filename,s=t.root,p=t.source;this.source=p,this.options=t,this.scripts=[],this.context={$out:'""'},this.embedded={print:"function(){var text=''.concat.apply('',arguments);return $out+=text}",include:"function(src,data){return $out+=$imports.$include(src,data||"+a+","+f(c)+","+f(s)+")}"},t.compileDebug&&(this.context.$line='[0,""]'),u.parser(p,o,i).forEach(function(e){var t=e.type,n=e.value,o=e.line;"string"===t?r.parseString(n,o):"expression"===t&&r.parseExpression(n,o)})}return o(e,[{key:"parseContext",value:function(e){var t="",r=this.embedded,n=this.context,o=this.options,i=o.imports;s(n,e)||e===a||"$imports"===e||c(e)||(t=s(r,e)?r[e]:s(i,e)?"$imports."+e:a+"."+e,n[e]=t)}},{key:"parseString",value:function(e,t){var r=this.options,n=r.parseString;n&&(e=n({line:t,source:e,compiler:this}));var o="$out+="+f(e);this.scripts.push(o)}},{key:"parseExpression",value:function(e,t){var r=this,n=this.options,o=n.openTag,u=n.closeTag,c=n.parseExpression,a=n.compileDebug,s=n.escape,p=n.escapeSymbol,l=n.rawSymbol,y=e.replace(o,"").replace(u,""),m=y.replace(/^=[=#]/,l).replace(/^=/,p),h=i.trim(i.parser(m));i.namespaces(h).forEach(function(e){return r.parseContext(e)}),c&&(m=c({tokens:h,line:t,source:e,compiler:this}));var v=h[0],d=v&&v.value===l,b=v&&v.value===p;(d||b)&&(h.shift(),m=i.toString(h),!1===s||d?m="$out+="+m:(m="$out+=$escape("+m+")",this.parseContext("$escape"))),a&&this.scripts.push("$line=["+t+","+f(e)+"]"),this.scripts.push(m)}},{key:"build",value:function(){var e=this.options,t=this.context,r=this.source,n=e.filename,o=e.imports,i="var "+Object.keys(t).map(function(e){return e+"="+t[e]}).join(","),u=this.scripts.join(";\n"),c=['"use strict"',i,u,"return $out"].join(";\n");if(e.compileDebug){var s="{"+["path:"+f(n),'name:"Runtime Error"',"message:e.message","line:$line[0]","source:$line[1]"].join(",")+"}";c="try{"+c+"}catch(e){throw "+s+"}"}c="function ("+a+") {"+c+"}";try{return new Function("$imports","return "+c)(o)}catch(e){throw{path:n,name:"Compile Error",message:e.message,source:r,script:c,stack:e.stack}}}}]),e}();e.exports=p},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){var r=i(t);for(var n in e)r[n]=i(e[n]);return r},i=function e(t){if("object"===(void 0===t?"undefined":n(t))&&null!==t){if(Array.isArray(t)){var r=[];return t.forEach(function(t,n){r[n]=e(t)}),r}var o={};for(var i in t)o[i]=e(t[i]);return o}return t};e.exports=o},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o=r(4).default,i=r(4).matchToToken,u=r(5),c=function(e){return e.match(o).map(function(e){return o.lastIndex=0,i(o.exec(e))}).map(function(e){return"name"===e.type&&u(e.value)&&(e.type="keyword"),e})},a=function(e){var t=!1;return e.filter(function(e){return"whitespace"!==e.type&&"comment"!==e.type}).filter(function(e){return"name"===e.type&&!t||(t="punctuator"===e.type&&"."===e.value,!1)}).map(function(e){return e.value})},s=function(e){var t=l(e),r=t[t.length-1];return!!r&&"{"!==r.value&&"}"!==r.value},f=function(e,t){var r=e[t],n=!!r&&("whitespace"===r.type||"comment"===r.type);return n&&e.splice(t,1),n},p=function(e){var t;for(e=(t=[]).concat.apply(t,n(e));f(e,0););return e},l=function(e){var t;for(e=(t=[]).concat.apply(t,n(e));f(e,e.length-1););return e},y=function(e){return e=p(e),l(e)},m=function(e){return e.map(function(e){return e.value}).join("")};e.exports={parser:c,namespaces:a,isOutputExpression:s,trimLeft:p,trimRight:l,trim:y,toString:m}},function(e,t,r){"use strict";var n=r(2),o=function(e){if(n){return r(3).readFileSync(e,"utf8")}var t=document.getElementById(e);return t.value||t.innerHTML};e.exports=o},function(e,t,r){"use strict";var n=function(e,t,r){var n=[],o=1;return e.split(t).forEach(function(e){if(e=e.split(r),e.length>1){var i=t+e.shift()+r;n.push({type:"expression",value:i,line:o}),o+=i.split(/\n/).length-1}if(e[0]){var u=e[0];n.push({type:"string",value:u,line:o}),o+=u.split(/\n/).length-1}}),n};e.exports={parser:n}},function(e,t,r){"use strict";var n=r(0),o=r(1),i=r(2),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.extname;i&&(e.extensions[t]=function(e,t){var r=t||e.filename,o=n({filename:r}),i="var $imports=require("+JSON.stringify(7)+")";e._compile(i+";module.exports = "+o.toString()+";",r)})};e.exports=u},function(e,t,r){"use strict";var n=r(1),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return e.openTag="{{",e.closeTag="}}",e.rawSymbol="@",e.imports.$each=function(e,t){if(Array.isArray(e))for(var r=0,n=e.length;r<n;r++)t(e[r],r,e);else for(var o in e)t(e[o],o)},e.parseExpression=function(e){var t=e.tokens,r=e.line,n=e.source,o=e.compiler,i=o.options,u=function(e,t){console.warn("Template upgrade example:","{{"+e+"}}",">>>","{{"+t+"}}","\n",i.filename||"",r+":0-"+n.length)},c=i.escapeSymbol,a=i.rawSymbol,s=t.map(function(e){return e.value}).filter(function(e){return/^\S+$/.test(e)});"#"===s[0]&&(u("#value","@value"),s[0]=s[0].replace(/^#/,a));var f="",p=s[0]===a?s.shift():c,l="/"===s[0]?s.shift():"",y=l+s.shift();switch(y){case"%":t.shift(),t[t.length-1]===y&&t.pop(),f=t.join("");break;case"set":f="var "+s.join("")+";";break;case"if":f="if("+s.join("")+"){";break;case"else":"if"===s[0]?(s.shift(),f="}else if("+s.join("")+"){"):f="}else{";break;case"/if":f="}";break;case"each":"as"===s[1]&&(u("each object 'as' value index","each object value index"),s.splice(1,1));var m=s[0]||"$data",h=s[1]||"$value",v=s[2]||"$index";f="$each("+m+",function("+h+","+v+"){",o.parseContext("$each");break;case"/each":f="});";break;case"echo":f="print("+s.join(",")+");";break;case"print":case"include":f=y+"("+s.join(",")+");";break;default:if(-1!==s.indexOf("|")){for(var d=y,b=[];"|"!==s[0];)d+=s.shift();s.filter(function(e){return":"!==e}).forEach(function(e){"|"===e?b.push([]):b[b.length-1].push(e)}),b.reduce(function(e,t){var r=t.shift();return t.unshift(e),f="$imports."+r+"("+t.join(",")+")"},d)}else i.imports[y]&&(u("filterName value","value | filterName"),f=y+"("+s.join(",")+")",p=a);f=p+f}return f},e};e.exports=o},function(e,t,r){"use strict";var n=r(9),o=r(19),i=r(18);n.bindExtname=i,n.bindSyntax=o,e.exports=n}])});