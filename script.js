//Area---------
const calc = document.getElementById('Bcalc');
const width = document.getElementById('width');
const height = document.getElementById('height');
const enter = document.querySelectorAll(".in");
let p = document.getElementsByClassName("p");
let result = document.getElementsByClassName("result")


function getArea (){
  p[0].textContent=": المساحة بالمتر²"
  p[1].textContent=" : المساحة بالفدان"
  p[2].textContent=" : المساحة بالهكتار "
  let cArea= (textContent=width.value*height.value)/4200;
  result[0].textContent=(width.value*height.value).toPrecision(10)
  result[1].textContent=(cArea).toPrecision(10);
  result[2].textContent=((width.value*height.value)/10000).toPrecision(10);
}

calc.addEventListener("click",function Area(){
  if (width.value >0 && height.value > 0){
    getArea()
  }
})

enter[1].addEventListener("keypress", function EArea (e){
  if (width.value >0 && height.value > 0 && e.which ===13){
    getArea()
  }
})
enter[0].addEventListener("keypress", function EArea (e){
  if (width.value >0 && height.value > 0 && e.which ===13){
    getArea()
  }
})

width.addEventListener("click",function erase(){
  width.value=""
})
height.addEventListener("click",function erase(){
  height.value=""
})
//Area--------
