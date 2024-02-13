function ellipseCalculate(){
    const ellipseAxisB = document.getElementById('a');
    const a = parseFloat(ellipseAxisB.value);

    const ellipseAxisA = document.getElementById('b');
    const b = parseFloat(ellipseAxisA.value);

    

    const area = 3.1416 * a * b;
    console.log(area);

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}