// to  - starting destintion jaha par final destintion waha lana 
// from -  final destintion jaha par starteding waha lana 

// gsap.to(".red", {
//     duration: 10,
//     x: "1000",
//     borderRadius: "50",
   

// })
// gsap.to(".green", {
//     delay: 5,
//     duration: 10,
//     x: "1000",

// })

gsap.from(".logo", {
    y: "-100", 
    duration: 2,
})
gsap.from(".menu", {
    delay: 2,
    y: "-100", 
    duration: 2,
})

gsap.to("#page2", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page1",
    start: "bottom 30%",
    scrub: true,
    markers: true,

  }  
})