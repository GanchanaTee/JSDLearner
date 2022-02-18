function askMyName() {
    const name = prompt("Please enter your name");
    if (name != null) {
       document.getElementById("myname").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
    const h1message = document.getElementById("my-name").innerHTML ;
    alert(h1message + " แอบแซง...เพราะแรงน้อย");
 }

 function calAge() {
    let birthYear = prompt("Please enter your birth year");
    yourAge = 2022 - Number(birthYear);
    alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${yourAge} ปีแล้ว`);
 }
 function loadProfile() {
    myName = "Ganchana" ;
    myProvince = "Pathumtani" ;
    document.getElementById("my-name").innerHTML = myName ;
    document.getElementById("my-province").innerHTML = myProvince;
 }