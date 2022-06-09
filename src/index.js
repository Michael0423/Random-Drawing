function changeSVGSize() {
    let svg = document.getElementById('svg'),
        width = document.getElementById('width').value,
        height = document.getElementById('height').value;
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
}

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
    let type = document.getElementById('type').value;
    if(!type) {
        alert('請先選擇圖像類型');
        return;
    }
    // console.log(type);

    let shape;
    switch(type){
        case 'circle':
            let x = document.getElementById('cx').value, 
                y = document.getElementById('cy').value, 
                r = document.getElementById('r').value;
                color= document.getElementById('color').value;
            shape = createEllipse({ x, y }, r, color);
            break;
        case 'polygon':
            shape = createPolygon();
            break;
    }

    svg.appendChild(shape);
}

function createEllipse(center, radius, color) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttribute('cx', center.x);
    circle.setAttribute('cy', center.y);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', color);

    return circle;
}

function createPolygon() {
    
}