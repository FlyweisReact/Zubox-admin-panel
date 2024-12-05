/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";
import { deleteApi, getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";

const CountryCity = () => {
  const [loading, setLoading] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [response, setResponse] = useState(null);

  const fetchHandler = () => {
    getApi(endPoints.city.getAll, {
      setResponse,
      setLoading,
    });
  };

  const removeHandler = (id) => {
    deleteApi(endPoints.city.remove(id), {
      successMsgTitle: "Success",
      successMsg: "Removed !",
      additionalFunctions: [fetchHandler],
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

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
      additionalFunctions: [fetchHandler],
    });
  };

  const body = response?.data?.map((item) => [
    item?.name,
    item?.city?.map(
      (i, index) => `${i?.name} ${index + 1 !== item?.city?.length ? "," : ""} `
    ),
    <div className={styles.btn_container}>
      {/* <button
        className={styles.submit}
        type="button"
        onClick={() => {
          setSelectedItem(item);
          setIsEdit(true);
        }}
      >
        Edit
      </button> */}
      <button
        className={styles.reset}
        type="button"
        onClick={() => removeHandler(item?._id)}
      >
        Delete
      </button>
    </div>,
  ]);

  return (
    <>
      <Navbar text={"Country & City"} />
      {loading && <FullscreenLoader />}
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
              <button className={styles.submit} type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CountryCity;
