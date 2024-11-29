/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableLayout from "../../components/TableLayout";
import styles from "../../css/modules/users.module.css";
import { DeleteConfirmation } from "../../components/Modals/Modals";
import { AnimatePresence, motion } from "motion/react";

const Users = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const thead = [
    "Name",
    "User Status",
    "Email Address",
    "Phone Number",
    "Joined On",
    "Action",
  ];

  const tbody = [
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
    [
      "Justin Septimus",
      <div className={styles.status}>
        <span className={styles.blank} />
        Active
      </div>,
      "rahul@gmail.com",
      "9045874584",
      <span className={styles.date}>14/APR/2024</span>,
      <div className={styles.btn_container}>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button type="button" onClick={() => setIsDelete(true)}>
          Delete
        </button>
      </div>,
    ],
  ];

  return (
    <section className="page-container">
      <Navbar text={"Users"} />

      <div className={styles.table_container}>
        <TableLayout thead={thead} tbody={tbody} />
      </div>

      {/* ------ edit canvas ------- */}
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
      {/* --- */}

      {/* ---- delete confirmation----- */}
      <DeleteConfirmation open={isDelete} setOpen={setIsDelete} />
    </section>
  );
};

export default Users;
