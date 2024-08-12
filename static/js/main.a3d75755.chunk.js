(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(10),n=a.n(r),i=(a(64),a(65),a(52),a(57)),o=a(4),l=a(84),j=a(79),h=a(82),d=a(80),m=(a(66),a(1));var b=()=>Object(m.jsxs)(h.a,{bg:"Navbar",variant:"dark",fixed:"top",children:[Object(m.jsx)(h.a.Brand,{href:"/",children:"My Portfolio"}),Object(m.jsxs)(d.a,{className:"mr-auto",children:[Object(m.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(m.jsx)(d.a.Link,{href:"/about",children:"About"}),Object(m.jsx)(d.a.Link,{href:"/projects",children:"Projects"}),Object(m.jsx)(d.a.Link,{href:"/contact",children:"Contact"})]})]}),p=a(76),u=a(77),x=a(56),g=a.p+"static/media/personal.39d1ba24.jpg";a(53);var O=()=>Object(m.jsx)(p.a,{className:"home-container mt-5",children:Object(m.jsxs)(u.a,{className:"align-items-center",children:[Object(m.jsx)(x.a,{md:6,children:Object(m.jsx)("img",{src:g,alt:"Gabriel F. Aguilar",className:"personal-image"})}),Object(m.jsxs)(x.a,{md:6,children:[Object(m.jsx)("h1",{children:"Hello! I'm Gabriel F. Aguilar"}),Object(m.jsx)("p",{children:"A 3rd Year Student currently earning my Degree in Bachelor of Science and Technology. This is my personal portfolio where I showcase my skills and projects."})]})]})}),f=a(45),y=a(42);var v=()=>Object(m.jsxs)(p.a,{className:"mt-4",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:"I am a college student currently in my 3rd year pursuing a Bachelor of Science in Information Technology. I have studied programming and networking, and I am eager to prove my worth in this field."}),Object(m.jsx)("a",{href:"https://web.facebook.com/gabriel.aguilar.796774",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(f.a,{icon:y.a,size:"2x"})})]}),w=a(78),k=a(83),N=a.p+"static/media/project1-preview.b61c7bcb.png",C=a.p+"static/media/project2-preview.9bf56f0c.png",I=a.p+"static/media/project3-preview.81197157.png";a(54);const F=[{id:1,title:"My Favorite Movies",image:N,description:'In this project, our professor tasked us with making a basic "Favorite Movies" website that uses html, css, and bootstrap'},{id:2,title:"My Favorite Artists",image:C,description:"In this project, our professor tasked us with making a website that is interconnected with each part that also links the user to the songs of the artists that we featured in the website."},{id:3,title:"Bank Loan Application Form",image:I,description:'In this project, our professor tasked us with making a basic "Bank Loan Application Form" that is essentially fully working just without the systems that it should be connected to along with a "Terms and Conditions".'}];var L=()=>{const[e,t]=Object(s.useState)(!1),[a,c]=Object(s.useState)(null);return Object(m.jsxs)(p.a,{className:"project-container",children:[Object(m.jsx)(u.a,{children:F.map((e=>Object(m.jsx)(x.a,{md:4,className:"mb-4",children:Object(m.jsxs)("div",{className:"project-card",children:[Object(m.jsx)("img",{src:e.image,alt:e.title,className:"project-image preview-image"}),Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)(w.a,{variant:"primary",onClick:()=>(e=>{c(e),t(!0)})(e),children:"View Project"})]})},e.id)))}),a&&Object(m.jsxs)(k.a,{show:e,onHide:()=>{t(!1),c(null)},size:"lg",children:[Object(m.jsx)(k.a.Header,{closeButton:!0,children:Object(m.jsx)(k.a.Title,{children:a.title})}),Object(m.jsxs)(k.a.Body,{children:[Object(m.jsx)("img",{src:a.image,alt:a.title,className:"project-image full-image"}),Object(m.jsx)("p",{children:a.description})]})]})]})},S=a(81),M=a(58);var A=()=>{const[e,t]=Object(s.useState)({name:"",email:"",message:""}),a=a=>{const{name:s,value:c}=a.target;t({...e,[s]:c})};return Object(m.jsxs)(p.a,{className:"mt-4 contact-container",children:[Object(m.jsx)("h1",{children:"Contact Me"}),Object(m.jsx)("p",{children:"Here\u2019s how you can reach me."}),Object(m.jsx)("a",{href:"https://web.facebook.com/gabriel.aguilar.796774",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(f.a,{icon:y.a,size:"2x"})}),Object(m.jsxs)(S.a,{onSubmit:a=>{a.preventDefault(),M.a.send("service_6t8jjgv","template_lndcisx",e,"lLP3oCW5xlg_VDgb0").then((e=>{console.log("SUCCESS!",e.status,e.text),alert("Message sent successfully!"),t({name:"",email:"",message:""})}),(e=>{console.log("FAILED...",e),alert("Failed to send the message, please try again later.")}))},className:"mt-3",children:[Object(m.jsxs)(S.a.Group,{controlId:"formName",children:[Object(m.jsx)(S.a.Label,{children:"Name"}),Object(m.jsx)(S.a.Control,{type:"text",name:"name",value:e.name,onChange:a,placeholder:"Enter your name",required:!0})]}),Object(m.jsxs)(S.a.Group,{controlId:"formEmail",children:[Object(m.jsx)(S.a.Label,{children:"Email address"}),Object(m.jsx)(S.a.Control,{type:"email",name:"email",value:e.email,onChange:a,placeholder:"Enter your email",required:!0})]}),Object(m.jsxs)(S.a.Group,{controlId:"formMessage",children:[Object(m.jsx)(S.a.Label,{children:"Message"}),Object(m.jsx)(S.a.Control,{as:"textarea",name:"message",value:e.message,onChange:a,rows:3,placeholder:"Enter your message",required:!0})]}),Object(m.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})]})};var B=()=>Object(m.jsx)("footer",{className:"bg-primary text-white mt-4",children:Object(m.jsxs)(p.a,{className:"text-center py-3",children:["\xa9 ",(new Date).getFullYear()," My Portfolio. All Rights Reserved."]})});function E(){const e=Object(o.m)();return Object(m.jsx)(l.a,{children:Object(m.jsx)(j.a,{classNames:"slide",timeout:300,children:Object(m.jsxs)(o.c,{location:e,children:[Object(m.jsx)(o.a,{path:"/",element:Object(m.jsx)(O,{})}),Object(m.jsx)(o.a,{path:"/about",element:Object(m.jsx)(v,{})}),Object(m.jsx)(o.a,{path:"/projects",element:Object(m.jsx)(L,{})}),Object(m.jsx)(o.a,{path:"/contact",element:Object(m.jsx)(A,{})})]})},e.key)})}var P=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(E,{}),Object(m.jsx)(B,{})]})};var T=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((t=>{let{getCLS:a,getFID:s,getFCP:c,getLCP:r,getTTFB:n}=t;a(e),s(e),c(e),r(e),n(e)}))};a(73);n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.a3d75755.chunk.js.map