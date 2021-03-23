exports.start = function start() {
    var can = document.getElementById("can1");
    var ctx = can.getContext("2d");

    window.onresize = function(event) {
        can.height = window.innerHeight + 20;
        can.width = window.innerWidth;
        columns = can.width / font_size;
        drops = [];
        for (var x = 0; x < columns; x++) {
            drops[x] = 100;
        }
        oldText = [];
    }

    //making the canvas full screen
    can.height = window.innerHeight + 20;
    can.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%   ";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    var font_size = 10;
    var columns = can.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++) {
        drops[x] = 100;
    }
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
                ctx.fillStyle = "#0ff"; //blue text
                ctx.fillText(oldText[i], i * font_size, (drops[i] * font_size) - font_size);

            }
            if (speed > 40) {
                ctx.fillStyle = "#fff"; //white text
                ctx.fillText(text, i * font_size, drops[i] * font_size);
                oldText[i] = text;
            }
            //check if 5 last elements
            if (oldText[i - 1] === 'F' && oldText[i - 2] === 'R') {
                ctx.fillStyle = "rgba(0, 0, 0, 1"; // black bg
                ctx.fillRect(i * font_size, ((drops[i] * font_size) - 9 * font_size), font_size, font_size * 9);
                ctx.fillStyle = "#fff"; //white text
                //write FRONTEND
                ctx.fillText('F', i * font_size, ((drops[i] * font_size) - 8 * font_size));
                ctx.fillText('R', i * font_size, ((drops[i] * font_size) - 7 * font_size));
                ctx.fillText('O', i * font_size, ((drops[i] * font_size) - 6 * font_size));
                ctx.fillText('N', i * font_size, ((drops[i] * font_size) - 5 * font_size));
                ctx.fillText('T', i * font_size, ((drops[i] * font_size) - 4 * font_size));
                ctx.fillText('E', i * font_size, ((drops[i] * font_size) - 3 * font_size));
                ctx.fillText('N', i * font_size, ((drops[i] * font_size) - 2 * font_size));
                ctx.fillText('D', i * font_size, ((drops[i] * font_size) - 1 * font_size));
            }
            // if (oldText[i - 1] === 'A' && oldText[i - 2] === ' ' && Math.random() > 0.7) {
            //     ctx.fillStyle = "rgba(0, 0, 0, 1"; // black bg
            //     ctx.fillRect(i * font_size, ((drops[i] * font_size) - 10 * font_size), font_size, font_size * 10);
            //     ctx.fillStyle = "#fff"; //white text
            //     //write *****_***
            //     ctx.fillText('J', i * font_size, ((drops[i] * font_size) - 9 * font_size));
            //     ctx.fillText('E', i * font_size, ((drops[i] * font_size) - 8 * font_size));
            //     ctx.fillText('B', i * font_size, ((drops[i] * font_size) - 7 * font_size));
            //     ctx.fillText('A', i * font_size, ((drops[i] * font_size) - 6 * font_size));
            //     ctx.fillText('Ć', i * font_size, ((drops[i] * font_size) - 5 * font_size));
            //     ctx.fillText(' ', i * font_size, ((drops[i] * font_size) - 4 * font_size));
            //     ctx.fillText('P', i * font_size, ((drops[i] * font_size) - 3 * font_size));
            //     ctx.fillText('I', i * font_size, ((drops[i] * font_size) - 2 * font_size));
            //     ctx.fillText('S', i * font_size, ((drops[i] * font_size) - 1 * font_size));
            // }



            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > can.height && Math.random() > 0.95)
                drops[i] = 0;

            //incrementing Y coordinate
            if (speed > 40) {
                drops[i]++;
            }
        }
    }

    setInterval(draw, 30);
}
