import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Full stack developer / Junior Developer </p>
          <h2>Tools and Languages</h2>
          <p>  Javascript, Git, HTML,
CSS,Python,SQL,Mongoose Technologies Nodejs, Express, React,
mongoDB, Heroku Communication English,Arabic</p>
<h2>EDUCATION</h2>
<p>
German university in cairo, Computer science major 2017 — 2024</p>
        </section>
        <section>
  <h2>Projects</h2>
  <div className="projects">
    <div className="project-box">
      <img src="" alt="Project 1" />
    <h5>Alpha-uni Feb 2021 — May 2021 </h5>
    <h6>
         Alpha-uni is a fully functional college website with an admin system a student registration and
management options and a faculty members system for editing courses and student grades alpha-uni has a grading system,
prerequisites, attendance system, student courses and faculty editing for the admins, detailed schedules course adding and removing
for students, transcripts Alpha uni was developed in JavaScript using Node.js, React and mongoDB and it was my first experience at Full
stack developing .</h6>
    </div>
    <div className="project-box">
      <img src="" alt="Project 2" />
      <h5>Airline-Reservation-system </h5>
      <h5> October 2021 — December 2021 </h5>
      <h6> My latest approach in full stack developing .
• Airline-Reservation-system is a fully functional airline website for reserving tickets with a refunding canceling and user
registration system.
• Airline-Reservation-system was developed in JavaScript using Node.js, React and mongoDB</h6>
    </div>
    <div className="project-box">
      <img src="" alt="Project 3" />
      <p></p>
    </div>
  </div>
</section>
        <section>
          <h2>Contact Me</h2> 
           <p>esmailessameldeinsaba@gmail.com </p>
           <p>+201067559848  </p>
          <a href='https://github.com/esmailessameldin'>GitHub </a>
          <p> </p>
          <a href='https://www.linkedin.com/in/esmail-saba-143446156/'>My linkedin </a>
     
        </section>
      </main>
    </div>
  );
}



export default App;
