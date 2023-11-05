import React from "react";
import styles from "./styles.module.css";
import NavBar from "../NavBar";

const WorkExperience = () => {
  const sliderImagesHealthyHoosiers = [
    { url: "images/homepage.png" },
    { url: "images/dashboard.png" },
    { url: "images/search.png" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className = {styles.work_experience}>
        <div className={`content-wrap items-details divider`}>
        <h2>Work Experience</h2>
        <div className= {styles.job_container}>
          <div className={styles.job_item}>
            <h3>Software Engineer Intern</h3>
            <p>Pringle Robotics Inc.</p>
            <p>01-06-2023 - Ongoing</p>
          </div>  x``
          <div className={styles.job_summary}>
            <p>Currently working as an Software Developer Intern.</p>
          </div> 
        </div>

        <div className={styles.job_container}>
          <div className={styles.job_item}>
            <h3>Oracle HCM Associate Consultant</h3>
            <p>Nalsoft Pvt Ltd.</p>
            <p>20 OCT, 2020 - 28 FEB, 2022</p>
          </div>
          <div className={styles.job_summary}>
            <p>Worked as an Oracle HCM Associate Consultant for fusion apps concentrating in Payroll, Core HR, Self-Service, and Oracle Time and Labor.</p>
            <p>Tech stack mainly used are Pl/SQL and SQL.</p>
            <h4>Responsibilities include: </h4>
            <ul>
              <li>Implemented and demonstrated three full-time Oracle Fusion ERP Systems which include Core HR, Payroll, Absence Management, Self-Service and Time and Labor modules which include retrieving employee salary details and leave data to calculate monthly salary, Indemnity, Social Insurance, deductions etc using SQL & PL/SQL.</li>
              <li>Implemented advanced fast formulas for elements like Annual Leave, Social Insurance, Gratuity etc.</li>
              <li>Implemented advanced Reports to fetch, sort, process and highlight the employee data regarding implemented modules for budgeting and reconciliation purposes using SQL & PL/SQL.</li>
              <li>Data Migration for Go live.</li>
              <li>Self-Trained on advanced fast formulas of Oracle Time and Labor which mainly include retrieving the employee biometric data and calculate respective deductions and overtime earnings.</li>
              <li>Gained the hands-on experience in SQL & PL/SQL code optimization and implementing Oracle Fusion ERP System.</li>
            </ul>
            <h4>Skills acquired</h4>
            <p>Pl/SQL · SQL · Java · Payroll · Core HR · Self Service</p>  
        </div>
        </div>
      </div>
      </div>      
    </div>
  );
};

export default WorkExperience;
