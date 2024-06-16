var divs = document.querySelectorAll(".btn");
var texts = document.querySelectorAll('h3');

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach(function(div, index){
    div.addEventListener("click" , function(){
        hidetext();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    })

});



function hidetext(){
   texts.forEach(function(texts){
        texts.style.display = "none";
   });
}