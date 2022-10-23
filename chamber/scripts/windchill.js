let temp = parseInt(document.getElementById('temp').innerText);
let windSpeed = parseInt(document.getElementById('wind-speed').innerText);
let windChill = document.getElementById('wind-chill');

let windChillCalc = 0;

console.log(temp)
console.log(windSpeed)

function windChillfunction(t, s) {
  windChillCalc = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
  console.log(windChillCalc);
  return windChillCalc;
 
}
windChill.innerHTML = windChillfunction(temp, windSpeed);
