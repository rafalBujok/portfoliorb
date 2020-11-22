exports.start = function start() {
    var can = document.getElementById("can");
    var ctx = can.getContext("2d");

    //making the canvas full screen
    can.height = window.innerHeight;
    can.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    var font_size = 10;
    var columns = can.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 100;
    var oldText = [];



    //drawing the characters
    function draw() {

        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.045";
        ctx.fillRect(0, 0, can.width, can.height);

        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            speed = Math.random() * 100;

            //a random chinese character to print
            text = matrix[Math.floor(Math.random() * matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size

            if (oldText[i]) {
                ctx.fillStyle = "#0ff"; //green text
                ctx.fillText(oldText[i], i * font_size, (drops[i] * font_size) - font_size);

            }
            if (speed>40){
                ctx.fillStyle = "#fff"; //white text
                ctx.fillText(text, i * font_size, drops[i] * font_size);
                oldText[i] = text;

            }


            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > can.height && Math.random() > 0.95)
                drops[i] = 0;

            //incrementing Y coordinate
if (speed>40){
            drops[i]++;
}
        }
    }

    setInterval(draw, 40);
}