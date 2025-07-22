const heightInput = document.getElementById("heightInput");

const weightInput = document.getElementById("weightInput");

const computeButton = document.getElementById("computeButton");

const outputTag = document.getElementById("output-result-word");


const outputResult = document.getElementById("result-input");


computeButton.addEventListener("click",function(){
  let heightValue = heightInput.value;

  let weightValue = weightInput.value;
  let h = Number(heightValue);
  let w = Number(weightValue);
  let height = h / 100;
  if (!height || !w || isNaN(height) || isNaN(w)) {
    outputResult.innerText = "Input number";
    return;
  }
  let formula =  w / (height * height);
  let result =Number(formula.toFixed(2));

  if (result < 18.5) {
    outputTag.textContent = ` Underweight`;
    
  }else if(result > 18.5 && result < 25)
  {
outputTag.textContent = ` normal`;

  }else if(result >= 25 && result < 30){
    outputTag.textContent = ` Overweight`;
  }else if(result >= 30){
    outputTag.textContent = ` Obese`;
  }
})