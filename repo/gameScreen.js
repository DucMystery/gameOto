let GameScreen = function (height,width) {
    this.clear = function () {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.clearRect(0,0,canvas.clientHeight,canvas.clientWidth);
    }
}