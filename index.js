const container=document.querySelector(".container");
const thankyou=document.querySelector(".thankyou");
const submit=document.querySelector(".submit");
const rating=document.getElementById("rating");
const buttons=document.querySelectorAll(".btn")
submit.addEventListener("click", ()=>{
    thankyou.classList.remove("hidden"); 
    container.style.display="none"
})
buttons.forEach((button)=>{
button.addEventListener("click",()=>{
    rating.innerHTML=button.innerHTML
})
})