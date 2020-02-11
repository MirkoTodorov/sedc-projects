//Timeout function to print success if I don't hit the Black Dots (after 13 seconds)
let t = setTimeout(function(){
    alert('You Won!')
}, 13000)

//Function to print lose if I hit the Black Dots
function printLoseMessage(){
    alert('You Lose!');
    clearTimeout(t);
}
//Array which will be used to store the Black (Obstacle) dots
let spans = [];

//Function to create both the Red Dot and the Black Dots
function createSpan(size, top, left){
    let span = document.createElement('span');
    if(size === 'small'){
        span.setAttribute('name', 'red-dot')
        span.style.height = '25px';
        span.style.width = '25px';
        span.style.backgroundColor = 'red';
        span.style['border-radius'] = '50%';
        span.style.display = 'inline-block';
        span.style.position = 'relative';
        span.style.top = '850px';
        span.style.left = '500px';

        
    }
    else if(size === 'medium'){
        span.setAttribute('name', 'medium-black-dot');
        span.style.height = '200px';
        span.style.width = '200px';
        span.style.backgroundColor = 'black';
        span.style['border-radius'] = '50%';
        span.style.display = 'inline-block';
        span.style.position = 'absolute';
        span.style.top = `${top}px`;
        span.style.left = `${left}px`;

        spans.push(span);
    }
    else {
        span.setAttribute('name', 'large-black-dot');
        span.style.height = '350px';
        span.style.width = '350px';
        span.style.backgroundColor = 'black';
        span.style['border-radius'] = '50%';
        span.style.display = 'inline-block';
        span.style.position = 'absolute';
        span.style.top = `${top}px`;
        span.style.left = `${left}px`;

        spans.push(span);
    }

    return span;
}

//Creating all the spans manually
let span1 = createSpan('small');
let span2 = createSpan('large', 120, 150);
let span3 = createSpan('large', 120, 720);
let span4 = createSpan('large', 120, 1300);
let span5 = createSpan('medium', 150, 1450);
let span6 = createSpan('medium', 400, 50);

//Moving the Large Black Dots vertically
function moveObstacleVertical(span){
    const refreshRate = 1000/60;
    const maxXPosition = 800;
    let speedX = 20;
    let positionX = 120;
    console.log(positionX);
    window.setInterval(() => {
        positionX = positionX + speedX;
        // console.log(positionX);
        if (positionX > maxXPosition || positionX < 0) {
            speedX = speedX * (-1);
        }
        span.style.top = positionX + 'px';
    }, refreshRate);
}

//Moving the Medium Black Dots horizontally in both directions
function moveObstacleHorizonral(span, flag){
    const refreshRate = 1000/60;
    let maxXPosition;
    let minPosition;
    let speedX;
    let positionX;
    if(flag === 'right'){
        maxXPosition = 1450;
        speedX = 20;
        positionX = 50;
        window.setInterval(() => {
            positionX = positionX + speedX;
            // console.log(positionX);
            if (positionX > maxXPosition || positionX < 50) {
                speedX = speedX * (-1);
            }
            span.style.left = positionX + 'px';
        }, refreshRate);
    }
    else {
        minPosition = 50;
        speedX = -20;
        positionX = 1450;
        window.setInterval(() => {
            positionX = positionX + speedX;
            // console.log(positionX);
            if (positionX < minPosition || positionX > 1450) {
                speedX = speedX * (-1);
            }
            span.style.left = positionX + 'px';
        }, refreshRate);
    }    
}

//Function to move the Red Dot on each mouse move (dot moves on the position of the mouse)
function moveTheDot(e){
    console.log(e);
//  looking for clientX and clientY
    span1.style.left = e.clientX - 12.5;
    span1.style.top = e.clientY - 12.5;
}

//Add the function for moving the Red Dot after 3 seconds
setTimeout((function(){
    document.addEventListener('mousemove', moveTheDot, false);
}), 3000);

//Append the red Dot first
document.body.appendChild(span1);

//Append the Black Dots
for(span of spans){
    document.body.appendChild(span);
    if(span.style.height === '200px'){
        if(span.style.left > '500px'){
            console.log(span);
            moveObstacleHorizonral(span, 'right');
        }
        else{
            console.log(span);
            moveObstacleHorizonral(span, 'left');
        }            
    }
    else
        moveObstacleVertical(span);
        
}

//Add the lose function to the black dots after 3 seconds
setTimeout(function(){
    for(span of spans){
        span.addEventListener('mouseover', printLoseMessage, false);
    }
}, 3000);





