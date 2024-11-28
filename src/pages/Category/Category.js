/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableLayout from "../../components/TableLayout";
import styles from "../../css/modules/category.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { DeleteConfirmation } from "../../components/Modals/Modals";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const thead = ["Skill Name", "Action"];
  const tbody = [
    [
      "Painting",
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
      "Comedy",
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
      "Data Entry",
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
      "Cooking",
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
    <section className="page-container skill-page">
      <Navbar text={"Skill Catagory"} />

      <div className="main-content">
        <h5 className="headline">Skill List</h5>

        <div className={styles.flex_container}>
          <div className={styles.table_container}>
            <TableLayout thead={thead} tbody={tbody} />
          </div>

          <div className={styles.add_skills}>
            <div className={styles.head}>
              <div className={styles.point}></div>
              <h5 className={styles.headline}>Add Skill</h5>
            </div>
            <form className={styles.form_container}>
              <label>Enter Skill</label>
              <input type="text" />

              <div className={styles.btn_container}>
                <button className={styles.submit}>Submit</button>
                <button className={styles.reset}>Rest</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <DeleteConfirmation open={open} setOpen={setOpen} />

      <AnimatePresence>
        {isEdit && (
          <motion.div
            initial={{ opacity: 0, zIndex: -100 }}
            animate={{ opacity: 1, zIndex: 200 }}
            exit={{ opacity: 0, zIndex: -100 }}
            transition={{ duration: 0.3 }}
            className={styles.edit_container}
          >
            <div className={styles.container}>
              <div className={styles.head}>
                <div className={styles.blank}></div>
                <h5 className={styles.headline}>Edit</h5>
              </div>

              <form className={styles.form_container}>
                <div className={styles.input_group}>
                  <label>Full Name *</label>
                  <input type="text" />
                </div>
                <div className={styles.input_group}>
                  <label>Last Name *</label>
                  <input type="text" />
                </div>
                <div className={styles.input_group}>
                  <label>User Name *</label>
                  <input type="text" />
                </div>
                <div className={styles.input_group}>
                  <label>DOB *</label>
                  <input type="date" />
                </div>
                <div className={styles.input_group}>
                  <label>Gender</label>
                  <input type="text" />
                </div>
                <div className={styles.input_group}>
                  <label>Phone No.</label>
                  <input type="text" />
                </div>
                <div className={styles.input_group}>
                  <label>Email Address*</label>
                  <input type="email" />
                </div>

                <div className={styles.btn_container}>
                  <button
                    className={styles.submit}
                    type="button"
                    onClick={() => setIsEdit(false)}
                  >
                    Submit
                  </button>
                  <button
                    className={styles.reset}
                    type="button"
                    onClick={() => setIsEdit(false)}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Category;
