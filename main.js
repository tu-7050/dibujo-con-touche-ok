canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
color = "red";

color = "black";
anchodelinea = 1;

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
// ● Ancho de pantalla entre 1200px y 992px: Se trata de laptops.
// ● Ancho de pantalla entre 992px y 768px: Son las tabletas.
// ● Ancho de pantalla menor a 768px: Son teléfonos móviles.
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    // Eventos táctiles


}
// Eventos táctiles

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("color").value;
    anchodelinea = document.getElementById("anchodelinea").value;
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;


}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = anchodelinea;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    //console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
    color = document.getElementById("color").value;
    anchodelinea = document.getElementById("anchodelinea").value
}

function clearArea() {
    ctx.clearRect(0, 0,
        ctx.canvas.width,
        ctx.canvas.height);
}

