exports.start2 = function start2() {
    var can = document.getElementById("can2");
    var ctx = can2.getContext("2d");

    //making the canvas full screen
    can.height = 80;
    can.width = 400;
    //letters pool
    var matrix = "RAFAŁ_BUJOK_FRONTEND_DEVELOPER_"
    matrix = matrix.split("");
    var font_size = 20;
    //text to show
    var text = 'RAFAŁ_BUJOK_FRONTEND_DEVELOPER_'
    text = text.split("")
    let lettersCorrect = 0;

    function drawBackground() {
        ctx.fillStyle = "rgba(0, 0, 0, 4";
        ctx.fillRect(0, 0, 400, 80);
    }

    function drawLetter() {

        //1st line of text
        if (lettersCorrect !== text.length) {
            let num = lettersCorrect
            if (num < 12) {
                ctx.fillStyle = "rgba(0, 0, 0, 1";
                ctx.fillRect(0 + (font_size * num), 0, font_size, font_size + 5);
                ctx.font = font_size + "px arial";
                ctx.fillStyle = "#fff"; //green text
                letter = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(letter, 5 + (num * font_size), font_size);
                if (letter === text[num]) {

                    lettersCorrect++
                }
            }
            //2nd line of text
            else {
                ctx.fillStyle = "rgba(0, 0, 0, 1";
                ctx.fillRect(0 + (font_size * (num - 12)), 45, font_size, font_size + 5);
                ctx.font = font_size + "px arial";
                ctx.fillStyle = "#0ff"; //blue text
                letter = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(letter, 5 + ((num - 12) * font_size), font_size + 45);
                if (letter === text[num]) {

                    lettersCorrect++
                }
            }
        }
    }
    can.addEventListener('click', reset, false);

    function reset() {

        drawBackground();
        lettersCorrect = 0
    }

    reset();
    setInterval(drawLetter, 30);

}
