/** @format */

import React, { useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";
import { DeleteConfirmation } from "../Modals/Modals";
import { getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../Loader";

const thead = [
  "ID",
  "Event Name",
  "Description",
  "Priority",
  "Date",
  "Time",
  "Action",
];

const Events = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      priority,
      date,
    };
    if (!isEdit) {
      postApi(endPoints.events.create, payload, {
        successMsg: "Event Created Successfully !",
        setLoading,
        additionalFunctions: [() => setIsOpen(false)],
      });
    }
  };

  const data = [
    [
      "#1",
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      "Demo",
      "Lorem Ipsum",
      "Low",
      "20-05-2024",
      "13.05",
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
      {loading && <FullscreenLoader />}

      <div className={styles.create_btn_container}>
        <button
          type="button"
          onClick={() => {
            setIsEdit(false);
            setIsOpen(true);
          }}
        >
          Create Menu
        </button>
      </div>

      <div className={`${styles.subscriber_post} ${styles.events}`}>
        <TableLayout thead={thead} tbody={data} isPagination={false} />
      </div>

      <DeleteConfirmation setOpen={setOpen} open={open} />


      
    </>
  );
};

export default Events;
