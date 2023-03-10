import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={`${styles.footerabs} `}>
      <section className={`${styles.footer} `}>
        <div className={`${styles.footerBox1} mb-3`}>
          <div>
            <h2 className={`${styles.heading} text-xl`}>Get in Touch</h2>
            <ul>
              <li className="text-xs">
                {" "}
                <a href="">About Us</a>
              </li>
              <li className="text-xs">
                {" "}
                <a href="">About the Devs</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={`${styles.heading} text-xl`}>Contact us</h2>
            <ul>
              <li className="text-xs">
                <a href="">Linked In</a>
              </li>
              <li className="text-xs">
                <a href="">Github</a>
              </li>
              <li className="text-xs">
                <a href="">Gmail</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyrightBox}>
          <p className={`${styles.heading} text-xs`}>
            ©{new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/prateekjha01/"
              target={"_blank"}
            >
              Prateek Jha
            </a>{" "}
            &{" "}
            <a href="https://www.linkedin.com/in/pushpander/" target={"_blank"}>
              {" "}
              Puhspander Singh Tanwar
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
