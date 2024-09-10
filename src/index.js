import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import Locations from "./locations";
import About from "./about";

const content = document.getElementById("content");
//const content=document.body.querySelector(".content");
const navbuttons=document.querySelectorAll(".nav-btn");

navbuttons.forEach(button=>{
    button.addEventListener("click",function(){
        if (button.textContent==="Home"){
            const container1=document.querySelector(".container1");
            if(container1)
            {content.removeChild(container1);}
            content.innerHTML='';
            content.appendChild(Home());
        }
        if (button.textContent==="Menu"){
            const container1=document.querySelector(".container1");
            if(container1)
            {content.removeChild(container1);}
            content.innerHTML='';
            content.appendChild(Menu());
        }
        if (button.textContent==="Locations"){
            const container1=document.querySelector(".container1");
            if(container1)
            {content.removeChild(container1);}
            content.innerHTML='';
            content.appendChild(Locations());
        } 
        if (button.textContent==="About"){
            const container1=document.querySelector(".container1");
            if(container1)
            {content.removeChild(container1);}
            content.innerHTML='';
            content.appendChild(About());
        }  
    })
})