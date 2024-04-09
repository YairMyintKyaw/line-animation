const targetSection = document.querySelectorAll('.section');
// const fixedText = document.querySelector(".kv__text");

// targetSection.forEach(section=>{
//     const rect = section.getBoundingClientRect();
//     if (rect.top >= 0 && (rect.top+200) <= window.innerHeight) {
//         section.classList.add('is-act');
//     }
// })
// const rectText = targetSection[0].getBoundingClientRect();
// if(rectText.top < 0){
//     fixedText.classList.add("is-change");
//     fixedText.classList.add("is-act");
// }else if(rectText.top - fixedText.offsetHeight < 0){
//     fixedText.classList.add("is-act");
// }else{
//     fixedText.classList.remove("is-act");
//     fixedText.classList.remove("is-change");
// }

window.addEventListener('scroll', function() {
    targetSection.forEach(section=>{
        const rect = section.getBoundingClientRect();
        // Check if the top of the section is within the viewport
        if (rect.top >= 0 && (rect.top+200) <= window.innerHeight) {
            section.classList.add('is-act');
        }
    })
});

const paths = gsap.utils.toArray(".section path");

paths.forEach(path=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:path,
            scrub:true,
            start:"center bottom"
        }
    });
    tl.fromTo(path,
        {
            strokeDasharray: 1500,
            strokeDashoffset: 1500
        },
        {
            strokeDasharray: 1500,
            strokeDashoffset: 0
        },
    )
})


// Smooth scroll
const lenis = new Lenis(
    {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }
  )
  
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf)