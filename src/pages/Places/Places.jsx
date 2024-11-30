/** @format */

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";

const Places = () => {
  const body = [
    [
      "Amritsar",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Delhi",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Noida",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Gurgaon",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Dehradun",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Shimla",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Chandigarh",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Hyderabad",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Andra Pradesh",

      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Agra",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
  ];
  return (
    <>
      <Navbar text={"Places"} />
      <div className={styles.flex_container}>
        <div className={styles.left_container}>
          <div className={`${styles.head} ${styles.place_head}`}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Places List</h5>
          </div>

          <div className={`${styles.table_container} ${styles.places_table}`}>
            <TableLayout thead={["Place Name", "Action"]} tbody={body} />
          </div>
        </div>

        <div className={styles.add_skills}>
          <div className={styles.head}>
            <div className={styles.point}></div>
            <h5 className={styles.headline}>Create Place</h5>
          </div>
          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label>Place Name * </label>
              <input type="text" />
            </div>
            <div className={styles.input_group}>
              <label>Place Latitude *</label>
              <input type="text" />
            </div>
            <div className={styles.input_group}>
              <label>Place Longitude *</label>
              <input type="text" />
            </div>

            <div className={styles.btn_container}>
              <button className={styles.submit}>Submit</button>
              <button className={styles.reset}>Rest</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Places;
