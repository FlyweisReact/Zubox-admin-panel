/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";
import { deleteApi, getApi, postApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";
import { DefaultDialog } from "../../components/Modals/Modals";
import { IoClose } from "react-icons/io5";

const Places = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [isView, setIsView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  // update place
  const [updateName, setUpdateName] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
  const [updateLatitude, setUpdateLatitude] = useState("");
  const [updateLongitude, setUpdateLongitude] = useState("");
  const [updateType, setUpdateType] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updateImage, setUpdateImage] = useState("");
  // =====

  const fetchHandler = () => {
    getApi(endPoints.places.getAll, {
      setResponse,
      setLoading,
    });
  };

  const removeHandler = (id) => {
    deleteApi(endPoints.places.remove(id), {
      setLoading,
      successMsgTitle: "Success",
      successMsg: "Removed !",
      additionalFunctions: [fetchHandler],
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (isEdit && selectedItem) {
      setUpdateName(selectedItem?.name);
      setUpdateLocation(selectedItem?.location);
      setUpdateLatitude(selectedItem?.latitude);
      setUpdateLongitude(selectedItem?.longitude);
      setUpdateType(selectedItem?.type);
      setUpdateDescription(selectedItem?.description);
      setUpdateDate(selectedItem?.date?.slice(0, 10));
    }
  }, [isEdit, selectedItem]);

  const body = response?.data?.map((item) => [
    item?.name,
    <div className={styles.btn_container}>
      <button
        className={styles.view}
        type="button"
        onClick={() => {
          setSelectedItem(item);
          setIsView(true);
        }}
      >
        View
      </button>
      <button
        className={styles.submit}
        onClick={() => {
          setSelectedItem(item);
          setIsEdit(true);
        }}
      >
        Edit
      </button>
      <button
        className={styles.reset}
        type="button"
        onClick={() => removeHandler(item?._id)}
      >
        Delete
      </button>
    </div>,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("location", location);
    fd.append("latitude", latitude);
    fd.append("longitude", longitude);
    fd.append("type", type);
    fd.append("description", description);
    fd.append("date", date);
    fd.append("image", image);

    postApi(endPoints.places.create, fd, {
      setLoading,
      successMsgTitle: "Success",
      successMsg: "Created !",
      additionalFunctions: [fetchHandler],
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", updateName);
    fd.append("location", updateLocation);
    fd.append("latitude", updateLatitude);
    fd.append("longitude", updateLongitude);
    fd.append("type", updateType);
    fd.append("description", updateDescription);
    fd.append("date", updateDate);
    if (updateImage) {
      fd.append("image", updateImage);
    }

    putApi(endPoints.places.update(selectedItem?._id), fd, {
      setLoading,
      successMsgTitle: "Success",
      successMsg: "Edited !",
      additionalFunctions: [() => setIsEdit(false), fetchHandler],
    });
  };

  const handleReset = () => {
    setName("");
    setLocation("");
    setLatitude("");
    setLongitude("");
    setType("");
    setDescription("");
    setDate(null);
    setImage(null);
  };

  return (
    <>
      <Navbar text={"Places"} />
      {loading && <FullscreenLoader />}
      <div className={styles.flex_container}>
        <div className={styles.left_container}>
          <div className={`${styles.head} ${styles.place_head}`}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Places List</h5>
          </div>

          <div className={`${styles.table_container} ${styles.places_table}`}>
            <TableLayout thead={["Place Name", "Action"]} tbody={body} />
          </div>
        </div>

        <div className={styles.add_skills}>
          <div className={styles.head}>
            <div className={styles.point}></div>
            <h5 className={styles.headline}>Create Place</h5>
          </div>
          <form className={styles.form_container} onSubmit={submitHandler}>
            <div className={styles.input_group}>
              <label>Place Name * </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label>Place Latitude *</label>
              <input
                type="text"
                required
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label>Place Longitude *</label>
              <input
                type="text"
                required
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label>Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value=""></option>
                <option value="people">People</option>
                <option value="place">Place</option>
                <option value="things">Things</option>
                <option value="Activity">Activity</option>
              </select>
            </div>
            <div className={styles.input_group}>
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label>Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className={styles.input_group}>
              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className={styles.btn_container}>
              <button className={styles.submit} type="submit">
                Submit
              </button>
              <button
                className={styles.reset}
                type="button"
                onClick={() => handleReset()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <DefaultDialog show={isView} handleClose={() => setIsView(false)}>
        <div className={"view_place_canvas"}>
          <div className={"head"}>
            <h6 className={"title"}> {selectedItem?.name} </h6>
            <div className={"close_btn"} onClick={() => setIsView(false)}>
              <IoClose size={20} />
            </div>
          </div>
          <div className={"content"}>
            {selectedItem?.image && (
              <img className="thumbnail" src={selectedItem?.image} alt="" />
            )}

            <div className={"description_box"}>
              <p className={"label"}>Place Name</p>
              <p className={"value"}> {selectedItem?.name} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Place Latitude</p>
              <p className={"value"}> {selectedItem?.latitude} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Place Longitude</p>
              <p className={"value"}> {selectedItem?.longitude} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Location</p>
              <p className={"value"}> {selectedItem?.location} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Type</p>
              <p className={"value"}> {selectedItem?.type} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Date</p>
              <p className={"value"}> {selectedItem?.date?.slice(0, 10)} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Description</p>
              <p className={"value"}> {selectedItem?.description} </p>
            </div>
          </div>
        </div>
      </DefaultDialog>

      <DefaultDialog show={isEdit} handleClose={() => setIsEdit(false)}>
        <div className={"view_place_canvas"}>
          <div className={"head"}>
            <h6 className={"title"}> Edit Place </h6>
            <div className={"close_btn"} onClick={() => setIsEdit(false)}>
              <IoClose size={20} />
            </div>
          </div>
          <div className="content">
            <div className={`${styles.add_skills} ${styles.edit_skills} `}>
              <form className={styles.form_container} onSubmit={updateHandler}>
                <div className={styles.input_group}>
                  <label>Place Name * </label>
                  <input
                    type="text"
                    required
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Place Latitude *</label>
                  <input
                    type="text"
                    required
                    value={updateLatitude}
                    onChange={(e) => setUpdateLatitude(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Place Longitude *</label>
                  <input
                    type="text"
                    required
                    value={updateLongitude}
                    onChange={(e) => setUpdateLongitude(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Location</label>
                  <input
                    type="text"
                    value={updateLocation}
                    onChange={(e) => setUpdateLocation(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Type</label>
                  <select
                    value={updateType}
                    onChange={(e) => setUpdateType(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="people">People</option>
                    <option value="place">Place</option>
                    <option value="things">Things</option>
                    <option value="Activity">Activity</option>
                  </select>
                </div>
                <div className={styles.input_group}>
                  <label>Date</label>
                  <input
                    type="date"
                    value={updateDate}
                    onChange={(e) => setUpdateDate(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Image</label>
                  <input
                    type="file"
                    onChange={(e) => setUpdateImage(e.target.files[0])}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Description</label>
                  <input
                    type="text"
                    value={updateDescription}
                    onChange={(e) => setUpdateDescription(e.target.value)}
                  />
                </div>

                <div className={styles.btn_container}>
                  <button className={styles.submit} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DefaultDialog>
    </>
  );
};

export default Places;
