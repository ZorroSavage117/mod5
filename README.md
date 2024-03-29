# Overview

This project aims to develop a task automation web application as part of ongoing learning and skill development in software engineering. The web app allows users to schedule and automate repetitive tasks by providing a user-friendly interface to specify task names, schedules, and commands to execute.

To start the test server on your computer, ensure that you have Node.js installed. Then, navigate to the project directory in your terminal and run the command node server.js. Once the server is running, open a web browser and navigate to http://localhost:3000 to see the first page of the app.

The purpose of developing this software is to gain practical experience in building web applications, including handling user input, server-side processing, and dynamic content generation. Additionally, the project provides an opportunity to explore the integration of scheduling functionality using libraries like node-cron.

[Software Demo Video](https://www.youtube.com/channel/UCO5nummhuV3PR3y2F6T4wbw)

# Web Pages

The web app consists of multiple pages, including:

1. Homepage: Displays a form for users to schedule tasks. Users can enter a task name, select a schedule (e.g., hourly, daily), and specify a command to execute.
2. Confirmation Page: After submitting the form, users are directed to a confirmation page that displays a message confirming the successful scheduling of the task.

The app transitions between these pages based on user interactions, such as submitting the form on the homepage. Dynamically generated content includes the task name, schedule, and command displayed on the confirmation page.

# Development Environment

he tools used to develop the software include:

* Node.js
* Express.js
* Body-parser
* Node-cron

The programming language used is JavaScript, both on the client-side and server-side. Node.js is utilized for server-side development, while Express.js is used as the web application framework.

# Useful Websites

Here are some websites that were helpful during the project:

* [Express.js Official Documentation](https://expressjs.com/)
* [npm Documentation](https://docs.npmjs.com/)
* [Cron Expression Generator](https://crontab.guru/)

# Future Work

There are several areas for future improvement and enhancement:

* Implement user authentication to secure access to scheduling functionality.
* Allow users to edit and delete scheduled tasks.
* Improve the user interface with enhanced styling and responsiveness.
* Add error handling and validation for form submissions.
* Expand scheduling options to include more flexible recurrence patterns.