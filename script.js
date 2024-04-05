const targetSection = document.querySelectorAll('.section');
const fixedText = document.querySelector(".kv__text");

targetSection.forEach(section=>{
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && (rect.top+200) <= window.innerHeight) {
        section.classList.add('is-act');
    }
})
const rectText = targetSection[0].getBoundingClientRect();
if(rectText.top < 0){
    fixedText.classList.add("is-change");
    fixedText.classList.add("is-act");
}else if(rectText.top - fixedText.offsetHeight < 0){
    fixedText.classList.add("is-act");
}else{
    fixedText.classList.remove("is-act");
    fixedText.classList.remove("is-change");
}

window.addEventListener('scroll', function() {

    const rectText = targetSection[0].getBoundingClientRect();
    if(rectText.top < 0){
        fixedText.classList.add("is-change");
    }else if(rectText.top - fixedText.offsetHeight < 0){
        fixedText.classList.add("is-act");
    }else{
        fixedText.classList.remove("is-act");
        fixedText.classList.remove("is-change");
    }


    targetSection.forEach(section=>{
        const rect = section.getBoundingClientRect();
        // Check if the top of the section is within the viewport
        if (rect.top >= 0 && (rect.top+200) <= window.innerHeight) {
            section.classList.add('is-act');
        }
    })

    
});