/** @format */

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/sitemap.module.css";
import { GrAttachment } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title_container}>
        <h5 className={styles.main_title}> {title} </h5>
        <p className={styles.sub_title}>Place No.3</p>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Very beautiful vibrant light lots to do Scenic historic very touristic
          beautiful port great food very young and Fun Town.
        </p>
        <p className={styles.date}>14-05-2025, Monday</p>
      </div>
    </div>
  );
};

const Sitemap = () => {
  return (
    <section className="page-container">
      <Navbar text={"Site Map"} />

      <div className={styles.flex_container}>
        <div className={styles.create_map_container}>
          <div className={styles.head}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Create Map</h5>
          </div>
          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label>Event Location*</label>
              <input type="text" />
            </div>
            <div className={styles.input_group}>
              <label>Event Description*</label>
              <input type="text" />
            </div>
            <div className={styles.input_group}>
              <label>Date Time*</label>
              <input type="date" />
            </div>
            <div className={styles.input_group}>
              <label>Uploads</label>
              <button className={styles.upload_btn}>
                <span>Select</span>
                <GrAttachment />
              </button>
            </div>

            <div className={styles.select_map_container}>
              <p className={styles.title}>Select map (Select Only 1)</p>

              <div className={styles.btn_container}>
                <button>People</button>
                <button>Things</button>
                <button>Places</button>
                <button>Activities</button>
              </div>
            </div>

            <div className={styles.form_btns}>
              <button className={styles.submit_btn}>Submit</button>
              <button className={styles.reset_btn}>Reset</button>
            </div>
          </form>
        </div>

        <div className={styles.place_list}>
          <div className={styles.head}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Place List</h5>
          </div>

          <div className={styles.card_container}>
            <Card title={"Central Park"} />
            <Card title={"Chandigarh Club"} />
            <Card title={"IGI Stadium"} />
            <Card title={"NSP"} />
          </div>

          <div className={styles.pagination_container}>
            <h5 className={styles.headline}>Showing 1-10</h5>
            <div className={styles.pagination}>
              <button className={styles.active}>1</button>
              <button>2</button>
              <button>3</button>
              <button>
                <MdNavigateNext size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
