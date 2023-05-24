import React from "react";
import './App.css';
import { FaArrowDown } from "react-icons/fa";

export default function App() {
  const handleClickScroll = () => {
    const element = document.getElementById('ref');
    console.log(element)
    if (element) {
 
      element.scrollIntoView({ behavior: 'smooth' ,block: "end", inline: "nearest"});
    }}

  return (
    
    <div className="App">
      <header className="App-header">
        
        <section>
        <h1>Welcome to Esmail Essam's portfolio </h1>
       <button className="button-header"  onClick={handleClickScroll}> <FaArrowDown/></button>
        </section>
 
      </header>
      <main id="ref" >
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

    <h3>Alpha-uni Feb 2021 — May 2021 </h3>
    <h5>
         Alpha-uni is a fully functional college website with an admin system a student registration and
management options and a faculty members system for editing courses and student grades alpha-uni has a grading system,
prerequisites, attendance system, student courses and faculty editing for the admins, detailed schedules course adding and removing
for students, transcripts Alpha uni was developed in JavaScript using Node.js, React and mongoDB and it was my first experience at Full
stack developing .</h5>
    </div>
    <div className="project-box">
  
      <h3>Airline-Reservation-system </h3>
      <h3> October 2021 — December 2021 </h3>
      <h5> 
• Airline-Reservation-system is a fully functional airline website for reserving tickets with a refunding canceling and user
registration system.
• Airline-Reservation-system was developed in JavaScript using Node.js, React and mongoDB</h5>
    </div>
    <div className="project-box">
  
      <h3>Travel </h3>
      <h3> October 2022 — December 2022 </h3>
      
      <h5> My latest approach in  developing .
Travel is made with Express Nodejs and MongoDB.
it gives you the ability to view travel location book edit your bookings .
</h5>
<a href='https://networks-travel.onrender.com/' >Link to the live website </a>



    </div>
  </div>
</section>
        <section>
          <h2>Contact Me</h2> 
           <p>esmailessameldeinsaba@gmail.com </p>
           <p>+201067559848  </p>
          <a href='https://github.com/esmailessameldin' >GitHub </a>
          <p> </p>
          <a href='https://www.linkedin.com/in/esmail-saba-143446156/'>My linkedin </a>
     
        </section>
      </main>
    </div>
  );

  }


