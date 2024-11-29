/** @format */

import React, { useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import { DeleteConfirmation } from "../Modals/Modals";

const Article = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.article_container}>
        <form className={styles.form_container}>
          <div className={styles.input_group}>
            <label>ID</label>
            <input type="text" />
          </div>
          <div className={styles.input_group}>
            <label>Article Title</label>
            <input type="text" />
          </div>
          <div className={styles.input_group}>
            <label>Article Content</label>
            <textarea rows={5} />
          </div>

          <div className={styles.btn_container}>
            <button className={styles.edit_btn}>Edit</button>
            <button
              className={styles.delete_btn}
              type="button"
              onClick={() => setOpen(true)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
      <DeleteConfirmation open={open} setOpen={setOpen} />
    </>
  );
};

export default Article;
