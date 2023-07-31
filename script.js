//Area---------
const calc = document.getElementById('Bcalc');
const width = document.getElementById('width');
const height = document.getElementById('height');
const area = document.getElementById('area');
const enter = document.querySelectorAll(".in");

function getArea (){
  area.textContent= 'Area: '+ width.value*height.value
}

calc.addEventListener("click",function Area(){
  if (width.value >0 && height.value > 0){
    getArea()
  }
})

enter[1].addEventListener("input", function EArea (){
  if (width.value >0 && height.value > 0){
    getArea()
  }
})
//Area--------


//Acre--------
const convertB = document.getElementById("convertB");
const converted = document.getElementById("converter");
const ConResult = document.getElementById("ConResult")

function convert (){
  let cArea = converted.value/4046.8564224;
  ConResult.textContent="Acr: "+cArea.toPrecision(5)
}

convertB.addEventListener("click", function () {
  if (converted.value > 0) {
    convert()
  }
})
console.log('hi');
converter.addEventListener("input", function (event) {
  if (converted.value > 0) {
    convert()
  }
})
//Acre--------


