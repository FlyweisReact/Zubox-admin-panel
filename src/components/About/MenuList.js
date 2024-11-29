/** @format */

import React, { useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";
import { DefaultDialog, DeleteConfirmation } from "../Modals/Modals";

const MenuList = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const thead = ["Menu ID", "Menu ID", "Created on", "Actions"];

  const tbody = [
    [
      "1",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button
          className={styles.edit_btn}
          type="button"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
        <button
          className={styles.delete_btn}
          type="button"
          onClick={() => setIsDelete(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "2",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button
          className={styles.edit_btn}
          type="button"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
        <button
          className={styles.delete_btn}
          type="button"
          onClick={() => setIsDelete(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "3",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button
          className={styles.edit_btn}
          type="button"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
        <button
          className={styles.delete_btn}
          type="button"
          onClick={() => setIsDelete(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "4",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button
          className={styles.edit_btn}
          type="button"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
        <button
          className={styles.delete_btn}
          type="button"
          onClick={() => setIsDelete(true)}
        >
          Delete
        </button>
      </div>,
    ],
  ];

  return (
    <>
      <div className={styles.menu_list}>
        <TableLayout thead={thead} isPagination={false} tbody={tbody} />
      </div>
      <DeleteConfirmation open={isDelete} setOpen={setIsDelete} />

      <DefaultDialog show={isEdit} handleClose={() => setIsEdit(false)}>
        <div className={styles.edit_container}>
          <div className={styles.head}>
            <div className={styles.blank}></div>
            <h5>Edit Menu </h5>
          </div>

          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label>Menu Name</label>
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
    </>
  );
};

export default MenuList;
