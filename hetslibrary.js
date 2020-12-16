function isTouching (o1,o2){
    if (o1.x -o2.x < o2.width/2 + o1.width/2 &&
      o2.x - o1.x < o2.width/2 + o1.width/2 &&
      o1.y - o2.y < o2.height/2 + o1.height/2 &&
      o2.y - o1.y < o2.height/2 + o1.height/2){  
  
    return true;
  
  }else {
    return false;
  }
  }

  function bounceOff(){


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}

}




