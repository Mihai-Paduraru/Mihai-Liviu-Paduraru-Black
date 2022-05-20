let nav = document.querySelector('#nav')


window.addEventListener('scroll',()=>{
    let scrolled = window.scrollY

    if(scrolled>700){
        nav.classList.remove('none')
    }else if (scrolled>0) {
        nav.classList.add('none')
    }else{
        nav.classList.remove('none')
    }
})



