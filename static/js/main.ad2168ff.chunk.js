(this["webpackJsonpmy-ocr-app"]=this["webpackJsonpmy-ocr-app"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(14),r=n.n(i),o=(n(65),n(42)),s=n(43),j=n(54),l=n(53),d=(n(66),n(10)),u=(n(67),n(44)),b=n.n(u),h=n(45),O=n.n(h),g=n(46),x=n.n(g),m=n(129),f=n(2),v=function(){var e=Object(c.useState)({unit:"%"}),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),o=Object(d.a)(r,2),s=(o[0],o[1],Object(c.useState)(null)),j=Object(d.a)(s,2),l=j[0],u=j[1],h=Object(c.useState)(!0),g=Object(d.a)(h,2),v=g[0],p=g[1],y=Object(c.useState)(!1),C=Object(d.a)(y,2),S=C[0],w=C[1],k=Object(c.useState)(!1),L=Object(d.a)(k,2),F=L[0],B=L[1],I=Object(c.useState)(),R=Object(d.a)(I,2),T=R[0],D=R[1],E=Object(c.useState)(""),M=Object(d.a)(E,2),N=M[0],J=M[1];var P=Object(c.useState)("user"),U=Object(d.a)(P,2),z=U[0],A=U[1],G={width:500,height:500,facingMode:z},H=a.a.useRef(null),W=Object(c.useState)(!1),q=Object(d.a)(W,2),K=q[0],Q=q[1],V=Object(c.useState)(null),X=Object(d.a)(V,2),Y=X[0],Z=X[1],$=a.a.useCallback((function(){var e=H.current.getScreenshot();Z(e),Q(!0),ne(!1),w(!0),p(!0),console.log("cap",e)}),[H]),_=Object(c.useState)(!1),ee=Object(d.a)(_,2),te=ee[0],ne=ee[1];return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("div",{children:K&&Object(f.jsxs)("div",{style:{marginLeft:"20%",width:"60%"},children:[Object(f.jsx)(O.a,{src:Y,onImageLoaded:D,crop:n,onChange:i,style:{marginTop:5}}),Object(f.jsx)("br",{})]})}),te&&Object(f.jsx)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center"},children:Object(f.jsx)(x.a,{audio:!1,height:290,ref:H,screenshotFormat:"image/jpeg",width:"100%",videoConstraints:G})}),Object(f.jsx)("div",{children:l&&Object(f.jsx)("img",{src:l,alt:"*"})}),Object(f.jsxs)("div",{style:{display:"flex",marginTop:5,justifyContent:"center"},children:[v&&Object(f.jsx)(m.a,{variant:"contained",color:"primary",style:{marginLeft:5},onClick:function(){ne(!0),p(!1),w(!1),B(!1),J(""),Q(!1),u(null)},children:"Open Camera"}),S&&Object(f.jsx)(m.a,{variant:"contained",color:"primary",style:{marginLeft:5},onClick:function(){console.log(n);var e=document.createElement("canvas"),t=T.naturalWidth/T.width,c=T.naturalHeight/T.height;e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(T,n.x*t,n.y*c,n.width*t,n.height*c,0,0,n.width,n.height);var a=e.toDataURL("image/jpeg");i(!0),p(!0),u(a),B(!0)},children:"Crop"}),F&&Object(f.jsx)(m.a,{variant:"contained",color:"primary",style:{marginLeft:5},onClick:function(){J("Loading"),b.a.recognize(l,"eng",{logger:function(e){return console.log(e)}}).catch((function(e){console.error(e)})).then((function(e){var t=e.data.text;console.log(t),J(t)}))},children:"Result"}),te&&Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{variant:"contained",color:"primary",style:{width:"100px",marginLeft:5},onClick:$,children:"Click1"}),Object(f.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){A("user")},children:"User"}),Object(f.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){A("environment")},children:"En"})]})]}),Object(f.jsx)("div",{children:N})]})},p=n(131),y=n(134),C=n(132),S=n(133),w=n(52),k=n.n(w),L=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}})),F=function(){var e=L();return Object(f.jsxs)("div",{children:[Object(f.jsx)(y.a,{position:"static",children:Object(f.jsx)(C.a,{variant:"dense",children:Object(f.jsx)(S.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(f.jsx)(k.a,{})})})}),Object(f.jsx)("div",{className:"Main",children:Object(f.jsx)(v,{})})]})},B=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(F,{})})}}]),n}(c.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),I()},65:function(e,t,n){},66:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.ad2168ff.chunk.js.map