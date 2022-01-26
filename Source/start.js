(() => {
  // เริ่มเขียนโค้ด
  const Second = 1000;
  const Min = Second * 60;
  const Hour = Min * 60;
  const Day = Hour * 24;

function SetInnerText(id,solution){
  const element = document.getElementById(id);  
  element.innerText = Math.floor(solution) ;
  console.log(solution);
}  

function countdown(){
  const Now = new Date().getTime();
  const Newyear = new Date('April 22,2022 14:14:59').getTime();
  const timeleft = Newyear - Now;
  //console.log(timeleft);

  /*const Dayleft = document.getElementById('days');  
  Dayleft.innerText = Math.floor(timeleft / Day) ;*/

  SetInnerText('days',(timeleft / Day));

  /*const Hourleft = document.getElementById('hours');
  Hourleft.innerText = Math.floor((timeleft % Day) / Hour);*/

  SetInnerText('hours',(timeleft % Day) / Hour );

  /*const Minleft = document.getElementById('minutes');
  Minleft.innerText = Math.floor(((timeleft % Day) % Hour) / Min);*/

  SetInnerText('minutes',((timeleft % Day) % Hour) / Min);

  /*const Secondleft = document.getElementById('seconds');
  Secondleft.innerText = Math.floor((((timeleft % Day) % Hour) % Min) / Second);*/

  SetInnerText('seconds',(((timeleft % Day) % Hour) % Min) / Second);
}

function run(){
  setInterval(countdown, 1000);

}
run();
})();
