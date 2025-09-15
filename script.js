let icon=document.querySelector(".menu-icon");
let menu=document.querySelector(".menu");
icon.addEventListener("click",()=>{
    menu.classList.toggle("active");
    icon.classList.toggle("active");
});
let item=document.querySelectorAll(".menu ul li a");
item.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("active");
        icon.classList.remove("active");
    });
});
let projects=document.querySelectorAll(".project");
let gitbuttons=document.querySelectorAll('#gitbtn');
console.log(gitbuttons)
for(let btn of gitbuttons){
    btn.addEventListener("click",function(e){
        e.stopPropagation();
        console.log(btn)
        if(btn.id==="gitbutton1"){

        }
    })
}
