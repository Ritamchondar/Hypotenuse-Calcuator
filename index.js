let h;
let b;
let hi;
document.getElementById("mybutton").onclick = function(){
    h = document.getElementById("h").value;
    b = document.getElementById("b").value;
    hi = Math.sqrt(Math.pow(h,2)+Math.pow(b,2));
    console.log(hi);
    document.getElementById("hi1").innerHTML = "Hypotenuse is " + hi
}