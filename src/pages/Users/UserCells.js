/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/user_cells.module.css";
import TableLayout from "../../components/TableLayout";
import { DeleteConfirmation } from "../../components/Modals/Modals";
import { motion, AnimatePresence } from "framer-motion";


const UserCells = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const thead = [
    "Cell",
    "Username",
    "Status",
    "Images",
    "Lat",
    "Long",
    "Place",
    "Action",
  ];

  const data = [
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
    [
      "#1",
      "Raghu",
      <div className={styles.status}>
        <span className={styles.blank} />
        XYZ
      </div>,
      "15+",
      <span>
        28.7041° N, <br />
        77.1025° E
      </span>,
      <span>
        77.7041° N, <br />
        38.1025° E
      </span>,
      "Delhi",
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
          onClick={() => setIsOpen(true)}
        >
          Delete
        </button>
      </div>,
    ],
  ];

  return (
    <section className="page-container">
      <Navbar text={"User Cell"} />

      <div className={styles.table_container}>
        <TableLayout thead={thead} tbody={data}  />
      </div>

      <DeleteConfirmation setOpen={setIsOpen} open={isOpen} />

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

export default UserCells;
