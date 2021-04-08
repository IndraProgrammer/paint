canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseEvent="mousedown";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
    console.log(mouseEvent);
}   
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.storkeStyle="color";
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
        console.log("inside")
        }
        last_position_of_x=current_position_of_mouse_x;
        last_position_of_y=current_position_of_mouse_y;
        console.log(last_position_of_x);
}   