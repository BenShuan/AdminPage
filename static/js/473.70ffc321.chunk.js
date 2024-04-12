"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[473],{473:(e,i,n)=>{n.r(i),n.d(i,{default:()=>de});var l=n(4912),r=n(4535),o=n(6446),s=n(7700),t=n(5043),a=n(8977),c=n(35),d=n(2788),u=n(6600),h=n(9347),x=n(5316),m=n(8533),j=n(579);function p(){const[e,i]=(0,t.useState)(!1),n=()=>i(!1);return(0,j.jsxs)(o.A,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:()=>i(!0),children:"Open form dialog"}),(0,j.jsxs)(c.A,{open:e,onClose:n,"aria-labelledby":"form-dialog-title",children:[(0,j.jsx)(u.A,{id:"form-dialog-title",children:"Subscribe"}),(0,j.jsxs)(x.A,{children:[(0,j.jsx)(m.A,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,j.jsx)(d.A,{fullWidth:!0,autoFocus:!0,id:"name",type:"email",margin:"dense",label:"Email Address"})]}),(0,j.jsxs)(h.A,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"secondary",onClick:n,children:"Cancel"}),(0,j.jsx)(a.A,{onClick:n,color:"primary",children:"Subscribe"})]})]})]})}function A(){const[e,i]=(0,t.useState)(!1),n=()=>i(!1);return(0,j.jsxs)(o.A,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:()=>i(!0),children:"Open alert dialog"}),(0,j.jsxs)(c.A,{open:e,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,j.jsx)(u.A,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,j.jsx)(x.A,{children:(0,j.jsx)(m.A,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,j.jsxs)(h.A,{children:[(0,j.jsx)(a.A,{onClick:n,color:"primary",children:"Disagree"}),(0,j.jsx)(a.A,{onClick:n,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var g=n(2505),b=n(2177),f=n(1045),y=n(7470),C=n(5721),v=n(681),k=n(3851),w=n(6353),S=n(5865);const T=["username@gmail.com","user02@gmail.com"];function D(e){const{onClose:i,selectedValue:n,...l}=e;function r(e){i(e)}return(0,j.jsxs)(c.A,{onClose:function(){i(n)},"aria-labelledby":"simple-dialog-title",...l,children:[(0,j.jsx)(u.A,{id:"simple-dialog-title",children:"Set backup account"}),(0,j.jsxs)(C.A,{children:[T.map((e=>(0,j.jsxs)(v.Ay,{button:!0,onClick:()=>r(e),children:[(0,j.jsx)(k.A,{children:(0,j.jsx)(f.A,{sx:{backgroundColor:y.A[100],color:y.A[600]},children:(0,j.jsx)(b.A,{})})}),(0,j.jsx)(w.A,{primary:e})]},e))),(0,j.jsxs)(v.Ay,{button:!0,onClick:()=>r("addAccount"),children:[(0,j.jsx)(k.A,{children:(0,j.jsx)(f.A,{children:(0,j.jsx)(g.A,{})})}),(0,j.jsx)(w.A,{primary:"add account"})]})]})]})}function G(){const[e,i]=(0,t.useState)(!1),[n,l]=(0,t.useState)("user02@gmail.com");return(0,j.jsxs)(o.A,{children:[(0,j.jsxs)(S.A,{variant:"subtitle1",children:["Selected: ",n]}),(0,j.jsx)("br",{}),(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:()=>i(!0),children:"Open simple dialog"}),(0,j.jsx)(D,{selectedValue:n,open:e,onClose:e=>{i(!1),l(e)}})]})}var O=n(3193),P=n(4605),W=n(8356),B=n(2143),L=n(2221),z=n(4598);const N=(0,r.Ay)("div")((e=>{let{theme:i}=e;return{"& form":{display:"flex",margin:"auto",flexDirection:"column",width:"fit-content"},"& .formControl":{marginTop:i.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:i.spacing(1)}}}));function F(){const[e,i]=(0,t.useState)(!1),[n,l]=(0,t.useState)(!0),[r,o]=(0,t.useState)("sm");function s(){i(!1)}return(0,j.jsxs)(N,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:function(){i(!0)},children:"Open max-width dialog"}),(0,j.jsxs)(c.A,{open:e,fullWidth:n,maxWidth:r,onClose:s,"aria-labelledby":"max-width-dialog-title",children:[(0,j.jsx)(u.A,{id:"max-width-dialog-title",children:"Optional sizes"}),(0,j.jsxs)(x.A,{children:[(0,j.jsx)(m.A,{children:"You can set my maximum width and whether to adapt or not."}),(0,j.jsxs)("form",{noValidate:!0,children:[(0,j.jsxs)(O.A,{className:"formControl",children:[(0,j.jsx)(W.A,{htmlFor:"max-width",children:"maxWidth"}),(0,j.jsxs)(L.A,{value:r,onChange:function(e){o(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[(0,j.jsx)(B.A,{value:!1,children:"false"}),(0,j.jsx)(B.A,{value:"xs",children:"xs"}),(0,j.jsx)(B.A,{value:"sm",children:"sm"}),(0,j.jsx)(B.A,{value:"md",children:"md"}),(0,j.jsx)(B.A,{value:"lg",children:"lg"}),(0,j.jsx)(B.A,{value:"xl",children:"xl"})]})]}),(0,j.jsx)(P.A,{className:"formControlLabel",label:"Full width",control:(0,j.jsx)(z.A,{checked:n,onChange:function(e){l(e.target.checked)},value:"fullWidth"})})]})]}),(0,j.jsx)(h.A,{children:(0,j.jsx)(a.A,{onClick:s,color:"primary",children:"Close"})})]})]})}var M=n(4802),R=n(2314),E=n(6240),U=n(9336),V=n(7392),q=n(4836),H=n(5263),_=n(3288);const I=(0,t.forwardRef)((function(e,i){return(0,j.jsx)(q.A,{direction:"up",ref:i,...e})}));function K(){const e=(0,E.A)(),[i,n]=(0,t.useState)(!1),l=()=>n(!1);return(0,j.jsxs)(o.A,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:()=>n(!0),children:"Open full-screen dialog"}),(0,j.jsxs)(c.A,{fullScreen:!0,open:i,onClose:l,TransitionComponent:I,children:[(0,j.jsx)(R.A,{sx:{position:"relative"},children:(0,j.jsxs)(H.A,{children:[(0,j.jsx)(V.A,{edge:"start",color:"inherit",onClick:l,"aria-label":"Close",children:(0,j.jsx)(M.A,{})}),(0,j.jsx)(_.H6,{sx:{flex:1,marginLeft:e.spacing(2)},children:"Sound"}),(0,j.jsx)(a.A,{color:"inherit",onClick:l,children:"save"})]})}),(0,j.jsxs)(C.A,{children:[(0,j.jsx)(v.Ay,{children:(0,j.jsx)(w.A,{primary:"Phone ringtone",secondary:"Titania"})}),(0,j.jsx)(U.A,{}),(0,j.jsx)(v.Ay,{children:(0,j.jsx)(w.A,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}const Q=(0,t.forwardRef)((function(e,i){return(0,j.jsx)(q.A,{direction:"up",ref:i,...e})}));function Y(){const[e,i]=(0,t.useState)(!1),n=()=>i(!1);return(0,j.jsxs)("div",{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:()=>i(!0),children:"Slide in alert dialog"}),(0,j.jsxs)(c.A,{open:e,keepMounted:!0,onClose:n,TransitionComponent:Q,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[(0,j.jsx)(u.A,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),(0,j.jsx)(x.A,{children:(0,j.jsx)(m.A,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,j.jsxs)(h.A,{children:[(0,j.jsx)(a.A,{onClick:n,color:"primary",children:"Disagree"}),(0,j.jsx)(a.A,{onClick:n,color:"primary",children:"Agree"})]})]})]})}var J=n(3600);function X(){const[e,i]=(0,t.useState)(!1),n=(0,E.A)(),l=(0,J.A)(n.breakpoints.down("sm")),r=()=>i(!1);return(0,j.jsxs)(o.A,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"primary",onClick:()=>i(!0),children:"Open responsive dialog"}),(0,j.jsxs)(c.A,{fullScreen:l,open:e,onClose:r,"aria-labelledby":"responsive-dialog-title",children:[(0,j.jsx)(u.A,{id:"responsive-dialog-title",children:"Use Google's location service?"}),(0,j.jsx)(x.A,{children:(0,j.jsx)(m.A,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,j.jsxs)(h.A,{children:[(0,j.jsx)(a.A,{onClick:r,color:"primary",children:"Disagree"}),(0,j.jsx)(a.A,{onClick:r,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}const Z=(0,r.Ay)(u.A)((e=>{let{theme:i}=e;return{margin:0,padding:i.spacing(2),"& .closeButton":{position:"absolute",right:i.spacing(1),top:i.spacing(1),color:i.palette.grey[500]}}})),$=e=>{const{children:i,onClose:n}=e;return(0,j.jsxs)(Z,{disableTypography:!0,children:[(0,j.jsx)(S.A,{variant:"h6",children:i}),n?(0,j.jsx)(V.A,{"aria-label":"Close",className:"closeButton",onClick:n,children:(0,j.jsx)(M.A,{})}):null]})},ee=(0,r.Ay)(x.A)((e=>{let{theme:i}=e;return{"&.root":{padding:i.spacing(2)}}})),ie=(0,r.Ay)(h.A)((e=>{let{theme:i}=e;return{"&.root":{margin:0,padding:i.spacing(1)}}})),ne=()=>{const[e,i]=(0,t.useState)(!1),n=()=>i(!1);return(0,j.jsxs)("div",{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"secondary",onClick:()=>i(!0),children:"Open dialog"}),(0,j.jsxs)(c.A,{onClose:n,"aria-labelledby":"customized-dialog-title",open:e,children:[(0,j.jsx)($,{id:"customized-dialog-title",onClose:n,children:"Modal title"}),(0,j.jsxs)(ee,{dividers:!0,children:[(0,j.jsx)(S.A,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),(0,j.jsx)(S.A,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),(0,j.jsx)(S.A,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),(0,j.jsx)(ie,{children:(0,j.jsx)(a.A,{onClick:n,color:"primary",children:"Save changes"})})]})]})};var le=n(4256),re=n(4714);const oe=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function se(e){const{onClose:i,value:n,open:l,...r}=e,[o,s]=(0,t.useState)(n),d=(0,t.useRef)(null);(0,t.useEffect)((()=>{l||s(n)}),[n,l]);return(0,j.jsxs)(c.A,{maxWidth:"xs",disableEscapeKeyDown:!0,TransitionProps:{onExiting:function(){null!==d.current&&d.current.focus()}},"aria-labelledby":"confirmation-dialog-title",open:l,...r,children:[(0,j.jsx)(u.A,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),(0,j.jsx)(x.A,{dividers:!0,children:(0,j.jsx)(re.A,{ref:d,"aria-label":"Ringtone",name:"ringtone",value:o,onChange:(e,i)=>s(i),children:oe.map((e=>(0,j.jsx)(P.A,{value:e,control:(0,j.jsx)(le.A,{}),label:e},e)))})}),(0,j.jsxs)(h.A,{children:[(0,j.jsx)(a.A,{variant:"outlined",color:"secondary",onClick:()=>i(),children:"Cancel"}),(0,j.jsx)(a.A,{onClick:()=>i(o),color:"primary",children:"Ok"})]})]})}const te=(0,r.Ay)("div")((e=>{let{theme:i}=e;return{width:"100%",maxWidth:360,backgroundColor:i.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}}));function ae(){const[e,i]=t.useState(!1),[n,l]=t.useState("Dione");return(0,j.jsx)(te,{children:(0,j.jsxs)(C.A,{component:"div",role:"list",children:[(0,j.jsx)(v.Ay,{button:!0,divider:!0,disabled:!0,role:"listitem",children:(0,j.jsx)(w.A,{primary:"Interruptions"})}),(0,j.jsx)(v.Ay,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){i(!0)},role:"listitem",children:(0,j.jsx)(w.A,{primary:"Phone ringtone",secondary:n})}),(0,j.jsx)(v.Ay,{button:!0,divider:!0,disabled:!0,role:"listitem",children:(0,j.jsx)(w.A,{primary:"Default notification ringtone",secondary:"Tethys"})}),(0,j.jsx)(se,{keepMounted:!0,open:e,value:n,className:"paper",id:"ringtone-menu",onClose:function(e){i(!1),e&&l(e)}})]})})}const ce=(0,r.Ay)("div")((e=>{let{theme:i}=e;return{margin:"30px",[i.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[i.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));function de(){return(0,j.jsxs)(ce,{children:[(0,j.jsx)(o.A,{className:"breadcrumb",children:(0,j.jsx)(s.Qp,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),(0,j.jsxs)(l.A,{spacing:3,children:[(0,j.jsx)(s.Tn,{title:"simple Dialog",children:(0,j.jsx)(G,{})}),(0,j.jsx)(s.Tn,{title:"alert dialog",children:(0,j.jsx)(A,{})}),(0,j.jsx)(s.Tn,{title:"transition",children:(0,j.jsx)(Y,{})}),(0,j.jsx)(s.Tn,{title:"form dialog",children:(0,j.jsx)(p,{})}),(0,j.jsx)(s.Tn,{title:"customized dialog",children:(0,j.jsx)(ne,{})}),(0,j.jsx)(s.Tn,{title:"full-screen dialog",children:(0,j.jsx)(K,{})}),(0,j.jsx)(s.Tn,{title:"optimized size dialog",children:(0,j.jsx)(F,{})}),(0,j.jsx)(s.Tn,{title:"responsive dialog",children:(0,j.jsx)(X,{})}),(0,j.jsx)(s.Tn,{title:"confirmation dialog",children:(0,j.jsx)(ae,{})})]})]})}}}]);
//# sourceMappingURL=473.70ffc321.chunk.js.map