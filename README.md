# Clock Master ⏰

A dynamic and interactive clock web application that displays the current time, date, and day. Users can toggle between 12-hour and 24-hour formats seamlessly.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
- [Live Demo](#live-demo)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)

---

## Overview

Clock Master is a minimalist web application designed to showcase real-time updates of:
- Current **time** with second-level precision.
- **Day of the week** and **date** with formatted month and year.
- Switchable **12-hour** and **24-hour** time formats.

This project is beginner-friendly and focuses on using HTML, CSS, and vanilla JavaScript to create an interactive UI.

---

## Features

- 🕒 **Real-time clock** that updates every second.
- 📅 **Date display** with suffixes (e.g., `1st`, `2nd`).
- 🌞 **AM/PM indicator** for 12-hour mode.
- 🔄 **Switch between 12-hour and 24-hour formats**.
- 🎨 Clean and responsive design.

---

## Technologies Used

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling the clock interface.
- **JavaScript (ES6)**: For handling time logic and interactivity.

---

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/isnirvana/Digital-clock.git
   ```
2. **Open the `index.html` file** in your favorite web browser.

No additional setup or dependencies are required.

---

## How It Works

1. **Dynamic Time Updates**:
   - Uses the `setInterval` function to fetch the current time every second.
   - Formats the time with leading zeros and applies the chosen format (12-hour or 24-hour).

2. **Date and Day**:
   - Retrieves the current date, day, and month using `Date()` methods.
   - Adds appropriate suffixes for the date (e.g., `st`, `nd`, `rd`, `th`).

3. **Toggle Mechanism**:
   - Listens for user clicks on the "12hr" or "24hr" buttons.
   - Updates the clock format accordingly by toggling CSS classes.

---

## Live Demo

Check out the live version of the project here: [Clock Master Live](https://ismyclock.netlify.app/)

---

## What I Learned

- **Time handling with JavaScript**:
  - Using the `Date` object for dynamic time and date updates.
  - Formatting time and date strings effectively.

- **DOM Manipulation**:
  - Dynamically updating content in real-time.
  - Handling user interaction with event listeners.

- **CSS Styling**:
  - Creating a visually appealing clock interface.
  - Ensuring responsive design for various screen sizes.

---

## Future Improvements

- 🌐 Add localization support for different languages and time zones.
- 📱 Enhance responsiveness for smaller devices.
- 🎨 Add themes (e.g., dark mode).
- 🛠️ Implement error handling for edge cases (e.g., invalid date).

---

## Acknowledgments

Special thanks to:
- **[Kewa Blay (Mentor)](https://github.com/kewablay)** for inspiring project ideas.
- **JavaScript documentation** on [MDN Web Docs](https://developer.mozilla.org/) for guidance.

---