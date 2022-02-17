function askMyName() {
    const name = prompt("Please enter your name");
    if (name != null) {
       document.getElementById("my-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
    const h1message = document.getElementById("my-name").innerHTML
    alert(h1message + " แอบแซง...เพราะแรงน้อย")
 }