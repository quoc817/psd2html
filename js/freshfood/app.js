
var productImage = document.getElementsByClassName('product__item');
var productName = document.getElementsByClassName('product__name');
for(let i = 0 ; i < productImage.length ; i++){
   productImage[i].addEventListener('click',function (){
        window.location.assign('freshfood-details.html');
   });
   productName[i].addEventListener('click',function (){
    window.location.assign('freshfood-details.html');
});
}

var postNewItems = document.getElementsByClassName('post-news__item');
for(let i = 0 ; i < postNewItems.length ; i++){ 
    postNewItems[i].addEventListener("click", function () {
        location.assign('freshfood-news-detail.html');
    })
}


