/**
 * Created by Josh on 11/12/2015.
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 150,
    y = 150,
    velx = 0,
    vely = 0,
    xspeed = 25,
    yspeed = 25,
    xfriction = 0.85,
    yfriction = 0.85,
    keys = [];

window.onload = function()
{
    console.log('main.js');

    canvas.width = 800;
    canvas.height = 400;

    drawPerson(10, 10);

    document.body.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });
    document.body.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });

    update();
};

function drawPerson()
{
    ctx.fillStyle = '#000';
    ctx.fillRect(x, y, 15, 15);
}

function update()
{
    if(keys[87])
    {
        if(vely > -yspeed){ vely -= 1; }
    }

    if(keys[68])
    {
        if(velx < xspeed){ velx += 1; }
    }

    if(keys[65])
    {
        if(velx > -xspeed){ velx -= 1; }
    }

    if(keys[83])
    {
        if(vely < yspeed){ vely += 1; }
    }

    vely *= yfriction;
    y += vely;
    velx *= xfriction;
    x += velx;

    //bounds
    if(x < 0){ x = 0; }
    if(y < 0){ y = 0; }
    if(x > canvas.width-15){ x = canvas.width - 15; }
    if(y > canvas.height-15){ y = canvas.height - 15; }

    ctx.clearRect(0, 0, 800, 400);
    ctx.beginPath();

    drawPerson();

    setTimeout(update, 10)
}

