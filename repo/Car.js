let Car = function (x,y,height,width) {
    this.x=x;
    this.y=y;
    // this.centerX;
    // this.centerY;
    this.height=height;
    this.width=width;
    this.speed =10;
    this.speedBoost = function () {
        return this.speed = 20;
    }
    this.getDrawX =function () {
        return this.x - (this.width/2);
    }
    this.getDrawY =function () {
        return this.y - (this.height/2);
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getWidth = function () {
        return this.width;
    }
    this.moveUp = function () {
        this.y -=this.speed;
    }
    this.moveDown = function () {
        this.y +=this.speed;
    }
    this.moveLeft = function () {
        this.x -=this.speed;
    }
    this.moveRight = function () {
        this.x +=this.speed;
    }
    this.draw = function (direct) {
        switch (direct) {
            case "Up":
                this.height = carImgUp.height;
                this.width = carImgUp.width;
                // ctx.drawImage(carImgUp,this.x-50,this.y-100);
                ctx.drawImage(carImgUp,this.getDrawX(),this.getDrawY());
                break;
            case "Down":
                this.height = carImgDown.height;
                this.width = carImgDown.width;
                // ctx.drawImage(carImgDown,this.x-50,this.y-100);
                ctx.drawImage(carImgDown,this.getDrawX(),this.getDrawY());
                break;
            case "Left":
                this.height = carImgLeft.height;
                this.width = carImgLeft.width;
                // ctx.drawImage(carImgLeft,this.x-100,this.y-50);
                ctx.drawImage(carImgLeft,this.getDrawX(),this.getDrawY());
                break;
            case "Right":
                this.height = carImgRight.height;
                this.width = carImgRight.width;
                // ctx.drawImage(carImgRight,this.x-100,this.y-50);
                ctx.drawImage(carImgRight,this.getDrawX(),this.getDrawY());
                break;
        };

    }
};