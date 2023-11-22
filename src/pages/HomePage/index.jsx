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
        <div className={styles.skills}>
          <div className={styles.skills_item}>
            <h4>Languages:</h4>
            <div className={styles.progress_bar}>
              <div className={`${styles.progress_bar_fill} ${styles.python_skill}`}>
                <span>Python</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.csharp_skill}`}>
                <span>C#</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.sql_skill}`}>
                <span>SQL</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.plsql_skill}`}>
                <span>Pl/SQL</span>
              </div>
            </div>
          </div>
          <div className={styles.skills_item}>
            <h4>Web Development:</h4>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.javascript_skill}`}>
                <span>JavaScript</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.html_skill}`}>
                <span>HTML5</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.css_skill}`}>
                <span>CSS</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.react_skill}`}>
                <span>React.js</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.node_skill}`}>
                <span>Node.js</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.express_skill}`}>
                <span>Express.js</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.dotnet_skill}`}>
                <span>ASP.NET</span>
              </div>
            </div>
          </div>
          <div className={styles.skills_item}>
            <h4>Databases:</h4>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.postgre_skill}`}>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.sqlserver_skill}`}>
                <span>SQL Server</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.mysql_skill}`}>
                <span>MySQL</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.oraclesql_skill}`}>
                <span>Oracle SQL</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.mongodb_skill}`}>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className={styles.skills_item}>
            <h4>Developer Tools:</h4>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.git_skill}`}>
                <span>GitHub</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.vscode_skill}`}>
                <span>VS Code</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.vs2022_skill}`}>
                <span>VS 22</span>
              </div>
            </div>
            <div className={styles.progress_bar}>
            <div className={`${styles.progress_bar_fill} ${styles.bitbucket_skill}`}>
                <span>BitBucket</span>
              </div>
            </div>
          </div>          
        </div>
      </div>

      <ContactInfo></ContactInfo>
    </div>
  );
};

export default HomePage;
