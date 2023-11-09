import React from "react";
import styles from "./styles.module.css";

const ContactInfo = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.content_wrap}>
          <h3>Contact information</h3>
          <ul className={styles.contact_list}>
            <li>
              <a href="mailto:gbadugu@iu.edu"><img src="images/envelope-solid.svg"></img></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gowri-shankar-badugu/"
                target="_blank"
              >
                <img src="images/linkedin.svg"></img>
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/Gowri_Shankar_Badugu/"
                target="_blank"
              >
                <img src="images/code-solid.svg"></img>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gowrishankar356"
                target="_blank"
              >
                <img src="images/github.svg"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ContactInfo;
