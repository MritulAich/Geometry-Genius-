function pentagonCalculate(){
    const pentagonPerimeter = document.getElementById('pentagon-perimeter');
    const perimeter = parseFloat(pentagonPerimeter.value);

    const pentagonDiagonal = document.getElementById('pentagon-diagonal');
    const diagonal = parseFloat(pentagonDiagonal.value);

    

    const area = 0.5 * perimeter * diagonal;
    console.log(area);

    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}