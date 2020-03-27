let VatCan= function (x,y,height,width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.getHeight = function () {
        return this.height;
    }
    this.getWidth = function () {
        return this.width;
    }

    this.drawImage = function () {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        let StoneImg = new Image();
        StoneImg.src = "stoneimg.png";
        context.drawImage(StoneImg, Math.floor(Math.random() * this.x), Math.floor(Math.random() * this.y));
    }
};