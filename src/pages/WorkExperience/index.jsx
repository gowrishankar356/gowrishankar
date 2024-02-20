import React from "react";
import styles from "./styles.module.css";
import NavBar from "../NavBar";
import ContactInfo from "../ContactInfo";
import { Typewriter } from "react-simple-typewriter";

const WorkExperience = () => {
  return (
    <div>
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
                    Developed a client-server application (Pringle NOC) in a
                    team of 5 engineers to track and manage robots' locations
                    and statuses in real-time using Next.js and TypeScript to
                    ensure a responsive user interface.
                  </li>
                  <li>
                    Integrated the Google Maps API and marker clustering for
                    peak map efficiency and to reduce 30% of page load times.
                  </li>
                  <li>
                    Engineered over 50 custom responsive UI components for the
                    company's web applications, employing Next.js, TypeScript,
                    and Storybook. Elevated user satisfaction by providing a
                    seamless UI experience to customers.
                  </li>
                  <li>
                    Co-ordinated with a team of 2 for creation of a Pringle API
                    web environment utilizing Bootstrap, ASP.NET, C#, and SQL
                    Server Express and used this environment to configure over
                    200+ customer websites.
                  </li>
                  <li>
                    Constructed a Micro Services Auto Generator, automating code
                    generation for microservice’s Table script, CRUD scripts,
                    BO, DAO, and Controller files using ASP.NET, C#, and SQL
                    with 99% correctness.
                  </li>
                  <li>
                    Auto Generator delivered an outstanding 98% reduction in
                    manual workload for code generation for micro services.
                  </li>
                  <li>
                    Aided company’s web applications by configuring more than 20
                    micro services using Bootstrap, ASP.NET, C#, and SQL Server
                    Express which includes developing Table, CRUD scripts, and
                    DAO, BO, and Controller layers.
                  </li>
                  <li>
                    Streamlined Agile Software Development processes by
                    utilizing Trello as a Scrum board, resulting in a 40%
                    increase in team collaboration and a 15% reduction in
                    project delivery time.
                  </li>
                </ul>
                <h3>Skills acquired: </h3>
                <p>
                  · C# · ASP.NET(MVC) · Microsoft SQL Server · ReactJS · NextJS
                  · TypeScript <br></br>· Visual Studio · BitBucket · Agile
                  Software Methodologies{" "}
                </p>
              </div>
            </div>
            <div className={styles.job_item}>
              <div>
                <h2>
                  <Typewriter
                    words={["Oracle HCM Associate Consultant"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                  />
                </h2>
                <div className={styles.company_info}>
                  <h3>Nalsoft Pvt Ltd.</h3>
                  <span>
                    <a href="https://nalsoft.net/" target="_blank">
                      <img src="images/nalsoft.jpeg"></img>
                    </a>
                  </span>
                </div>
              </div>
              <div className={styles.job_summary}>
                <p>
                  Worked as an Oracle HCM Associate Consultant for fusion apps
                  concentrating in Payroll, Core HR, Self-Service, and Oracle
                  Time and Labor.
                </p>
                <p>Tech stack mainly used is Pl/SQL and SQL.</p>
                <h3>Responsibilities: </h3>
                <ul>
                  <li>
                    Implemented and demonstrated three full-time Oracle Fusion
                    ERP Systems which include Core HR, Payroll, Absence
                    Management, Self-Service and Time and Labor modules which
                    include retrieving employee salary details and leave data to
                    calculate monthly salary, Indemnity, Social Insurance,
                    deductions etc using SQL & PL/SQL.
                  </li>
                  <li>
                    Implemented advanced fast formulas for elements like Annual
                    Leave, Social Insurance, Gratuity etc.
                  </li>
                  <li>
                    Implemented advanced Reports to fetch, sort, process and
                    highlight the employee data regarding implemented modules
                    for budgeting and reconciliation purposes using SQL &
                    PL/SQL.
                  </li>
                  <li>Data Migration for Go live.</li>
                  <li>
                    Self-Trained on advanced fast formulas of Oracle Time and
                    Labor which mainly include retrieving the employee biometric
                    data and calculate respective deductions and overtime
                    earnings.
                  </li>
                  <li>
                    Gained the hands-on experience in SQL & PL/SQL code
                    optimization and implementing Oracle Fusion ERP System.
                  </li>
                </ul>
                <h3>Skills acquired: </h3>
                <p>
                  Pl/SQL · SQL · Java · Payroll · Core HR · Self Service ·
                  Learning Management<br></br> · Absence Management · Time and
                  Labor
                </p>
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
