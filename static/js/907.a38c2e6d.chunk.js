"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[907],{8907:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var l=t(4912),r=t(4535),i=t(6446),s=t(7700),n=t(1582),u=t(5007),d=t(5865),c=t(9720),o=t(5043),x=t(579);function m(){const[e,a]=o.useState(30);return(0,x.jsxs)(i.A,{width:200,children:[(0,x.jsx)(d.A,{id:"continuous-slider",gutterBottom:!0,children:"Volume"}),(0,x.jsxs)(l.A,{spacing:2,direction:"row",sx:{mb:1},alignItems:"center",children:[(0,x.jsx)(n.A,{}),(0,x.jsx)(c.Ay,{"aria-label":"Volume",value:e,onChange:(e,t)=>{a(t)}}),(0,x.jsx)(u.A,{})]}),(0,x.jsx)(c.Ay,{disabled:!0,defaultValue:30,"aria-label":"Disabled slider"})]})}const b=(0,r.Ay)("div")((e=>{let{theme:a}=e;return{width:300,"& .margin":{height:a.spacing(3)}}})),j=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function h(e){return"".concat(e,"\xb0C")}function A(e){return j.findIndex((a=>a.value===e))+1}function g(){return(0,x.jsxs)(b,{children:[(0,x.jsx)(d.A,{id:"discrete-slider",gutterBottom:!0,children:"Temperature"}),(0,x.jsx)(c.Ay,{marks:!0,step:10,defaultValue:20,valueLabelDisplay:"auto",getAriaValueText:h,"aria-labelledby":"discrete-slider"}),(0,x.jsx)(i.A,{className:"margin"}),(0,x.jsx)(d.A,{id:"discrete-slider-custom",gutterBottom:!0,children:"Custom marks"}),(0,x.jsx)(c.Ay,{step:10,marks:j,defaultValue:20,valueLabelDisplay:"auto",getAriaValueText:h,"aria-labelledby":"discrete-slider-custom"}),(0,x.jsx)("div",{className:"margin"}),(0,x.jsx)(d.A,{id:"discrete-slider-restrict",gutterBottom:!0,children:"Restricted values"}),(0,x.jsx)(c.Ay,{step:null,marks:j,defaultValue:20,valueLabelDisplay:"auto",getAriaValueText:h,valueLabelFormat:A,"aria-labelledby":"discrete-slider-restrict"}),(0,x.jsx)("div",{className:"margin"}),(0,x.jsx)(d.A,{id:"discrete-slider-always",gutterBottom:!0,children:"Always visible"}),(0,x.jsx)(c.Ay,{step:10,marks:j,defaultValue:80,valueLabelDisplay:"on",getAriaValueText:h,"aria-labelledby":"discrete-slider-always"})]})}var y=t(8903),p=t(3360);function v(){const[e,a]=(0,o.useState)(30);return(0,x.jsxs)(i.A,{width:250,children:[(0,x.jsx)(d.A,{id:"input-slider",gutterBottom:!0,children:"Volume"}),(0,x.jsxs)(y.Ay,{container:!0,spacing:2,alignItems:"center",children:[(0,x.jsx)(y.Ay,{item:!0,children:(0,x.jsx)(u.A,{})}),(0,x.jsx)(y.Ay,{item:!0,xs:!0,children:(0,x.jsx)(c.Ay,{value:"number"===typeof e?e:0,onChange:(e,t)=>{a(t)},"aria-labelledby":"input-slider"})}),(0,x.jsx)(y.Ay,{item:!0,children:(0,x.jsx)(p.A,{value:e,margin:"dense",sx:{width:42},onChange:e=>{a(""===e.target.value?"":Number(e.target.value))},onBlur:()=>{e<0?a(0):e>100&&a(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]})]})}function f(e){return"".concat(e,"\xb0C")}function V(){const[e,a]=(0,o.useState)([20,37]);return(0,x.jsxs)(i.A,{width:300,children:[(0,x.jsx)(d.A,{id:"range-slider",gutterBottom:!0,children:"Temperature range"}),(0,x.jsx)(c.Ay,{value:e,onChange:(e,t)=>{a(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:f})]})}function C(e){return"".concat(e,"\xb0C")}const T=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function w(){return(0,x.jsxs)(o.Fragment,{children:[(0,x.jsx)(d.A,{id:"vertical-slider",gutterBottom:!0,children:"Temperature"}),(0,x.jsxs)(i.A,{height:300,children:[(0,x.jsx)(c.Ay,{orientation:"vertical",getAriaValueText:C,defaultValue:30,"aria-labelledby":"vertical-slider"}),(0,x.jsx)(c.Ay,{disabled:!0,orientation:"vertical",getAriaValueText:C,defaultValue:30,"aria-labelledby":"vertical-slider"}),(0,x.jsx)(c.Ay,{orientation:"vertical",defaultValue:[20,37],"aria-labelledby":"vertical-slider",getAriaValueText:C,marks:T})]})]})}const k=(0,r.Ay)("div")((e=>{let{theme:a}=e;return{margin:"30px",[a.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[a.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));function B(){return(0,x.jsxs)(k,{children:[(0,x.jsx)(i.A,{className:"breadcrumb",children:(0,x.jsx)(s.Qp,{routeSegments:[{name:"Material",path:"/material"},{name:"Slider"}]})}),(0,x.jsxs)(l.A,{spacing:3,children:[(0,x.jsx)(s.Tn,{title:"Continuous Slider",children:(0,x.jsx)(m,{})}),(0,x.jsx)(s.Tn,{title:"Discrete Slider",children:(0,x.jsx)(g,{})}),(0,x.jsx)(s.Tn,{title:"Range Slider",children:(0,x.jsx)(V,{})}),(0,x.jsx)(s.Tn,{title:"Slider with Input",children:(0,x.jsx)(v,{})}),(0,x.jsx)(s.Tn,{title:"Vertical Slider",children:(0,x.jsx)(w,{})})]})]})}}}]);
//# sourceMappingURL=907.a38c2e6d.chunk.js.map