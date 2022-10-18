ad = prompt("Adınızı Giriniz:");

const header = document.getElementById("banner");
header.innerHTML = `Merhaba ${ad} Hoşgeldin`;

const d = new Date();
const gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
gun = gunler[d.getDay()];

tarih.innerHTML = `Bugün: ${gun}`;

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clock = document.getElementById('clock').innerHTML = "Şuan Saat: " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }