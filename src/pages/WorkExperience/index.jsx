import React from "react";
import styles from "./styles.module.css";
import NavBar from "../NavBar";
import ContactInfo from "../ContactInfo";
import { Typewriter } from "react-simple-typewriter";

const WorkExperience = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_wrap}>
        <NavBar></NavBar>
        <div className={styles.work_experience_background}>
          <div className={`${styles.dates} ${styles.WorkExperienceBar}`}>
            <p>01-06-2023 - Ongoing</p>
            <p>01-10-2020 - 28-02-2022</p>
          </div>
          <div className={styles.WorkExperienceBar}>
            <div className={styles.ball}>
              <div className={styles.bar}> </div>
              <div className={styles.ball2}> </div>
              <div className={styles.ball3}> </div>
            </div>
          </div>
          <div>
            <div className={styles.job_item}>
              <div>
                <h2>
                  <Typewriter
                    words={["Software Engineer Intern"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                  />
                </h2>
                <div className={styles.company_info}>
                  <h3>Pringle Robotics Inc.</h3>
                  <span>
                    <a href="https://www.pringlerobotics.ai/" target="_blank">
                      <img src="images/pringlerobotics.jpeg"></img>
                    </a>
                  </span>
                </div>
              </div>
              <div className={styles.job_summary}>
                <p>
                  Working as a Software Developer Intern mainly concerntrated on
                  building web applications to track and maintain robots.
                </p>
                <p>
                  Tech stack mainly used is ReactJS, NextJS, TypeScript, C#,
                  ASP.NET, and SQL
                </p>
                <h3>Responsibilities: </h3>
                <ul>
                  <li>
                    Executed design, development, testing, and deployment of
                    secure RESTful API microservices in C#, ASP.NET, and
                    Microsoft SQL Server, ensuring the efficient management of
                    robots-related data for 50+ customers using API Key.
                  </li>
                  <li>
                    Developed a frictionless and user-friendly client-server
                    application utilizing React.js, HTML, CSS, and Google API
                    integration to seamlessly consume RESTful API microservices
                    to manage 200+ robots data.
                  </li>
                  <li>
                    Standardized the React component implementation across web
                    applications to increase reusability by developing 30+
                    reusable components using React.js and Storybook.
                  </li>
                  <li>
                    Automated microservices development by creating a C# .NET
                    console app that generates code based on SQL table
                    properties, resulting in a 99% reduction in coding time and
                    ensuring 99% accuracy.
                  </li>
                </ul>
                <h3>Skills acquired: </h3>
                <p>
                  · C# · ASP.NET(MVC) · RESTful APIs · Microsoft SQL Server ·
                  React.js · HTML · CSS <br></br>· Visual Studio · BitBucket ·
                  Agile Software Methodologies{" "}
                </p>
              </div>
            </div>
            <div className={styles.job_item}>
              <div>
                <h2>
                  <Typewriter
                    words={["Associate Software Engineer"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                  />
                </h2>
                <div className={styles.company_info}>
                  <h3>Cedelies Solutions Pvt Ltd.</h3>
                  <span>
                    <a href="http://cedeliessolutions.com/" target="_blank">
                      <img src="images/cedelies.png"></img>
                    </a>
                  </span>
                </div>
              </div>
              <div className={styles.job_summary}>
                <p>
                  Worked as an Associte Software Engineer to create Web
                  Applications using Java, Spring Boot, React.js.
                </p>
                <p>Tech stack mainly used is Java, Spring Boot, and SQL.</p>
                <h3>Responsibilities: </h3>
                <ul>
                  <li>
                    Created REST APIs and microservices using Spring Boot and
                    Java to manage 30+ customers data present in PostgreSQL
                    databases.
                  </li>
                  <li>
                    Consumed APIs to exchange data in the form of XML & JSON by
                    creating a robust and scalable web application using
                    React.js, HTML, and CSS , resulting in a 70% increase in
                    user engagement.
                  </li>
                  <li>
                    Designed and engineered 4 databases including Stored
                    Procedures, Indexes, and Triggers, related to 30+ customers
                    using PostgreSQL
                  </li>
                  <li>
                    Streamlined Agile Software Development processes by
                    utilizing a Scrum board, resulting in a 40% increase in team
                    collaboration and a 35% reduction in project delivery time.
                  </li>
                </ul>
                <h3>Skills acquired: </h3>
                <p>· Java · SQL · Spring Boot · REST · PostgreSQL · React.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default WorkExperience;
