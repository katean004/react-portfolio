(this.webpackJsonpmainreact=this.webpackJsonpmainreact||[]).push([[0],{18:function(e,a,t){e.exports=t(34)},23:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),s=t(13),i=t(3);t(23);var o=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),m=(o[0],o[1]),u=function(){return l(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?m(!1):m(!0)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:u},"KA",r.a.createElement("i",{class:"far fa-bread-loaf"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"nav-links",onClick:u},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/projects",className:"nav-links",onClick:u},"Projects"))))))},m=t(1),u=(t(9),t(29),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,c=e.buttonSize,s=u.includes(l)?l:u[0],o=d.includes(c)?c:d[0];return r.a.createElement(i.b,{to:"/projects",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(o),onClick:n,type:t},a))};t(30);var b=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("video",{src:"/videos/wave.mp4",autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,"Kate's Portfolio"),r.a.createElement("p",null,"What are you waiting for?"),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED")))};t(31);var p=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Contact Me"),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",null,r.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),r.a.createElement(E,{buttonStyle:"btn--outline"},"Submit")))),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"})),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(i.b,{to:"/",className:"social-logo"},"KA",r.a.createElement("i",{class:"far fa-bread-loaf"}))),r.a.createElement("small",{class:"website-rights"},"KA \xa9 2020"),r.a.createElement("div",{class:"social-icons"},r.a.createElement(i.b,{class:"social-icon-link twitter",to:"https://github.com/katean004",target:"_blank","aria-label":"Github"},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement(i.b,{class:"social-icon-link twitter",to:"www.linkedin.com/in/kate-an",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{class:"fab fa-linkedin"}))))))};var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(p,null))};var h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement("div",{className:"cards__item__link"},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("a",{target:"_blank",href:e.href},r.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src}))),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)))))};t(32);var g=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(h,{src:"images/sponWeekend.png",text:"Spontaneous Weekend is a collaborative application that provides random movies and restaurants for the user, taking away the stress of indecision. \r It utilizes MySQL, User Authentication, Express, API...etc",label:"Team Project",href:"https://github.com/cyrusjose/Spontaneous-Weekend-2.0"}),r.a.createElement(h,{src:"images/fitnessTracker.png",text:"Fitness Tracker tracks daily workouts and workout details such as name, type, weight, sets, reps, distance, and duration.",label:"mongoDB",href:"https://github.com/katean004/fitness-tracker"}),r.a.createElement(h,{src:"images/empTracker.png",text:"Employee Tracker is a Content Management System that helps employers to manage (add, view, and update) employee information.",label:"MySQL",href:"https://github.com/katean004/employee-tracker"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(h,{src:"images/weatherDash.png",text:"Weather Dashboard displays weather information and the 5 Day Forecast based on searcged location.",label:"Weather API",href:"https://github.com/katean004/weather-dashboard"}),r.a.createElement(h,{src:"images/Planner.png",text:"Workday Planner is a calendar application that allows the user to save events for each hour of the day.",label:"Local Storage & Moment",href:"https://github.com/katean004/work-day-planner"}),r.a.createElement(h,{src:"images/budgetTracker.png",text:"Budget Tracker tracks user deposits and spendings. Offline functionality using Indexeddb and PWA.",label:"IndexedDB",href:"https://github.com/katean004/budget-tracker"})))))};t(33);function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"projects"},"PROJECTS"),r.a.createElement(g,null))}var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(o,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:f}),r.a.createElement(m.a,{path:"/projects",component:k}))))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.49f1ca2b.chunk.js.map