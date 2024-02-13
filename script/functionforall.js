function calculateRectangleArea(){
    const base = getInputValueByID('rectangle-base')
    //console.log(base)
    const height = getInputValueByID('rectangle-height')
    //console.log(height);
    const Area = base * height;
    document.getElementById('rectangle-area').innerText = Area;
    console.log(Area);

}

function calculateParallelogramArea(){
        const base = getInputValueByID('Parallelogram-base')
        console.log(base);
        const height = getInputValueByID('Parallelogram-height')
      console.log(height);

        const Area = base * height;
        console.log(Area);
        document.getElementById('Parallelogram-area').innerText = Area;

}





function getInputValueByID(inputFieldId){
    const inputField =document.getElementById(inputFieldId)
    const inputFieldText = inputField.value ;
    const inputValue =parseFloat(inputFieldText);
    return inputValue;

    /* const inputFielHeight  =document.getElementById(length)
    const inputFieldHeightText = inputFielHeight.value;
    const inputHeightValue = parseFloat(inputFieldHeightText);
    return inputValue, inputHeightValue;
 */
    
}