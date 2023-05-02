function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
  
      var fruit = [
          {name:"Apple", quantity:20, color:"red"},
          {name:"Orange", quantity:10, color:"orange"},
          {name:"Banana", quantity:15, color:"yellow"},
          {name:"Kiwi", quantity:5, color:"green"},
          {name:"Blueberry", quantity:5, color:"blue"},
          {name:"Grapes", quantity:10, color:"purple"}
      ];
      var x = 50, y=0, i=0;
      for (var i=0;i<fruit.length;i++){
        drawChart(ctx,x,y,i,fruit);
         y+=100;
      }
    }
  }

  
  function drawChart(ctx,x,y,i,fruit){
    var length = 20 * fruit[i].quantity;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = fruit[i].color;
    ctx.fillRect(x,y,length,100);
    ctx.fill();
    ctx.restore();

    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(fruit[i].name, x+50, y+80);
    ctx.fillText(fruit[i].quantity, x+50, y+60);

  }
  
 // function drawText(ctx,x,y,i,fruit){
    //ctx.font = "30px Arial";
    //ctx.fillStyle = "black";
    //ctx.fillText(fruit[i].name, x+10, y+550);
  //  ctx.fillText(fruit[i].quantity, x+10, y+50);
//  }
  
