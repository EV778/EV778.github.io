var cat = {
    "frames": [
          {
              "frame": {
                  "x": 1,
                  "y": 1,
                  "w": 512,
                  "h": 165
              },
              "rotated": false,
              "trimmed": false,
              "spriteSourceSize": {
                  "x": 0,
                  "y": 0,
                  "w": 512,
                  "h": 165
              },
              "sourceSize": {
                  "w": 512,
                  "h": 165
              }
          },
      {
              "frame": {
                  "x": 253,
                  "y": 1,
                  "w": 512,
                  "h": 165
              },
              "rotated": false,
              "trimmed": false,
              "spriteSourceSize": {
                  "x": 0,
                  "y": 0,
                  "w": 512,
                  "h": 165
              },
              "sourceSize": {
                  "w": 512,
                  "h": 165
              }
          }
      ]
  }
  
  
  var cat_img = new Image();
  cat_img.src = './cat.png';
  
  var speechBubble_image = new Image();
  speechBubble_image.src = './speechbubble.png';
  
  var canvas_count = document.getElementById("canvas");
  var ctx = canvas_count.getContext("2d");
  
  var button = document.querySelector("button");
  
  button.onclick = function(){
       drawImg();
       button.style.visibility = "hidden";
   }
  
   function drawNum(i){
    ctx.drawImage(cat_img,cat.frames[i].frame.x,cat.frames[i].frame.y,  cat.frames[i].frame.w, cat.frames[i].frame.h, 300, 525, cat.frames[i].sourceSize.w, cat.frames[i].sourceSize.h);
  }
  
  function drawBubble(){
    ctx.drawImage(speechBubble_image, 100, 100, 239, 239);
  }
  
  function drawText(){
    ctx.font = "20px Century Gothic";
      ctx.fillStyle= "black";
      ctx.textAlign = "center";
    ctx.fillText("Come play with me", 220, 200);
  }
  var currentLoop = 0;
  
  function drawImg(){
      drawBubble();
      drawText();
       ctx.clearRect(300,525, 512, 165);
       drawNum(currentLoop);
       currentLoop++;
       if (currentLoop == 2){
         currentLoop = 0;
      }
      setTimeout(drawImg, 500);
  
  }