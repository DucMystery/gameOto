let CarImage = new Image();
CarImage.src ="imgCar.png";
let StoneImage = new Image();
StoneImage.src="stoneimg.png";
let MyCar = new Car(0,0,CarImage.height,CarImage.width);
let MyStone = new VatCan(0,0,StoneImage.height,StoneImage.width);
let gameScreen = new GameScreen();


 function starGame() {
     gameScreen.clear();
     MyCar.drawImage();
     MyStone.drawImage();
 }
 
 function moveRight() {
     gameScreen.clear();
     MyCar.moveRight();
     MyCar.drawImage();
 }

 function moveLeft() {
     gameScreen.clear();
     MyCar.moveLeft();
     MyCar.drawImage();
 }
 
 

