/** @format */

import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import img from "../../assest/Icon.png";
import img1 from "../../assest/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/logo.module.css";
import { chose_img_icon, prev_logo_icon } from "../../assest";

const Logo = () => {
  return (
    <>
      <Navbar text={"Logo"} />
      <div className={styles.choose_logo_container}>
        <div className={styles.choose_new_one}>
          <div className={styles.head}>
            <span className={styles.blank} />
            <h5 className={styles.headline}>Choose New Logo</h5>
          </div>

          <div className={styles.content}>
            <div className={styles.img_container}>
              <img src={chose_img_icon} alt="" />
            </div>
            <div className={styles.info}>
              <h5 className={styles.headline}>
                Last Changed on <br /> 01/05/2024
              </h5>
              <button className={styles.new_logo}>Choose New Logo</button>
              <br />
              <div className={styles.btn_container}>
                <button className={styles.update_btn}>Update</button>
                <button className={styles.reset_btn}>Reset</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.current_logo_container}>
          <div className={styles.head}>
            <span className={styles.blank} />
            <h5 className={styles.headline}>Current Logo</h5>
          </div>
          <div className={styles.content}>
            <div className={styles.img_container}>
              <img src={prev_logo_icon} alt="" />
            </div>

            <button className={styles.change_btn}>Change</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
