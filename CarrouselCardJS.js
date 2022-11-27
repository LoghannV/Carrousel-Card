let btn_next = document.querySelector('.carousel-box-next')
let btn_prev = document.querySelector('.carousel-box-prev')
let CarouselOne = document.getElementById("CarouselOne")
let BoxGroup = document.querySelector('.box-group')

window.addEventListener('load',function(){
    let alturaCarouselOne = CarouselOne.style.top
    btn_next.style.top = alturaCarouselOne+"px"
    btn_prev.style.top = alturaCarouselOne+"px"
    btn_next.style.left = (window.innerWidth-100)+"px"
    BoxGroup.style.top = alturaCarouselOne+"px"
    BoxGroup.style.width = this.window.innerWidth+"px"
})

let proximo = 0
btn_next.addEventListener('click',function(){
    proximo = window.innerWidth+proximo<=1600? proximo+=250: 0
    BoxGroup.scroll(proximo,0)
})
let anterior = 400
btn_prev.addEventListener('click',function(){ 
    if(proximo>=250){
        BoxGroup.scroll((proximo-anterior),0)
        proximo = proximo-anterior
    }else{
        BoxGroup.scroll(0,0)
    }
})