var menu = document.querySelector(".menu-slide");
var arrow = document.querySelector(".nav-part-3 h5 i");
var arrow2 = document.querySelector(".menu-slide i")


arrow.addEventListener("click",function(){

    menu.style.top = "-25%"
    menu.style.display = "block"
})

arrow2.addEventListener("click",function (){
    menu.style.top = "-100%"
})


gsap.from(".page-1-heading h1 ",{
    x:-100,
    duration:.2,
    stagger:1
})
gsap.from(".page-1-heading h2 ",{
    x:-100,
    duration:1.3,
    stagger:1
})

gsap.from(".page-1-content p ",{
    y:40,
    opacity:0,
    duration:1,
    stagger:.5

})

gsap.from(".page-2",{
    y:50,
    scale:.1,
    delay:.2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page-2",
        scroller:"body",
        scrub:true,
        start:"top 80%",
        end:"top 60%"
    }
})

gsap.from(".page-3",{
    y:50,
    scale:.5,
    delay:.2,
    opacity:0,
    scrollTrigger:{
        trigger:".page-3",
        scroller:"body",
        scrub:true,
        start:"top 80%",
        end:"top 60%"
    }
})


gsap.from(".page-4-1",{
    x:-500,
    opacity:0,
    delay:5,
    stagger:1,
   
    scrollTrigger:{
        trigger:".page-4-1",
        scroller:"body",
        scrub:true,
        start:"top 80%",
        end:"top 60%"
    }
})




