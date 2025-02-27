function changeColor() {
    document.querySelector("h1").style.color = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
}
