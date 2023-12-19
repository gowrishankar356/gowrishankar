import React from "react";
import styles from "./styles.module.css";
import ContactInfo from "../ContactInfo";
import NavBar from "../NavBar";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <div>
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
                "Full Stack Developer!",
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
          <div>
            <img src="images/profilepic.jpeg"></img>
          </div>
          <div>
            <h3>About:</h3>
            <p>
              I love building web sites and interfaces that improve user
              experience. That’s what drove me into software engineering up to
              now. Currently, I am pursuing my masters in Data Science at
              Indiana University Bloomington, with 5 months of experience as a
              Software Developer Intern at Pringle Robotics Inc. As part of my
              education, my course work includes Software Engineering, Applied
              Algorithms, Applied Database Technologies, Advanced Database
              Concepts, Elements of Artificial Intelligence, Data Mining, and
              Social Media Mining
              <br></br>
              <br></br>My Current role as a Software Developer Intern, I am
              responsible for constructing micro services both Front-End and
              Back-End using C#, .NET, MVC, SQL Server and Bootstrap. I also
              involved in building front end pages for company web applications
              using ReactJS, NextJS, and TypeScript and used the API's
              configured above. Also, I have configured micro services auto
              generator where it generates the code for Micro Services
              automatically.
              <br></br>
              <br></br>I have a previous work experience as an Oracle Associate
              HCM Consultant where I worked on Oracle HCM modules like Payroll,
              Core HR, Self - Service, and Time and Labor. The responsibilities
              include writing fast formulas for Earnings, Deductions, Accruals,
              Time Calculation and Entry rules using SQL, Pl/SQL. I also
              configured advanced reports consisting of 100's of tables and
              1000's of records for budgeting and reconciliation purposes.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>

      <ContactInfo></ContactInfo>
    </div>
  );
};

export default HomePage;
