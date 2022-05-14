/*================ PRELOADER JS ================*/
window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
});


/*================ TOGGLE MENU JS ================*/
const tbox = document.getElementById("t-box");
const toogle = document.getElementById("toggle");
const mlist = document.getElementById("mob-list");

tbox.onclick = ()=>{
    toogle.classList.toggle('active');
    mlist.classList.toggle('active');
}

const popup = document.getElementById('add');
const addm = document.getElementById('addm');
const popClose = document.getElementById('close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "flex"
    }, 12000);
}


popClose.addEventListener('click', () => {
    popup.style.display = "none"
})

addm.addEventListener('click', () => {
    popup.style.display = "flex"
})


/*================ SCROLL TO TOP BTN JS ================*/
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        scrollBtn.style.display = 'block';
    }
    else {
        scrollBtn.style.display = 'none';
    }
})

scrollBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})




    