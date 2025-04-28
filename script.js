gsap.from("#page1 #box",{
    duration:2,
    delay:1,
    opacity:0,
    rotate :760
})

gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    opacity:0,
    rotate :760,
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller : "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub:2,
        
        
      
    }

})
