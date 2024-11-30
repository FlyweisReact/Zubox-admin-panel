/** @format */

import React, { useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";
import { DeleteConfirmation } from "../Modals/Modals";

const thead = ["ID", "Subscriber Post", "Action"];

const Posts = () => {
  const [open, setOpen] = useState(false);
  const tbody = [
    [
      "#1",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#2",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#3",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#4",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#5",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#6",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#7",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#8",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "#9",
      <span className={styles.description_container}>
        #Various educators teach rules governing the length of paragraphs. They
        may say that a <br /> paragraph should be 100 to 200 words long, or be
        no more than five or six sentences. But <br /> a good paragraph should
        not be measured in characters, words, or sentences.
      </span>,
      <div className={styles.btn_container}>
        <button className={styles.edit_btn}>Edit</button>
        <button className={styles.remove_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],

  ];
  return (
    <>
      <div className={styles.subscriber_post}>
        <TableLayout thead={thead} tbody={tbody} isPagination={false} />
      </div>
      <DeleteConfirmation setOpen={setOpen} open={open} />
    </>
  );
};

export default Posts;
