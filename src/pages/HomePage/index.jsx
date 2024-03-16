import React from "react";
import styles from "./styles.module.css";
import ContactInfo from "../ContactInfo";
import NavBar from "../NavBar";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <div className={styles.bodyFull}>
      <NavBar></NavBar>
      <div className={styles.content_wrap}>
        <div className={styles.title}>
          <h1>
            Hey there!
            <Typewriter
              words={[" I'm Gowri Shankar Badugu."]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
            />
          </h1>
          <h3>
            <Typewriter
              words={[
                "Full Stack Developer at Pringle Robotics Inc.!",
                "Data Science Graduate at Indiana University Bloomington!",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </div>
        <div className={styles.about}>
          <img src="images/profilepic.jpeg"></img>
          <h3>About:</h3>
          <p>
            I love building web applications and interfaces that improve user
            experience. That’s what drove me into software engineering up to
            now. Currently, I am pursuing my masters in Data Science at Indiana
            University Bloomington, with 2+ years of experience as a Software
            Engineer. As part of my education, my course work includes Software
            Engineering, Applied Algorithms, Applied Database Technologies,
            Advanced Database Concepts, Elements of Artificial Intelligence,
            Data Mining, and Social Media Mining
            <br></br>
            <br></br>
            As a Software Developer Intern, I am responsible for constructing
            RESTful micro services using C#, ASP.NET(MVC), and SQL Server. I was
            also responsible for building responsive client-server application
            where I consumed above .NET RESTful APIs using React.js, HTML, CSS,
            and Java Script. During my previous work experience as an Associate
            Software Engineer at Cedelies Solutions Pvt Ltd, I configured REST
            APIs using Java, Spring Boot, and PostgreSQL. Designed and Developed
            various databases using PostgreSQL and managed them via UI built
            using React.js, HTML, CSS, and Java Script.
            <br></br>
            <br></br>
          </p>
        </div>
      </div>

      <ContactInfo></ContactInfo>
    </div>
  );
};

export default HomePage;
