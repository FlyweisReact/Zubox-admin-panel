/** @format */

import React from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";

const thead = ["ID", "Subscriber Post", "Action"];

const tbody = [
  [
    "#1",
    <span className={styles.description_container}>
      #Various educators teach rules governing the length of paragraphs. They
      may say that a <br /> paragraph should be 100 to 200 words long, or be no
      more than five or six sentences. But <br /> a good paragraph should not be
      measured in characters, words, or sentences.
    </span>,
    <div className={styles.btn_container}>
      <button className={styles.edit_btn}>Edit</button>
      <button className={styles.remove_btn}>Delete</button>
    </div>,
  ],

  [
    "#1",
    <span className={styles.description_container}>
      #Various educators teach rules governing the length of paragraphs. They
      may say that a <br /> paragraph should be 100 to 200 words long, or be no
      more than five or six sentences. But <br /> a good paragraph should not be
      measured in characters, words, or sentences.
    </span>,
    <div className={styles.btn_container}>
      <button className={styles.edit_btn}>Edit</button>
      <button className={styles.remove_btn}>Delete</button>
    </div>,
  ],
];

const Posts = () => {
  return (
    <div className={styles.subscriber_post}>
      <TableLayout thead={thead} tbody={tbody} isPagination={false} />
    </div>
  );
};

export default Posts;
