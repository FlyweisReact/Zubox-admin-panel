/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/sitemap.module.css";
import { GrAttachment } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";
import { getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return `${day}-${month}-${year}, ${dayOfWeek}`;
}

const Sitemap = () => {
  const [eventLocation, setEventlocation] = useState("");
  const [description, setDescription] = useState("");
  const [dateAndTime, setDateandTime] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const fetchHandler = useCallback(() => {
    getApi(endPoints.siteMap.getAll({ limit: 1000 }), {
      setLoading,
      setResponse,
    });
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const createEvent = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("eventLocation", eventLocation);
    fd.append("description", description);
    fd.append("dateAndTime", dateAndTime);
    fd.append("type", type);
    fd.append("image", image);
    postApi(endPoints.siteMap.create, fd, {
      setLoading,
      successMsg: "Event created successfully !",
      additionalFunctions: [fetchHandler],
    });
  };

  const handleReset = () => {
    setEventlocation("");
    setDescription("");
    setDateandTime("");
    setType("");
    setImage(null);
  };

  return (
    <section className="page-container">
      <Navbar text={"Site Map"} />
      {loading && <FullscreenLoader />}

      <div className={styles.flex_container}>
        <div className={styles.create_map_container}>
          <div className={styles.head}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Create Map</h5>
          </div>
          <form className={styles.form_container} onSubmit={createEvent}>
            <div className={styles.input_group}>
              <label>Event Location*</label>
              <input
                type="text"
                required
                onChange={(e) => setEventlocation(e.target.value)}
                value={eventLocation}
              />
            </div>
            <div className={styles.input_group}>
              <label>Event Description*</label>
              <input
                type="text"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className={styles.input_group}>
              <label>Date Time*</label>
              <input
                type="datetime-local"
                required
                onChange={(e) => setDateandTime(e.target.value)}
                value={dateAndTime}
              />
            </div>
            <div className={styles.input_group}>
              <label>Uploads</label>
              <button
                className={styles.upload_btn}
                type="button"
                onClick={() => document.getElementById("file").click()}
              >
                <span> {image?.name ? image?.name : "Select"} </span>
                <GrAttachment />
              </button>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className={styles.select_map_container}>
              <p className={styles.title}>Select map (Select Only 1)</p>

              <div className={styles.btn_container}>
                <button
                  type="button"
                  onClick={() => setType("people")}
                  className={type === "people" ? styles.active : ""}
                >
                  People
                </button>
                <button
                  onClick={() => setType("things")}
                  type="button"
                  className={type === "things" ? styles.active : ""}
                >
                  Things
                </button>
                <button
                  type="button"
                  onClick={() => setType("place")}
                  className={type === "place" ? styles.active : ""}
                >
                  Places
                </button>
                <button
                  type="button"
                  onClick={() => setType("Activity")}
                  className={type === "Activity" ? styles.active : ""}
                >
                  Activities
                </button>
              </div>
            </div>

            <div className={styles.form_btns}>
              <button className={styles.submit_btn} type="submit">
                Submit
              </button>
              <button
                className={styles.reset_btn}
                type="button"
                onClick={() => handleReset()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className={styles.place_list}>
          <div className={styles.head}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Place List</h5>
          </div>

          <div className={styles.card_container}>
            {response?.data?.map((item, index) => (
              <div className={styles.card}>
                <div className={styles.title_container}>
                  <h5 className={styles.main_title}> {item?.eventLocation} </h5>
                  <p className={styles.sub_title}>Place No.{index + 1} </p>
                </div>
                <div className={styles.content}>
                  <p className={styles.description}>{item?.description}</p>
                  <p className={styles.date}>
                    {" "}
                    {item?.dateAndTime && formatDate(item?.dateAndTime)}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className={styles.pagination_container}>
            <h5 className={styles.headline}>Showing 1-10</h5>
            <div className={styles.pagination}>
              <button className={styles.active}>1</button>
              <button>2</button>
              <button>3</button>
              <button>
                <MdNavigateNext size={20} />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
