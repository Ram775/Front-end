let cursor = document.querySelector("#cursor");
let main = document.querySelector(".main");

window.addEventListener("mousemove",(det)=>{
    gsap.to(cursor,{
        x:det.x,
        y:det.y,
        duration:0.5,
        delay:0.1,
        ease:"black.out"
    })
    
})