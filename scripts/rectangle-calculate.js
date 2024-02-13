function calculateRectangle(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidth.value);

    const rectangleLength = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLength.value);


    const area = width * length;
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}