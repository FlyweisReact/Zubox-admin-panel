/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cellsdetails.module.css";
import TableLayout from "../../components/TableLayout";
import {
  DefaultDialog,
  DeleteConfirmation,
} from "../../components/Modals/Modals";

const CellsDetail = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const thead = ["Cell", "Section Content", "Action"];
  const body = [
    [
      "Justin Septimus",
      "How do you look",
      <div className={styles.btn_container}>
        <button className={styles.edit_btn} onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className={styles.delete_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      "How do you look",
      <div className={styles.btn_container}>
        <button className={styles.edit_btn} onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className={styles.delete_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      "How do you look",
      <div className={styles.btn_container}>
        <button className={styles.edit_btn} onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className={styles.delete_btn} onClick={() => setOpen(true)}>
          Delete
        </button>
      </div>,
    ],
  ];
  return (
    <section className="page-container">
      <Navbar text={"Cell’s Details"} />

      <div className={styles.filter_btn}>
        <button className={styles.active}>Section 1</button>
        <button>Section 2</button>
        <button>Section 3</button>
        <button>Section 4</button>
      </div>

      <div className={styles.table_container}>
        <TableLayout thead={thead} tbody={body} isPagination={false} />
      </div>

      <DeleteConfirmation setOpen={setOpen} open={open} />
      <DefaultDialog show={isEdit} handleClose={() => setIsEdit(false)}>
        <div className={styles.edit_container}>
          <div className={styles.head}>
            <div className={styles.blank}></div>
            <h5>Edit Cell </h5>
          </div>

          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label>Cell Name</label>
              <input type="text" />
            </div>
            <div className={styles.input_group}>
              <label>Section Content</label>
              <input type="text" />
            </div>

            <div className={styles.btn_container}>
              <button
                type="button"
                className={styles.submit}
                onClick={() => setIsEdit(false)}
              >
                Submit
              </button>
              <button
                type="button"
                className={styles.reset}
                onClick={() => setIsEdit(false)}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </DefaultDialog>
    </section>
  );
};

export default CellsDetail;
