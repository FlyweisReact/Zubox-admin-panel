/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../../components/TableLayout";
import { DeleteConfirmation } from "../../components/Modals/Modals";

const thead = ["ID", "Name", "Link", "Action"];

const SliderVideo = () => {
  const [open, setOpen] = useState(false);

  const data = [
    [
      "#1",
      "How To ?",
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        Google.com
      </a>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button
          className={styles.remove_btn}
          type="button"
          onClick={() => setOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#2",
      "Top 5?",
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        Google.com
      </a>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button
          className={styles.remove_btn}
          type="button"
          onClick={() => setOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#3",
      "Top 10?",
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        Google.com
      </a>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button
          className={styles.remove_btn}
          type="button"
          onClick={() => setOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#4",
      "Top 15?",
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        Google.com
      </a>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button
          className={styles.remove_btn}
          type="button"
          onClick={() => setOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
  ];

  return (
    <section className="page-container">
      <Navbar text={"Slider Video"} />

      <div className={styles.subscriber_post}>
        <TableLayout thead={thead} tbody={data} isPagination={false} />
      </div>

      <DeleteConfirmation setOpen={setOpen} open={open} />
    </section>
  );
};

export default SliderVideo;
