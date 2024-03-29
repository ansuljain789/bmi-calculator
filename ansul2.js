 const forms = document.querySelector('form')
 forms.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    const results = document.querySelector('#results')
    
   if(height === '' || height<0 || isNaN(height)){
    results.innerHTML="please gives  valid height"
   }else if(weight === '' ||weight<0 || isNaN(weight)){
    results.innerHTML="please gives  valid weight"
   }else{
    const bmi = (weight/height)
    results.innerHTML = " your body mass index is: "
    results.innerHTML += `<span>${bmi.toFixed(2)}</span>`
    
   if (bmi <= 18) {
    results.innerHTML += " so you are under wight"
   }else if (bmi>18 && bmi< 24.9) {
    results.innerHTML += " you are normal wight"
   } else {
    results.innerHTML += " you are over wight"
   }
   }

 })