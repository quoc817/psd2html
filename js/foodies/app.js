var btnGoTop = document.getElementById('js-gotop');
btnGoTop.addEventListener('click',function(e){
    window.scrollTo({top: 0, behavior: 'smooth'});
});
window.onscroll = function () {Scroll()};
function Scroll () {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnGoTop.style.display = 'block';
    }
    else {
        btnGoTop.style.display = 'none';
    }
}
