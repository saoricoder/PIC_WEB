var button = document.getElementById("b1");
var marker = document.getElementById("respuesta");
var click = 0,
    mouseover = 0,
    mouseleave = 0,
    focus = 0,
    blur = 0;

button.onclick = function() {
    console.log(this.id + ": Clicked!");
    click++;
    update_marker();
}

button.onmouseover = function() {
    console.log(this.id + ": Mouse Over!");
    mouseover++;
    update_marker();
}

button.onmouseleave = function() {
    console.log(this.id + ": Mouse Leave!");
    mouseleave++;
    update_marker();
}

button.onfocus = function() {
    console.log(this.id + ": Focus!");
    focus++;
    update_marker();
}

button.onblur = function() {
    console.log(this.id + ": Blur!");
    blur++;
    update_marker();
}

function update_marker() {
    marker.innerHTML = "Click: " + click + " - ";
    marker.innerHTML += "Mouseover: " + mouseover + " - ";
    marker.innerHTML += "Mouseleave: " + mouseleave + " - ";
    marker.innerHTML += "Focus: " + focus + " - ";
    marker.innerHTML += "Blur: " + blur;
}