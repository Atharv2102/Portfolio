import React from "react";

import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Atharv</h1>
        <p className={styles.description}>
        A passionate Web Developer and Software Engineer with a strong foundation in C++, 
        JavaScript, and modern web technologies. Experienced in leading collaborative projects, 
        designing user-centric solutions, and driving innovation. Let's build something
         amazing together!
        </p>
        <span className={styles.buttons}>
        <a href="mailto:atharvjain.sandeep@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://leetcode.com/u/Atharv_02/" className={styles.contactBtn}>
          Leetcode
        </a>
        <a href="/resume.pdf"  download="resume.pdf" className={styles.contactBtn}>
          Download CV
        </a>
        </span>
         
       
        
      </div>
      <img 
        src="..\public\self.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
