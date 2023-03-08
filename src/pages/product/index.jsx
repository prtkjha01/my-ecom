import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./index.module.css";
const index = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        This is index
        <div className={styles.container}>
          {data.map((dataItem) => {
            return (
              <div className={styles.singleItem}>
                <p> {dataItem}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
