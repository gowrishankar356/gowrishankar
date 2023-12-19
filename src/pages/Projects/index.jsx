import React from "react";
import styles from "./styles.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import ContactInfo from "../ContactInfo";
import NavBar from "../NavBar";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const sliderImagesHealthyHoosiers = [
    { url: "images/homepage.png" },
    { url: "images/dashboard.png" },
    { url: "images/search.png" },
  ];
  const sliderImagesHoosiersDeliveryManagement = [
    { url: "images/DeliveryManagementHomePage.png" },
    { url: "images/DeliveryManagementViewAll.png" },
    { url: "images/DeliveryManagementCreatePage.png" },
    { url: "images/DeliveryManagementUpdatePage.png" },
    { url: "images/DeliveryManagementReadPage.png" },
  ];
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.projects}>
        <div className={styles.content_wrap}>
          <h2>Featured Pojects</h2>
          <h3>
            <Typewriter
              words={["Software Engineering - Full Stack Projects"]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
            />
          </h3>
          <div className={styles.projects_item}>
            <div className={styles.slider}>
              <SimpleImageSlider
                width={400}
                height={200}
                navMargin={5}
                images={sliderImagesHealthyHoosiers}
                showBullets={true}
                showNavs={true}
                navSize={30}
                autoPlay={true}
              />
            </div>
            <div className={styles.project_description}>
              <h3>Healthy Hoosiers - Wellness Tracking System | MERN Stack</h3>
              <p>
                • Lead a team to plan and develop a dual-authentication wellness
                tracking web application with OAuth integration. Created 3
                distinct user interfaces like for clients, fitness professionals
                (trainers and dieticians), and administrators.
                <br></br>• Facilitated content and plan uploads by fitness
                professionals and dieticians for a well-organized process.
                Furthermore, empowered administrative users to screen trainer
                content, manage clients, and address customer queries with
                precision.
                <br></br>• Accomplished a superior user interface, surpassing
                the performance of more than 80% of other websites in the same
                domain and deployed on AWS EC2.
              </p>
              <a
                className={styles.btn}
                href="https://github.iu.edu/gbadugu/test.git"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <div className={styles.projects_item}>
            <div className={styles.slider_2}>
              <SimpleImageSlider
                width={400}
                height={200}
                images={sliderImagesHoosiersDeliveryManagement}
                showBullets={true}
                showNavs={true}
                navSize={30}
                autoPlay={true}
                className={styles.image}
              />
            </div>
            <div className={styles.project_description}>
              <h3>
                Hoosiers Delivery Management System - Delivery Tracking System |
                SERN Stack
              </h3>
              <p>
                • Hoosiers Delivery Management System is a web-based platform
                that enables users to conveniently manage and monitor their
                deliveries. <br></br>• We are utilizing a dataset from Kaggle
                which includes detailed information about orders, customers, and
                products. <br></br>• Using this application, the user can input
                the necessary delivery details such as the items to be delivered
                and their destination. <br></br>• Additionally, they can update
                the delivery status as delivered or in progress or not
                delivered. • The application also allows for basic CRUD (Create,
                Read, Update, and Delete) operations to be performed on the
                delivery data points.
              </p>
              <a
                className={styles.btn}
                href="https://github.com/gowrishankar356/Hoosiers-Delivery-Management-System.git"
                target="_blank"
              >
                View Project
              </a>
              <a
                className={styles.btn}
                href="https://youtu.be/uAXB_JSyOx0?si=a0ibmIhjCwSrFfsD"
                target="_blank"
              >
                View Video
              </a>
            </div>
          </div>
          <h3>
            <Typewriter
              words={[
                "Data Science - Data Mining and Sentiment Analysis Projects",
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
            />
          </h3>
          <div className={styles.projects_item}>
            <div className={styles.project_description}>
              <h3>
                Anime CRP (Classifier, Recommender and Predictor) | Clustering,
                Associate Analysis, K-Nearest Neighbors |
              </h3>
              <p>
                • Executed an Anime CRP (Classifier, Recommender, and Predictor)
                project, applying Data Science algorithms like KNN, K-means
                clustering, and Association Rule Analysis.
                <br></br>• Applied Python libraries like Matplotlib, NumPy,
                pandas, and Scikit-Learn to construct the system and got an
                outstanding 96% of accuracy of predictor, guaranteeing highly
                precise anime recommendations based on user watch history.
              </p>
              <a
                className={styles.btn}
                href="https://github.com/gowrishankar356/Anime-CRP-Classifier-Recommender-and-Predictor-.git"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <div className={styles.projects_item}>
            <div className={styles.project_description}>
              <h3>
                Sentiment Analysis on ChatGPT Usage in Everyday Life | VADER &
                EMPATH|
              </h3>
              <p>
                • Harvested data from Reddit social media and conducted
                sentiment analysis utilizing VADER and EMPATH modules, resulting
                in a substantial increase in the accuracy over 10% of ChatGPT's
                polarity assessment.
              </p>
              <a
                className={styles.btn}
                href="https://github.com/gowrishankar356/Sentiment-Analysis-on-ChatGPT-Usage-in-Everyday-Life.git"
                target="_blank"
              >
                View Project
              </a>
              <a
                className={styles.btn}
                href="https://drive.google.com/file/d/1XzX495QoKMDxHM_c53RPpb09fHd9WmIl/view?usp=sharing"
                target="_blank"
              >
                View Paper
              </a>
            </div>
          </div>
        </div>
        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
};

export default Projects;
