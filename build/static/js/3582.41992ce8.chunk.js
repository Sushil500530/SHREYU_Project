"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[3582],{69998:function(e,n){n.Z=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?t.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},43360:function(e,n,r){var t=r(81694),o=r.n(t),i=r(72791),a=r(15341),u=r(10162),c=r(80184);const l=i.forwardRef(((e,n)=>{let{as:r,bsPrefix:t,variant:i,size:l,active:s,className:f,...p}=e;const d=(0,u.vE)(t,"btn"),[v,{tagName:g}]=(0,a.FT)({tagName:r,...p}),y=g;return(0,c.jsx)(y,{...p,...v,ref:n,className:o()(f,d,s&&"active",i&&"".concat(d,"-").concat(i),l&&"".concat(d,"-").concat(l),p.href&&p.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=l},66543:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(81694),o=r.n(t),i=/-(.)/g;var a=r(72791),u=r(10162),c=r(80184);const l=e=>{return e[0].toUpperCase()+(n=e,n.replace(i,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function s(e){let{displayName:n=l(e),Component:r,defaultProps:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=a.forwardRef(((n,t)=>{let{className:i,bsPrefix:a,as:l=r||"div",...s}=n;const f=(0,u.vE)(a,e);return(0,c.jsx)(l,{ref:t,className:o()(i,f),...s})}));return i.defaultProps=t,i.displayName=n,i}},65532:function(e,n,r){r.d(n,{ZP:function(){return ee}});var t=r(72791),o=r(52007),i=r.n(o);function a(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{c(t.next(e))}catch(n){i(n)}}function u(e){try{c(t.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}c((t=t.apply(e,n||[])).next())}))}function u(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(u){i=[6,u],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.create;function c(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,i=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(u){o={error:u}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}Object.create;var l=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,n){var r=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var r=n.split(".").pop().toLowerCase(),t=l.get(r);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var t=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof n?n:"string"===typeof t&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var f=[".DS_Store","Thumbs.db"];function p(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return s(e)}))}function d(e,n){return a(this,void 0,void 0,(function(){var r;return u(this,(function(t){switch(t.label){case 0:return e.items?(r=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(y))]):[3,2];case 1:return[2,v(m(t.sent()))];case 2:return[2,v(g(e.files).map((function(e){return s(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function g(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function y(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?D(n):b(e)}function m(e){return e.reduce((function(e,n){return function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(c(arguments[n]));return e}(e,Array.isArray(n)?m(n):[n])}),[])}function b(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=s(n);return Promise.resolve(r)}function h(e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,e.isDirectory?D(e):w(e)]}))}))}function D(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,c;return u(this,(function(u){switch(u.label){case 0:if(n.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),r(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(h)),t.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function w(e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=s(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var O=r(69998);function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return A(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var j="file-invalid-type",k="file-too-large",x="file-too-small",C="too-many-files",E=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:j,message:"File type must be ".concat(n)}},P=function(e){return{code:k,message:"File is larger than ".concat(e," bytes")}},S=function(e){return{code:x,message:"File is smaller than ".concat(e," bytes")}},z={code:C,message:"Too many files"};function R(e,n){var r="application/x-moz-file"===e.type||(0,O.Z)(e,n);return[r,r?null:E(n)]}function T(e,n,r){if(I(e.size))if(I(n)&&I(r)){if(e.size>r)return[!1,P(r)];if(e.size<n)return[!1,S(n)]}else{if(I(n)&&e.size<n)return[!1,S(n)];if(I(r)&&e.size>r)return[!1,P(r)]}return[!0,null]}function I(e){return void 0!==e&&null!==e}function L(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function N(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function K(e){e.preventDefault()}function B(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.some((function(n){return!L(e)&&n&&n.apply(void 0,[e].concat(t)),L(e)}))}}var M=["children"],Z=["open"],_=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],U=["refKey","onChange","onClick"];function $(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||q(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){if(e){if("string"===typeof e)return W(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,n):void 0}}function W(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function H(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function J(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?H(Object(r),!0).forEach((function(n){Q(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function Q(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function V(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var X=(0,t.forwardRef)((function(e,n){var r=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=J(J({},Y),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,u=n.minSize,c=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,g=n.onDropRejected,y=n.onFileDialogCancel,m=n.preventDropOnDocument,b=n.noClick,h=n.noKeyboard,D=n.noDrag,w=n.noDragEventsBubbling,O=n.validator,A=(0,t.useRef)(null),j=(0,t.useRef)(null),k=G((0,t.useReducer)(re,ne),2),x=k[0],C=k[1],E=x.isFocused,P=x.isFileDialogActive,S=x.draggedFiles,I=(0,t.useCallback)((function(){j.current&&(C({type:"openDialog"}),j.current.value=null,j.current.click())}),[C]),M=function(){P&&setTimeout((function(){j.current&&(j.current.files.length||(C({type:"closeDialog"}),"function"===typeof y&&y()))}),300)};(0,t.useEffect)((function(){return window.addEventListener("focus",M,!1),function(){window.removeEventListener("focus",M,!1)}}),[j,P,y]);var Z=(0,t.useCallback)((function(e){A.current&&A.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),I()))}),[A,j]),q=(0,t.useCallback)((function(){C({type:"focus"})}),[]),W=(0,t.useCallback)((function(){C({type:"blur"})}),[]),H=(0,t.useCallback)((function(){b||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?I():setTimeout(I,0))}),[j,b]),X=(0,t.useRef)([]),ee=function(e){A.current&&A.current.contains(e.target)||(e.preventDefault(),X.current=[])};(0,t.useEffect)((function(){return m&&(document.addEventListener("dragover",K,!1),document.addEventListener("drop",ee,!1)),function(){m&&(document.removeEventListener("dragover",K),document.removeEventListener("drop",ee))}}),[A,m]);var te=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),se(e),X.current=[].concat($(X.current),[e.target]),N(e)&&Promise.resolve(i(e)).then((function(n){L(e)&&!w||(C({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,w]),oe=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),se(e);var n=N(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return n&&p&&p(e),!1}),[p,w]),ie=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),se(e);var n=X.current.filter((function(e){return A.current&&A.current.contains(e)})),r=n.indexOf(e.target);-1!==r&&n.splice(r,1),X.current=n,n.length>0||(C({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),N(e)&&f&&f(e))}),[A,f,w]),ae=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),se(e),X.current=[],N(e)&&Promise.resolve(i(e)).then((function(n){if(!L(e)||w){var t=[],o=[];n.forEach((function(e){var n=G(R(e,r),2),i=n[0],c=n[1],l=G(T(e,u,a),2),s=l[0],f=l[1],p=O?O(e):null;if(i&&s&&!p)t.push(e);else{var d=[c,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!c&&t.length>1||c&&l>=1&&t.length>l)&&(t.forEach((function(e){o.push({file:e,errors:[z]})})),t.splice(0)),C({acceptedFiles:t,fileRejections:o,type:"setFiles"}),d&&d(t,o,e),o.length>0&&g&&g(o,e),t.length>0&&v&&v(t,e)}})),C({type:"reset"})}),[c,r,u,a,l,i,d,v,g,w,O]),ue=function(e){return o?null:e},ce=function(e){return h?null:ue(e)},le=function(e){return D?null:ue(e)},se=function(e){w&&e.stopPropagation()},fe=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=V(e,_);return J(J(Q({onKeyDown:ce(B(t,Z)),onFocus:ce(B(i,q)),onBlur:ce(B(a,W)),onClick:ue(B(u,H)),onDragEnter:le(B(c,te)),onDragOver:le(B(l,oe)),onDragLeave:le(B(s,ie)),onDrop:le(B(f,ae))},r,A),o||h?{}:{tabIndex:0}),p)}}),[A,Z,q,W,H,te,oe,ie,ae,h,D,o]),pe=(0,t.useCallback)((function(e){e.stopPropagation()}),[]),de=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=V(e,U);return J(J({},Q({accept:r,multiple:c,type:"file",style:{display:"none"},onChange:ue(B(o,ae)),onClick:ue(B(i,pe)),autoComplete:"off",tabIndex:-1},t,j)),a)}}),[j,r,c,ae,o]),ve=S.length,ge=ve>0&&function(e){var n=e.files,r=e.accept,t=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=F(R(e,r),1)[0],i=F(T(e,t,o),1)[0];return n&&i}))}({files:S,accept:r,minSize:u,maxSize:a,multiple:c,maxFiles:l}),ye=ve>0&&!ge;return J(J({},x),{},{isDragAccept:ge,isDragReject:ye,isFocused:E&&!o,getRootProps:fe,getInputProps:de,rootRef:A,inputRef:j,open:ue(I)})}(V(e,M)),i=o.open,a=V(o,Z);return(0,t.useImperativeHandle)(n,(function(){return{open:i}}),[i]),t.createElement(t.Fragment,null,r(J(J({},a),{},{open:i})))}));X.displayName="Dropzone";var Y={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?d(e.dataTransfer,e.type):p(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};X.defaultProps=Y,X.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var ee=X,ne={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function re(e,n){switch(n.type){case"focus":return J(J({},e),{},{isFocused:!0});case"blur":return J(J({},e),{},{isFocused:!1});case"openDialog":return J(J({},e),{},{isFileDialogActive:!0});case"closeDialog":return J(J({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive,t=n.draggedFiles;return J(J({},e),{},{draggedFiles:t,isDragActive:r});case"setFiles":return J(J({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return J({},ne);default:return e}}}}]);
//# sourceMappingURL=3582.41992ce8.chunk.js.map