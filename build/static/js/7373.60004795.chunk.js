"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[7373],{75184:function(e,a,s){s(72791);var r=s(89743),i=s(2677),l=s(2461),d=s(80184);a.Z=e=>(0,d.jsx)(r.Z,{children:(0,d.jsx)(i.Z,{children:(0,d.jsxs)("div",{className:"page-title-box",children:[(0,d.jsx)("h4",{className:"page-title",children:e.title}),(0,d.jsx)("div",{className:"page-title-right",children:(0,d.jsxs)(l.Z,{listProps:{className:"m-0"},children:[(0,d.jsx)(l.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,d.jsx)(l.Z.Item,{active:!0,children:e.label},a):(0,d.jsx)(l.Z.Item,{href:e.path,children:e.label},a)))]})})]})})})},77373:function(e,a,s){s.r(a),s.d(a,{default:function(){return j}});var r=s(72791),i=s(89743),l=s(2677),d=s(9140),t=s(43360),n=s(75184),c=s(65532),o=s(81694),m=s.n(o),h=s(80184);const p=e=>{const[a,s]=(0,r.useState)([]),i=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const s=a<0?0:a,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(s))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]},l=(r,i)=>{const l=[...a];l.splice(i,1),s(l),e.onFileUpload&&e.onFileUpload(l)};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c.ZP,{...e,onDrop:r=>(r=>{var l=r;e.showPreview&&((r||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:i(e.size)}))),(l=[...a]).push(...r),s(l)),e.onFileUpload&&e.onFileUpload(l)})(r),children:s=>{let{getRootProps:i,getInputProps:d}=s;return(0,h.jsx)("div",{className:m()("dropzone","dz-clickable",{"dz-started":a&&a.length>0}),children:(0,h.jsxs)("div",{...i(),children:[(0,h.jsxs)("div",{className:"dz-message needsclick",children:[(0,h.jsx)("input",{...d()}),(0,h.jsx)("i",{className:"h1 text-muted uil-cloud-upload"}),(0,h.jsx)("h3",{children:"Drop files here or click to upload."}),(0,h.jsxs)("span",{className:"text-muted ",children:["(This is just a demo dropzone. Selected files are"," ",(0,h.jsx)("strong",{children:"not"})," actually uploaded.)"]})]}),e.showPreview&&(a||[]).map(((e,a)=>(0,h.jsxs)(r.Fragment,{children:[e.preview&&(0,h.jsxs)("div",{onClick:e=>e.stopPropagation(),className:"dz-preview dz-processing dz-error dz-complete dz-image-preview",children:[(0,h.jsx)("div",{className:"dz-image",children:(0,h.jsx)("img",{"data-dz-thumbnail":"",alt:e.name,src:e.preview},a)}),(0,h.jsxs)("div",{className:"dz-details",children:[(0,h.jsx)("div",{className:"dz-size",children:(0,h.jsxs)("span",{"data-dz-size":"",children:[(0,h.jsx)("strong",{children:e.formattedSize})," KB"]})}),(0,h.jsx)("div",{className:"dz-filename",children:(0,h.jsx)("span",{"data-dz-name":"",children:e.name})})]}),(0,h.jsx)("div",{className:"dz-remove",children:(0,h.jsx)(t.Z,{variant:"",onClick:e=>l(0,a),children:(0,h.jsx)("i",{className:"uil uil-multiply"})})})]}),!e.preview&&(0,h.jsxs)("div",{onClick:e=>e.stopPropagation(),className:"dz-preview dz-file-preview dz-processing dz-error dz-complete",children:[(0,h.jsx)("div",{className:"dz-image",children:(0,h.jsx)("img",{"data-dz-thumbnail":"",alt:""})}),(0,h.jsxs)("div",{className:"dz-details",children:[(0,h.jsx)("div",{className:"dz-size",children:(0,h.jsxs)("span",{"data-dz-size":"",children:[(0,h.jsx)("strong",{children:e.formattedSize})," KB"]})}),(0,h.jsx)("div",{className:"dz-filename",children:(0,h.jsx)("span",{"data-dz-name":"",children:e.name})})]}),(0,h.jsx)("div",{className:"dz-remove",children:(0,h.jsx)(t.Z,{variant:"",onClick:e=>l(0,a),children:(0,h.jsx)("i",{className:"uil uil-multiply"})})})]})]},a)))]})})}})})};p.defaultProps={showPreview:!0};var x=p;var j=()=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.Z,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"File Upload",path:"/forms/upload",active:!0}],title:"File Upload"}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(l.Z,{xs:12,children:(0,h.jsx)(d.Z,{children:(0,h.jsxs)(d.Z.Body,{children:[(0,h.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Dropzone File Upload"}),(0,h.jsx)("p",{className:"sub-header",children:"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."}),(0,h.jsx)(x,{onFileUpload:e=>{console.log("Uploaded files - ",e)}}),(0,h.jsx)("div",{className:"clearfix text-end mt-3",children:(0,h.jsxs)(t.Z,{variant:"danger",children:[(0,h.jsx)("i",{className:"uil uil-arrow-right me-1"})," Submit"]})})]})})})})]})},9140:function(e,a,s){s.d(a,{Z:function(){return y}});var r=s(81694),i=s.n(r),l=s(72791),d=s(10162),t=s(66543),n=s(27472),c=s(80184);const o=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:l,as:t="img",...n}=e;const o=(0,d.vE)(s,"card-img");return(0,c.jsx)(t,{ref:a,className:i()(l?"".concat(o,"-").concat(l):o,r),...n})}));o.displayName="CardImg";var m=o,h=s(96040);const p=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:t="div",...n}=e;const o=(0,d.vE)(s,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,c.jsx)(h.Z.Provider,{value:m,children:(0,c.jsx)(t,{ref:a,...n,className:i()(r,o)})})}));p.displayName="CardHeader";var x=p;const j=(0,n.Z)("h5"),u=(0,n.Z)("h6"),v=(0,t.Z)("card-body"),f=(0,t.Z)("card-title",{Component:j}),g=(0,t.Z)("card-subtitle",{Component:u}),z=(0,t.Z)("card-link",{Component:"a"}),N=(0,t.Z)("card-text",{Component:"p"}),b=(0,t.Z)("card-footer"),Z=(0,t.Z)("card-img-overlay"),w=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:l,text:t,border:n,body:o,children:m,as:h="div",...p}=e;const x=(0,d.vE)(s,"card");return(0,c.jsx)(h,{ref:a,...p,className:i()(r,x,l&&"bg-".concat(l),t&&"text-".concat(t),n&&"border-".concat(n)),children:o?(0,c.jsx)(v,{children:m}):m})}));w.displayName="Card",w.defaultProps={body:!1};var y=Object.assign(w,{Img:m,Title:f,Subtitle:g,Body:v,Link:z,Text:N,Header:x,Footer:b,ImgOverlay:Z})},96040:function(e,a,s){const r=s(72791).createContext(null);r.displayName="CardHeaderContext",a.Z=r},27472:function(e,a,s){var r=s(72791),i=s(81694),l=s.n(i),d=s(80184);a.Z=e=>r.forwardRef(((a,s)=>(0,d.jsx)("div",{...a,ref:s,className:l()(a.className,e)})))}}]);
//# sourceMappingURL=7373.60004795.chunk.js.map