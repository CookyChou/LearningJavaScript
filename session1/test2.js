window.color = "red";
var o ={color: "blue"}

function sayColor(){
    alert(this.color);
}

sayColor();

o.saycolor = sayColor;
o.saycolor();