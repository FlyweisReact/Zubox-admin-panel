/** @format */

import React, { useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";
import { DeleteConfirmation } from "../Modals/Modals";

const thead = ["ID", "Path", "Action"];

const Video = () => {
  const [open, setOpen] = useState(false);

  const data = [
    [
      "#1",
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
      "#5",
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
      "#6",
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
      "#7",
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
      "#8",
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
      "#9",
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
      "#10",
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
    <>
      <div className={`${styles.subscriber_post} ${styles.events}`}>
        <TableLayout thead={thead} tbody={data} isPagination={false} />
      </div>
      <DeleteConfirmation setOpen={setOpen} open={open} />
    </>
  );
};

export default Video;
