"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[4869],{71605:function(e,s,a){a(72791);var l=a(80184);s.Z=()=>(0,l.jsx)("div",{className:"preloader",id:"preloader",children:(0,l.jsx)("div",{className:"status",id:"status",children:(0,l.jsxs)("div",{className:"spinner",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]})})})},75184:function(e,s,a){a(72791);var l=a(89743),t=a(2677),r=a(2461),i=a(80184);s.Z=e=>(0,i.jsx)(l.Z,{children:(0,i.jsx)(t.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("h4",{className:"page-title",children:e.title}),(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(r.Z,{listProps:{className:"m-0"},children:[(0,i.jsx)(r.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map(((e,s)=>e.active?(0,i.jsx)(r.Z.Item,{active:!0,children:e.label},s):(0,i.jsx)(r.Z.Item,{href:e.path,children:e.label},s)))]})})]})})})},57806:function(e,s,a){a(72791);var l=a(34358),t=a(80184);s.Z=e=>{let{className:s,style:a,children:r,...i}=e;return(0,t.jsx)(l.Z,{className:s,style:a,...i,children:r})}},38459:function(e,s,a){a.d(s,{y:function(){return x},J:function(){return i}});var l=a(72791),t=a(87705),r=a(80184);var i=e=>{let{defaultValues:s,resolver:a,children:i,onSubmit:n,formClass:c}=e;const d=(0,t.cI)({defaultValues:s,resolver:a}),{handleSubmit:o,register:m,control:h,formState:{errors:x}}=d;return(0,r.jsx)("form",{onSubmit:o(n),className:c,noValidate:!0,children:Array.isArray(i)?i.map((e=>e.props&&e.props.name?l.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:x,control:h}}):e)):i})},n=a(3350),c=a(99410);const d=e=>{let{type:s,name:a,placeholder:l,register:t,errors:i,comp:c,rows:d,className:o,refCallback:m,...h}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z.Control,{type:s,placeholder:l,name:a,as:c,id:a,ref:e=>{m&&m(e)},className:o,isInvalid:!(!i||!i[a]),...t?t(a):{},rows:d,...h}),i&&i[a]?(0,r.jsx)(n.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[a].message}):null]})},o=e=>{let{type:s,label:a,name:l,placeholder:t,register:i,errors:c,comp:d,rows:o,className:m,refCallback:h,...x}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z.Check,{type:s,label:a,name:l,id:l,ref:e=>{h&&h(e)},className:m,isInvalid:!(!c||!c[l]),...i?i(l):{},...x}),c&&c[l]?(0,r.jsx)(n.Z.Control.Feedback,{type:"invalid",children:c[l].message}):null]})},m=e=>{let{type:s,label:a,name:l,placeholder:t,register:i,errors:c,comp:d,rows:o,className:m,refCallback:h,...x}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z.Select,{type:s,label:a,name:l,id:l,ref:e=>{h&&h(e)},className:m,isInvalid:!(!c||!c[l]),...i?i(l):{},...x}),c&&c[l]?(0,r.jsx)(n.Z.Control.Feedback,{type:"invalid",children:c[l].message}):null]})},h=e=>{let{startIcon:s,type:a,name:l,placeholder:t,comp:i,register:n,errors:o,rows:h,className:x,textClassName:u,refCallback:j,...p}=e;return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(c.Z.Text,{className:u,children:s}),"select"===a?(0,r.jsx)(m,{type:a,name:l,placeholder:t,refCallback:j,comp:i,errors:o,register:n,className:x,rows:h,...p}):(0,r.jsx)(d,{type:a,name:l,placeholder:t,refCallback:j,comp:i,errors:o,register:n,className:x,rows:h,...p})]})};var x=e=>{let{startIcon:s,label:a,type:l,name:t,placeholder:i,register:c,errors:x,control:u,className:j,labelClassName:p,containerClass:b,textClassName:f,refCallback:N,action:g,rows:v,...y}=e;const Z="textarea"===l?"textarea":"select"===l?"select":"input";return(0,r.jsx)(r.Fragment,{children:"hidden"===l?(0,r.jsx)("input",{type:l,name:t,...c?c(t):{},...y}):(0,r.jsx)(r.Fragment,{children:"checkbox"===l||"radio"===l?(0,r.jsx)(n.Z.Group,{className:b,children:(0,r.jsx)(o,{type:l,label:a,name:t,placeholder:i,refCallback:N,errors:x,register:c,comp:Z,className:j,rows:v,...y})}):"select"===l?(0,r.jsxs)(n.Z.Group,{className:b,children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z.Label,{className:p,children:a}),g&&g]}):null,s?(0,r.jsx)(h,{type:l,startIcon:s,name:t,comp:Z,textClassName:f,placeholder:i,refCallback:N,errors:x,register:c,className:j,rows:v,...y}):(0,r.jsx)(m,{type:l,name:t,placeholder:i,refCallback:N,errors:x,register:c,comp:Z,className:j,rows:v,...y})]}):(0,r.jsxs)(n.Z.Group,{className:b,children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z.Label,{className:p,children:a}),g&&g]}):null,s?(0,r.jsx)(h,{type:l,startIcon:s,name:t,comp:Z,textClassName:f,placeholder:i,refCallback:N,errors:x,register:c,className:j,rows:v,...y}):(0,r.jsx)(d,{type:l,name:t,placeholder:i,refCallback:N,errors:x,register:c,comp:Z,className:j,rows:v,...y})]})})})}},53181:function(e,s,a){a.r(s),a.d(s,{default:function(){return P}});var l=a(72791),t=a(89743),r=a(2677),i=a(75184),n=a(11087),c=a(9140),d=a(7238),o=a(81694),m=a.n(o),h=a(57806),x=a(59569),u=a(39833),j=a(85569),p=a(35002),b=a(13268),f=a(58951),N=a(68328),g=a(90469);const v=[{id:1,name:"Brandon Smith",avatar:u,lastMessage:"How are you today?",totalUnread:3,lastMessageOn:"5:30am",userStatus:"offline"},{id:2,name:"Maria C",avatar:g,lastMessage:"Hey! a reminder for tomorrow's meeting?",totalUnread:0,lastMessageOn:"Thu",userStatus:"online"},{id:3,name:"Dominic A",avatar:f,lastMessage:"Are we going to have this week's planning meeting?",totalUnread:0,lastMessageOn:"4:30 am",userStatus:"busy"},{id:4,name:"Ronda D",avatar:N,lastMessage:"Please check these design assets..",totalUnread:0,lastMessageOn:"Wed",userStatus:"online"},{id:5,name:"Michael H",avatar:j,lastMessage:"Are you free for 15 mins? I would like to discuss something",totalUnread:25,lastMessageOn:"Tue",userStatus:"offline"},{id:6,name:"Thomas R",avatar:p,lastMessage:"Let's have meeting today between me, you and Tony...",totalUnread:0,lastMessageOn:"Tue",userStatus:"offline"},{id:7,name:"Thomas J",avatar:b,lastMessage:"How are you?",totalUnread:1,lastMessageOn:"Tue",userStatus:"offline"},{id:8,name:"Rikcy J",avatar:x,lastMessage:"Are you interested in learning?",totalUnread:0,lastMessageOn:"Mon",userStatus:"away"}],y={id:9,name:"Shreyu N",avatar:u},Z=[],w=[];for(const V of v)Z.push({id:1,messages:[{type:"text",value:"Hello!"}],to:y,from:V,sendOn:"8:18 am"},{id:2,messages:[{type:"text",value:"Hi, How are you? What about our next meeting?"}],to:V,from:y,sendOn:"8:20 am"}),w.push({id:1,messages:[{type:"text",value:"Yeah everything is fine"},{type:"text",value:"Let's have it today if you are free"}],to:y,from:V,sendOn:"8:21 am"},{id:2,messages:[{type:"text",value:"Sure thing! let me know if 2pm works for you"}],to:V,from:y,sendOn:"8:25 am"},{id:3,messages:[{type:"text",value:"Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?"}],to:y,from:V,sendOn:"8:26 am"},{id:4,messages:[{type:"text",value:"2pm it is. sure, we can also discuss about the presentation talk format if you have some extra mins"},{type:"text",value:"Sure, let's discuss about presentation format, it would be great to finalize today."}],to:V,from:y,sendOn:"8:27 am"},{id:5,messages:[{type:"text",value:"Ok. I am attaching the last year format and assets here...."},{type:"file",value:{file:"Shreyu-sketch.zip",size:"2.3MB"}}],to:y,from:V,sendOn:"8:32 am"});const k=[{id:1,day:"Yesterday",messages:[...Z]},{id:2,day:"Today",messages:[...w]}];var C=a(80184);var S=e=>{let{onUserSelect:s}=e;const[a,t]=(0,l.useState)([...v]),[r,i]=(0,l.useState)(v[1]),[o,x]=(0,l.useState)(!1),j=()=>{x(!o)};return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(c.Z,{children:(0,C.jsxs)(c.Z.Body,{children:[(0,C.jsxs)("div",{className:"d-flex pb-2 border-bottom align-items-center",children:[(0,C.jsx)("img",{src:u,className:"me-2 rounded-circle",height:"48",alt:""}),(0,C.jsx)("div",{children:(0,C.jsx)("h5",{className:"my-0 fs-14",children:"Shreyu N"})}),(0,C.jsx)("div",{className:"flex-grow-1",children:(0,C.jsx)("ul",{className:"list-inline text-end mb-0",children:(0,C.jsxs)(d.Z,{show:o,as:"li",onToggle:j,className:"list-inline-item fs-18",children:[(0,C.jsx)(d.Z.Toggle,{id:"dropdown-apps",as:"a",onClick:j,className:m()("text-dark","cursor-pointer",{show:o}),children:(0,C.jsx)("i",{className:"bi bi-three-dots-vertical"})}),(0,C.jsxs)(d.Z.Menu,{className:"dropdown-menu-end",children:[(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-people fs-16 me-2"}),"New Group"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-person-lines-fill fs-16 me-2"}),"Contacts"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-bookmark fs-16 me-2"}),"Saved Message"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-person-plus fs-16 me-2"}),"Invite Friends"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-question-circle fs-16 me-2"}),"Help"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-gear fs-16 me-2"}),"Setting"]})]})]})})})]}),(0,C.jsx)("div",{children:(0,C.jsx)("form",{className:"chat-search",children:(0,C.jsx)("div",{className:"chat-search-box",children:(0,C.jsxs)("div",{className:"input-group",children:[(0,C.jsx)("button",{className:"btn input-group-text",type:"submit",children:(0,C.jsx)("i",{className:"uil uil-search"})}),(0,C.jsx)("input",{type:"search",className:"form-control",placeholder:"Search...",id:"top-search",onKeyUp:e=>{return s=e.target.value,void t(s?[...v].filter((e=>e.name.toLowerCase().indexOf(s.toLowerCase())>=0)):[...v]);var s}})]})})})}),(0,C.jsx)("div",{className:"pe-2",children:(0,C.jsx)(h.Z,{style:{height:"549px",width:"100%"},children:(a||[]).map(((e,a)=>(0,C.jsx)(n.rU,{to:"#",className:"text-body",onClick:a=>{(e=>{i(e),s&&s(e)})(e)},children:(0,C.jsxs)("div",{className:m()("d-flex","align-items-start","p-2",{"bg-light":e.id===r.id}),children:[(0,C.jsxs)("div",{className:"position-relative",children:[(0,C.jsx)("span",{className:m()("user-status",{"bg-success":"online"===e.userStatus,"bg-danger":"busy"===e.userStatus,"bg-warning":"away"===e.userStatus})}),(0,C.jsx)("img",{src:e.avatar,className:"me-2 rounded-circle",height:"48",alt:""})]}),(0,C.jsxs)("div",{className:"w-100 overflow-hidden",children:[(0,C.jsxs)("h5",{className:"mt-0 mb-0 fs-14",children:[(0,C.jsx)("span",{className:"float-end text-muted fs-12",children:e.lastMessageOn}),e.name]}),(0,C.jsxs)("p",{className:"mt-1 mb-0 text-muted fs-14",children:[0!==e.totalUnread&&(0,C.jsx)("span",{className:"float-end badge bg-danger text-white",children:e.totalUnread}),(0,C.jsx)("span",{className:m()("w-75",{"text-dark":e.totalUnread}),children:e.lastMessage})]})]})]})},a)))})})]})})})},I=a(87705),M=a(81724),U=a(61265),E=a(38459),O=a(71605),T=a(84158),F=a(17858);var H=e=>{let{show:s,handleClose:a}=e;const[i,d]=(0,l.useState)(!1),[o,m]=(0,l.useState)(!1);return(0,C.jsx)(T.Z,{centered:!0,show:s,onHide:a,children:(0,C.jsxs)("div",{className:" m-2",children:[(0,C.jsx)(T.Z.Header,{closeButton:!0}),(0,C.jsx)("div",{className:"text-center mb-3",children:(0,C.jsx)("img",{src:p,className:"rounded-circle avatar-lg",height:"48",alt:"Rhonda D"})}),(0,C.jsx)("div",{className:"text-center mb-3",children:(0,C.jsx)("h5",{className:"mt-0 mb-0 fs-18",children:"Rhonda D"})}),(0,C.jsxs)("div",{className:"text-center mb-3",children:[(0,C.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#voicecall","data-bs-dismiss":"modal",children:(0,C.jsx)(n.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,C.jsx)("i",{className:"bi bi-telephone"})})}),(0,C.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#videocall","data-bs-dismiss":"modal",children:(0,C.jsx)(n.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,C.jsx)("i",{className:"bi bi-camera-video"})})}),(0,C.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-dismiss":"modal","aria-label":"Close",children:(0,C.jsx)(n.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,C.jsx)("i",{className:"bi bi-chat-left-dots"})})})]}),(0,C.jsx)(T.Z.Body,{children:(0,C.jsxs)("div",{className:"accordion custom-accordionwitharrow",children:[(0,C.jsxs)(c.Z,{className:"mb-1 shadow-none border-0",children:[(0,C.jsx)(n.rU,{to:"#",onClick:()=>d(!i),className:"text-dark",children:(0,C.jsx)(c.Z.Header,{className:"border-0",children:(0,C.jsxs)("h5",{className:"m-0 fs-16",children:["About",(0,C.jsx)("i",{className:"uil uil-angle-down float-end accordion-arrow"})]})})}),(0,C.jsx)(F.Z,{in:i,children:(0,C.jsx)("div",{children:(0,C.jsx)(c.Z.Body,{className:"pt-0 text-muted",children:(0,C.jsxs)(t.Z,{children:[(0,C.jsxs)(r.Z,{xs:4,className:"p-2",children:[(0,C.jsx)("i",{className:"bi bi-telephone fs-18 me-2"}),"Phone"]}),(0,C.jsx)(r.Z,{xs:8,className:"p-2 border-bottom",children:"(415) 281 - 1649"}),(0,C.jsxs)(r.Z,{xs:4,className:"p-2",children:[(0,C.jsx)("i",{className:"bi bi-envelope fs-18 me-2"}),"Email"]}),(0,C.jsx)(r.Z,{xs:8,className:"p-2 border-bottom",children:"shreyu.abc@gmail.com"})]})})})})]}),(0,C.jsxs)(c.Z,{className:"mb-1 shadow-none border-0",children:[(0,C.jsx)(n.rU,{to:"#",onClick:()=>m(!o),className:"text-dark",children:(0,C.jsx)(c.Z.Header,{className:"border-0",children:(0,C.jsxs)("h5",{className:"m-0 fs-16",children:["Media, Links and Docs",(0,C.jsx)("i",{className:"uil uil-angle-down float-end accordion-arrow"})]})})}),(0,C.jsx)(F.Z,{in:o,children:(0,C.jsx)("div",{children:(0,C.jsxs)(c.Z.Body,{className:"pt-0 text-muted",children:[(0,C.jsx)("div",{className:"d-inline-block me-2",children:(0,C.jsx)("i",{className:"bi bi-file-earmark-pdf h2"})}),(0,C.jsx)("div",{className:"d-inline-block me-2",children:(0,C.jsx)("i",{className:"bi bi-file-earmark-word h2"})}),(0,C.jsx)("div",{className:"d-inline-block me-2",children:(0,C.jsx)("i",{className:"bi bi-images h2"})}),(0,C.jsx)("div",{className:"d-inline-block me-2",children:(0,C.jsx)("i",{className:"bi bi-file-earmark-ppt h2"})})]})})})]})]})})]})})};var R=e=>{let{show:s,handleClose:a}=e;return(0,C.jsxs)(T.Z,{centered:!0,size:"sm",show:s,onHide:a,contentClassName:"video-call",children:[(0,C.jsx)(T.Z.Header,{className:"mb-5 justify-content-end",children:(0,C.jsx)("div",{className:"video-call-head",children:(0,C.jsx)("img",{src:u,className:"rounded",alt:"Rhonda D"})})}),(0,C.jsx)(T.Z.Body,{children:(0,C.jsx)("div",{className:"video-call-action text-center pt-4 pb-2",children:(0,C.jsxs)("ul",{className:"list-inline",children:[(0,C.jsx)("li",{className:"list-inline-item avatar-sm fw-bold me-2",children:(0,C.jsx)(n.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-light text-white fs-16",children:(0,C.jsx)("i",{className:"bi bi-mic-mute"})})}),(0,C.jsx)("li",{className:"list-inline-item avatar fw-bold me-2",children:(0,C.jsx)(n.rU,{to:"#",className:"avatar-title rounded-circle bg-danger text-white fs-18",children:(0,C.jsx)("i",{className:"bi bi-telephone","data-bs-dismiss":"modal"})})}),(0,C.jsx)("li",{className:"list-inline-item avatar-sm fw-bold",children:(0,C.jsx)(n.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-light text-white fs-16",children:(0,C.jsx)("i",{className:"bi bi-camera-video"})})})]})})})]})};var D=e=>{let{show:s,handleClose:a}=e;return(0,C.jsxs)(T.Z,{centered:!0,size:"sm",show:s,onHide:a,contentClassName:"voice-call",children:[(0,C.jsx)(T.Z.Header,{className:"mt-5 justify-content-center",children:(0,C.jsx)("div",{className:"voice-call-head",children:(0,C.jsx)("img",{src:u,className:"rounded-circle",alt:""})})}),(0,C.jsxs)(T.Z.Body,{className:"pt-0 text-center",children:[(0,C.jsx)("p",{className:"mb-5",children:"Calling..."}),(0,C.jsx)("div",{className:"voice-call-action pt-4 pb-2",children:(0,C.jsxs)("ul",{className:"list-inline",children:[(0,C.jsx)("li",{className:"list-inline-item avatar-sm fw-bold me-2",children:(0,C.jsx)(n.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-secondary text-dark fs-16",children:(0,C.jsx)("i",{className:"bi bi-mic-mute"})})}),(0,C.jsx)("li",{className:"list-inline-item avatar fw-bold me-2","data-bs-dismiss":"modal",children:(0,C.jsx)(n.rU,{to:"#",className:"avatar-title rounded-circle bg-danger text-white fs-18",children:(0,C.jsx)("i",{className:"bi bi-telephone"})})}),(0,C.jsx)("li",{className:"list-inline-item avatar-sm fw-bold",children:(0,C.jsx)(n.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-secondary text-dark fs-16",children:(0,C.jsx)("i",{className:"bi bi-volume-up"})})})]})})]})]})};const L=e=>{let{selectedUser:s}=e;const[a,t]=(0,l.useState)(!1),[r,i]=(0,l.useState)(!1),[n,c]=(0,l.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:"d-flex pb-2 border-bottom align-items-center",children:[(0,C.jsx)("img",{src:s.avatar,className:"me-2 rounded-circle",height:"48",alt:""}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h5",{className:"mt-0 mb-0 fs-14",children:s.name}),(0,C.jsx)("p",{className:"mb-0",children:"Online"})]}),(0,C.jsx)("div",{className:"flex-grow-1",children:(0,C.jsxs)("ul",{className:"list-inline float-end mb-0",children:[(0,C.jsx)(d.Z,{as:"li",className:"list-inline-item fs-18 me-3",children:(0,C.jsx)(d.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,C.jsx)("i",{className:"bi bi-telephone-plus",onClick:()=>c(!0)})})}),(0,C.jsx)(d.Z,{as:"li",className:"list-inline-item fs-18 me-3",children:(0,C.jsx)(d.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,C.jsx)("i",{className:"bi bi-camera-video",onClick:()=>i(!0)})})}),(0,C.jsxs)(d.Z,{as:"li",className:"list-inline-item fs-18",children:[(0,C.jsx)(d.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,C.jsx)("i",{className:"bi bi-three-dots-vertical"})}),(0,C.jsxs)(d.Z.Menu,{className:"dropdown-menu-end",children:[(0,C.jsxs)(d.Z.Item,{href:"#/",onClick:()=>t(!0),children:[" ",(0,C.jsx)("i",{className:"bi bi-person-circle fs-18 me-2"}),"View Profile"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-music-note-list fs-18 me-2"}),"Media, Links and Docs"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-search fs-18 me-2"}),"Search"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-image fs-18 me-2"}),"Wallpaper"]}),(0,C.jsxs)(d.Z.Item,{href:"#/",children:[(0,C.jsx)("i",{className:"bi bi-arrow-right-circle fs-18 me-2"}),"More"]})]})]})]})})]}),(0,C.jsx)(H,{show:a,handleClose:()=>t(!1)}),(0,C.jsx)(R,{show:r,handleClose:()=>i(!1)}),(0,C.jsx)(D,{show:n,handleClose:()=>c(!1)})]})},A=e=>{let{message:s,toUser:a}=e;return(0,C.jsx)(C.Fragment,{children:(s.messages||[]).map(((e,l)=>(0,C.jsx)("li",{className:m()("clearfix",{odd:s.from.id===a.id,"mb-1":s.messages.length>1&&l!==s.messages.length-1}),children:(0,C.jsxs)("div",{className:"conversation-text ms-0",children:[(0,C.jsxs)("div",{className:m()("d-flex",{"justify-content-end":s.from.id===a.id}),children:[s.from.id===a.id&&(0,C.jsxs)(d.Z,{className:"conversation-actions",children:[(0,C.jsx)(d.Z.Toggle,{as:"a",className:"cursor-pointer text-dark pe-1",children:(0,C.jsx)("i",{className:"bi bi-three-dots-vertical fs-14"})}),(0,C.jsxs)(d.Z.Menu,{align:"end",children:[(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-reply fs-18 me-2"}),"Reply"]}),(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-star fs-18 me-2"}),"Reply"]}),(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-trash fs-18 me-2"}),"Delete"]}),(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-files fs-18 me-2"}),"Copy"]})]})]}),"text"===e.type&&(0,C.jsx)("div",{className:"ctext-wrap",children:(0,C.jsx)("p",{children:e.value})}),"file"===e.type&&(0,C.jsx)(c.Z,{className:"mb-1 shadow-none border text-start",children:(0,C.jsx)("div",{className:"p-2",children:(0,C.jsxs)(t.Z,{className:"align-items-center",children:[(0,C.jsx)(r.Z,{className:"col-auto",children:(0,C.jsx)("div",{className:"avatar-sm bg-primary text-white",children:(0,C.jsx)("span",{className:"avatar-title rounded",children:".ZIP"})})}),(0,C.jsxs)(r.Z,{className:"ps-0",children:[(0,C.jsx)(n.rU,{to:"#",className:"text-muted fw-bold",children:e.value.file}),(0,C.jsx)("p",{className:"mb-0",children:e.value.size})]}),(0,C.jsx)(r.Z,{className:"col-auto",children:(0,C.jsx)(n.rU,{to:"#",className:"ps-3 fs-24",children:(0,C.jsx)("i",{className:"bi bi-arrow-down-square"})})})]})})}),s.from.id!==a.id&&(0,C.jsxs)(d.Z,{className:"conversation-actions",children:[(0,C.jsx)(d.Z.Toggle,{as:"a",className:"cursor-pointer text-dark ps-1",children:(0,C.jsx)("i",{className:"bi bi-three-dots-vertical fs-14"})}),(0,C.jsxs)(d.Z.Menu,{align:"start",children:[(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-reply fs-18 me-2"}),"Reply"]}),(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-star fs-18 me-2"}),"Reply"]}),(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-trash fs-18 me-2"}),"Delete"]}),(0,C.jsxs)(d.Z.Item,{children:[(0,C.jsx)("i",{className:"bi bi-files fs-18 me-2"}),"Copy"]})]})]})]}),l===s.messages.length-1&&(0,C.jsxs)("p",{className:"text-muted fs-12 mb-0 mt-1",children:[s.sendOn,s.from.id===a.id&&(0,C.jsx)("i",{className:"bi bi-check2-all ms-1 text-success"})]})]})},l)))})};var B=e=>{let{selectedUser:s}=e;const[a,t]=(0,l.useState)(!1),[r,i]=(0,l.useState)([]),[d]=(0,l.useState)({id:9,name:"Shreyu N",avatar:u}),o=(0,l.useCallback)((()=>{s&&(t(!0),setTimeout((()=>{const e=[...k].map((e=>({id:e.id,day:e.day,messages:[...e.messages].filter((e=>e.to.id===d.id&&e.from.id===s.id||d.id===e.from.id&&e.to.id===s.id))})));i([...e]),t(!1)}),750))}),[s,d.id]);(0,l.useEffect)((()=>{o()}),[o]);const m=(0,U.X)(M.Ry().shape({newMessage:M.Z_().required("Please enter your messsage")})),x=(0,I.cI)({resolver:m}),{handleSubmit:j,register:p,control:b,formState:{errors:f},reset:N}=x;return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(c.Z,{children:(0,C.jsxs)(c.Z.Body,{children:[a&&(0,C.jsx)(O.Z,{}),(0,C.jsx)(L,{selectedUser:s}),(0,C.jsxs)("div",{className:"mt-1",children:[(0,C.jsx)(h.Z,{style:{height:"509px",width:"100%"},children:(0,C.jsx)("ul",{className:"conversation-list px-0 h-100",children:(r||[]).map(((e,s)=>(0,C.jsxs)(l.Fragment,{children:[(0,C.jsxs)("li",{className:"position-relative",children:[(0,C.jsx)("hr",{}),(0,C.jsx)("h4",{children:(0,C.jsx)("span",{className:"badge bg-light text-dark position-absolute top-0 start-50 translate-middle",children:e.day})})]}),(e.messages||[]).map(((e,s)=>(0,C.jsx)(A,{message:e,toUser:d},s)))]},s)))})}),(0,C.jsx)("div",{className:"mt-2 bg-light p-3 rounded",children:(0,C.jsx)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:j((e=>{let a=[...r[r.length-1].messages];a.push({id:r[r.length-1].messages.length+1,from:d,to:s,messages:[{type:"text",value:e.newMessage}],sendOn:(new Date).getHours()+":"+(new Date).getMinutes()});const l=[...r].map(((e,s)=>({id:e.id,day:e.day,messages:s===r.length-1?a:e.messages})));i([...l]),N()})),children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col mb-2 mb-sm-0",children:(0,C.jsx)(E.y,{type:"text",name:"newMessage",className:"border-0",placeholder:"Enter your text",register:p,errors:f,control:b},"newMessage")}),(0,C.jsx)("div",{className:"col-sm-auto",children:(0,C.jsxs)("div",{className:"btn-group",children:[(0,C.jsx)(n.rU,{to:"#",className:"btn btn-light",children:(0,C.jsx)("i",{className:"bi bi-emoji-smile fs-18"})}),(0,C.jsx)(n.rU,{to:"#",className:"btn btn-light",children:(0,C.jsx)("i",{className:"bi bi-paperclip fs-18"})}),(0,C.jsx)(n.rU,{to:"#",className:"btn btn-light",children:(0,C.jsx)("i",{className:"bi bi-camera fs-18"})}),(0,C.jsx)("button",{type:"submit",className:"btn btn-success chat-send",children:(0,C.jsx)("i",{className:"uil uil-message"})})]})})]})})})]})]})})})};var P=()=>{const[e,s]=(0,l.useState)(v[1]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i.Z,{breadCrumbItems:[{label:"Apps",path:"/apps/chat"},{label:"Chat",path:"/apps/chat",active:!0}],title:"Chat"}),(0,C.jsxs)(t.Z,{children:[(0,C.jsx)(r.Z,{lg:5,xxl:3,children:(0,C.jsx)(S,{onUserSelect:e=>{s(e)}})}),(0,C.jsx)(r.Z,{lg:7,xxl:9,children:(0,C.jsx)(B,{selectedUser:e})})]})]})}},91683:function(e,s,a){a.d(s,{Z:function(){return t}});var l=a(72791);function t(e){var s=function(e){var s=(0,l.useRef)(e);return s.current=e,s}(e);(0,l.useEffect)((function(){return function(){return s.current()}}),[])}},90183:function(e,s,a){a.d(s,{Z:function(){return i}});var l=a(78376),t=a(72791);const r=e=>{var s;return"undefined"===typeof document?null:null==e?(0,l.Z)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(s=e)&&s.nodeType&&e||null)};function i(e,s){const[a,l]=(0,t.useState)((()=>r(e)));if(!a){const s=r(e);s&&l(s)}return(0,t.useEffect)((()=>{s&&a&&s(a)}),[s,a]),(0,t.useEffect)((()=>{const s=r(e);s!==a&&l(s)}),[e,a]),a}},6755:function(e,s,a){function l(e,s){return e.classList?!!s&&e.classList.contains(s):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+s+" ")}a.d(s,{Z:function(){return l}})},17858:function(e,s,a){a.d(s,{Z:function(){return f}});var l=a(81694),t=a.n(l),r=a(75427),i=a(72791),n=a(29334),c=a(71380);var d=function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];return s.filter((e=>null!=e)).reduce(((e,s)=>{if("function"!==typeof s)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?s:function(){for(var a=arguments.length,l=new Array(a),t=0;t<a;t++)l[t]=arguments[t];e.apply(this,l),s.apply(this,l)}}),null)},o=a(67202),m=a(85007),h=a(80184);const x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function u(e,s){const a=s["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],l=x[e];return a+parseInt((0,r.Z)(s,l[0]),10)+parseInt((0,r.Z)(s,l[1]),10)}const j={[n.Wj]:"collapse",[n.Ix]:"collapsing",[n.d0]:"collapsing",[n.cn]:"collapse show"},p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:u},b=i.forwardRef(((e,s)=>{let{onEnter:a,onEntering:l,onEntered:r,onExit:n,onExiting:x,className:p,children:b,dimension:f="height",getDimensionValue:N=u,...g}=e;const v="function"===typeof f?f():f,y=(0,i.useMemo)((()=>d((e=>{e.style[v]="0"}),a)),[v,a]),Z=(0,i.useMemo)((()=>d((e=>{const s="scroll".concat(v[0].toUpperCase()).concat(v.slice(1));e.style[v]="".concat(e[s],"px")}),l)),[v,l]),w=(0,i.useMemo)((()=>d((e=>{e.style[v]=null}),r)),[v,r]),k=(0,i.useMemo)((()=>d((e=>{e.style[v]="".concat(N(v,e),"px"),(0,o.Z)(e)}),n)),[n,N,v]),C=(0,i.useMemo)((()=>d((e=>{e.style[v]=null}),x)),[v,x]);return(0,h.jsx)(m.Z,{ref:s,addEndListener:c.Z,...g,"aria-expanded":g.role?g.in:null,onEnter:y,onEntering:Z,onEntered:w,onExit:k,onExiting:C,childRef:b.ref,children:(e,s)=>i.cloneElement(b,{...s,className:t()(p,b.props.className,j[e],"width"===v&&"collapse-horizontal")})})}));b.defaultProps=p;var f=b},72709:function(e,s,a){var l=a(81694),t=a.n(l),r=a(72791),i=a(29334),n=a(71380),c=a(67202),d=a(85007),o=a(80184);const m={[i.d0]:"show",[i.cn]:"show"},h=r.forwardRef(((e,s)=>{let{className:a,children:l,transitionClasses:i={},...h}=e;const x=(0,r.useCallback)(((e,s)=>{(0,c.Z)(e),null==h.onEnter||h.onEnter(e,s)}),[h]);return(0,o.jsx)(d.Z,{ref:s,addEndListener:n.Z,...h,onEnter:x,childRef:l.ref,children:(e,s)=>r.cloneElement(l,{...s,className:t()("fade",a,l.props.className,m[e],i[e])})})}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade",s.Z=h}}]);
//# sourceMappingURL=4869.3bdfb082.chunk.js.map