document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("optimal-btn"),t=document.getElementById("profi-btn"),n=document.getElementById("more-btn"),o=document.querySelector(".order-overlay"),r=document.getElementById("order-close"),l=document.getElementById("body"),d=document.querySelector(".plans__switcher-switch"),c=document.querySelector(".plans__switcher-state"),a=document.getElementById("price-opt"),i=document.getElementById("price-prof"),u=document.querySelector(".header__nav-mobile"),s=document.querySelectorAll(".header__nav-mobile-item"),m=document.getElementById("hamburger"),y=document.querySelector(".order__form-title"),_=document.querySelector(".order__form-desc"),f=document.querySelector(".order__form-fileds"),v=document.querySelector(".order__form-agreement"),g=document.querySelector(".video__play"),E=document.getElementById("video-player"),p="annual";[e,t,n].forEach(function(e){e.addEventListener("click",function(){o.style.display="block",l.style.overflow="hidden"})}),r.addEventListener("click",function(e){e.preventDefault(),o.style.display="none",l.style.overflow="auto"}),document.addEventListener("submit",function(e){e.preventDefault(),y.textContent="Спасибо за заявку",_.textContent="Наши менеджеры свяжутся с вами в течении 5 минут",f.style.display="none",v.style.display="none"}),d.addEventListener("click",function(){"annual"==p?(this.style.backgroundColor="#ABABAB",c.style.transform="translate(0)",p="monthly",a.textContent="890₽",i.textContent="1590₽"):(this.style.backgroundColor="#25DAC5",c.style.transform="translate(12px)",p="annual",a.textContent="500₽",i.textContent="1000₽")}),m.addEventListener("click",function(){u.classList.toggle("header__nav-mobile_on"),s.forEach(function(e){e.classList.toggle("header__nav-mobile-item_on")})}),s.forEach(function(e){e.addEventListener("click",function(){u.classList.toggle("header__nav-mobile_on"),s.forEach(function(e){e.classList.toggle("header__nav-mobile-item_on")})})}),g.addEventListener("click",function(){E.play(),g.style.display="none"})});