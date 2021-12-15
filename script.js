$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    const typed = new Typed(".typing", {
        strings: ["Developer.", "Coder.", "Master."],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    });
});

const button = document.getElementById('read-more');
const paragraph = document.getElementById('paragraph');
const readLess = 'Read less';
const readMore = 'Read more';

button.addEventListener('click', function(){
    if (button.innerText === readLess){
        button.innerText = readMore;
        paragraph.innerText = 'I am very hardworking girl, and in my free time I like painting pictures as a hobby...'
    } else {
        button.innerText = readLess;
        paragraph.innerText = 'I am very hardworking girl, and in my free time I like painting pictures as a hobby, which I believe develops my creative skills. I am result-driven and success-oriented. And I strongly believe that the communication is my key strenght.'
    }
});