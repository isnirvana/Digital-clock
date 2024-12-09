const seconds = document.querySelector("#seconds")
const minutes = document.querySelector(".minute")
const hours = document.querySelector(".hour")
const downSection = document.querySelector(".down-section")
const currentDay = document.querySelector("#current-day")
const currentDate = document.querySelector("#current-date")
const twelveHours = document.querySelector("#twelve-hours")
const twentyFourHours = document.querySelector("#twenty-four-hours")
const amOrPm = document.querySelector("#am-or-pm")
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

let day = new Date().getDay()
let month = new Date().getMonth()
let year = new Date().getFullYear()
let date = new Date().getDate()

currentDay.textContent = days[day]
currentDate.textContent = `${date}th ${months[month]} ${year}`
console.log(day)

downSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("down-section")) return
  if (e.target.textContent === "12hr") {
    e.target.classList.add("show")
    if (twentyFourHours.classList.contains("show")) {
      twentyFourHours.classList.remove("show")
    }
  }

  if (e.target.textContent === "24hr") {
    e.target.classList.add("show")
    if (twelveHours.classList.contains("show")) {
      twelveHours.classList.remove("show")
    }
  }
})

setInterval(getTime, 100)

function getTime() {
  const time = new Date()
  let second = time.getSeconds()
  let minute = time.getMinutes()
  // let hour = 14
  let hour = time.getHours()

  if (hour >= 12) {
    amOrPm.textContent = "PM"
  }

  if (hour > 12 && !twentyFourHours.classList.contains("show")) {
    hour = hour - 12
  } else if (twentyFourHours.classList.contains("show")) {
    hour = hour
  }

  if (second < 10) {
    second = "0" + second
  }

  if (minute < 10) {
    minute = "0" + minute
  }

  if (hour < 10) {
    hour = "0" + hour
  }
  seconds.textContent = second
  minutes.textContent = minute
  hours.textContent = hour
}
