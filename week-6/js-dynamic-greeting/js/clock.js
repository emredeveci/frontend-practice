function promptName() {
  let name = prompt("Please enter your name:");
  if (name != null) {
    document.getElementById("myName").innerHTML = name;
  }
}

function currentTimeAndDay() {
  var currentDate = new Date();
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var currentDay = days[currentDate.getDay()];
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();
  var currentSecond = currentDate.getSeconds();

  currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
  currentSecond = currentSecond < 10 ? "0" + currentSecond : currentSecond;

  var currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
  var dateTimeString = currentTime + ", " + currentDay;

  document.getElementById("myClock").innerText = dateTimeString;
}

window.onload = function () {
  promptName();
  currentTimeAndDay();
  setInterval(currentTimeAndDay, 1000);
};
