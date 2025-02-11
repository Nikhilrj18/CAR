gsap.from(".home",{
    opacity : 0,
    // scale  :0,
    delay : 0.5,
    duration : 2,
    x :-100,
repeat : -1,
yoyo : 1,
scrub : 2,
})

gsap.from("nav",{
    opacity : 0,
    delay : 0.5,
    duration : 1,
    y :-40,
    stagger : 1,
})

gsap.from(".fheading h1",{
       transform : "translateX(-80%)",
    scrollTrigger : {
        trigger : ".fheading",
        scroller : "body",  
        // markers : true,         //marker aa jave hai kab start hove kab band hove 
        start : "top 0%",   //jha se start hove hai bija 
        end : "top -80px",     
        scrub : 2,              //smoot ho jave hai 
        pin : true,
    }

})

gsap.from(".slide ",{
   
   duration : 0.3,
   delay : 0.4,
   stagger : 0.25,
   
   opacity : 0,
   scrollTrigger : {
    trigger: ".fheading",
scroller : "body",
start : "top 50%",
scrub : 2,

   }
  
  
})
gsap.from(".text",{
    scale : 0,
    opacity : 0,
    duration  : 1,
    delay : 1,
    scrollTrigger : {
        trigger : ".text",
        scroller : "body",
        start : "top 180%",
        scrub : 2,
        // markers : true,
    }
})

gsap.from(".word",{
    opacity : 0.2,
    duration :0.5,
delay : 0.5,
x : -40,
    scrollTrigger : {
        trigger : ".last-continor",
        scroller : "body",
        start : "top 80%",
        scrub : 1,
        // markers : true,
    }
})









// gsap.from(".home",{
//     transform : "translateX(-145%)",
//     scrollTrigger : {
//         trigger : ".home",
//         scroller : "body",  
//         markers : true,         //marker aa jave hai kab start hove kab band hove 
//         start : "top 0%",   //jha se start hove hai bija 
//         end : "top -150%",     
//         scrub : 2,              //smoot ho jave hai 
//         pin : true,
//     }
//     })



// var main = document.querySelector("#main")
// var crsr = document.querySelector("#crsr")

// main.addEventListener("mousemove",function(dot){

// crsr.style.left = dot.x + "px" 
// crsr.style.top = dot.y + "px" 

// })