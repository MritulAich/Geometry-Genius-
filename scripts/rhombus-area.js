function rhombusCalculate(){
    const rectangleDiagonal1 = document.getElementById('rhombus-d1');
    const diagonal1 = parseFloat(rectangleDiagonal1.value);

    const rectangleDiagonal2 = document.getElementById('rhombus-d2');
    const diagonal2 = parseFloat(rectangleDiagonal2.value);

    

    const area = 0.5 * diagonal1 * diagonal2;
    console.log(area);

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}