var c = document.querySelector("#c");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "purple";
    ctx.fillRect(0,0,60,330);


var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,50,50);

ctx.fillStyle = "green"
ctx.fillRect(100,100,10,10);

ctx.fillStyle = "blue";
ctx.fillRect(200,10,20,20);

ctx.fillStyle = "blue";
ctx.strokeRect(50, 50, 100, 100);
ctx.beginPath();
ctx.moveTo(75,75);
ctx.lineTo(125, 125);
ctx.lineTo(125,75);

ctx.fillStyle = "blue";


ctx.font = "56pt impact";
ctx.fillText("Hello Yegor!", 250, 210);
ctx.strockeStyle= "red";
ctx.strokeLineWidth = 3;