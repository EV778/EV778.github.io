function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
  
      ctx.save();
      nightSky(ctx, 0, 0);
      moon(ctx,100,100,50);
	Mountain(ctx,375,400,450,200,525,400);
	Mountain(ctx,150,400,275,150,400,400);
	Mountain(ctx,500,400,625,150,750,400);
      Mountain(ctx,0,400,100,250,200,400);
      Mountain(ctx,900,400,800,250,700,400);
      ground(ctx, 100, 600);
      fence(ctx,0,380);
      dogHouse(ctx,260,350);

      ctx.font = "30px Calibri";
      ctx.fillText("Beware of the dog!", 350, 300);
      ctx.restore();
    }
  }

  function nightSky(ctx, x, y) {
    var grd = ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0, "#000066");
    grd.addColorStop(1, "#003399");
    ctx.fillStyle = grd;
    ctx.fillRect(x, y, 900, 500);
  }

  function moon(ctx,x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle = "#FFFFE5";
    ctx.fill();
  }
  function Mountain(ctx,u,v,w,x,y,z){
    ctx.beginPath();
    ctx.moveTo(u,v);
    ctx.lineTo(w,x);
    ctx.lineTo(y,z);
    ctx.fillStyle = "#54547E";
    ctx.fill();
  }
  function fence(ctx, x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 5, 5);
    x=x+5;
    z=y-15;
    for (var i = 0; i < 29; i++) {
	ctx.fillStyle = "white";
      ctx.fillRect(x, z, 20, 60);
	ctx.beginPath();
      ctx.moveTo(x,z);
   	ctx.lineTo(x+10,z-20);
      ctx.lineTo(x+20,z);
   	ctx.fillStyle = "white";
   	ctx.fill();
	ctx.fillRect(x+20, y, 10, 5); 
      x = x+30;
    }
    ctx.fillRect(x, z, 20, 60);
    ctx.beginPath();
    ctx.moveTo(x,z);
    ctx.lineTo(x+10,z-20);
    ctx.lineTo(x+20,z);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.fillRect(x+20, y, 5, 5);
  }
  function dogHouse(ctx, x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 40, 100);
    ctx.beginPath();    //making rectangle for depth
    ctx.moveTo(x,y);
    ctx.lineTo(x-160, y);
    ctx.lineTo(x-160, y+90);
    ctx.lineTo(x, y+100);
    ctx.fill();
    ctx.beginPath();    //making triangle for roof
    ctx.moveTo(x,y);
    ctx.lineTo(x+20, y-50);
    ctx.lineTo(x+40, y);
    ctx.fillStyle = "#F85289";
    ctx.fill();
    ctx.beginPath();    //making rectangle for roof depth
    ctx.moveTo(x,y);
    ctx.lineTo(x-160, y);
    ctx.lineTo(x-150, y-50);
    ctx.lineTo(x+20, y-50);
    ctx.fill();
    ctx.beginPath();   //half circle for the entrance
    ctx.arc(x+20, y+100, 15, 0, Math.PI, true);
    ctx.fillStyle = "white";
    ctx.fill();
  }
  function ground(ctx, x, y){
    ctx.beginPath();   //hilly ground so making half circles
    ctx.arc(x, y, 250, 0, Math.PI, true);
    ctx.fillStyle = "#005400";
    ctx.fill();
    ctx.beginPath();  
    ctx.arc(x+500, y, 250, 0, Math.PI, true);
    ctx.fill();
    ctx.beginPath();   
    ctx.arc(x+250, y, 250, 0, Math.PI, true);
    ctx.fill();
ctx.beginPath();   
    ctx.arc(x+800, y, 250, 0, Math.PI, true);
    ctx.fill();
  }

