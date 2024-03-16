import React from "react";
import styles from "./styles.module.css";
import NavBar from "../NavBar";
import ContactInfo from "../ContactInfo";
import { Typewriter } from "react-simple-typewriter";

const Skills = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_wrap}>
        <NavBar></NavBar>
        <div className={styles.skill_container}>
          <div className={styles.skills_container_nav}></div>
          <h2>Skills :</h2>
          <div className={styles.skills}>
            <div className={styles.skills_item}>
              <div className={styles.skills_nav}></div>
              <div className={styles.skills_subheading}>
                <img src="images/languages.svg"></img>
                <h3>Languages :</h3>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.python_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/python.svg"></img>
                    <p>Python</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.csharp_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/hashtag.svg"></img>
                    <p>C#</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.sql_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/sql.svg"></img>
                    <p>SQL</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.plsql_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/sql.svg"></img>
                    <p>Pl/SQL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.skills_item}>
              <div className={styles.skills_nav}></div>

              <div className={styles.skills_subheading}>
                <img src="images/app-development.svg"></img>
                <h3>Web Development :</h3>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.javascript_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/javascript.svg"></img>
                    <p>JavaScript</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.html_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/html.svg"></img>
                    <p>HTML5</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.css_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/css.svg"></img>
                    <p>CSS</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.react_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/atom.svg"></img>
                    <p>React.js</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.node_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/node.svg"></img>
                    <p>Node.js</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.express_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/node.svg"></img>
                    <p>Express.js</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.dotnet_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/www.svg"></img>
                    <p>ASP.NET</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.skills_item}>
              <div className={styles.skills_nav}></div>

              <div className={styles.skills_subheading}>
                <img src="images/database.svg"></img>
                <h3>Databases :</h3>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.postgre_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/www.svg"></img>
                    <p>PostgreSQL</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.sqlserver_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/sql-server.svg"></img>
                    <p>SQL Ser Exp</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.mysql_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/mysql.svg"></img>
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.oraclesql_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/sql-server.svg"></img>
                    <p>Oracle SQL</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.mongodb_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/database-storage.svg"></img>
                    <p>MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.skills_item}>
              <div className={styles.skills_nav}></div>

              <div className={styles.skills_subheading}>
                <img src="images/programming.svg"></img>
                <h3>Developer Tools :</h3>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.git_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/github.svg"></img>
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.vscode_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/file.svg"></img>
                    <p>VS Code</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.vs2022_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/file.svg"></img>
                    <p>VS 22</p>
                  </div>
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div
                  className={`${styles.progress_bar_fill} ${styles.bitbucket_skill}`}
                >
                  <div className={styles.skill_icon}>
                    <img src="images/bitbucket-logo.svg"></img>
                    <p>BitBucket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Skills;
