function parallelogramCalculate(){
    const parallelogramBase = document.getElementById('parallelogram-base');
    const base = parseFloat(parallelogramBase.value);

    const parallelogramHeight = document.getElementById('parallelogram-height');
    const height = parseFloat(parallelogramHeight.value);


    const areaResult = base * height;
    console.log(areaResult);
    
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = areaResult;
}