console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

//console.log(typeof(new Date().getHours()));
console.log(new Date().getDay(), typeof new Date().getDay());

function getGreeting() {
  const currentTime = new Date().getHours();
  console.log(currentTime);
  if (6 <= currentTime && currentTime <= 12) return "Good Morning!";
  if (13 <= currentTime && currentTime <= 18) return "Good Afternoon!";
  if (19 <= currentTime && currentTime <= 22) return "Good Evening!";
  return "Good Night!";
}

function getDayColor() {
  const currentWeekDay = new Date().getDay();
  if (currentWeekDay === 1) return "darkgray";
  if (2 <= currentWeekDay && currentWeekDay <= 5) return "lightblue";
  else return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
