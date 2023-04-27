// To scroll the sticky navbar and change the effect

window.onscroll = function () {
    var nav = document.querySelector('nav');
    if (window.scrollY >= 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

// To change the toggle button off and on   

document.querySelector('.on').style.display = 'block';
document.querySelector('.off').style.display = 'none';

document.querySelector('.menu-btn').addEventListener("click", () => {

    document.querySelector('.menu').classList.toggle('present');

    if (document.querySelector('.menu').classList.contains('present')) {

        document.querySelector('.menu').classList.remove('.present');

        document.querySelector('.on').style.display = 'none';
        document.querySelector('.off').style.display = 'block';
    }
    else {
        document.querySelector('.menu').classList.add('.present');
        document.querySelector('.off').style.display = 'none';
        document.querySelector('.on').style.display = 'block';
    }
})


// nav bar link work when clicked or scrolled add active class

const li = document.querySelectorAll('.nav-link');
const sec = document.querySelectorAll('section');

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {

    }
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);
