parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F20g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=require("react");const t={};function s(s){const[a,r]=(0,e.useState)([]);return(0,e.useEffect)(()=>{s?t[s]?r(t[s]):async function(){r([]);const e=await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${s}`),a=await e.json();t[s]=a.breeds||[],r(t[s])}():r([])},[s]),[a]}
},{}],"ys7c":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react-router-dom"),s=require("react/jsx-runtime");const r=({name:r,animal:t,breed:i,images:a,location:n,id:l})=>{let c="http://pets-images.dev-apis.com/pets/none.jpg";return a.length&&(c=a[0]),(0,s.jsxs)(e.Link,{to:`/details/${l}`,className:"pet",children:[(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)("img",{src:c,alt:r})}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsx)("h1",{children:r}),(0,s.jsx)("h2",{children:`${t} - ${i} - ${n}`})]})]})};var t=r;exports.default=t;
},{}],"eK6O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./Pet")),t=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}const r=({pets:a})=>(0,t.jsx)("div",{className:"search",children:a.length?a.map(({name:a,animal:r,breed:s,id:i,images:d,city:n,state:l})=>(0,t.jsx)(e.default,{name:a,animal:r,breed:s,images:d,location:`${n}, ${l}`,id:i},i)):(0,t.jsx)("h2",{children:"No Pets Found"})});var s=r;exports.default=s;
},{"./Pet":"ys7c"}],"zsGP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),t=s(require("./ThemeContext")),a=s(require("./useBreedList")),r=s(require("./Results")),l=require("react/jsx-runtime");function s(e){return e&&e.__esModule?e:{default:e}}const n=Object.freeze(["bird","cat","dog","rabbit","reptile"]),i=()=>{const[s,i]=(0,e.useState)(""),[o,u]=(0,e.useState)(""),[d,c]=(0,e.useState)(""),[h,p]=(0,e.useState)([]),[x]=(0,a.default)(o),[v,j]=(0,e.useContext)(t.default);async function m(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?animal=${o}&location=${s}&breed=${d}`),t=await e.json();p(t.pets)}return(0,e.useEffect)(()=>{m()},[]),(0,l.jsxs)("div",{className:"search-params",children:[(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m()},children:[(0,l.jsxs)("label",{htmlFor:"location",children:["Location",(0,l.jsx)("input",{id:"location",value:s,placeholder:"Location",onChange:e=>i(e.target.value)})]}),(0,l.jsxs)("label",{htmlFor:"animal",children:["Animal",(0,l.jsxs)("select",{id:"animal",value:o,onChange:e=>u(e.target.value),onBlur:e=>u(e.target.value),children:[(0,l.jsx)("option",{}),n.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("label",{htmlFor:"breed",children:["Breed",(0,l.jsxs)("select",{disabled:!x.length,id:"breed",value:d,onChange:e=>c(e.target.value),onBlur:e=>c(e.target.value),children:[(0,l.jsx)("option",{}),x.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("label",{htmlFor:"theme",children:["theme",(0,l.jsxs)("select",{value:v,onChange:e=>j(e.target.value),onBlur:e=>j(e.target.value),children:[(0,l.jsx)("option",{value:"darkblue",children:"Dark Blue"}),(0,l.jsx)("option",{value:"mediumorchid",children:"Medium Orchid"}),(0,l.jsx)("option",{value:"peru",children:"Peru"}),(0,l.jsx)("option",{value:"chartreuse",children:"Chartreuse"})]})]}),(0,l.jsx)("button",{style:{backgroundColor:v},children:"Submit"})]}),(0,l.jsx)(r.default,{pets:h})]})};var o=i;exports.default=o;
},{"./ThemeContext":"Uop6","./useBreedList":"F20g","./Results":"eK6O"}]},{},[], null)
//# sourceMappingURL=/SearchParams.05efd545.js.map