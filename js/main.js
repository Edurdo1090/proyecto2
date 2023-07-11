const menuprincipal = document.querySelectorAll('.menu-item');

menuprincipal.forEach(function(item){
    item.addEventListener('mouseover', function(e){
        const actualItem = document.querySelector('.active');
        actualItem.classList.remove('active');
        e.target.classList.add('active');
    

    });
});  


let caja=document.getElementById("subir__arriba");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})