let a;
let b;
let c;
let d;
let x;
let x_1;
let x_2;
if(confirm("ax2 + bx + c = 0")) {
const a = parseFloat(prompt("a ="));
const b = parseFloat(prompt("b ="));
const c = parseFloat(prompt("c ="));
alert(a+"x2" + "+" + b+"x" + "+" + c + "=" + 0);
function calcD(a, b, c) {
const d = b*b - 4*a*c;
return d;
}
alert("d =" + d)
if(d > 0) {
const x_1 = (-b + Math.sqrt(d)) / 2*a;
const x_2 = (-b - Math.sqrt(d)) / 2*a;
alert("x1 = " + x_1 + ", x2 = " + x_2);
}
else if(d < 0) {
alert("x нема розвязку");
}
else {
const x = -b / 2*a;
alert(" x = " + x);
}
}
