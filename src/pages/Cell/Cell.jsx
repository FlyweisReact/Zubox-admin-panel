/** @format */

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";

const Cell = () => {
  const body = [
    [
      "Travel",
      12,
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Travel",
      12,
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Travel",
      12,
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Travel",
      12,
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Travel",
      12,
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
  ];

  return (
    <>
      <Navbar text={"Cell"} />

      <div className={styles.flex_container}>
        <div className={styles.left_container}>
          <div className={styles.head}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Cell</h5>
          </div>

          <div className={styles.table_container}>
            <TableLayout
              thead={["Cell Name", "Number of Memebers", "Action"]}
              tbody={body}
            />
          </div>
        </div>

        <div className={styles.add_skills}>
          <div className={styles.head}>
            <div className={styles.point}></div>
            <h5 className={styles.headline}>Add Cell</h5>
          </div>
          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label>Select Parent Cell*</label>
              <input type="text" />
            </div>
            <div className={styles.input_group}>
              <label>Cell Name*</label>
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

export default Cell;
