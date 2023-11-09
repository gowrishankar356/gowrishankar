import React from "react";
import styles from "./styles.module.css";
import ContactInfo from "../ContactInfo"
import NavBar from "../NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.content_wrap}>
        <div className={styles.title}>
          <h1>Hey there! I'm Gowri Shankar Badugu</h1>
          <h4>
            Full Stack Developer | Data Science Graduate
          </h4>
        </div>
        <div className={styles.about}>
          <h3>About:</h3>
          <p>
            I love building web sites and interfaces that improve user
            experience. That’s what drove me into software engineering up to
            now. Currently, I am pursuing my masters in Data Science at Indiana
            University Bloomington, with 5 months of experience as a Software
            Developer Intern at Pringle Robotics Inc. As part of my education,
            my course work includes Software Engineering, Applied Algorithms,
            Applied Database Technologies, Advanced Database Concepts, Elements
            of Artificial Intelligence, Data Mining, Social Medial Mining, and
            Intro to Stats.
            <br></br>
            <br></br>My Current role as a Software Developer Intern, I am
            responsible for constructing micro services both Front-End and
            Back-End using C#, .NET, MVC, SQL Server and Bootstrap. I also
            involved in building front end pages for companies web applications
            using React.js, Next.js, and TypeScript and used the API's
            configured above. Also, I have configured micro services auto
            generator where it generates the code for Micro Services
            automatically.
            <br></br>
            <br></br>I have a previous work experience as an Oracle Associate
            HCM Consultant where I worked on Oracle HCM modules like Payroll,
            Core HR, Self - Service, and Time and Labor. The responsibilities
            include writing fast formulas for Earnings, Deductions, Accruals,
            Time Calculation and Entry rules using SQL, Pl/SQL. I also
            configured advanced reports consisting of 100's of tables and 1000's
            of records for budgeting and reconciliation purposes.<br></br>
            <br></br>
            Skills:<br></br>
            Languages: Python, C#, ASP.NET, Java, SQL, Pl/SQL.<br></br>
            Web Development: JavaScript, TypeScript, HTML5, CSS, Node.js,
            Express.js, React.js, Next.js.<br></br>
            Databases: SQL Server, MySQL, MongoDB, Oracle SQL, MySQL.<br></br>
            Developer Tools: Visual Studio 22, VS Code, GIT Hub, Bitbucket,
            Jupyter Notebook.<br></br>
            <br></br>
          </p>
          <p></p>
        </div>
      </div>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default HomePage;
