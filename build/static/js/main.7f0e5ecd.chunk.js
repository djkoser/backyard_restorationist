(this.webpackJsonpbackyard_restoration=this.webpackJsonpbackyard_restoration||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),i=(n(135),n(136),n(137),n(9)),o=n(7),l=n(6),d=n(0),u=function(){return Object(d.jsx)("footer",{children:Object(d.jsx)(l.b,{id:"donationLink",to:"/donation",children:"Donate"})})},j=n(2),b=n(3),h=n.n(b),O=Object(i.f)((function(e){var t=e.invertColors,n=Object(c.useState)(!1),a=Object(j.a)(n,2),s=a[0],r=a[1];return Object(d.jsxs)("nav",{children:[Object(d.jsxs)("div",{className:"linkBox ".concat(s?"linkBoxOpened":"linkBoxClosed"),children:[Object(d.jsxs)(l.b,{to:"/dash",children:[" ",Object(d.jsx)("strong",{children:"Dashboard"})," "]}),Object(d.jsx)(l.b,{to:"/account",children:Object(d.jsx)("strong",{children:"My Account"})}),Object(d.jsx)(l.b,{to:"/search/f",children:Object(d.jsx)("strong",{children:"Forbs"})}),Object(d.jsx)(l.b,{to:"/search/w",children:Object(d.jsx)("strong",{children:"Woody Species"})}),Object(d.jsx)(l.b,{to:"/search/g",children:Object(d.jsx)("strong",{children:"Graminoids"})}),Object(d.jsx)("span",{className:"logoutLink",onClick:function(){h.a.delete("/api/logout").then((function(t){e.history.push("/")})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("strong",{children:"Logout"})})]}),Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return r(!s)},children:[Object(d.jsx)("div",{className:"".concat(t?"invertColors":"hamburgerPatties"," ")}),Object(d.jsx)("div",{className:"".concat(t?"invertColors":"hamburgerPatties"," ")}),Object(d.jsx)("div",{className:"".concat(t?"invertColors":"hamburgerPatties"," ")})]})]})})),m=n(22),x=Object(i.f)((function(e){var t,n,a,s,r,i,o,l,u=e.width,j=e.height,b=e.first_gdd35,h=e.last_gdd35,O=e.margin,x=e.userMethods,p=function(e){var t=new Date;t.setDate(e.substring(3,5));var n=Number.parseInt(e.substring(0,2));return t.setMonth(n),t.getTime()},f=function(){for(var e=[],t=1/x.length,n=1/x.length;n<1;n+=t)e.push(m.b(n));return e}(),g=(x.map((function(e){return"Weed: ".concat(e.common_name,": ").concat(e.name," - ").concat(e.description)})),Object(c.useRef)());b&&h&&(t=new Date,n=new Date(t.getFullYear(),11,31),a=new Date(t.getFullYear(),0,1),i=(s=n.getTime()-a.getTime())-(r=p(h)-p(b)),o=r/s/6*(u-O.left-O.right),l=i/s/6*(u-O.left-O.right)),Object(c.useEffect)((function(){m.d(g.current).attr("class","timelineSVG").append("g").attr("transform","translate(0,".concat(j-O.bottom,")")).attr("class","timelineAxis").call(m.a(y)).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)").append("g").attr("transform","translate(200,275)").attr("height","25").attr("width","50").append("text").attr("font-size","14").attr("font-family","raleway").text("Month")}),[]);var v=function(){var e=m.d(g.current).selectAll("g").data(x).enter().append("g").attr("y",(function(e,t){return"".concat((j-O.bottom)/x.length*t)})).attr("fill",(function(e,t){return f[t]})),t=e.selectAll("rect").data((function(e){return[{visibility:e.january,width:l},{visibility:e.february,width:l},{visibility:e.march,width:l},{visibility:e.april,width:l},{visibility:e.may,width:o},{visibility:e.june,width:o},{visibility:e.july,width:o},{visibility:e.august,width:o},{visibility:e.september,width:o},{visibility:e.october,width:o},{visibility:e.november,width:l},{visibility:e.december,width:l}]}),(function(e){return e}));t.enter().append("rect").attr("width",(function(e){return e.width})).attr("height",(function(e){return x.length>6?"".concat((250-O.bottom-O.top-50)/x.length):"25"})).attr("x",(function(e,t,n){return function(e,t){for(var n=O.left,c=0;c<e;c++)n+=Number.parseInt(t[c].getAttribute("width"));return n}(t,n)})).attr("y",(function(e,t,n){return n[t].parentElement.getAttribute("y")})).style("fill",(function(e,t,n){return n[t].parentElement.getAttribute("color")})).attr("visibility",(function(e){return Number.parseInt(e.visibility)?"visible":"hidden"})),e.exit().remove(),t.exit().remove()};Object(c.useEffect)((function(){console.log("useEffect1"),v()}),[x,g.current]);var y=m.c().domain([a,n]).range([O.left,u-O.right]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("svg",{ref:g,preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 ".concat(u," ").concat(j)})})})),p=n(8),f={userMethods:[],loading:!1,failed:!1},g="GET_METHODS",v="TOGGLE_METHOD";var y=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.mgmtMethodReducer.userMethods})),c=e.weedMethod,a=!1;return n.reduce((function(e,t){return c.method_id===t.method_id?++e:e}),0)&&(a=!0),Object(d.jsxs)("div",{className:"switchBody",children:[Object(d.jsxs)("div",{className:"switchPara",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"Name: "}),c.name]}),Object(d.jsx)("div",{className:"switchFlexBox",children:Object(d.jsxs)("div",{style:a?null:{transform:"translateY(15px)"},className:"switch",children:[Object(d.jsx)("h5",{style:a?null:{transform:"translateY(-6px)"},className:"switchLabel",children:a?"Remove from Timeline":"Add to Timeline"}),Object(d.jsx)("input",{type:"checkbox",id:"switch".concat(c.method_id),checked:a,onChange:function(){t(function(e){var t=h.a.put("/api/wdctrl/".concat(e)).then((function(e){return e.data})).catch((function(e){return f.userMethods}));return{type:v,payload:t}}(c.method_id))}}),Object(d.jsx)("label",{htmlFor:"switch".concat(c.method_id),children:Object(d.jsx)("span",{className:"switchSpan"})})]})})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"treatmentDesc",children:[Object(d.jsx)("strong",{children:"Description: "}),c.description]})]})},w=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),o=i[0],l=i[1],u=function(e){h.a.get("/api/weeds?vegType=".concat(e)).then((function(e){s(e.data.map((function(e){return Object(d.jsx)("option",{value:e.weed_id,children:e.common_name},"weed".concat(e.weed_id))})))})).catch((function(e){return console.log(e)}))};return Object(c.useEffect)((function(){u("f")}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("fieldset",{className:"dropdownBox",children:[Object(d.jsx)("h4",{id:"dropdownLegend",children:"Select Management Options"}),Object(d.jsxs)("select",{onChange:function(e){return u(e.target.value)},children:[Object(d.jsx)("option",{value:"f",children:"Forbs"}),Object(d.jsx)("option",{value:"w",children:"Woody Species"}),Object(d.jsx)("option",{value:"g",children:"Graminoids"})]}),Object(d.jsx)("select",{onChange:function(e){return t=e.target.value,void h.a.get("/api/weeds/methods/".concat(t)).then((function(e){l(e.data.map((function(e){return Object(d.jsx)(y,{weedMethod:e},"method".concat(e.method_id))})))})).catch((function(e){return console.log(e)}));var t},disabled:a.length<=0,children:a}),Object(d.jsx)("br",{}),o]})})},N=function(){var e=Object(o.c)((function(e){return e.userInfoReducer.hardiness_zone})),t=Object(o.c)((function(e){return e.userInfoReducer.growing_season_length})),n=Object(o.c)((function(e){return e.userInfoReducer.first_gdd35})),c=Object(o.c)((function(e){return e.userInfoReducer.last_gdd35})),a=Object(o.c)((function(e){return e.mgmtMethodReducer.userMethods}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{id:"dashboardDecoration",children:[Object(d.jsxs)("div",{id:"timelineHeaderBox",children:[Object(d.jsxs)("section",{id:"growingInfoBox",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)("strong",{children:"Zone:    "}),e]}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("strong",{children:"Average Growing Days (GDD35):    "}),t]}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("strong",{children:"Average Season Start Date:    "}),n]}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("strong",{children:"Average Season End Date:    "}),c]})]}),Object(d.jsx)("h2",{id:"dashHeader",children:Object(d.jsx)("strong",{children:"Weed Management Timeline"})})]}),Object(d.jsx)("div",{id:"d3Container",children:Object(d.jsx)(x,{height:300,width:400,first_gdd35:n,last_gdd35:c,userMethods:a,margin:{top:20,right:0,bottom:90,left:40}})})]}),Object(d.jsx)(w,{}),Object(d.jsx)(u,{})]})},C=n(4),S={user_id:0,email:"",first_name:"",last_name:"",street:"",city:"",state:"",zipcode:"",growing_season_length:0,first_gdd35:"",hardiness_zone:"",loading:!1,failed:!1},T="ADD_RETRIEVED_INFO",k=function(e){return{type:T,payload:e}};var _=function(e){var t=Object(o.b)(),n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),u=Object(j.a)(i,2),b=u[0],O=u[1],m=function(){h.a.post("/api/login",{email:s,password:b}).then((function(n){t(function(){var e=h.a.get("/api/wdctrl").then((function(e){return e.data})).catch((function(e){return f.userMethods}));return{type:g,payload:e}}()),t(k(n.data)),e.history.push("/dash")})).catch((function(e){O(""),r(""),C.b.error("Incorrect username or password, please try again or register for an account.")}))};return Object(d.jsxs)("div",{id:"loginComponent",children:[Object(d.jsxs)("article",{id:"loginWelcomeTextBox",children:[Object(d.jsx)("h1",{className:"loginWelcomeText",children:"Welcome to Our Community!"}),Object(d.jsx)("h4",{className:"loginWelcomeText",children:" BackyardRestoration.net is dedicated to providing you with the resources necessary to complete your own backyard ecological restorations."}),Object(d.jsx)("h4",{className:"loginWelcomeText",children:"This site is predominantly geared-toward prairie restorations in the upper midwest, but will be expanding to include other regions and ecosystems in the future."}),Object(d.jsx)("h4",{className:"loginWelcomeText",children:'Simply click the "Register" Button to begin or log in with your email and password.'})]}),Object(d.jsxs)("div",{id:"loginContainer",children:[Object(d.jsx)(C.a,{}),Object(d.jsx)("div",{id:"siteTitleBorder",children:Object(d.jsx)("h1",{children:Object(d.jsx)("strong",{children:"Backyard Restoration.net"})})}),Object(d.jsxs)("form",{id:"loginBox",children:[Object(d.jsx)("label",{htmlFor:"emailLoginInput",children:"Email"}),Object(d.jsx)("input",{id:"emailLoginInput",placeholder:"Email",type:"text",value:s,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"passwordLoginInput",children:"Password"}),Object(d.jsx)("input",{id:"passwordLoginInput",placeholder:"Password",type:"password",value:b,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)(l.b,{id:"forgotPwdLink",to:{pathname:"./requestReset",state:{email:s}},children:Object(d.jsx)("strong",{children:"Forgot Password"})}),Object(d.jsxs)("div",{className:"buttonBox",children:[Object(d.jsx)("button",{id:"loginButton",onClick:function(e){e.preventDefault(),s&&b?m():C.b.error("Please enter a username and password or click below to register for an account.")},children:"Login"}),Object(d.jsx)("button",{id:"registerButton",onClick:function(t){t.preventDefault(),e.history.push("/register")},children:"Register"})]})]}),Object(d.jsx)("h1",{id:"mobileWelcomeText",children:Object(d.jsx)("strong",{children:"Welcome"})})]})]})},R=function(e){var t=e.loading;return Object(d.jsxs)("div",{id:"loaderBox",style:t?{display:"inline-flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}:{display:"none"},children:[Object(d.jsx)("div",{className:"loaderText",children:"Calculating growing parameters for your location based upon 5 years of local weather data, courtesy of the National Oceanic and Atmospheric Administration (NOAA). This could take several minutes depending on their server traffic."}),Object(d.jsxs)("svg",{className:"svgContainer",viewBox:"0 0 620 600",preserveAspectRatio:"xMinYMin meet",children:[Object(d.jsx)("svg",{x:"340",y:"80",id:"sun",width:"275",viewBox:"0 0 10 10",preserveAspectRatio:"xMinYMin meet",children:Object(d.jsxs)("g",{"transform-origin":"5 5",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",begin:"0s",dur:"20s",type:"rotate",from:"0",to:"360",repeatCount:"indefinite"}),Object(d.jsx)("path",{fill:"none",d:"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"}),Object(d.jsx)("path",{fill:"none",d:"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"}),Object(d.jsx)("path",{fill:"none",d:"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"}),Object(d.jsx)("path",{fill:"none",d:"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"}),Object(d.jsx)("path",{fill:"none",d:"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"}),Object(d.jsx)("path",{fill:"none",d:"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"}),Object(d.jsx)("path",{fill:"none",d:"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"}),Object(d.jsx)("path",{fill:"none",d:"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"}),Object(d.jsx)("path",{fill:"none",d:"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"}),Object(d.jsx)("path",{fill:"none",d:"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"}),Object(d.jsx)("path",{fill:"none",d:"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"}),Object(d.jsx)("path",{fill:"none",d:"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"}),Object(d.jsx)("path",{fill:"none",d:"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"})]})}),Object(d.jsx)("svg",{version:"1.1",x:"40",height:"600",id:"cloud",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10",preserveAspectRatio:"xMinYMin meet",children:Object(d.jsx)("path",{fill:"none",d:"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"})}),Object(d.jsxs)("svg",{x:"100",y:"140",width:"500",viewBox:"0 0 200 1",className:"rain",children:[Object(d.jsx)("rect",{x:"0",className:"drop"}),Object(d.jsx)("rect",{x:"20",className:"drop"}),Object(d.jsx)("rect",{x:"40",className:"drop"}),Object(d.jsx)("rect",{x:"60",className:"drop"}),Object(d.jsx)("rect",{x:"80",className:"drop"}),Object(d.jsx)("rect",{x:"100",className:"drop"}),Object(d.jsx)("rect",{x:"120",className:"drop"}),Object(d.jsx)("rect",{x:"140",className:"drop"}),Object(d.jsx)("rect",{x:"160",className:"drop"}),Object(d.jsx)("rect",{x:"180",className:"drop"})]})]})]})},E=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.userInfoReducer.email})),a=Object(o.c)((function(e){return e.userInfoReducer.first_name})),s=Object(o.c)((function(e){return e.userInfoReducer.last_name})),r=Object(o.c)((function(e){return e.userInfoReducer.street})),i=Object(o.c)((function(e){return e.userInfoReducer.city})),l=Object(o.c)((function(e){return e.userInfoReducer.state})),b=Object(o.c)((function(e){return e.userInfoReducer.zipcode})),m=Object(c.useState)(a),x=Object(j.a)(m,2),p=x[0],f=x[1],g=Object(c.useState)(s),v=Object(j.a)(g,2),y=v[0],w=v[1],N=Object(c.useState)(n),S=Object(j.a)(N,2),T=S[0],_=S[1],E=Object(c.useState)("This is a fake password"),M=Object(j.a)(E,2),B=M[0],P=M[1],D=Object(c.useState)(r),F=Object(j.a)(D,2),I=F[0],L=F[1],A=Object(c.useState)(i),z=Object(j.a)(A,2),G=z[0],Y=z[1],W=Object(c.useState)(l),q=Object(j.a)(W,2),H=q[0],U=q[1],J=Object(c.useState)(b),V=Object(j.a)(J,2),K=V[0],Z=V[1],$=Object(c.useState)(!0),Q=Object(j.a)($,2),X=Q[0],ee=Q[1],te=Object(c.useState)(!0),ne=Object(j.a)(te,2),ce=ne[0],ae=ne[1],se=Object(c.useState)(!0),re=Object(j.a)(se,2),ie=re[0],oe=re[1],le=Object(c.useState)(!0),de=Object(j.a)(le,2),ue=de[0],je=de[1],be=Object(c.useState)(!1),he=Object(j.a)(be,2),Oe=he[0],me=he[1],xe=function(e){switch(e){case"name":return void(X?ee(!1):(ee(!0),h.a.put("/api/user/name",{first_name:p,last_name:y}).then((function(e){t(k(e.data));var n=e.data,c=n.email,a=n.first_name,s=n.last_name,r=n.street,i=n.city,o=n.state,l=n.zipcode;f(a),w(s),_(c),P("This is a fake password"),L(r),Y(i),U(o),Z(l),C.b.success("Your name has been updated successfully.")})).catch((function(e){return C.b.error("There was an error while attempting to change your credentials, please notify us of this problem at BackyardRestorationNet@gmail.com and we will work to find a solution as quickly as possilble.")}))));case"email":return void(ce?ae(!1):(ae(!0),h.a.put("/api/user/email",{email:T}).then((function(e){t(k(e.data));var n=e.data,c=n.email,a=n.first_name,s=n.last_name,r=n.street,i=n.city,o=n.state,l=n.zipcode;f(a),w(s),_(c),P("This is a fake password"),L(r),Y(i),U(o),Z(l),C.b.success("Your email has been updated successfully.")})).catch((function(e){return C.b.error("There was an error while attempting to change your credentials, please notify us of this problem at BackyardRestorationNet@gmail.com and we will work to find a solution as quickly as possilble.")}))));case"password":return void(ie?(oe(!1),P("")):(oe(!0),h.a.put("/api/user/password",{password:B}).then((function(e){t(k(e.data));var n=e.data,c=n.email,a=n.first_name,s=n.last_name,r=n.street,i=n.city,o=n.state,l=n.zipcode;f(a),w(s),_(c),P("This is a fake password"),L(r),Y(i),U(o),Z(l),C.b.success("Your password has been updated successfully.")})).catch((function(e){return C.b.error("There was an error while attempting to change your credentials, please notify us of this problem at BackyardRestorationNet@gmail.com and we will work to find a solution as quickly as possilble.")}))));case"address":return void(ue?je(!1):(me(!0),je(!0),h.a.put("/api/user/address",{street:I,city:G,state:H,zipcode:K}).then((function(e){setTimeout((function(){t(k(e.data));var n=e.data,c=n.email,a=n.first_name,s=n.last_name,r=n.street,i=n.city,o=n.state,l=n.zipcode;f(a),w(s),_(c),P("This is a fake password"),L(r),Y(i),U(o),Z(l),me(!1),C.b.success("Your address has been updated successfully.")}),3e3)})).catch((function(e){me(!1),C.b.error("There was an error while attempting to change your credentials, please notify us of this problem at BackyardRestorationNet@gmail.com and we will work to find a solution as quickly as possilble.")}))))}};return Object(d.jsxs)("div",{id:"myAccountBkgd",children:[Object(d.jsx)(O,{invertColors:!0}),Object(d.jsx)(C.a,{}),Object(d.jsx)("h1",{id:"myAccountHeader",children:"My Account"}),Object(d.jsxs)("main",{className:"myAccountForm",style:Oe?{display:"none"}:{display:"inline-flex"},children:[Object(d.jsxs)("div",{id:"nameEmailPassword",children:[Object(d.jsxs)("fieldset",{className:" editBoxes",children:[Object(d.jsx)("h2",{className:"accountPageText",children:"Name"}),Object(d.jsx)("input",{className:"".concat(X?"disabledTheme":null),disabled:X,type:"text",value:p,onChange:function(e){f(e.target.value)}}),Object(d.jsx)("input",{className:"".concat(X?"disabledTheme":null),disabled:X,type:"text",value:y,onChange:function(e){w(e.target.value)}})]}),Object(d.jsx)("button",{onClick:function(){return xe("name")},children:X?"Edit":"Submit"}),Object(d.jsxs)("fieldset",{className:"editBoxes",children:[Object(d.jsx)("h2",{className:"accountPageText",children:"Email"}),Object(d.jsx)("input",{className:"".concat(ce?"disabledTheme":null),disabled:ce,type:"text",value:T,onChange:function(e){_(e.target.value)}})]}),Object(d.jsx)("button",{onClick:function(){return xe("email")},children:ce?"Edit":"Submit"})]}),Object(d.jsxs)("div",{id:"address",children:[Object(d.jsxs)("fieldset",{className:"editBoxes",children:[Object(d.jsx)("h2",{className:"accountPageText",children:"Password"}),Object(d.jsx)("input",{className:"".concat(ie?"disabledTheme":null),disabled:ie,type:"password",value:B,onChange:function(e){P(e.target.value)}})]}),Object(d.jsx)("button",{onClick:function(){return xe("password")},children:ie?"Edit":"Submit"}),Object(d.jsxs)("fieldset",{className:"editBoxes",children:[Object(d.jsx)("h2",{className:"accountPageText",children:"Address"}),Object(d.jsx)("input",{className:"".concat(ue?"disabledTheme":null),disabled:ue,type:"text",value:I,onChange:function(e){L(e.target.value)}}),Object(d.jsx)("input",{className:"".concat(ue?"disabledTheme":null),disabled:ue,type:"text",value:G,onChange:function(e){Y(e.target.value)}}),Object(d.jsx)("input",{className:"".concat(ue?"disabledTheme":null),disabled:ue,type:"text",value:H,onChange:function(e){U(e.target.value)}}),Object(d.jsx)("input",{className:"".concat(ue?"disabledTheme":null),disabled:ue,type:"text",value:K,onChange:function(e){Z(e.target.value)}})]}),Object(d.jsx)("button",{onClick:function(){return xe("address")},children:ue?"Edit":"Submit"})]})]}),Object(d.jsx)(R,{loading:Oe}),Object(d.jsx)(u,{})]})},M=n(10),B=n.n(M),P=n(18),D=function(e){var t=Object(o.b)(),n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),u=Object(j.a)(i,2),b=u[0],O=u[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),p=x[0],f=x[1],g=Object(c.useState)(""),v=Object(j.a)(g,2),y=v[0],w=v[1],N=Object(c.useState)(""),S=Object(j.a)(N,2),T=S[0],_=S[1],E=Object(c.useState)(""),M=Object(j.a)(E,2),D=M[0],F=M[1],I=Object(c.useState)(""),L=Object(j.a)(I,2),A=L[0],z=L[1],G=Object(c.useState)(""),Y=Object(j.a)(G,2),W=Y[0],q=Y[1],H=Object(c.useState)(!1),U=Object(j.a)(H,2),J=U[0],V=U[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C.a,{}),Object(d.jsxs)("section",{id:"registerBody",style:J?{visibility:"hidden"}:{visibility:"visible"},children:[Object(d.jsxs)("form",{id:"registerForm",onSubmit:function(n){!function(n){n.preventDefault(),r(""),O(""),f(""),w(""),_(""),F(""),z(""),q(""),V(!0),h.a.post("/api/register",{email:p,password:y,first_name:s,last_name:b,street:T,city:D,state:A,zipcode:W}).then(function(){var n=Object(P.a)(B.a.mark((function n(c){return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(k(c.data)),C.b.success("Registration Successful! Logging you in to your new dashboard..."),setTimeout((function(){return e.history.push("./dash")}),3e3);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){V(!1),C.b.error('A user with the email you provided is already present within our database. Please log in using your email and password or reset your password using the "Forgot Password" link.')}))}(n)},children:[Object(d.jsxs)("section",{className:"registerSections",children:[Object(d.jsx)("h3",{className:"registerSectionText",children:"Name"}),Object(d.jsx)("input",{placeholder:"First Name",type:"text",value:s,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("input",{placeholder:"Last Name",type:"text",value:b,onChange:function(e){O(e.target.value)}})]}),Object(d.jsxs)("section",{className:"registerSections",children:[Object(d.jsx)("h3",{className:"registerSectionText",children:"Email"}),Object(d.jsx)("input",{placeholder:"Email",type:"text",value:p,onChange:function(e){f(e.target.value)}})]}),Object(d.jsxs)("section",{className:"registerSections",children:[Object(d.jsx)("h3",{className:"registerSectionText",children:"Password"}),Object(d.jsx)("input",{placeholder:"Password",type:"password",value:y,onChange:function(e){w(e.target.value)}})]}),Object(d.jsxs)("section",{className:"registerSections",children:[Object(d.jsx)("h3",{className:"registerSectionText",children:"Address"}),Object(d.jsx)("input",{placeholder:"Street",type:"text",value:T,onChange:function(e){_(e.target.value)}}),Object(d.jsx)("input",{placeholder:"City",type:"text",value:D,onChange:function(e){F(e.target.value)}}),Object(d.jsx)("input",{placeholder:"State",type:"text",value:A,onChange:function(e){z(e.target.value)}}),Object(d.jsx)("input",{placeholder:"Zipcode",type:"text",value:W,onChange:function(e){q(e.target.value)}})]}),Object(d.jsx)("button",{children:"Register"})]}),Object(d.jsxs)("article",{className:"registerWelcomeText",children:[Object(d.jsx)("h1",{children:"Welcome to Our Community!"}),Object(d.jsx)("h4",{children:" Registering for an account with BackyardRestoration.net will provide you with access to a series of free tools designed to help you plan and complete your own backyard ecological restorations. "}),Object(d.jsx)("h4",{children:"Your address will be used to calculate growing parameters for your local area using historical weather data."}),Object(d.jsx)("h4",{children:"If you have any privacy concerns or questions regarding the site, please contact us at BackyardRestorationNet@gmail.com."})]})]}),Object(d.jsx)(l.b,{id:"backToLoginLink",to:"/",children:"Back to Login"}),Object(d.jsx)(R,{loading:J})]})},F=function(e){var t=e.location.state.weed_id,n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(""),l=Object(j.a)(i,2),b=l[0],m=l[1],x=Object(c.useState)(""),p=Object(j.a)(x,2),f=p[0],g=p[1],v=Object(c.useState)(""),w=Object(j.a)(v,2),N=w[0],C=w[1],S=Object(c.useState)(""),T=Object(j.a)(S,2),k=T[0],_=T[1],R=Object(c.useState)(""),E=Object(j.a)(R,2),M=E[0],D=E[1],F=Object(c.useState)([]),I=Object(j.a)(F,2),L=I[0],A=I[1],z=Object(o.c)((function(e){return e.mgmtMethodReducer.userMethods})),G=Object(c.useState)(!0),Y=Object(j.a)(G,2),W=Y[0],q=Y[1],H=function(){var e=Object(P.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/weeds/".concat(t)).then((function(e){var t=e.data,n=t.src,c=t.common_name,a=t.botanical_name,s=t.annual_perennial_biennial,i=t.veg_type,o=t.description;r(n),m(c),g(a),C(s),_(i),D(o)})).catch((function(e){return console.log(e)}));case 2:return e.next=4,h.a.get("/api/weeds/methods/".concat(t)).then((function(e){A(e.data)})).catch((function(e){console.log(e)}));case 4:q(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){H()}),[]);var U=L.map((function(e){return Object(d.jsx)(y,{userMethods:z,weedMethod:e},"method".concat(e.method_id))})),J=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("section",{className:"weedDescriptionBox",children:[Object(d.jsx)("h2",{children:b}),Object(d.jsx)("h2",{children:Object(d.jsx)("em",{children:f})}),Object(d.jsxs)("h3",{children:["a"===N?"Annual":"p"===N?"Perennial":"Biennial"," ","f"===k?"Forb":"g"===k?"Graminoid":"Woody"]}),Object(d.jsx)("img",{id:"descImage",alt:"".concat(f," commonly known as ").concat(b),src:s}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h4",{children:"Description"}),Object(d.jsx)("article",{children:Object(d.jsx)("h4",{children:M})})]})]}),Object(d.jsxs)("fieldset",{className:"dropdownBox",children:[Object(d.jsx)("h3",{id:"manageDescLegend",children:"Management Options"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:U})]})]});return Object(d.jsxs)(d.Fragment,{children:[W?Object(d.jsx)(d.Fragment,{}):J,Object(d.jsx)(u,{})]})},I=function(e){var t=e.weedInfo,n=t.weed_id,c=t.common_name,a=t.botanical_name,s=t.src;return Object(d.jsx)("figure",{className:"searchFigures",children:Object(d.jsxs)(l.b,{className:"searchLinks",to:{pathname:"/weed/".concat(n),state:{weed_id:n}},children:[Object(d.jsx)("img",{className:"searchImages",alt:"".concat(a," commonly known as ").concat(c),src:s}),Object(d.jsxs)("figcaption",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Botanical Name: "}),Object(d.jsx)("br",{}),Object(d.jsx)("em",{children:"".concat(a)}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Common Name: "}),Object(d.jsx)("br",{}),"".concat(c)]})]})})},L=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),o=i[0],l=i[1],b=e.match.params.vegType;Object(c.useEffect)((function(){h.a.get("/api/weeds?vegType=".concat(b)).then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[b]);var m=o.map((function(e){return Object(d.jsx)(I,{weedInfo:e},e.weed_id)}));return Object(d.jsxs)("main",{id:"weedSearchBody",children:[Object(d.jsx)(O,{invertColors:!0}),Object(d.jsxs)("form",{id:"weedSearchForm",onSubmit:function(e){return function(e){e.preventDefault(),h.a.get("/api/weeds?vegType=".concat(b,"&keyword=").concat(encodeURI(a))).then((function(e){s(""),l(e.data)})).catch((function(e){return console.log(e)}))}(e)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Weed Name",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{children:"Search"}),Object(d.jsxs)("button",{children:["Show All ","f"===b?"Forb":"g"===b?"Graminoid":"Woody"," Species"]})]}),Object(d.jsx)("div",{id:"searchResultsBox",children:m}),Object(d.jsx)(u,{})]})},A=function(e){var t=Object(c.useState)({visibility:"hidden"}),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),o=i[0],u=i[1];return Object(d.jsxs)("main",{id:"submitResetBody",children:[Object(d.jsx)(C.a,{}),Object(d.jsx)("h1",{children:"Change Password"}),Object(d.jsx)("h4",{children:"Please Enter a New Password for Your Account Below"}),Object(d.jsxs)("form",{id:"submitResetForm",onSubmit:function(t){return t.preventDefault(),void h.a.put("/api/pwdRS/".concat(e.match.params.token),{newPassword:o}).then((function(t){u(""),C.b.success("Password Reset Successful! Logging you in..."),s({visibility:"hidden"}),setTimeout((function(){e.history.push("/dash")}),2e3)})).catch((function(e){u(""),C.b.error('Your password reset request has expired. Please try again using the "Forgot Password" link on our login page.'),s({visibility:"visible"})}))},children:[Object(d.jsx)("input",{type:"password",placeholder:"New Password",onChange:function(e){return u(e.target.value)},id:"resetPwdPasswordInput"}),Object(d.jsx)("button",{children:"Change Password"})]}),Object(d.jsxs)("article",{style:a,children:[Object(d.jsx)("h4",{children:"'Your password reset request has expired. Please try again using the \"Forgot Password\" link on our login page.'"}),Object(d.jsx)(l.b,{to:"/",children:"Back to Login"})]})]})},z=function(e){var t=Object(c.useState)(e.location.state.email),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)({visibility:"hidden"}),i=Object(j.a)(r,2),o=i[0],u=i[1],b=Object(c.useState)({visibility:"hidden"}),O=Object(j.a)(b,2),m=O[0],x=O[1];return Object(d.jsxs)("div",{id:"resetReqBox",children:[Object(d.jsx)(C.a,{}),Object(d.jsx)("h1",{id:"resetTitle",children:Object(d.jsx)("strong",{children:"Password Reset"})}),Object(d.jsx)("h3",{children:"Please Enter the Email you Used to Register with BackyardRestoration.net"}),Object(d.jsxs)("form",{id:"resetRequestForm",onSubmit:function(e){return e.preventDefault(),void h.a.put("/api/pwdResetReq",{email:a}).then((function(e){s(""),C.b.success("Password Reset Request Submitted Successfully"),u({visibility:"visible"}),x({visibility:"hidden"})})).catch((function(e){s(""),C.b.error("Password Reset Request Failed."),u({visibility:"hidden"}),x({visibility:"visible"})}))},children:[Object(d.jsx)("input",{type:"text",placeholder:"Your Email",onChange:function(e){return s(e.target.value)},id:"resetPwdEmailInput",value:a}),Object(d.jsx)("button",{id:"resetReqButton",children:"Request Reset"})]}),Object(d.jsx)(l.b,{to:"/",children:"Back to Login"}),Object(d.jsx)("article",{style:o,children:Object(d.jsx)("h4",{children:" Your password reset request has been submitted successfully! Please check your email for a link to reset your password. (These often end up in SPAM, so please check there if you're having trouble finding it)."})}),Object(d.jsx)("article",{style:m,children:Object(d.jsx)("h4",{children:' We did not find an account under the email address provided. Please try again or register for a new account using the "Register" button on our login page.'})})]})},G=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Thank You for Your Donation!"}),Object(d.jsx)(l.b,{to:"/dash",children:"To Dashboard"})]})},Y=n(86),W=Object(Y.a)("pk_test_51IfmdwEczyxW6oqI1W0KMMy75HKrPafVCYYLjuuTrOtPe089C9OJA8CdSW9KtlVCUUw9JCP3NuoRykC6YhBZCoPN00mUcNF579"),q=function(){var e=Object(c.useState)("$0.00"),t=Object(j.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(P.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.match(/\d*.\d{2}/)&&n.match(/\d*.\d{2}/)[0]===n&&Number.parseFloat(n)>=1)){e.next=7;break}return e.next=3,W;case 3:t=e.sent,h.a.post("/api/donate",{donationAmount:(100*Number.parseFloat(n)).toString()}).then(function(){var e=Object(P.a)(B.a.mark((function e(n){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.redirectToCheckout({sessionId:n.data.id});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return C.b.error("Unfortunately, your donation did not process successfully. Please inform us of this issue by contacting us at BackyardRestorationNet@gmail.com, and we will work to resolve it as quickly as possible. Thank you for your attempted donation!")})),e.next=8;break;case 7:C.b.warn('Please enter a value greater than 1 dollar in the format "0.00". Thank you!');case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(C.a,{}),Object(d.jsxs)("div",{id:"donationBox",children:[Object(d.jsx)("h2",{children:"Thank you for your donation!"}),Object(d.jsx)("h4",{children:'Please enter your preferred donation amount in the box provided using the format "0.00". Due to service charges, we are only accepting donations greater than $1.00.'}),Object(d.jsxs)("div",{id:"donationInput",children:[Object(d.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},type:"text",id:"donationInput",onFocus:function(){return a("")},onBlur:function(){return setTimeout((function(){return a("$0.00")}),250)}}),Object(d.jsx)("button",{role:"link",onClick:function(){return s()},children:"Proceed to Payment"})]})]}),Object(d.jsx)(l.b,{to:"/dash",children:"Back to Dashboard"})]})},H=Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:_}),Object(d.jsx)(i.a,{path:"/requestReset",component:z}),Object(d.jsx)(i.a,{path:"/resetPassword/:token",component:A}),Object(d.jsx)(i.a,{path:"/dash",component:N}),Object(d.jsx)(i.a,{path:"/account",component:E}),Object(d.jsx)(i.a,{path:"/register",component:D}),Object(d.jsx)(i.a,{path:"/weed/:id",component:F}),Object(d.jsx)(i.a,{path:"/search/:vegType",component:L}),Object(d.jsx)(i.a,{path:"/donation/success",component:G}),Object(d.jsx)(i.a,{path:"/donation",component:q})]});var U=function(){return Object(d.jsx)("div",{className:"App",children:H})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},V=n(87),K=n(17),Z=n(88),$=Object(K.combineReducers)({mgmtMethodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_METHODS_PENDING":return Object(p.a)(Object(p.a)({},e),{failed:!1,loading:!0});case"GET_METHODS_FULFILLED":return Object(p.a)(Object(p.a)({},e),{failed:!1,loading:!1,userMethods:t.payload});case"GET_METHODS_REJECTED":return Object(p.a)(Object(p.a)({},e),{failed:!0,loading:!1});case"TOGGLE_METHOD_PENDING":return Object(p.a)(Object(p.a)({},e),{failed:!1,loading:!0});case"TOGGLE_METHOD_FULFILLED":return Object(p.a)(Object(p.a)({},e),{failed:!1,loading:!1,userMethods:t.payload});case"TOGGLE_METHOD_REJECTED":return Object(p.a)(Object(p.a)({},e),{failed:!0,loading:!1});default:return e}},userInfoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFO_PENDING":return Object(p.a)(Object(p.a)({},e),{loading:!0,failed:!1});case"GET_USER_INFO_FULFILLED":return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.payload),{loading:!1,failed:!1});case"GET_USER_INFO_REJECTED":return Object(p.a)(Object(p.a)({},e),{loading:!1,failed:!0});case T:return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}}}),Q=Object(K.createStore)($,Object(V.composeWithDevTools)(Object(K.applyMiddleware)(Z.a)));r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{store:Q,children:Object(d.jsx)(l.a,{children:Object(d.jsx)(U,{})})})}),document.getElementById("root")),J()}},[[166,1,2]]]);
//# sourceMappingURL=main.7f0e5ecd.chunk.js.map