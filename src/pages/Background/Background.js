/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/banners.module.css";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
} from "../../assest";
import {
  DefaultDialog,
  DeleteConfirmation,
} from "../../components/Modals/Modals";

const Background = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const data = [
    {
      img: banner1,
      title: "Top Banner",
    },
    {
      img: banner2,
      title: "Promotional 4",
    },
    {
      img: banner3,
      title: "Header",
    },
    {
      img: banner4,
      title: "Promotional 2",
    },
    {
      img: banner5,
      title: "Footer",
    },
    {
      img: banner6,
      title: "Promotional 3",
    },
    {
      img: banner7,
      title: "Promotional 1",
    },
    {
      img: banner1,
      title: "Top Banner",
    },
  ];

  const Card = ({ image, title }) => {
    return (
      <div className={styles.card}>
        <img
          src={image}
          alt="thumbnail not found"
          className={styles.thumbnail}
        />
        <div className={styles.content}>
          <p className={styles.title}> {title} </p>
          <div className={styles.btn_container}>
            <button
              type="button"
              className={styles.new}
              onClick={() => setIsEdit(true)}
            >
              Select New
            </button>
            <button
              type="button"
              className={styles.remove}
              onClick={() => setIsDelete(true)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="page-container">
      <Navbar text={"Website Background"} />

      <div className={styles.container}>
        <div className={styles.card_container}>
          {data.map((item, index) => (
            <Card key={index} image={item.img} title={item.title} />
          ))}
        </div>
      </div>

      <DeleteConfirmation
        setOpen={setIsDelete}
        open={isDelete}
        text="Are you sure you want to remove"
      />

      <DefaultDialog show={isEdit} handleClose={() => setIsEdit(false)}>
        <div className={styles.edit_container}>
          <div className={styles.head}>
            <div className={styles.blank}></div>
            <h5>Current Logo</h5>
          </div>

          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label>Banner Headline</label>
              <input type="text" placeholder="Promotional Banner" />
            </div>

            <div className={styles.select_banner}>
              <label>Select Banner</label>
              <div className={styles.choose_banner}>
                <p>Select image</p>
              </div>
            </div>

            <div className={styles.btn_container}>
              <button
                type="button"
                className={styles.submit}
                onClick={() => setIsEdit(false)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </DefaultDialog>
    </section>
  );
};

export default Background;
