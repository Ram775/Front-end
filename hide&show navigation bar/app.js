let menu = document.querySelector("#nav i");
let cancel = document.querySelector("#overlay i");
let main = document.querySelector(".main");
let cursor = document.querySelector("#cursor");

let tl = gsap.timeline();

tl.to("#overlay", {
  right: 0,
});
tl.from("#overlay h3", {
  x: 150,
  stagger: 0.1,
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});
cancel.addEventListener("click", () => {
  tl.reverse();
});

window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.2
    })
});

