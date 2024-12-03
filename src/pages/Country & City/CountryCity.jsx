/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const CountryCity = () => {
  const [loading, setLoading] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      country,
      city,
    };
    postApi(endPoints.city.create, payload, {
      setLoading,
      successMsgTitle: "Success",
      successMsg: "Created !",
    });
  };

  const body = [
    [
      "India",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Pakistan",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "China",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Russia",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],

    [
      "USA",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],

    [
      "Europe",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],

    [
      "Sri-Lanka",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],

    [
      "England",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],

    [
      "Canada",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Australia",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
    [
      "Ukraine",
      "List",
      <div className={styles.btn_container}>
        <button className={styles.submit}>Edit</button>
        <button className={styles.reset}>Delete</button>
      </div>,
    ],
  ];

  return (
    <>
      <Navbar text={"Country & City"} />
      <div className={styles.flex_container}>
        <div className={styles.left_container}>
          <div className={`${styles.head} ${styles.place_head}`}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Country</h5>
          </div>

          <div className={`${styles.table_container} ${styles.places_table}`}>
            <TableLayout
              thead={["Country Name", "City List", "Action"]}
              tbody={body}
            />
          </div>
        </div>

        <div className={styles.add_skills}>
          <div className={styles.head}>
            <div className={styles.point}></div>
            <h5 className={styles.headline}>Add City</h5>
          </div>
          <form className={styles.form_container} onSubmit={submitHandler}>
            <div className={styles.input_group}>
              <label>Country Name * </label>
              <input
                type="text"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label>City Name</label>
              <input
                type="text"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className={styles.btn_container}>
              <button className={styles.submit}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CountryCity;
