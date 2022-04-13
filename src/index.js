function showParameters() {
    let type = document.getElementById('type').value;
    let circleConfig = document.getElementById('circle_config');
    let polygonConfig = document.getElementById('polygon_config');
    
    switch(type){
        case 'circle':
            circleConfig.style.display = 'inline-block';
            polygonConfig.style.display = 'none';
            break;
        case 'polygon':
            polygonConfig.style.display = 'inline-block';
            circleConfig.style.display = 'none';
            break;
    }
}

function create() {
    let canvasWidth = document.getElementById('width').value,
        canvasHeight = document.getElementById('height').value;
    if(!canvasWidth || !canvasHeight) {
        alert('請設定畫布大小');
        return;
    }

    let type = document.getElementById('type').value;
    if(!type) {
        alert('請先選擇圖像類型');
        return;
    }
    console.log(type);

    let shape;
    switch(type){
        case 'circle':
            shape = createEllipse();
            break;
        case 'polygon':
            shape = createPolygon();
            break;
    }

    let canvas = document.getElementById('canvas');
    canvas.removeChild(canvas.firstChild);

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', canvasWidth);
    svg.setAttribute('height', canvasHeight);
    svg.style.border = '1px solid';
    
    svg.appendChild(shape);
    canvas.appendChild(svg);
}

function createEllipse() {

}

function createPolygon() {
    
}