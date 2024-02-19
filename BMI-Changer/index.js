const form = document.querySelector('form');


// const height = parseInt(document.querySelector('#height').value)
// outside form this use case gives empty value
// when form is submitted - data is passed to url or server to prevent

form.addEventListener('submit', function(e){
    e.preventDefault()

    //value is obtained in string - to convert into num parseIng
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const suggestion = document.querySelector('.suggestion');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid height";
    } else{
        const bmi = (weight / (height*height*0.064516)).toFixed(2)
        // show the sesult
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){suggestion.innerHTML = "Under Weight"}
        else if (bmi<24.9){suggestion.innerHTML = "Normal Weight"}
        else{
            suggestion.innerHTML = "Over Weight"
        }
    }
});
