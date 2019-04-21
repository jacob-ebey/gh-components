/*! For license information please see chunk.vendors~main.a205c7cf23e4cbfac917.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){"use strict";n.r(t);var r=n(3);class s{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new r.f(e,t.slice(1),n).parts}return"@"===i?[new r.d(e,t.slice(1),s.eventContext)]:"?"===i?[new r.c(e,t.slice(1),n)]:new r.a(e,t,n).parts}handleTextExpression(e){return new r.e(e)}}const i=new s;var o=n(22),a=n(18),l=n(11),c=n(9),h=n(6);function d(e){let t=u.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},u.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(h.f);return void 0===(n=t.keyString.get(r))&&(n=new h.a(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const u=new Map,p=new WeakMap,f=(e,t,n)=>{let s=p.get(t);void 0===s&&(Object(l.b)(t,t.firstChild),p.set(t,s=new r.e(Object.assign({templateFactory:d},n))),s.appendInto(t)),s.setValue(e),s.commit()};var m=n(25);n.d(t,"html",function(){return g}),n.d(t,"svg",function(){return _}),n.d(t,"DefaultTemplateProcessor",function(){return s}),n.d(t,"defaultTemplateProcessor",function(){return i}),n.d(t,"directive",function(){return a.a}),n.d(t,"isDirective",function(){return a.b}),n.d(t,"removeNodes",function(){return l.b}),n.d(t,"reparentNodes",function(){return l.c}),n.d(t,"noChange",function(){return c.a}),n.d(t,"nothing",function(){return c.b}),n.d(t,"AttributeCommitter",function(){return r.a}),n.d(t,"AttributePart",function(){return r.b}),n.d(t,"BooleanAttributePart",function(){return r.c}),n.d(t,"EventPart",function(){return r.d}),n.d(t,"isPrimitive",function(){return r.h}),n.d(t,"NodePart",function(){return r.e}),n.d(t,"PropertyCommitter",function(){return r.f}),n.d(t,"PropertyPart",function(){return r.g}),n.d(t,"parts",function(){return p}),n.d(t,"render",function(){return f}),n.d(t,"templateCaches",function(){return u}),n.d(t,"templateFactory",function(){return d}),n.d(t,"TemplateInstance",function(){return m.a}),n.d(t,"SVGTemplateResult",function(){return o.a}),n.d(t,"TemplateResult",function(){return o.b}),n.d(t,"createMarker",function(){return h.c}),n.d(t,"isTemplatePartActive",function(){return h.d}),n.d(t,"Template",function(){return h.a}),(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const g=(e,...t)=>new o.b(e,t,"html",i),_=(e,...t)=>new o.a(e,t,"svg",i)},function(e,t,n){"use strict";n.r(t);var r=n(4);class s{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new r.f(e,t.slice(1),n).parts}return"@"===i?[new r.d(e,t.slice(1),s.eventContext)]:"?"===i?[new r.c(e,t.slice(1),n)]:new r.a(e,t,n).parts}handleTextExpression(e){return new r.e(e)}}const i=new s;var o=n(23),a=n(19),l=n(12),c=n(10),h=n(7);function d(e){let t=u.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},u.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(h.f);return void 0===(n=t.keyString.get(r))&&(n=new h.a(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const u=new Map,p=new WeakMap,f=(e,t,n)=>{let s=p.get(t);void 0===s&&(Object(l.b)(t,t.firstChild),p.set(t,s=new r.e(Object.assign({templateFactory:d},n))),s.appendInto(t)),s.setValue(e),s.commit()};var m=n(26);n.d(t,"html",function(){return g}),n.d(t,"svg",function(){return _}),n.d(t,"DefaultTemplateProcessor",function(){return s}),n.d(t,"defaultTemplateProcessor",function(){return i}),n.d(t,"directive",function(){return a.a}),n.d(t,"isDirective",function(){return a.b}),n.d(t,"removeNodes",function(){return l.b}),n.d(t,"reparentNodes",function(){return l.c}),n.d(t,"noChange",function(){return c.a}),n.d(t,"nothing",function(){return c.b}),n.d(t,"AttributeCommitter",function(){return r.a}),n.d(t,"AttributePart",function(){return r.b}),n.d(t,"BooleanAttributePart",function(){return r.c}),n.d(t,"EventPart",function(){return r.d}),n.d(t,"isPrimitive",function(){return r.h}),n.d(t,"NodePart",function(){return r.e}),n.d(t,"PropertyCommitter",function(){return r.f}),n.d(t,"PropertyPart",function(){return r.g}),n.d(t,"parts",function(){return p}),n.d(t,"render",function(){return f}),n.d(t,"templateCaches",function(){return u}),n.d(t,"templateFactory",function(){return d}),n.d(t,"TemplateInstance",function(){return m.a}),n.d(t,"SVGTemplateResult",function(){return o.a}),n.d(t,"TemplateResult",function(){return o.b}),n.d(t,"createMarker",function(){return h.c}),n.d(t,"isTemplatePartActive",function(){return h.d}),n.d(t,"Template",function(){return h.a}),(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const g=(e,...t)=>new o.b(e,t,"html",i),_=(e,...t)=>new o.a(e,t,"svg",i)},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(1)),r(n(56)),r(n(57)),r(n(58)),r(n(59)),r(n(60)),r(n(61)),r(n(62)),r(n(63)),r(n(64))},function(e,t,n){"use strict";n.d(t,"h",function(){return c}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return _});var r=n(18),s=n(11),i=n(9),o=n(25),a=n(22),l=n(6);const c=e=>null===e||!("object"==typeof e||"function"==typeof e);class h{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i.a||c(e)&&e===this.value||(this.value=e,Object(r.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const e=this.value;this.value=i.a,e(this)}this.value!==i.a&&this.committer.commit()}}class u{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Object(l.c)()),e._insert(this.endNode=Object(l.c)())}insertAfterPart(e){e._insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}const e=this._pendingValue;e!==i.a&&(c(e)?e!==this.value&&this._commitText(e):e instanceof a.b?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===i.b?(this.value=i.b,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const n=new o.a(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)void 0===(n=t[r])&&(n=new u(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(s.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class p{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}if(this._pendingValue===i.a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=i.a}}class f extends h{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let g=!1;try{const e={get capture(){return g=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class _{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}if(this._pendingValue===i.a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=b(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=i.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const b=e=>e&&(g?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"h",function(){return c}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return p}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return _});var r=n(19),s=n(12),i=n(10),o=n(26),a=n(23),l=n(7);const c=e=>null===e||!("object"==typeof e||"function"==typeof e);class h{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i.a||c(e)&&e===this.value||(this.value=e,Object(r.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const e=this.value;this.value=i.a,e(this)}this.value!==i.a&&this.committer.commit()}}class u{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Object(l.c)()),e._insert(this.endNode=Object(l.c)())}insertAfterPart(e){e._insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}const e=this._pendingValue;e!==i.a&&(c(e)?e!==this.value&&this._commitText(e):e instanceof a.b?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===i.b?(this.value=i.b,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const n=new o.a(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)void 0===(n=t[r])&&(n=new u(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(s.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class p{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}if(this._pendingValue===i.a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=i.a}}class f extends h{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let g=!1;try{const e={get capture(){return g=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class _{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=i.a,e(this)}if(this._pendingValue===i.a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=b(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=i.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const b=e=>e&&(g?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(0)),r(n(41)),r(n(42)),r(n(43)),r(n(44)),r(n(45)),r(n(46)),r(n(47)),r(n(48)),r(n(49))},function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return h});const r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const a=[],l=t=>{const d=t.content,u=document.createTreeWalker(d,133,null,!1);let p=0;for(;u.nextNode();){n++;const t=u.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const a=t.attributes;let l=0;for(let e=0;e<a.length;e++)a[e].value.indexOf(r)>=0&&l++;for(;l-- >0;){const r=e.strings[s],a=h.exec(r)[2],l=a.toLowerCase()+o,c=t.getAttribute(l).split(i);this.parts.push({type:"attribute",index:n,name:a,strings:c}),t.removeAttribute(l),s+=c.length-1}}"TEMPLATE"===t.tagName&&l(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(i),l=o.length-1;for(let e=0;e<l;e++)r.insertBefore(""===o[e]?c():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[l]?(r.insertBefore(c(),t),a.push(t)):t.data=o[l],s+=l}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&n!==p||(n++,e.insertBefore(c(),t)),p=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(a.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1})}}};l(t);for(const e of a)e.parentNode.removeChild(e)}}const l=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return h});const r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const a=[],l=t=>{const d=t.content,u=document.createTreeWalker(d,133,null,!1);let p=0;for(;u.nextNode();){n++;const t=u.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const a=t.attributes;let l=0;for(let e=0;e<a.length;e++)a[e].value.indexOf(r)>=0&&l++;for(;l-- >0;){const r=e.strings[s],a=h.exec(r)[2],l=a.toLowerCase()+o,c=t.getAttribute(l).split(i);this.parts.push({type:"attribute",index:n,name:a,strings:c}),t.removeAttribute(l),s+=c.length-1}}"TEMPLATE"===t.tagName&&l(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(i),l=o.length-1;for(let e=0;e<l;e++)r.insertBefore(""===o[e]?c():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[l]?(r.insertBefore(c(),t),a.push(t)):t.data=o[l],s+=l}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&n!==p||(n++,e.insertBefore(c(),t)),p=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(a.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1})}}};l(t);for(const e of a)e.parentNode.removeChild(e)}}const l=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r={breakpoints:{phoneMaxWidth:"599px",tabletPortraitMinWidth:"600px",tabletPortraitAndBelowMaxWidth:"899px",tabletLandscapeMinWidth:"900px",desktopMinWidth:"1200px",bigDesktopMinWidth:"1800px"},palette:{black:"#000000",dark:"#2D2547",light:"#F2F2F2",primary:"#3C6E71",primaryHover:"#376568",warning:"#FFE14F",white:"#FFFFFF",error:"#993D3D"}};t.getTheme=function(){return r},t.updateTheme=function(e){r=Object.assign({},r,e,{breakpoints:Object.assign({},r.breakpoints,e.breakpoints),palette:Object.assign({},r.palette,e.palette)})}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s});const r={},s={}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s});const r={},s={}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i});const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null,r=null)=>{let s=t;for(;s!==n;){const t=s.nextSibling;e.insertBefore(s,r),s=t}},i=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i});const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null,r=null)=>{let s=t;for(;s!==n;){const t=s.nextSibling;e.insertBefore(s,r),s=t}},i=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i(){const{palette:e}=s.getTheme();return r.html`
    <h2><slot></slot></h2>

    <style>
      :host h2 {
        color: ${e.primary};
        font-size: 28px;
        font-weight: 500;
      }
    </style>
  `}t.H2=i,r.register("gh-h2",i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);r.register("gh-h1",function(){const{palette:e}=s.getTheme();return r.html`
    <h1><slot></slot></h1>

    <style>
      :host h1 {
      position: relative;
      color: ${e.primary};
      font-size: 36px;
      font-weight: 500;
    }

    :host h1::after {
      content: "";
      display: block;
      margin-top: 8px;
      bottom: 0;
      left: 0;
      width: 32px;
      height: 1px;
      background-color: ${e.black};
    }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i(){const{palette:e}=s.getTheme();return r.html`
    <h3><slot></slot></h3>

    <style>
      :host h3 {
        color: ${e.primary};
        font-size: 24px;
        font-weight: 500;
      }
    </style>
  `}t.H3=i,r.register("gh-h3",i)},function(e){e.exports=[{functionName:"Button",interfaceName:"ButtonProps",elementName:"gh-button",properties:[{name:"big",doc:"An optional boolean indicating if the button should be big.",type:"boolean"},{name:"href",doc:"An optional href that turns the button into an anchor tag.",type:"string"},{name:"outline",doc:"An optional boolean indicating if the button should be rendered\r\nin the outlined theme.",type:"boolean"},{name:"padding",doc:"An optional padding that overrides the default.",type:"string"},{name:"theme",doc:"The theme of the button.",type:'"dark" | "light" | "primary" | "default"'}],doc:"A button component with configurable options."},{functionName:"Card",interfaceName:"CardProps",elementName:"gh-card",properties:[],doc:"A card component useful for content that needs to stand out."},{functionName:"ContentPage",interfaceName:"ContentPageProps",elementName:"gh-contentpage",properties:[],doc:"A component for the main content of an article page."},{functionName:"H2",interfaceName:"H2Props",elementName:"gh-h2",properties:[],doc:"A themed h2 element."},{functionName:"H3",interfaceName:"H3Props",elementName:"gh-h3",properties:[],doc:"A themed h3 element."},{functionName:"Stackblitz",interfaceName:"StackblitzProps",elementName:"gh-stackblitz",properties:[{name:"src",doc:"The url with embeding options set.",type:"string"}],doc:"A component for displaying an embeded stackblitz editor."},{functionName:"WarningCard",interfaceName:"WarningCardProps",elementName:"gh-warningcard",properties:[],doc:"A card that displays a warning icon next to the content."},{functionName:"AppBarItem",interfaceName:"AppBarItemProps",elementName:"gh-appbar-item",properties:[{name:"href",doc:"An optional href that renders the item as an anchor.",type:"string"}],doc:"A menu item for the appbar."},{functionName:"AppBar",interfaceName:"AppBarProps",elementName:"gh-appbar",properties:[{name:"label",doc:"The label for the appbar.",type:"string"},{name:"label-href",doc:"An href for the label.",type:"string"},{name:"has-items",doc:"If we should render the items / children.",type:"boolean"},{name:"theme",doc:"The theme of the toolbar.",type:'"dark" | "light" | "primary" | "default"'}],doc:"A responsive appbar component."},{functionName:"Hero",interfaceName:"HeroProps",elementName:"gh-hero",properties:[{name:"theme",doc:"The theme of the hero.",type:'"dark" | "light" | "primary"'}],doc:"A hero component for standout text. Usually used on a homepage."},{functionName:"HeroH1",interfaceName:"HeroH1Props",elementName:"gh-hero-h1",properties:[],doc:"The main text of a gh-hero component."},{functionName:"HeroH2",interfaceName:"HeroH2Props",elementName:"gh-hero-h2",properties:[],doc:"The secondary text of a gh-hero component."},{functionName:"ListMenu",interfaceName:"ListMenuProps",elementName:"gh-listmenu",properties:[{name:"breakpoint",doc:"The breakpoint that the menu collapses and has a toggle open button.",type:'"portrait"'}],doc:"A list menu that can be used for things such as sidebars."},{functionName:"Col",interfaceName:"ColProps",elementName:"gh-col",properties:[],doc:"A column for use within a gh-row for creating basic layouts."},{functionName:"Row",interfaceName:"RowProps",elementName:"gh-row",properties:[{name:"breakpoint",doc:"The screensize at which we go to flex-direction: column.",type:'"portrait"'}],doc:"A row for creating basic layouts."}]},function(e,t,n){"use strict";n.r(t),window.JSCompiler_renameProperty=function(e,t){return e};let r,s,i=/(url\()([^)]*)(\))/g,o=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(e,t){if(e&&o.test(e))return e;if(void 0===r){r=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",r="http://a/c%20d"===e.href}catch(e){}}return t||(t=document.baseURI||window.location.href),r?new URL(e,t).href:(s||((s=document.implementation.createHTMLDocument("temp")).base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=t,s.anchor.href=e,s.anchor.href||e)}function l(e,t){return e.replace(i,function(e,n,r,s){return n+"'"+a(r.replace(/["']/g,""),t)+"'"+s})}function c(e){return e.substring(0,e.lastIndexOf("/")+1)}window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let h=c(document.baseURI||window.location.href);let d=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let u=!1;let p=!1;let f=!1;let m=!1;let g=0;function _(){}_.prototype.__mixinApplications,_.prototype.__mixinSet;const b=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=g++;return function(r){let s=r.__mixinSet;if(s&&s[n])return r;let i=t,o=i.get(r);o||(o=e(r),i.set(r,o));let a=Object.create(o.__mixinSet||s||null);return a[n]=!0,o.__mixinSet=a,o}};let y={},v={};function w(e,t){y[e]=v[e.toLowerCase()]=t}function P(e){return y[e]||v[e.toLowerCase()]}class x extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=P(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=a(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=c(t)}return this.__assetpath}register(e){if(e=e||this.id){if(u&&void 0!==P(e))throw w(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,w(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}x.prototype.modules=y,customElements.define("dom-module",x);const N="link[rel=import][type~=css]",C="include",E="shady-unscoped";function A(e){return x.import(e)}function O(e){const t=l((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function T(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...k(t[e]));return n}function k(e){const t=A(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...S(t));const n=t.querySelector("template");n&&e.push(...M(n,t.assetpath)),t._styles=e}return t._styles}function M(e,t){if(!e._styles){const n=[],r=e.content.querySelectorAll("style");for(let e=0;e<r.length;e++){let s=r[e],i=s.getAttribute(C);i&&n.push(...T(i).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(s.textContent=l(s.textContent,t)),n.push(s)}e._styles=n}return e._styles}function S(e){const t=[],n=e.querySelectorAll(N);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){const e=r.import,n=r.hasAttribute(E);if(n&&!e._unscopedStyle){const t=O(e);t.setAttribute(E,""),e._unscopedStyle=t}else e._style||(e._style=O(e));t.push(n?e._unscopedStyle:e._style)}}return t}const R=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e;function L(e){return e.indexOf(".")>=0}function j(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function I(e,t){return 0===e.indexOf(t+".")}function $(e,t){return 0===t.indexOf(e+".")}function H(e,t,n){return t+n.slice(e.length)}function B(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function z(e){return Array.isArray(e)?B(e).split("."):e.toString().split(".")}function V(e,t,n){let r=e,s=z(t);for(let e=0;e<s.length;e++){if(!r)return;r=r[s[e]]}return n&&(n.path=s.join(".")),r}function F(e,t,n){let r=e,s=z(t),i=s[s.length-1];if(s.length>1){for(let e=0;e<s.length-1;e++){if(!(r=r[s[e]]))return}r[i]=n}else r[t]=n;return s.join(".")}const D={},W=/-[a-z]/g,U=/([A-Z])/g;function q(e){return D[e]||(D[e]=e.indexOf("-")<0?e:e.replace(W,e=>e[1].toUpperCase()))}function Z(e){return D[e]||(D[e]=e.replace(U,"-$1").toLowerCase())}let G=0,J=0,Y=[],X=0,K=document.createTextNode("");new window.MutationObserver(function(){const e=Y.length;for(let t=0;t<e;t++){let e=Y[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Y.splice(0,e),J+=e}).observe(K,{characterData:!0});const Q={run:e=>(K.textContent=X++,Y.push(e),G++),cancel(e){const t=e-J;if(t>=0){if(!Y[t])throw new Error("invalid async handle: "+e);Y[t]=null}}},ee=Q,te=b(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],s=this._shouldPropertyChange(e,t,r);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ee.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){const r=this.__dataAttributes,s=r&&r[e]||e;this[s]=this._deserializeValue(t,n||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const r=this._serializeValue(t);void 0===r?e.removeAttribute(n):("class"!==n&&"name"!==n&&"slot"!==n||(e=R(e)),e.setAttribute(n,r))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}}),ne={};let re=HTMLElement.prototype;for(;re;){let e=Object.getOwnPropertyNames(re);for(let t=0;t<e.length;t++)ne[e[t]]=!0;re=Object.getPrototypeOf(re)}const se=b(e=>{const t=te(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(q(e[t]))}static attributeNameForProperty(e){return Z(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!ne[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),ie=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),oe={"dom-if":!0,"dom-repeat":!0};function ae(e){let t=e.getAttribute("is");if(t&&oe[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function le(e,t){let n=t.parentInfo&&le(e,t.parentInfo);if(!n)return e;ie.currentNode=n;for(let e=ie.firstChild(),n=0;e;e=ie.nextSibling())if(t.parentIndex===n++)return e}function ce(e,t,n,r){r.id&&(t[r.id]=n)}function he(e,t,n){if(n.events&&n.events.length)for(let r,s=0,i=n.events;s<i.length&&(r=i[s]);s++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function de(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const ue=b(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r,s=e;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(s,t,n)||r,ie.currentNode=s,ie.firstChild()&&(r=this._parseTemplateChildNodes(s,t,n)||r),s.hasAttributes&&s.hasAttributes()&&(r=this._parseTemplateNodeAttributes(s,t,n)||r),r}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName){ie.currentNode=e;for(let r,s=ie.firstChild(),i=0;s;s=r){if("template"==s.localName&&(s=ae(s)),ie.currentNode=s,r=ie.nextSibling(),s.nodeType===Node.TEXT_NODE){let n=r;for(;n&&n.nodeType===Node.TEXT_NODE;)s.textContent+=n.textContent,r=ie.nextSibling(),e.removeChild(n),n=r;if(t.stripWhiteSpace&&!s.textContent.trim()){e.removeChild(s);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(s,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),ie.currentNode=s,ie.parentNode()&&i++}}}static _parseTemplateNestedTemplate(e,t,n){let r=this._parseTemplate(e,t);return(r.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,s=Array.from(e.attributes);for(let i,o=s.length-1;i=s[o];o--)r=this._parseTemplateNodeAttribute(e,t,n,i.name,i.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,s){return"on-"===r.slice(0,3)?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:s}),!0):"id"===r&&(n.id=s,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,r=t.content||e.content,s=document.importNode(r,!0);s.__noInsertionPoint=!t.hasInsertionPoint;let i=s.nodeList=new Array(n.length);s.$={};for(let e,t=0,r=n.length;t<r&&(e=n[t]);t++){let n=i[t]=le(s,e);ce(0,s.$,n,e),de(0,n,e),he(this,n,e)}return s=s}_addMethodEventListenerToNode(e,t,n,r){let s=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(r=r||e,0,n);return this._addEventListenerToNode(e,t,s),s}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}});let pe=0;const fe={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},me=/[A-Z]/;function ge(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],r=n[e]=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}}}else n=e[t]={};return n}function _e(e,t,n,r,s,i){if(t){let o=!1,a=pe++;for(let l in n)be(e,t,a,l,n,r,s,i)&&(o=!0);return o}return!1}function be(e,t,n,r,s,i,o,a){let l=!1,c=t[o?j(r):r];if(c)for(let t,h=0,d=c.length;h<d&&(t=c[h]);h++)t.info&&t.info.lastRun===n||o&&!ye(r,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,r,s,i,t.info,o,a),l=!0);return l}function ye(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!I(n,e))||!(!t.wildcard||!$(n,e))}return!0}function ve(e,t,n,r,s){let i="string"==typeof s.method?e[s.method]:s.method,o=s.property;i?i.call(e,e.__data[o],r[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function we(e,t,n){let r=j(t);if(r!==t){return Pe(e,Z(r)+"-changed",n[t],t),!0}return!1}function Pe(e,t,n,r){let s={value:n,queueProperty:!0};r&&(s.path=r),R(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function xe(e,t,n,r,s,i){let o=(i?j(t):t)!=t?t:null,a=o?V(e,o):e.__data[t];o&&void 0===a&&(a=n[t]),Pe(e,s.eventName,a,o)}function Ne(e,t,n,r,s){let i=e.__data[t];d&&(i=d(i,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,i)}function Ce(e,t,n,r,s){let i=Se(e,t,n,r,s),o=s.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,i,!0):e[o]=i}function Ee(e,t,n,r,s,i,o){n.bindings=n.bindings||[];let a={kind:r,target:s,parts:i,literal:o,isCompound:1!==i.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Z(s)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let r=a.parts[n];r.compoundIndex=n,Ae(e,t,a,r,l)}}function Ae(e,t,n,r,s){if(!r.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=r.dependencies,o={index:s,binding:n,part:r,evaluator:e};for(let n=0;n<i.length;n++){let r=i[n];"string"==typeof r&&((r=$e(r)).wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Oe,info:o,trigger:r})}}}function Oe(e,t,n,r,s,i,o){let a=o[s.index],l=s.binding,c=s.part;if(i&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=n[t];t=H(c.source,l.target,t),a._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,n,r,s){s=function(e,t,n,r){if(n.isCompound){let s=e.__dataCompoundStorage[n.target];s[r.compoundIndex]=t,t=s.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,s,n,r),d&&(s=d(s,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,s,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[fe.READ_ONLY]&&t[fe.READ_ONLY][r]||t._setPendingProperty(r,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,s)}}(e,a,l,c,s.evaluator._evaluateBinding(e,c,t,n,r,i))}}function Te(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,s=new Array(r.length);for(let e=0;e<r.length;e++)s[e]=r[e].literal;let i=t.target;n[i]=s,t.literal&&"property"==t.kind&&(e[i]=t.literal)}}function ke(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){!function(e,t,n,r,s){let i,o=e.detail,a=o&&o.path;a?(r=H(n,r,a),i=o&&o.value):i=e.currentTarget[n],i=s?!i:i,t[fe.READ_ONLY]&&t[fe.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,i,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,n.target,r.source,r.negate)})}}function Me(e,t,n,r,s,i){i=t.static||i&&("object"!=typeof i||i[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:i};for(let s,i=0;i<t.args.length&&(s=t.args[i]);i++)s.literal||e._addPropertyEffect(s.rootProperty,n,{fn:r,info:o,trigger:s});i&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o})}function Se(e,t,n,r,s){let i=e._methodHost||e,o=i[s.methodName];if(o){let r=e._marshalArgs(s.args,t,n);return o.apply(i,r)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Re=[],Le=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function je(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function Ie(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Re};if(t[2].trim()){return function(e,t){return t.args=e.map(function(e){let n=$e(e);return n.literal||(t.static=!1),n},this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function $e(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=j(t),n.structured=L(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function He(e,t,n){let r=V(e,n);return void 0===r&&(r=t[n]),r}function Be(e,t,n,r){e.notifyPath(n+".splices",{indexSplices:r}),e.notifyPath(n+".length",t.length)}function ze(e,t,n,r,s,i){Be(e,t,n,[{index:r,addedCount:s,removed:i,object:t,type:"splice"}])}const Ve=b(e=>{const t=ue(se(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return fe}_initializeProperties(){super._initializeProperties(),Fe.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[fe.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==fe.READ_ONLY);let r=ge(this,t)[e];r||(r=this[t][e]=[]),r.push(n)}_removePropertyEffect(e,t,n){let r=ge(this,t)[e],s=r.indexOf(n);s>=0&&r.splice(s,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,fe.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,fe.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,fe.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,fe.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||j(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=V(this,e);if(!(e=F(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let r=e.__dataLinkedPaths;if(r){let s;for(let i in r){let o=r[i];$(i,t)?(s=H(i,o,t),e._setPendingPropertyOrPath(s,n,!0,!0)):$(o,t)&&(s=H(o,i,t),e._setPendingPropertyOrPath(s,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||(e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&L(e),s=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,s[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[fe.NOTIFY]&&this[fe.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[fe.READ_ONLY]&&this[fe.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,r){let s=e[fe.COMPUTE];if(s){let i=t;for(;_e(e,s,i,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),i=e.__dataPending,e.__dataPending=null}}(this,t,n,r);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),_e(this,this[fe.REFLECT],t,n,r),_e(this,this[fe.OBSERVE],t,n,r),s&&function(e,t,n,r,s){let i,o,a=e[fe.NOTIFY],l=pe++;for(let o in t)t[o]&&(a&&be(e,a,l,o,n,r,s)?i=!0:s&&we(e,o,n)&&(i=!0));i&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,s,t,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[fe.PROPAGATE]&&_e(this,this[fe.PROPAGATE],e,t,n);let r=this.__templateInfo;for(;r;)_e(this,r.propertyEffects,e,t,n,r.nodeList),r=r.nextTemplateInfo}linkPaths(e,t){e=B(e),t=B(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=B(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};Be(this,V(this,e,n),n.path,t)}get(e,t){return V(t||this,e)}set(e,t,n){n?F(n,e,t):this[fe.READ_ONLY]&&this[fe.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},r=V(this,e,n),s=r.length,i=r.push(...t);return t.length&&ze(this,r,n.path,s,t.length,[]),i}pop(e){let t={path:""},n=V(this,e,t),r=Boolean(n.length),s=n.pop();return r&&ze(this,n,t.path,n.length,0,[s]),s}splice(e,t,n,...r){let s,i={path:""},o=V(this,e,i);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),s=2===arguments.length?o.splice(t):o.splice(t,n,...r),(r.length||s.length)&&ze(this,o,i.path,t,r.length,s),s}shift(e){let t={path:""},n=V(this,e,t),r=Boolean(n.length),s=n.shift();return r&&ze(this,n,t.path,0,0,[s]),s}unshift(e,...t){let n={path:""},r=V(this,e,n),s=r.unshift(...t);return t.length&&ze(this,r,n.path,0,t.length,[]),s}notifyPath(e,t){let n;if(1==arguments.length){let r={path:""};t=V(this,e,r),n=r.path}else n=Array.isArray(e)?B(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,fe.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,fe.OBSERVE,{fn:ve,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,fe.OBSERVE,{fn:ve,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=Ie(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");Me(this,n,fe.OBSERVE,Se,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,fe.NOTIFY,{fn:xe,info:{eventName:Z(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,fe.REFLECT,{fn:Ne,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=Ie(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");Me(this,r,fe.COMPUTE,Ce,e,n)}_marshalArgs(e,t,n){const r=this.__data,s=[];for(let i=0,o=e.length;i<o;i++){let{name:o,structured:a,wildcard:l,value:c,literal:h}=e[i];if(!h)if(l){const e=$(o,t),s=He(r,n,e?t:o);c={path:e?t:o,value:s,base:e?V(r,o):s}}else c=a?He(r,n,o):r[o];s[i]=c}return s}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__templateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&((n=Object.create(n)).wasPreBound=r,!r&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(n)}_stampTemplate(e){Fe.beginHosting(this);let t=super._stampTemplate(e);Fe.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let s=r[t],i=n[t],o=s.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Te(i,n),ke(i,e,n)}i.__dataHost=e}}(this,n),this.__dataReady&&_e(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,t,n){let r=super._parseTemplateNode(e,t,n);if(e.nodeType===Node.TEXT_NODE){let s=this._parseBindings(e.textContent,t);s&&(e.textContent=je(s)||" ",Ee(this,t,n,"text","textContent",s),r=!0)}return r}static _parseTemplateNodeAttribute(e,t,n,r,s){let i=this._parseBindings(s,t);if(i){let s=r,o="property";me.test(r)?o="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),o="attribute");let a=je(i);return a&&"attribute"==o&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"input"===e.localName&&"value"===s&&e.setAttribute(s,""),e.removeAttribute(s),"property"===o&&(r=q(r)),Ee(this,t,n,o,r,i,a),!0}return super._parseTemplateNodeAttribute(e,t,n,r,s)}static _parseTemplateNestedTemplate(e,t,n){let r=super._parseTemplateNestedTemplate(e,t,n),s=n.templateInfo.hostProps;for(let e in s)Ee(this,t,n,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}]);return r}static _parseBindings(e,t){let n,r=[],s=0;for(;null!==(n=Le.exec(e));){n.index>s&&r.push({literal:e.slice(s,n.index)});let i=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,c="",h=-1;"{"==i&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let d=Ie(a),u=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||u.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(u.push(n),d.dynamicFn=!0)}else u.push(a);r.push({source:a,mode:i,negate:o,customEvent:l,signature:d,dependencies:u,event:c}),s=Le.lastIndex}if(s&&s<e.length){let t=e.substring(s);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,n,r,s,i){let o;return o=t.signature?Se(e,n,r,0,t.signature):n!=t.source?V(e,t.source):i&&L(n)?V(e,n):e.__data[n],t.negate&&(o=!o),o}}});const Fe=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};const De=[];const We=b(e=>{const t=te(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof s?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=function(e){const t={};for(let n in e){const r=e[n];t[n]="function"==typeof r?{type:r}:r}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){e=this.prototype,De.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),Ue="3.2.0",qe=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ze=b(e=>{const t=We(Ve(e));function n(e,t,n,r){if(!qe){const s=t.content.querySelectorAll("style"),i=M(t),o=function(e){let t=A(e);return t?S(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<o.length;n++){let s=o[n];s.textContent=e._processStyleText(s.textContent,r),t.content.insertBefore(s,a)}let l=0;for(let t=0;t<i.length;t++){let n=i[t],o=s[l];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):l++,n.textContent=e._processStyleText(n.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}return class extends t{static get polymerElementVersion(){return Ue}static _finalizeClass(){super._finalizeClass();const e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);var t;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):f||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let i in e)t=this.prototype,n=i,r=e[i],s=e,r.computed&&(r.readOnly=!0),r.computed&&(t._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):t._createComputedProperty(n,r.computed,s)),r.readOnly&&!t._hasReadOnlyEffect(n)?t._createReadOnlyProperty(n,!r.computed):!1===r.readOnly&&t._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),r.reflectToAttribute&&!t._hasReflectEffect(n)?t._createReflectedProperty(n):!1===r.reflectToAttribute&&t._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),r.notify&&!t._hasNotifyEffect(n)?t._createNotifyingProperty(n):!1===r.notify&&t._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),r.observer&&t._createPropertyObserver(n,r.observer,s[r.observer]),t._addPropertyToAttributeMap(n);var t,n,r,s}static createObservers(e,t){const n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!u||p)&&(t=x.import(e,"template"),u&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=c(e.url);else{const e=x.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=h,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return l(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;n(this,t,e,r?a(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=R(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),m&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=a(this.importPath)),a(e,t)}static _parseTemplateContent(e,t,n){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,n)}static _addTemplatePropertyEffect(e,t,n){return!f||t in this._properties||console.warn(`Property '${t}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(e,t,n)}}});class Ge{constructor(e){this.value=e.toString()}toString(){return this.value}}function Je(e){if(e instanceof Ge)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const Ye=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,r)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ge)return Je(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[r+1],e[0]),n},Xe=Ze(HTMLElement);function Ke(e,t,n){return{index:e,removed:t,addedCount:n}}const Qe=0,et=1,tt=2,nt=3;function rt(e,t,n,r,s,i){let o,a=0,l=0,c=Math.min(n-t,i-s);if(0==t&&0==s&&(a=function(e,t,n){for(let r=0;r<n;r++)if(!st(e[r],t[r]))return r;return n}(e,r,c)),n==e.length&&i==r.length&&(l=function(e,t,n){let r=e.length,s=t.length,i=0;for(;i<n&&st(e[--r],t[--s]);)i++;return i}(e,r,c-a)),s+=a,i-=l,(n-=l)-(t+=a)==0&&i-s==0)return[];if(t==n){for(o=Ke(t,[],0);s<i;)o.removed.push(r[s++]);return[o]}if(s==i)return[Ke(t,[],n-t)];let h=function(e){let t=e.length-1,n=e[0].length-1,r=e[t][n],s=[];for(;t>0||n>0;){if(0==t){s.push(tt),n--;continue}if(0==n){s.push(nt),t--;continue}let i,o=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];(i=a<l?a<o?a:o:l<o?l:o)==o?(o==r?s.push(Qe):(s.push(et),r=o),t--,n--):i==a?(s.push(nt),t--,r=a):(s.push(tt),n--,r=l)}return s.reverse(),s}(function(e,t,n,r,s,i){let o=i-s+1,a=n-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<o;n++)for(let i=1;i<a;i++)if(st(e[t+i-1],r[s+n-1]))l[n][i]=l[n-1][i-1];else{let e=l[n-1][i]+1,t=l[n][i-1]+1;l[n][i]=e<t?e:t}return l}(e,t,n,r,s,i));o=void 0;let d=[],u=t,p=s;for(let e=0;e<h.length;e++)switch(h[e]){case Qe:o&&(d.push(o),o=void 0),u++,p++;break;case et:o||(o=Ke(u,[],0)),o.addedCount++,u++,o.removed.push(r[p]),p++;break;case tt:o||(o=Ke(u,[],0)),o.addedCount++,u++;break;case nt:o||(o=Ke(u,[],0)),o.removed.push(r[p]),p++}return o&&d.push(o),d}function st(e,t){return e===t}function it(e){return"slot"===e.localName}let ot=class{static getFlattenedNodes(e){const t=R(e);return it(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>it(e)?R(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=(()=>{this._schedule()}),this.connect(),this._schedule()}connect(){it(this._target)?this._listenSlots([this._target]):R(this._target).children&&(this._listenSlots(R(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){it(this._target)?this._unlistenSlots([this._target]):R(this._target).children&&(this._unlistenSlots(R(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Q.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=(r=t,s=this._effectiveNodes,rt(r,0,r.length,s,0,s.length));var r,s;for(let t,r=0;r<n.length&&(t=n[r]);r++)for(let n,r=0;r<t.removed.length&&(n=t.removed[r]);r++)e.removedNodes.push(n);for(let r,s=0;s<n.length&&(r=n[s]);s++)for(let n=r.index;n<r.index+r.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];it(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];it(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};const at=Ye`
<style>
  /*

  Atom One Dark by Daniel Gamage
  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

  base:    #282c34
  mono-1:  #abb2bf
  mono-2:  #818896
  mono-3:  #5c6370
  hue-1:   #56b6c2
  hue-2:   #61aeee
  hue-3:   #c678dd
  hue-4:   #98c379
  hue-5:   #e06c75
  hue-5-2: #be5046
  hue-6:   #d19a66
  hue-6-2: #e6c07b

  */

  .hljs {
    display: block;
    overflow-x: auto;
    color: var(--code-sample-color, #abb2bf);
    background: var(--code-sample-background, #282c34);
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst,
  .hljs-tag {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  .hljs-params {
    color: #e6c07b;
  }
</style>`;n(73);customElements.define("code-sample",class extends Xe{static get template(){return Ye`
    ${this.constructor.theme||at}
    <style include="code-sample-theme" id="baseStyle">
    :host {
      display: block;
    }

    :host([hidden]),
    [hidden] {
      display: none;
    }

    pre {
      margin: 0;
      @apply --code-sample-pre;
    }

    pre, code {
      font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);
      font-size: var(--code-sample-font-size, 0.875rem);
    }

    .hljs {
      padding: 0 1.25rem;
      line-height: var(--code-sample-line-height, 1.3);
      @apply --code-sample-hljs;
    }

    .demo:not(:empty) {
      padding: var(--code-sample-demo-padding, 0 0 1.25rem);
      @apply --code-sample-demo-not-empty;
    }

    .demo {
      @apply --code-sample-demo;
    }

    #code-container {
      position: relative;
      @apply --code-sample-code-container;
    }

    #code-container:hover {
      @apply --code-sample-code-container-hover;
    }

    #code-container:hover > button {
      @apply --code-sample-code-container-hover-button;
    }

    button {
      background: var(--code-sample-copy-button-bg-color, #e0e0e0);
      border: none;
      cursor: pointer;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      text-transform: uppercase;
      @apply --code-sample-copy-clipboard-button;
    }
    </style>

    <div id="demo" class="demo"></div>
    <slot id="content"></slot>

    <div id="code-container">
      <button
        type="button"
        hidden="[[!copyClipboardButton]]"
        id="copyButton"
        title="Copy to clipboard"
        on-click="_copyToClipboard">Copy</button>
      <pre id="code"></pre>
    </div>
    `}static get properties(){return{copyClipboardButton:{type:Boolean,value:!1},theme:{type:String,observer:"_themeChanged"},render:{type:Boolean,value:!1},type:{type:String}}}_themeChanged(e){if(e&&this._themeCanBeChanged()){const t=this.shadowRoot.querySelector("style:not(#baseStyle)");this.shadowRoot.replaceChild(document.importNode(e.content,!0),t)}}_themeCanBeChanged(){if(window.ShadyCSS)console.error("<code-sample>:","Theme changing is not supported in Shady DOM.");else{if("TEMPLATE"===this.theme.tagName)return!0;console.error("<code-sample>:","theme must be a template")}}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.querySelector("template")?this._observer=new ot(this.$.content,()=>this._updateContent()):this.childNodes.length&&console.error("<code-sample>:","content must be provided inside a <template> tag")})}disconnectedCallback(){this._observer&&(this._observer.disconnect(),this._observer=null)}_updateContent(){this._code&&this._code.parentNode.removeChild(this._code),this._demo&&(this.$.demo.innerHTML="");const e=this._getCodeTemplate();this.render&&(this._demo=this.$.demo.appendChild(document.importNode(e.content,!0))),this._highlight(e.innerHTML)}_getCodeTemplate(){const e=ot.getFlattenedNodes(this.$.content);return[].filter.call(e,e=>e.nodeType===Node.ELEMENT_NODE)[0]}_highlight(e){this._code=document.createElement("code"),this.type&&this._code.classList.add(this.type),this._code.innerHTML=this._entitize(this._cleanIndentation(e)),this.$.code.appendChild(this._code),hljs.highlightBlock(this._code)}_cleanIndentation(e){const t=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(t,"g"),"\n")}_entitize(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}_copyToClipboard(e){const t=e.target,n=this._textAreaWithClonedContent();n.select();try{document.execCommand("copy",!1),t.textContent="Done"}catch(e){console.error(e),t.textContent="Error"}n.remove(),setTimeout(()=>{t.textContent="Copy"},1e3)}_textAreaWithClonedContent(){const e=document.createElement("textarea");return document.body.appendChild(e),e.value=this._cleanIndentation(this._getCodeTemplate().innerHTML),e}})},function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i});const r=new WeakMap,s=e=>(...t)=>{const n=e(...t);return r.set(n,!0),n},i=e=>"function"==typeof e&&r.has(e)},function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i});const r=new WeakMap,s=e=>(...t)=>{const n=e(...t);return r.set(n,!0),n},i=e=>"function"==typeof e&&r.has(e)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i(){const{breakpoints:e}=s.getTheme();return r.html`
    <slot></slot>

    <style>
      :host {
        display: block;
        max-width: ${e.desktopMinWidth};
        margin: 0 auto;
        padding: 30px 60px;
      }

      @media (max-width: ${e.tabletPortraitAndBelowMaxWidth}) {
        :host {
          padding: 1em;
        }
      }
    </style>
  `}t.ContentPage=i,r.register("gh-contentpage",i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);function s({docs:e,element:t},{useMemo:n}){const s=n(()=>e.find(e=>e.elementName===t),[e,t]);return console.log(s),s?r.html`
    <gh-h1>${s.functionName} <span class="no-wrap"><${s.elementName}></span></gh-h1>

    <p>${s.doc}</p>


    ${0===s.properties.length?r.nothing:r.html`
      <gh-h2>${s.interfaceName}</gh-h2>
      
      ${s.properties.map(e=>r.html`      
        <gh-row breakpoint="portrait">
          <gh-col><strong>${e.name}</strong>: ${e.type}</gh-col>
          <gh-col class="doc-col">${e.doc}</gh-col>
        </gh-row>
        <br />
      `)}
    `}

    <style>
      :host .doc-col {
        flex: none;
        width: 50%;
      }

      :host .no-wrap {
        white-space: nowrap;
      }
    </style>
  `:r.html`
      <gh-h1>Element ${t} not found</gh-h1>
    `}n(14),n(13),n(27),n(28),t.GhDocs=s,r.register("gh-docs",s,{docs:{type:r.Json},element:{type:String}})},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=n(11),s=n(6);class i{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=s.e.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+s.b+r[3]+s.f:e+s.g}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends i{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(r.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=n(12),s=n(7);class i{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=s.e.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+s.b+r[3]+s.f:e+s.g}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends i{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(r.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i({big:e=!1,href:t,outline:n=!1,padding:i,theme:o="default"},{useMemo:a}){const{palette:l}=s.getTheme(),c=a(()=>{switch(o){case"dark":return n?{fontHoverColor:"inherit",bgHoverColor:"rgba(0, 0, 0, 0.05)",fontColor:l.dark,borderColor:l.dark}:{bgColor:l.dark,fontColor:l.white,bgHoverColor:"rgba(1, 1, 1, 0.5)"};case"light":return n?{bgHoverColor:"rgba(0, 0, 0, 0.05)",borderColor:l.light}:{bgColor:l.light,fontColor:l.black,bgHoverColor:"rgba(0, 0, 0, 0.05)"};case"primary":return n?{bgColor:"transparent",bgHoverColor:"rgba(0, 0, 0, 0.05)",borderColor:l.primary,fontColor:l.primary}:{bgColor:l.primary,bgHoverColor:l.primaryHover,fontColor:l.white};default:return n?{bgColor:"transparent",bgHoverColor:"rgba(0, 0, 0, 0.05)",fontColor:l.primary,borderColor:l.light}:{bgColor:"transparent",bgHoverColor:"rgba(0, 0, 0, 0.05)",fontColor:l.primary}}},[n,o,l]),h=a(()=>c.bgHoverColor||c.fontHoverColor,[c.bgHoverColor,c.fontHoverColor]);return r.html`
    ${t?r.html`
      <a href="${t}"><slot></slot></a>
    `:r.html`
      <div><slot></slot></div>
    `}

    <style>
      :host, :host div, :host a {
        position: relative;
        color: ${c.fontColor||"inherit"};
        cursor: pointer;
      }

      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${c.bgColor?`background-color: ${c.bgColor};`:""}
      }

      :host div, :host a {
        flex: 1;
        user-select: none;
        padding: ${i||(e?c.borderColor?"calc(1em - 3px)":"1em":c.borderColor?"calc(0.75em - 3px)":"0.75em")};
        ${c.borderColor?"border-style: solid;":""}
        ${c.borderColor?`border-color: ${c.borderColor};border-width: 3px;`:""}
      }

      :host a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }

      ${h?`:host div:hover, :host div:active, :host a:hover, :host a:active {\n        ${c.bgHoverColor?`background-color: ${c.bgHoverColor};`:""}\n        ${c.fontHoverColor?`color: ${c.fontHoverColor};`:""}\n      }`:""}
    </style>
  `}t.Button=i,r.register("gh-button",i,{big:{type:Boolean},href:{type:String},outline:{type:Boolean},padding:{type:String},theme:{type:String}})},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(11),s=n(6);class i{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,i=0;const o=e=>{const r=document.createTreeWalker(e,133,null,!1);let a=r.nextNode();for(;n<t.length&&null!==a;){const e=t[n];if(Object(s.d)(e))if(i===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));n++}else i++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(e),r.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(12),s=n(7);class i{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,i=0;const o=e=>{const r=document.createTreeWalker(e,133,null,!1);let a=r.nextNode();for(;n<t.length&&null!==a;){const e=t[n];if(Object(s.d)(e))if(i===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));n++}else i++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(e),r.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);function s(){return r.html`
    <slot></slot>

    <style>
      :host {
        flex: 1;
        padding: 0 1em;
      }
    </style>
  `}t.Col=s,r.register("gh-col",s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i({breakpoint:e}){const{breakpoints:t}=s.getTheme();return r.html`
    <slot></slot>

    <style>
      :host {
        position: relative;
        display: flex;
        flex-direction: row;
      }

      ${"portrait"===e?`\n        @media (max-width: ${t.tabletPortraitAndBelowMaxWidth}) {\n          :host {\n            flex-direction: column;\n          }\n        }\n      `:""}
    </style>
  `}t.Row=i,r.register("gh-row",i,{breakpoint:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);n(24),n(82);const s=n(8);function i({src:e},{useCallback:t,useState:n}){const{palette:i}=s.getTheme(),[o,a]=n(!1),[l,c]=n(!1),h=t(()=>a(!0),[]),d=t(()=>c(!l),[l]);return r.html`
    ${o?r.html`
      <iframe src="${e}"></iframe>
      <gh-button class="fullscreen-button" big="true" @click=${d}>
        ${l?"Exit Fullscreen":"Fullscreen"}
      </gh-button>
    `:r.html`
      <gh-button big="true" theme="primary" outline="true" @click=${h}>
        Launch Code Editor &nbsp;<gh-icon-cogs size="1.25em"></gh-icon-cogs>
      </gh-button>
    `}

    <style>
      :host {
        position: relative;
        display: block;
        background-color: ${i.white};
      }

      :host iframe {
        min-width: 100%;
        min-height: 80vh;
      }

      :host .fullscreen-button {
        background-color: #F0F0F0;
        font-size: 0.75em;
        position: absolute;
        height: 25px;
        right: 5px;
        top: 9px;
        padding: 0;
      }

      .fullscreen-button:hover, .fullscreen-button:active {
        background-color: #DDDDDD;
      }

      ${l?"\n        :host {\n          z-index: 100;\n          position: fixed;\n          top: 5px;\n          left: 5px;\n          right: 10px;\n          bottom: 5px;\n        }\n        :host iframe {\n          min-width: 100%;\n          min-height: 100%;\n        }\n      ":""}
    </style>
  `}t.Stackblitz=i,r.register("gh-stackblitz",i,{src:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(74),n(75),n(76)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(78),n(81)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i(){const{palette:e}=s.getTheme();return r.html`
    <gh-card class="warning-container">
      <gh-icon-alert class="warning"></gh-icon-alert>
      <div>
        <slot></slot>
      </div>
    </gh-card>

    <style>
      :host .warning-container {
        display: flex;
      }

      :host .warning {
        color: ${e.primary};
        margin-right: 1em;
      }
    </style>
  `}n(39),t.WarningCard=i,r.register("gh-warningcard",i)},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(55),n(36),n(37),n(70)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);n(69),r.register("gh-appbar-items",function({theme:e},{useMemo:t,useState:n}){const{breakpoints:i,palette:o}=s.getTheme(),[a,l]=n(!1),c=t(()=>{switch(e){case"dark":return{bgColor:o.dark,fontColor:o.white};case"light":return{bgColor:o.light,fontColor:o.black};case"primary":default:return{bgColor:o.primary,fontColor:o.white}}},[e]);return r.html`
    <div class="items ${a?"items--open":""}">
      <slot></slot>
    </div>
    
    <div class="button" @click=${()=>l(!a)}>
      <gh-icon-bars></gh-icon-bars>
    </div>

    <style>
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        height: 100%;
      }

      ${a?".items {\n        z-index: 100;\n      }":""}

      @media (max-width: ${i.tabletPortraitAndBelowMaxWidth}) {
        .button {
          content: "";
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          cursor: pointer;
        }

        .button:active, .button:hover {
          background-color: rgba(0, 0, 0, 0.25);
        }

        .items {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background-color: ${c.bgColor};
          color: ${c.fontColor};
          width: 100%;
          max-width: ${i.phoneMaxWidth};
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .items--open {
          display: block;
        }
      }

      @media (min-width: ${i.tabletLandscapeMinWidth}) {
        .button {
          display: none;
        }

        .items {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex: 1;
          height: 100%;
        }
      }
    </style>
  `},{theme:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-appbar-title",function(){return r.html`
    <slot></slot>

    <style>
      :host {
        display: block;
        margin: 0 1em;
        font-size: 1.5em;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    </style>
  `})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i(){const{palette:e}=s.getTheme();return r.html`
    <slot></slot>

    <style>
      :host {
        display: block;
        padding: 0.75em;
        border: 1px solid ${e.light};
        border-radius: 3px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
      }
    </style>
  `}t.Card=i,r.register("gh-card",i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-icon-alert",function({size:e="1.75em"}){return r.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-exclamation-circle fa-w-16 fa-3x"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `},{size:{type:String}})},,function(e,t,n){"use strict";n.r(t),n.d(t,"cache",function(){return o});var r=n(25),s=n(0);const i=new WeakMap,o=Object(s.directive)(e=>t=>{if(!(t instanceof s.NodePart))throw new Error("cache can only be used in text bindings");let n=i.get(t);void 0===n&&(n=new WeakMap,i.set(t,n));const o=t.value;if(o instanceof r.a){if(e instanceof s.TemplateResult&&o.template===t.options.templateFactory(e))return void t.setValue(e);{let e=n.get(o.template);void 0===e&&(e={instance:o,nodes:document.createDocumentFragment()},n.set(o.template,e)),Object(s.reparentNodes)(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof s.TemplateResult){const r=t.options.templateFactory(e),s=n.get(r);void 0!==s&&(t.setValue(s.nodes),t.commit(),t.value=s.instance)}t.setValue(e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"classMap",function(){return o});var r=n(0);window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(e,t){return void 0===t||t?this.add(e):this.remove(e),void 0===t||t});const s=new WeakMap,i=new WeakMap,o=Object(r.directive)(e=>t=>{if(!(t instanceof r.AttributePart)||t instanceof r.PropertyPart||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");i.has(t)||(t.committer.element.className=t.committer.strings.join(" "),i.set(t,!0));const n=s.get(t);for(const r in n)r in e||t.committer.element.classList.remove(r);for(const r in e)n&&n[r]===e[r]||t.committer.element.classList.toggle(r,Boolean(e[r]));s.set(t,e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"guard",function(){return i});var r=n(0);const s=new WeakMap,i=Object(r.directive)((e,t)=>n=>{const r=s.get(n);if(Array.isArray(e)){if(Array.isArray(r)&&r.length===e.length&&e.every((e,t)=>e===r[t]))return}else if(r===e&&(void 0!==e||s.has(n)))return;n.setValue(t()),s.set(n,Array.isArray(e)?Array.from(e):e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"ifDefined",function(){return s});var r=n(0);const s=Object(r.directive)(e=>t=>{if(void 0===e&&t instanceof r.AttributePart){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"repeat",function(){return d});var r=n(0);const s=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(Object(r.createMarker)(),s);n.insertBefore(Object(r.createMarker)(),s);const o=new r.NodePart(e.options);return o.insertAfterNode(i),o},i=(e,t)=>(e.setValue(t),e.commit(),e),o=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&Object(r.reparentNodes)(s,t.startNode,o,i)},a=e=>{Object(r.removeNodes)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},l=(e,t,n)=>{const r=new Map;for(let s=t;s<=n;s++)r.set(e[s],s);return r},c=new WeakMap,h=new WeakMap,d=Object(r.directive)((e,t,n)=>{let d;return void 0===n?n=t:void 0!==t&&(d=t),t=>{if(!(t instanceof r.NodePart))throw new Error("repeat can only be used in text bindings");const u=c.get(t)||[],p=h.get(t)||[],f=[],m=[],g=[];let _,b,y=0;for(const t of e)g[y]=d?d(t,y):y,m[y]=n(t,y),y++;let v=0,w=u.length-1,P=0,x=m.length-1;for(;v<=w&&P<=x;)if(null===u[v])v++;else if(null===u[w])w--;else if(p[v]===g[P])f[P]=i(u[v],m[P]),v++,P++;else if(p[w]===g[x])f[x]=i(u[w],m[x]),w--,x--;else if(p[v]===g[x])f[x]=i(u[v],m[x]),o(t,u[v],f[x+1]),v++,x--;else if(p[w]===g[P])f[P]=i(u[w],m[P]),o(t,u[w],u[v]),w--,P++;else if(void 0===_&&(_=l(g,P,x),b=l(p,v,w)),_.has(p[v]))if(_.has(p[w])){const e=b.get(g[P]),n=void 0!==e?u[e]:null;if(null===n){const e=s(t,u[v]);i(e,m[P]),f[P]=e}else f[P]=i(n,m[P]),o(t,n,u[v]),u[e]=null;P++}else a(u[w]),w--;else a(u[v]),v++;for(;P<=x;){const e=s(t,f[x+1]);i(e,m[P]),f[P++]=e}for(;v<=w;){const e=u[v++];null!==e&&a(e)}c.set(t,f),h.set(t,g)}})},function(e,t,n){"use strict";n.r(t),n.d(t,"styleMap",function(){return o});var r=n(0);const s=new WeakMap,i=new WeakMap,o=Object(r.directive)(e=>t=>{if(!(t instanceof r.AttributePart)||t instanceof r.PropertyPart||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");i.has(t)||(t.committer.element.style.cssText=t.committer.strings.join(" "),i.set(t,!0));const n=t.committer.element.style,o=s.get(t);for(const t in o)t in e||(-1===t.indexOf("-")?n[t]=null:n.removeProperty(t));for(const t in e)-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t]);s.set(t,e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"unsafeHTML",function(){return o});var r=n(3),s=n(0);const i=new WeakMap,o=Object(s.directive)(e=>t=>{if(!(t instanceof s.NodePart))throw new Error("unsafeHTML can only be used in text bindings");const n=i.get(t);if(void 0!==n&&Object(r.h)(e)&&e===n.value&&t.value===n.fragment)return;const o=document.createElement("template");o.innerHTML=e;const a=document.importNode(o.content,!0);t.setValue(a),i.set(t,{value:e,fragment:a})})},function(e,t,n){"use strict";n.r(t),n.d(t,"until",function(){return o});var r=n(3),s=n(0);const i=new WeakMap,o=Object(s.directive)((...e)=>t=>{let n=i.get(t);void 0===n&&(n={values:[]},i.set(t,n));const s=n.values;n.values=e;for(let i=0;i<e.length&&!(void 0!==n.lastRenderedIndex&&i>n.lastRenderedIndex);i++){const o=e[i];if(Object(r.h)(o)||"function"!=typeof o.then){t.setValue(o),n.lastRenderedIndex=i;break}void 0!==n.lastRenderedIndex&&"function"==typeof o.then&&o===s[i]||(n.lastRenderedIndex=void 0,Promise.resolve(o).then(e=>{const r=n.values.indexOf(o);r>-1&&(void 0===n.lastRenderedIndex||r<n.lastRenderedIndex)&&(n.lastRenderedIndex=r,t.setValue(e),t.commit())}))}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(0),i=r(n(50)),o=r(n(51)),a=r(n(52)),l=n(53);t.Json=(e=>{try{return JSON.parse(e)}catch(e){return}}),t.register=((e,t,n={},r=HTMLElement)=>{class c extends r{constructor(...e){super(...e),this.beforeRender=(()=>{this._effectsIndex=0,this._statesIndex=0,this._beforeRender.forEach(e=>e()),this._beforeRender=[]}),this.render=(()=>{const e=t(this._properties,{useCallback:e=>e,useEffect:this.useEffect,useMemo:this.useMemo,useState:this.useState});s.render(e,this.shadowRoot);const n=this.shadowRoot.querySelector("style");if(n){const e=i.default(n.innerText)(this);n.cssText=e||""}}),this.afterRender=(()=>{this._afterRender.forEach(e=>e()),this._afterRender=[]}),this.useEffect=((e,t=[])=>{const n=this._effectsIndex++,r=this._effects[n]||{deps:[]};(n>=this._effects.length||this.diffDeps(this._effects[n].deps,t))&&this._afterRender.push(()=>{r.cleanup&&r.cleanup();const s=e();this._effects[n]={deps:t,cleanup:s}})}),this.useState=(e=>{const t=this._statesIndex++;return t>=this._states.length&&this._states.push(e),[this._states[t],e=>{this._states[t]!==e&&(this._beforeRender.push(()=>{this._states[t]=e}),this.invalidate())}]}),this.useMemo=((e,t=[])=>{const n=this._memosIndex++,r=n>=this._memos.length;if(r||this.diffDeps(this._memos[n].deps,t)){const s=e();r?this._memos.push({deps:t,value:s}):this._memos[n]={deps:t,value:s}}return this._memos[n].value}),this.invalidate=((e=!0)=>{if(!0===this._needsUpdate)return;this._needsUpdate=!0;const t=()=>{this.beforeRender(),this._needsUpdate&&(this.render(),this._needsUpdate=!1,this.afterRender()),this._needsUpdate&&l.schedule(t)};e?l.schedule(t):t()}),this.diffDeps=((e,t)=>{if(e.length!==t.length)return!0;for(let n=0;n<t.length;n++)if(e[n]!==t[n])return!0;return!1}),this._afterRender=[],this._beforeRender=[],this._effects=[],this._effectsIndex=0,this._states=[],this._statesIndex=0,this._memos=[],this._memosIndex=0,this._properties={},this._needsUpdate=!1,this.attachShadow({mode:"open"})}static get observedAttributes(){return n&&Object.getOwnPropertyNames(n).map(e=>n[e].attributeName||o.default(e))||[]}connectedCallback(){this.invalidate(!1)}attributeChangedCallback(e,t,r){if(t===r)return;const s=Object.getOwnPropertyNames(n).find(t=>n[t].attributeName===e)||a.default(e);this._beforeRender.push(()=>{this._properties[s]=(e=>{const t=n[s];return t?t.type===Boolean?"true"===e:t.type(e):e})(r)}),this.invalidate()}disconnectedCallback(){this._effects.forEach(e=>{e.cleanup&&e.cleanup()})}}(n?Object.getOwnPropertyNames(n):[]).forEach(e=>{Object.defineProperty(c.prototype,e,{get(){return this._properties[e]},set(t){this._properties[e]=t,this.invalidate()}})});try{customElements.define(e,c)}catch(t){console.error(`Failed to register element: ${e}`)}})},function(e,t){var n={},r=new WeakMap,s="undefined"!=typeof customElements&&customElements.define.toString().indexOf("native code")>-1,i=/^\s*\.([a-zA-Z0-9]+)/g,o=/:host([\s\{])/g,a=/:host-context\(([^)]+)\)/g,l=/:host\(([^)]+)\)/g,c=0,h=0;function d(e,t){var n=document.createElement("style");t&&n.setAttribute("scope",t),n.textContent=e,document.head.appendChild(n)}e.exports=function(e){return function(t){if(s)return e;if(t){var u=r.get(t);u||r.set(t,u=++c),n[u]||(n[u]={}),n[u][e]?t.setAttribute("__scope-"+n[u][e],""):(n[u][e]=++h,t.setAttribute("__scope-"+n[u][e],""),d(function(e,t){var r="[__scope-"+n[u][t]+"]",s=t;return(s=(s=(s=s.replace(i,r+" .$1")).replace(o,r+"$1")).replace(a,"$1 "+r)).replace(l,r+"$1")}(0,e),h))}else d(e)}}},function(e,t,n){function r(e){if(null==e)return e;for(var t="",n=0,r=void 0,s=String(e),i=0;i<s.length;i++){var o=s[i],a=o.toLowerCase();if(o!==a){var l=t[t.length-1];n>1&&t.length>1&&(t=t.slice(0,t.length-2)+l),t.length&&"-"!==l&&" "!==l&&"\t"!==l&&"\r"!==l&&"\n"!==l&&(t+="-"),t+=a,n++,r=!1}else"0"===o||"1"===o||"2"===o||"3"===o||"4"===o||"5"===o||"6"===o||"7"===o||"8"===o||"9"===o?(!1===r&&"-"!==t[t.length-1]&&(t+="-"),t+=o,n=0,r=!0):r&&"-"!==t[t.length-1]?(t+="-"+o,n=0,r=!1):(t+=o,n=0,r=!1)}return n>1&&t.length>1&&(t=t.slice(0,t.length-2)+t[t.length-1]),t}e.exports=r,"undefined"!=typeof window&&(window.camelToKebabCase=r)},function(e,t,n){"use strict";const r=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);return 0===(e=Array.isArray(e)?e.map(e=>e.trim()).filter(e=>e.length).join("-"):e.trim()).length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let s=0;s<e.length;s++){const i=e[s];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,s)+"-"+e.slice(s),t=!1,r=n,n=!0,s++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,s-1)+"-"+e.slice(s-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),(e=>t.pascalCase?e.charAt(0).toUpperCase()+e.slice(1):e)(e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(e,t)=>t.toUpperCase()).replace(/\d+(\w|$)/g,e=>e.toUpperCase())))};e.exports=r,e.exports.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=[];t.schedule=function(e){r.push(e);const t=()=>{for(;r.length>0;)r.shift()();r.length>0&&window.requestAnimationFrame(t)};window.requestAnimationFrame(t)}},function(e,t,n){e.exports=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,r){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===r?"#":r,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function r(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function s(e){return e.replace(/\/$/,"").split("/").length}function i(e,t){return s(t)-s(e)}function o(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var s=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,r,s){return t.push(s),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(r(t.route)),i=s.regexp,o=s.paramNames,a=e.replace(/^\/+/,"/").match(i),l=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,r){return null===e&&(e={}),e[t[r]]=decodeURIComponent(n),e},null):null}(a,o);return!!a&&{match:a,route:t,params:l}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),s=r(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:s}function l(e,n,r){var s,i=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===r&&(r="#"),t()&&!n?i(e).split(r)[0]:(s=e.split(r)).length>1?i(s[1]):i(s[0])}function c(t,n,r){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(r))},r);if(n.after)return t(),void(n.after&&n.after(r))}t()}return n.prototype={helpers:{match:o,root:a,clean:r,getOnlyURL:l},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];if("function"==typeof r[0])this._defaultHandler={handler:r[0],hooks:r[1]};else if(r.length>=2)if("/"===r[0]){var o=r[1];"object"===e(r[1])&&(o=r[1].uses),this._defaultHandler={handler:o,hooks:r[2]}}else this._add(r[0],r[1],r[2]);else"object"===e(r[0])&&Object.keys(r[0]).sort(i).forEach(function(e){t.on(e,r[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,r,s=this,i=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(i=i.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),h=l(i,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&h===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(r=o(h,this._routes))?(this._callLeave(),this._lastRouteResolved={url:h,query:a,hooks:r.route.hooks,params:r.params,name:r.route.name},n=r.route.handler,c(function(){c(function(){r.route.route instanceof RegExp?n.apply(void 0,r.match.slice(1,r.match.length)):n(r.params,a)},r.route.hooks,r.params,s._genericHooks)},this._genericHooks,r.params),r):this._defaultHandler&&(""===h||"/"===h||h===this._hash||function(e,n,r){if(t()&&!n)return!1;if(!e.match(r))return!1;var s=e.split(r);return s.length<2||""===s[1]}(h,this._useHash,this._hash))?(c(function(){c(function(){s._callLeave(),s._lastRouteResolved={url:h,query:a,hooks:s._defaultHandler.hooks},s._defaultHandler.handler(a)},s._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&c(function(){c(function(){s._callLeave(),s._lastRouteResolved={url:h,query:a,hooks:s._notFoundHandler.hooks},s._notFoundHandler.handler(a)},s._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var r=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(r.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,r){var s;if(r.name===e)for(s in n=r.route,t)n=n.toString().replace(":"+s,t[s]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:r||n.hooks}:{route:t,handler:n,hooks:r}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,r=void 0;(r=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(r,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:r(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i({href:e}){const{breakpoints:t}=s.getTheme();return r.html`
    ${e?r.html`
      <a href=${e}><slot></slot></a>
    `:r.html`
      <div><slot></slot></div>
    `}

    <style>
      :host {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
      }

      :host div, :host a {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      :host div, :host a {
        padding: 0 1em;
        color: inherit;
        text-decoration: none;
      }

      :host a:active, :host a:hover {
        background-color: rgba(0,0,0,0.2);
      }

      @media (max-width: ${t.tabletPortraitAndBelowMaxWidth}) {
        :host div, :host a {
          flex: 1;
          height: 40px;
          justify-content: flex-end;
        }
      }
    </style>
  `}t.AppBarItem=i,r.register("gh-appbar-item",i,{href:{type:String}})},function(e,t,n){"use strict";n.r(t),n.d(t,"cache",function(){return o});var r=n(26),s=n(1);const i=new WeakMap,o=Object(s.directive)(e=>t=>{if(!(t instanceof s.NodePart))throw new Error("cache can only be used in text bindings");let n=i.get(t);void 0===n&&(n=new WeakMap,i.set(t,n));const o=t.value;if(o instanceof r.a){if(e instanceof s.TemplateResult&&o.template===t.options.templateFactory(e))return void t.setValue(e);{let e=n.get(o.template);void 0===e&&(e={instance:o,nodes:document.createDocumentFragment()},n.set(o.template,e)),Object(s.reparentNodes)(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof s.TemplateResult){const r=t.options.templateFactory(e),s=n.get(r);void 0!==s&&(t.setValue(s.nodes),t.commit(),t.value=s.instance)}t.setValue(e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"classMap",function(){return o});var r=n(1);window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(e,t){return void 0===t||t?this.add(e):this.remove(e),void 0===t||t});const s=new WeakMap,i=new WeakMap,o=Object(r.directive)(e=>t=>{if(!(t instanceof r.AttributePart)||t instanceof r.PropertyPart||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");i.has(t)||(t.committer.element.className=t.committer.strings.join(" "),i.set(t,!0));const n=s.get(t);for(const r in n)r in e||t.committer.element.classList.remove(r);for(const r in e)n&&n[r]===e[r]||t.committer.element.classList.toggle(r,Boolean(e[r]));s.set(t,e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"guard",function(){return i});var r=n(1);const s=new WeakMap,i=Object(r.directive)((e,t)=>n=>{const r=s.get(n);if(Array.isArray(e)){if(Array.isArray(r)&&r.length===e.length&&e.every((e,t)=>e===r[t]))return}else if(r===e&&(void 0!==e||s.has(n)))return;n.setValue(t()),s.set(n,Array.isArray(e)?Array.from(e):e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"ifDefined",function(){return s});var r=n(1);const s=Object(r.directive)(e=>t=>{if(void 0===e&&t instanceof r.AttributePart){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"repeat",function(){return d});var r=n(1);const s=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(Object(r.createMarker)(),s);n.insertBefore(Object(r.createMarker)(),s);const o=new r.NodePart(e.options);return o.insertAfterNode(i),o},i=(e,t)=>(e.setValue(t),e.commit(),e),o=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&Object(r.reparentNodes)(s,t.startNode,o,i)},a=e=>{Object(r.removeNodes)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},l=(e,t,n)=>{const r=new Map;for(let s=t;s<=n;s++)r.set(e[s],s);return r},c=new WeakMap,h=new WeakMap,d=Object(r.directive)((e,t,n)=>{let d;return void 0===n?n=t:void 0!==t&&(d=t),t=>{if(!(t instanceof r.NodePart))throw new Error("repeat can only be used in text bindings");const u=c.get(t)||[],p=h.get(t)||[],f=[],m=[],g=[];let _,b,y=0;for(const t of e)g[y]=d?d(t,y):y,m[y]=n(t,y),y++;let v=0,w=u.length-1,P=0,x=m.length-1;for(;v<=w&&P<=x;)if(null===u[v])v++;else if(null===u[w])w--;else if(p[v]===g[P])f[P]=i(u[v],m[P]),v++,P++;else if(p[w]===g[x])f[x]=i(u[w],m[x]),w--,x--;else if(p[v]===g[x])f[x]=i(u[v],m[x]),o(t,u[v],f[x+1]),v++,x--;else if(p[w]===g[P])f[P]=i(u[w],m[P]),o(t,u[w],u[v]),w--,P++;else if(void 0===_&&(_=l(g,P,x),b=l(p,v,w)),_.has(p[v]))if(_.has(p[w])){const e=b.get(g[P]),n=void 0!==e?u[e]:null;if(null===n){const e=s(t,u[v]);i(e,m[P]),f[P]=e}else f[P]=i(n,m[P]),o(t,n,u[v]),u[e]=null;P++}else a(u[w]),w--;else a(u[v]),v++;for(;P<=x;){const e=s(t,f[x+1]);i(e,m[P]),f[P++]=e}for(;v<=w;){const e=u[v++];null!==e&&a(e)}c.set(t,f),h.set(t,g)}})},function(e,t,n){"use strict";n.r(t),n.d(t,"styleMap",function(){return o});var r=n(1);const s=new WeakMap,i=new WeakMap,o=Object(r.directive)(e=>t=>{if(!(t instanceof r.AttributePart)||t instanceof r.PropertyPart||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");i.has(t)||(t.committer.element.style.cssText=t.committer.strings.join(" "),i.set(t,!0));const n=t.committer.element.style,o=s.get(t);for(const t in o)t in e||(-1===t.indexOf("-")?n[t]=null:n.removeProperty(t));for(const t in e)-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t]);s.set(t,e)})},function(e,t,n){"use strict";n.r(t),n.d(t,"unsafeHTML",function(){return o});var r=n(4),s=n(1);const i=new WeakMap,o=Object(s.directive)(e=>t=>{if(!(t instanceof s.NodePart))throw new Error("unsafeHTML can only be used in text bindings");const n=i.get(t);if(void 0!==n&&Object(r.h)(e)&&e===n.value&&t.value===n.fragment)return;const o=document.createElement("template");o.innerHTML=e;const a=document.importNode(o.content,!0);t.setValue(a),i.set(t,{value:e,fragment:a})})},function(e,t,n){"use strict";n.r(t),n.d(t,"until",function(){return o});var r=n(4),s=n(1);const i=new WeakMap,o=Object(s.directive)((...e)=>t=>{let n=i.get(t);void 0===n&&(n={values:[]},i.set(t,n));const s=n.values;n.values=e;for(let i=0;i<e.length&&!(void 0!==n.lastRenderedIndex&&i>n.lastRenderedIndex);i++){const o=e[i];if(Object(r.h)(o)||"function"!=typeof o.then){t.setValue(o),n.lastRenderedIndex=i;break}void 0!==n.lastRenderedIndex&&"function"==typeof o.then&&o===s[i]||(n.lastRenderedIndex=void 0,Promise.resolve(o).then(e=>{const r=n.values.indexOf(o);r>-1&&(void 0===n.lastRenderedIndex||r<n.lastRenderedIndex)&&(n.lastRenderedIndex=r,t.setValue(e),t.commit())}))}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(1),i=r(n(65)),o=r(n(66)),a=r(n(67)),l=n(68);t.Json=(e=>{try{return JSON.parse(e)}catch(e){return}}),t.register=((e,t,n={},r=HTMLElement)=>{class c extends r{constructor(...e){super(...e),this.beforeRender=(()=>{this._effectsIndex=0,this._statesIndex=0,this._beforeRender.forEach(e=>e()),this._beforeRender=[]}),this.render=(()=>{const e=t(this._properties,{useCallback:e=>e,useEffect:this.useEffect,useMemo:this.useMemo,useState:this.useState});s.render(e,this.shadowRoot);const n=this.shadowRoot.querySelector("style");if(n){const e=i.default(n.innerText)(this);n.cssText=e||""}}),this.afterRender=(()=>{this._afterRender.forEach(e=>e()),this._afterRender=[]}),this.useEffect=((e,t=[])=>{const n=this._effectsIndex++,r=this._effects[n]||{deps:[]};(n>=this._effects.length||this.diffDeps(this._effects[n].deps,t))&&this._afterRender.push(()=>{r.cleanup&&r.cleanup();const s=e();this._effects[n]={deps:t,cleanup:s}})}),this.useState=(e=>{const t=this._statesIndex++;return t>=this._states.length&&this._states.push(e),[this._states[t],e=>{this._states[t]!==e&&(this._beforeRender.push(()=>{this._states[t]=e}),this.invalidate())}]}),this.useMemo=((e,t=[])=>{const n=this._memosIndex++,r=n>=this._memos.length;if(r||this.diffDeps(this._memos[n].deps,t)){const s=e();r?this._memos.push({deps:t,value:s}):this._memos[n]={deps:t,value:s}}return this._memos[n].value}),this.invalidate=((e=!0)=>{if(!0===this._needsUpdate)return;this._needsUpdate=!0;const t=()=>{this.beforeRender(),this._needsUpdate&&(this.render(),this._needsUpdate=!1,this.afterRender()),this._needsUpdate&&l.schedule(t)};e?l.schedule(t):t()}),this.diffDeps=((e,t)=>{if(e.length!==t.length)return!0;for(let n=0;n<t.length;n++)if(e[n]!==t[n])return!0;return!1}),this._afterRender=[],this._beforeRender=[],this._effects=[],this._effectsIndex=0,this._states=[],this._statesIndex=0,this._memos=[],this._memosIndex=0,this._properties={},this._needsUpdate=!1,this.attachShadow({mode:"open"})}static get observedAttributes(){return n&&Object.getOwnPropertyNames(n).map(e=>n[e].attributeName||o.default(e))||[]}connectedCallback(){this.invalidate(!1)}attributeChangedCallback(e,t,r){if(t===r)return;const s=Object.getOwnPropertyNames(n).find(t=>n[t].attributeName===e)||a.default(e);this._beforeRender.push(()=>{this._properties[s]=(e=>{const t=n[s];return t?t.type===Boolean?"true"===e:t.type(e):e})(r)}),this.invalidate()}disconnectedCallback(){this._effects.forEach(e=>{e.cleanup&&e.cleanup()})}}(n?Object.getOwnPropertyNames(n):[]).forEach(e=>{Object.defineProperty(c.prototype,e,{get(){return this._properties[e]},set(t){this._properties[e]=t,this.invalidate()}})});try{customElements.define(e,c)}catch(t){console.error(`Failed to register element: ${e}`)}})},function(e,t){var n={},r=new WeakMap,s="undefined"!=typeof customElements&&customElements.define.toString().indexOf("native code")>-1,i=/^\s*\.([a-zA-Z0-9]+)/g,o=/:host([\s\{])/g,a=/:host-context\(([^)]+)\)/g,l=/:host\(([^)]+)\)/g,c=0,h=0;function d(e,t){var n=document.createElement("style");t&&n.setAttribute("scope",t),n.textContent=e,document.head.appendChild(n)}e.exports=function(e){return function(t){if(s)return e;if(t){var u=r.get(t);u||r.set(t,u=++c),n[u]||(n[u]={}),n[u][e]?t.setAttribute("__scope-"+n[u][e],""):(n[u][e]=++h,t.setAttribute("__scope-"+n[u][e],""),d(function(e,t){var r="[__scope-"+n[u][t]+"]",s=t;return(s=(s=(s=s.replace(i,r+" .$1")).replace(o,r+"$1")).replace(a,"$1 "+r)).replace(l,r+"$1")}(0,e),h))}else d(e)}}},function(e,t,n){function r(e){if(null==e)return e;for(var t="",n=0,r=void 0,s=String(e),i=0;i<s.length;i++){var o=s[i],a=o.toLowerCase();if(o!==a){var l=t[t.length-1];n>1&&t.length>1&&(t=t.slice(0,t.length-2)+l),t.length&&"-"!==l&&" "!==l&&"\t"!==l&&"\r"!==l&&"\n"!==l&&(t+="-"),t+=a,n++,r=!1}else"0"===o||"1"===o||"2"===o||"3"===o||"4"===o||"5"===o||"6"===o||"7"===o||"8"===o||"9"===o?(!1===r&&"-"!==t[t.length-1]&&(t+="-"),t+=o,n=0,r=!0):r&&"-"!==t[t.length-1]?(t+="-"+o,n=0,r=!1):(t+=o,n=0,r=!1)}return n>1&&t.length>1&&(t=t.slice(0,t.length-2)+t[t.length-1]),t}e.exports=r,"undefined"!=typeof window&&(window.camelToKebabCase=r)},function(e,t,n){"use strict";const r=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);return 0===(e=Array.isArray(e)?e.map(e=>e.trim()).filter(e=>e.length).join("-"):e.trim()).length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let s=0;s<e.length;s++){const i=e[s];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,s)+"-"+e.slice(s),t=!1,r=n,n=!0,s++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,s-1)+"-"+e.slice(s-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),(e=>t.pascalCase?e.charAt(0).toUpperCase()+e.slice(1):e)(e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(e,t)=>t.toUpperCase()).replace(/\d+(\w|$)/g,e=>e.toUpperCase())))};e.exports=r,e.exports.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=[];t.schedule=function(e){r.push(e);const t=()=>{for(;r.length>0;)r.shift()();r.length>0&&window.requestAnimationFrame(t)};window.requestAnimationFrame(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-icon-bars",function({size:e="1.75em"}){return r.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bars fa-w-14 fa-2x"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `},{size:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);function i({label:e="",labelHref:t,hasItems:n,theme:i="default"},{useMemo:o}){const{palette:a}=s.getTheme(),l=o(()=>{switch(i){case"dark":return{bgColor:a.dark,fontColor:a.white};case"primary":return{bgColor:a.primary,fontColor:a.white};case"light":return{bgColor:a.light,fontColor:"inherit"};default:return{bgColor:a.light,fontColor:a.primary}}},[i,a]);return r.html`
    <slot name="label">
      ${t?r.html`
        <gh-appbar-title><a href=${t}>${e}</a></gh-appbar-title>
      `:r.html`
        <gh-appbar-title>${e}</gh-appbar-title>
      `}
    </slot>

    ${n&&r.html`
      <gh-appbar-items theme=${i}>
        <slot></slot>
      </gh-appbar-items>
    `}

    <style>
      :host {
        position: relative;
        display: flex;
        align-items: center;

        background-color: ${l.bgColor};
        color: ${l.fontColor};
        height: 64px;
        min-height: 64px;
        max-height: 64px;
      }

      :host a {
        color: ${l.fontColor};
        text-decoration: none;
      }
    </style>
  `}n(36),n(37),t.AppBar=i,r.register("gh-appbar",i,{hasItems:{type:Boolean},label:{type:String},labelHref:{type:String},theme:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-icon-github",function({size:e="1.75em"}){return r.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 fa-3x"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `},{size:{type:String}})},,function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;!function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0===n.index}function s(e){return v.test(e)}function i(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach(function(e){for(t in e)n[t]=e[t]}),n}function o(e){var t=[];return function e(r,s){for(var i=r.firstChild;i;i=i.nextSibling)3===i.nodeType?s+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:s,node:i}),s=e(i,s),n(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:s,node:i}));return s}(e,0),t}function a(e,r,s){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){h+="<"+n(e)+g.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function a(e){h+="</"+n(e)+">"}function l(e){("start"===e.event?o:a)(e.node)}for(var c=0,h="",d=[];e.length||r.length;){var u=i();if(h+=t(s.substring(c,u[0].offset)),c=u[0].offset,u===e){d.reverse().forEach(a);do{l(u.splice(0,1)[0]),u=i()}while(u===e&&u.length&&u[0].offset===c);d.reverse().forEach(o)}else"start"===u[0].event?d.push(u[0].node):d.pop(),l(u.splice(0,1)[0])}return h+t(s.substr(c))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(t){return i(e,{v:null},t)})),e.cached_variants||e.eW&&[i(e)]||[e]}function c(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}!function r(s,i){if(!s.compiled){if(s.compiled=!0,s.k=s.k||s.bK,s.k){var o={},a=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");o[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof s.k?a("keyword",s.k):_(s.k).forEach(function(e){a(e,s.k[e])}),s.k=o}s.lR=n(s.l||/\w+/,!0),i&&(s.bK&&(s.b="\\b("+s.bK.split(" ").join("|")+")\\b"),s.b||(s.b=/\B|\b/),s.bR=n(s.b),s.e||s.eW||(s.e=/\B|\b/),s.e&&(s.eR=n(s.e)),s.tE=t(s.e)||"",s.eW&&i.tE&&(s.tE+=(s.e?"|":"")+i.tE)),s.i&&(s.iR=n(s.i)),null==s.r&&(s.r=1),s.c||(s.c=[]),s.c=Array.prototype.concat.apply([],s.c.map(function(e){return l("self"===e?s:e)})),s.c.forEach(function(e){r(e,s)}),s.starts&&r(s.starts,i);var c=s.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([s.tE,s.i]).map(t).filter(Boolean);s.t=c.length?n(c.join("|"),!0):{exec:function(){return null}}}}(e)}function h(e,n,s,i){function o(e,t){var n,s;for(n=0,s=t.c.length;s>n;n++)if(r(t.c[n].bR,e))return t.c[n]}function a(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?a(e.parent,t):void 0}function l(e,t){return!s&&r(t.iR,e)}function u(e,t){var n=y.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var s=r?"":N.classPrefix,i='<span class="'+s,o=n?"":x;return(i+=e+'">')+t+o}function f(){C+=null!=w.sL?function(){var e="string"==typeof w.sL;if(e&&!b[w.sL])return t(E);var n=e?h(w.sL,E,!0,P[w.sL]):d(E,w.sL.length?w.sL:void 0);return w.r>0&&(A+=n.r),e&&(P[w.sL]=n.top),p(n.language,n.value,!1,!0)}():function(){var e,n,r,s;if(!w.k)return t(E);for(s="",n=0,w.lR.lastIndex=0,r=w.lR.exec(E);r;)s+=t(E.substring(n,r.index)),(e=u(w,r))?(A+=e[1],s+=p(e[0],t(r[0]))):s+=t(r[0]),n=w.lR.lastIndex,r=w.lR.exec(E);return s+t(E.substr(n))}(),E=""}function g(e){C+=e.cN?p(e.cN,"",!0):"",w=Object.create(e,{parent:{value:w}})}function _(e,t){if(E+=e,null==t)return f(),0;var n=o(t,w);if(n)return n.skip?E+=t:(n.eB&&(E+=t),f(),n.rB||n.eB||(E=t)),g(n),n.rB?0:t.length;var r=a(w,t);if(r){var s=w;s.skip?E+=t:(s.rE||s.eE||(E+=t),f(),s.eE&&(E=t));do{w.cN&&(C+=x),w.skip||(A+=w.r),w=w.parent}while(w!==r.parent);return r.starts&&g(r.starts),s.rE?0:t.length}if(l(t,w))throw new Error('Illegal lexeme "'+t+'" for mode "'+(w.cN||"<unnamed>")+'"');return E+=t,t.length||1}var y=m(e);if(!y)throw new Error('Unknown language: "'+e+'"');c(y);var v,w=i||y,P={},C="";for(v=w;v!==y;v=v.parent)v.cN&&(C=p(v.cN,"",!0)+C);var E="",A=0;try{for(var O,T,k=0;w.t.lastIndex=k,O=w.t.exec(n);)T=_(n.substring(k,O.index),O[0]),k=O.index+T;for(_(n.substr(k)),v=w;v.parent;v=v.parent)v.cN&&(C+=x);return{r:A,value:C,language:e,top:w}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:t(n)};throw e}}function d(e,n){n=n||N.languages||_(b);var r={r:0,value:t(e)},s=r;return n.filter(m).forEach(function(t){var n=h(t,e,!1);n.language=t,n.r>s.r&&(s=n),n.r>r.r&&(s=r,r=n)}),s.language&&(r.second_best=s),r}function u(e){return N.tabReplace||N.useBR?e.replace(P,function(e,t){return N.useBR&&"\n"===e?"<br>":N.tabReplace?t.replace(/\t/g,N.tabReplace):""}):e}function p(e){var t,n,r,i,l,c=function(e){var t,n,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",n=w.exec(o))return m(n[1])?n[1]:"no-highlight";for(o=o.split(/\s+/),t=0,r=o.length;r>t;t++)if(s(i=o[t])||m(i))return i}(e);s(c)||(N.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,l=t.textContent,r=c?h(c,l,!0):d(l),(n=o(t)).length&&((i=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=a(n,o(i),l)),r.value=u(r.value),e.innerHTML=r.value,e.className=function(e,t,n){var r=t?y[t]:n,s=[e.trim()];return e.match(/\bhljs\b/)||s.push("hljs"),-1===e.indexOf(r)&&s.push(r),s.join(" ").trim()}(e.className,c,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function f(){if(!f.called){f.called=!0;var e=document.querySelectorAll("pre code");g.forEach.call(e,p)}}function m(e){return e=(e||"").toLowerCase(),b[e]||b[y[e]]}var g=[],_=Object.keys,b={},y={},v=/^(no-?highlight|plain|text)$/i,w=/\blang(?:uage)?-([\w-]+)\b/i,P=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,x="</span>",N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};e.highlight=h,e.highlightAuto=d,e.fixMarkup=u,e.highlightBlock=p,e.configure=function(e){N=i(N,e)},e.initHighlighting=f,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",f,!1),addEventListener("load",f,!1)},e.registerLanguage=function(t,n){var r=b[t]=n(e);r.aliases&&r.aliases.forEach(function(e){y[e]=t})},e.listLanguages=function(){return _(b)},e.getLanguage=m,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(t,n,r){var s=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return s.c.push(e.PWM),s.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),s},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0}}(t)}(),hljs.registerLanguage("css",function(e){var t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},n={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,n,{cN:"string",b:/'/,e:/'/},t]}}),hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),hljs.registerLanguage("xml",function(e){var t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:t},s={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},i={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,s,i),{c:n,k:t,i:"\\S"}}),hljs.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},s={cN:"subst",b:"\\$\\{",e:"\\}",k:n,c:[]},i={cN:"string",b:"`",e:"`",c:[e.BE,s]};s.c=[e.ASM,e.QSM,i,r,e.RM];var o=s.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:n,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,i,e.CLCM,e.CBCM,r,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:n,c:o}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:o}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}}),hljs.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",r={cN:"subst",b:/#\{/,e:/}/,k:t},s=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,r]},{b:/"/,e:/"/,c:[e.BE,r]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[r,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+n},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];r.c=s;var i=e.inherit(e.TM,{b:n}),o="(\\(.*\\))?\\s*\\B[-=]>",a={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(s)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:s.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+o,e:"[-=]>",rB:!0,c:[i,a]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:o,e:"[-=]>",rB:!0,c:[a]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{b:n+":",e:":",rB:!0,rE:!0,r:0}])}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);n(20);const s=n(8);function i({theme:e},{useMemo:t}){const{palette:n}=s.getTheme(),i=t(()=>{switch(e){case"dark":return{bgColor:n.dark,fontColor:n.white};case"light":return{bgColor:n.light,fontColor:n.primary};case"primary":default:return{bgColor:n.primary,fontColor:n.white}}},[e,n]);return r.html`
    <gh-contentpage>
      <slot></slot>
    </gh-contentpage>

    <style>
      :host {
        display: block;
        background-color: ${i.bgColor};
        padding-top: 21vh;
        padding-bottom: 24vh;
      }

      :host * {
        color: ${i.fontColor};
      }

      :host h1 {
        font-size: 50px;
        margin: 0 0 0.25em 0;
      }
      
      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `}t.Hero=i,r.register("gh-hero",i,{theme:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);function s(){return r.html`
    <h1><slot></slot></h1>

    <style>
      :host h1 {
        font-size: 50px;
        margin: 0 0 0.25em 0;
      }

      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `}t.HeroH1=s,r.register("gh-hero-h1",s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);function s(){return r.html`
    <h2><slot></slot></h2>

    <style>
      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `}t.HeroH2=s,r.register("gh-hero-h2",s)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);n(38);const s=n(8);function i({breakpoint:e},{useCallback:t,useState:n}){const{breakpoints:i,palette:o}=s.getTheme(),[a,l]=n(!1),c=t(()=>l(!a),[a]);return r.html`
    <div class="wrapper ${a?"wrapper--open":""}">
      <slot></slot>
    </div>

    <gh-card class="toggle">
      ${a?r.html`<gh-icon-angle-up size="1.25em" @click=${c}></gh-icon-angle-up>`:r.html`<gh-icon-angle-down size="1.25em" @click=${c}></gh-icon-angle-down>`}
      <span>Menu</span>
    </gh-card>
    <style>
      :host {
        position: relative;
        display: block;
      }

      :host .wrapper {
        position: relative;
        display: block;
        min-width: 240px;
        padding: 32px 0;
      }

      :host .toggle {
        display: none;
        align-items: center;
        border: 1px solid ${o.light};
        padding: 0.5em;
        user-select: none;
      }

      :host .toggle span {
        margin: 0 0 0 0.5em;
      }

      :host .toggle gh-icon-angle-down, :host .toggle gh-icon-angle-up {
        color: ${o.primary};
        cursor: pointer;
      }

      ${"portrait"===e?`\n        @media (max-width: ${i.tabletPortraitAndBelowMaxWidth}) {\n          :host .wrapper {\n            display: none;\n          }\n\n          :host .wrapper--open {\n            z-index: 99;\n            position: absolute;\n            display: block;\n            top: 100%;\n            left: 0;\n            right: 0;\n            background-color: ${o.white};\n            padding: 1em;\n            border: 1px solid ${o.light};\n            border-top: none;\n            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);\n          }\n\n          :host .toggle {\n            display: flex;\n          }\n        }\n      `:""}
    </style>
  `}n(79),n(80),t.ListMenu=i,r.register("gh-listmenu",i,{breakpoint:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-icon-angle-down",function({size:e="1.75em"}){return r.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-down fa-w-10 fa-3x"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `},{size:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-icon-angle-up",function({size:e="1.75em"}){return r.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-up fa-w-10 fa-3x"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `},{size:{type:String}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(8);r.register("gh-listmenu-item",function({href:e,selected:t}){const{palette:n}=s.getTheme();return r.html`
    ${e?r.html`
      <a href="${e}" class="${t?"selected":""}">
        <slot></slot>
      </a>
    `:r.html`
      <div class="${t?"selected":""}">
        <slot></slot>
      </div>
    `}

    <style>
      :host {
        display: block;
        font-size: 16px;
        margin: 1em 0;
      }

      :host a {
        text-decoration: none;
        color: inherit;
      }

      :host .selected {
        color: ${n.primary};
      }
    </style>
  `},{href:{type:String},selected:{type:Boolean}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);r.register("gh-icon-cogs",function({size:e="1.75em"}){return r.html`
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cogs fa-w-20 fa-3x"><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z" class=""></path></svg>

    <style>
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        user-select: none;
      }

      :host svg {
        width: ${e};
      }
    </style>
  `},{size:{type:String}})}]]);
//# sourceMappingURL=chunk.vendors~main.a205c7cf23e4cbfac917.js.map