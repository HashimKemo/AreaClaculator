//Area---------
const calc = document.getElementById('Bcalc');
const width = document.getElementById('width');
const height = document.getElementById('height');
const area = document.getElementById('area');
const enter = document.querySelectorAll(".in");
let li = document.getElementsByTagName("li");

function getArea (){
  li0 =document.createElement("li");
  li1 =document.createElement("li");
  li2 =document.createElement("li");
  li0.appendChild(document.createTextNode('المساحة: '+ width.value*height.value+" م ² "))
  let cArea = ((width.value*height.value)/4200).toPrecision(6);
  li1.appendChild(document.createTextNode(' المساحة بالفدان: '+cArea +" فدان "))
  let hArea = ((width.value*height.value)/10000);
  li2.appendChild(document.createTextNode(' المساحة بالهكتار: '+hArea +" هكتار "))
  ul.appendChild(li0)
  ul.appendChild(li1)
  ul.appendChild(li2)
}

calc.addEventListener("click",function Area(){
  if (width.value >0 && height.value > 0){
    getArea()
  }
})

enter[1].addEventListener("keypress", function EArea (e){
  if (width.value >0 && height.value > 0 && e.which ===13){
    getArea()
    width.value=""
    height.value=""
  }
})
//Area--------


//Acre--------
const convertB = document.getElementById("convertB");
const converted = document.getElementById("converter");
const ConResult = document.getElementById("ConResult")

function convert (){
  // let cArea = converted.value/4046.8564224;
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


