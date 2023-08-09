//All Glopal Variables
const calc = document.getElementById('Bcalc');
const width = document.getElementById('width');
const height = document.getElementById('height');
const enter = document.querySelectorAll(".in");
let p = document.getElementsByClassName("p");
let result = document.getElementsByClassName("result");
const input = document.querySelector(".input");
const heightP = document.getElementById("heightP");
const widthP = document.getElementById("widthP");
const r = document.getElementsByClassName("r");
const calcResult = document.querySelector(".calcResult");
const body = document.querySelector("body")
const parentDiv =  document.querySelector(".parent");
let acreMetersResult = document.createElement("p")
let acreHectarsResult = document.createElement("p")
let pHectars = document.createElement("p")
let pMeters = document.createElement("p")
const acreIn = document.createElement("input")
const acreCalcButton = document.createElement("button")
const change = document.createElement("button")

// Calculating The First Area
function getArea (){
  p[0].textContent=": المساحة بالمتر²"
  p[1].textContent=" : المساحة بالفدان"
  p[2].textContent=" : المساحة بالهكتار "
  let cArea= (textContent=width.value*height.value)/4200;
  result[0].textContent=(width.value*height.value)
  result[1].textContent=(cArea);
  result[2].textContent=((width.value*height.value)/10000)
}

calc.addEventListener("click",function Area(){
  if (width.value >0 && height.value > 0){
    getArea();
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

// Calculating The Second Area
function conAcre (){
  // Removing Old Elements
  input.removeChild(width)
  input.removeChild(height)
  input.removeChild(calc)
  r[0].textContent=""
  r[1].textContent="" 
  r[2].textContent="" 
  r[3].textContent="" 
  r[4].textContent="" 
  p[0].textContent=""
  p[1].textContent=""
  p[2].textContent=""
  
  // Adding New Elements
  function acreCalc (){
    pMeters.textContent=": المساحة بالمتر²"
    pHectars.textContent=" : المساحة بالهكتار "
    acreMetersResult.textContent = acreIn.value*2400
    acreHectarsResult.textContent = acreIn.value*0.42  
    calcResult.appendChild(acreMetersResult)
    calcResult.appendChild(pMeters)
    calcResult.appendChild(acreHectarsResult)
    calcResult.appendChild(pHectars)
    calcResult.style.cssText="row-gap:0rem;"
    acreMetersResult.classList.add("result")
    acreHectarsResult.classList.add("result")
  }
  
  // Adding The New Button
  input.appendChild(acreCalcButton)
  acreCalcButton.textContent="حساب"
  acreCalcButton.onclick = function (){
    if(pHectars.value!==""&&pMeters.value!==""&&acreMetersResult.value!==""&&acreHectarsResult.value!==""&& acreIn.value!==""){
    acreCalc()
    }
  }

  // Adding The New Input
  acreIn.classList.add("acreIn")
  input.appendChild(acreIn)
  acreIn.setAttribute("type","number")
  acreIn.setAttribute("placeholder","المساحة بالفدان")
  acreIn.addEventListener("keypress",function (event){
    if (acreIn.value > 0 && event.which === 13 && pHectars.value!==""&&pMeters.value!==""&&acreMetersResult.value!==""&&acreHectarsResult.value!==""&& acreIn.value!==""){
      acreCalc()
    }
  })
}

// Switch Button
change.textContent="تغيير الوحدة"
parentDiv.appendChild(change)

// Resvers Button
change.addEventListener("click",function (){
  conAcre()
  parentDiv.removeChild(change)
  let Return = document.createElement("button");
  parentDiv.appendChild(Return)
  Return.textContent="تغيير الوحدة";

  Return.onclick = function (){
    parentDiv.appendChild(change)
    parentDiv.removeChild(Return)
    input.removeChild(acreIn)
    input.removeChild(acreCalcButton)

    input.appendChild(calc)
    input.appendChild(height)
    input.appendChild(width)
    
    acreIn.value=""

    acreMetersResult.textContent = ""
    acreHectarsResult.textContent = ""

    pMeters.textContent=""
    pHectars.textContent=""

    width.value=""
    height.value=""

    calcResult.style.cssText="grid-template-rows: repeat(3,2.5rem)"
  }
})