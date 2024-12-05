/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";
import { deleteApi, getApi, postApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";
import { DefaultDialog } from "../../components/Modals/Modals";
import { IoClose } from "react-icons/io5";

const Cell = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [parentCell, setParentCell] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  // update cell
  const [updateParentCell, setUpdateParentCell] = useState("");
  const [updateCell, setUpdateCell] = useState("");
  const [updateType, setUpdateType] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateImage, setUpdateImage] = useState(null);
  // ==========

  const fetchHandler = useCallback(() => {
    getApi(endPoints.cell.getAll({ limit: 5, page }), {
      setResponse,
      setLoading,
    });
  }, [page]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  useEffect(() => {
    if (isEdit && selectedItem) {
      setUpdateParentCell(selectedItem?.parentCell);
      setUpdateCell(selectedItem?.name);
      setUpdateType(selectedItem?.type);
      setUpdateDescription(selectedItem?.description);
    }
  }, [isEdit, selectedItem]);

  const removeHandler = (id) => {
    deleteApi(endPoints.cell.remove(id), {
      setLoading,
      successMsg: "Removed !",
      successMsgTitle: "Success",
      additionalFunctions: [fetchHandler],
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("parentCell", parentCell);
    fd.append("name", name);
    fd.append("image", image);
    fd.append("type", type);
    fd.append("description", description);

    postApi(endPoints.cell.create, fd, {
      setLoading,
      successMsg: "Cell created !",
      successMsgTitle: "Success",
      additionalFunctions: [fetchHandler],
    });
  };

  const update_cell_handler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("parentCell", updateParentCell);
    fd.append("name", updateCell);
    if (updateImage) {
      fd.append("image", updateImage);
    }
    fd.append("type", updateType);
    fd.append("description", updateDescription);
    putApi(endPoints.cell.update(selectedItem?._id), fd, {
      setLoading,
      successMsg: "Cell updated !",
      successMsgTitle: "Success",
      additionalFunctions: [() => setIsEdit(false), fetchHandler],
    });
  };

  const handleReset = () => {
    setParentCell("");
    setName("");
    setImage(null);
    setType("");
    setDescription("");
  };

  const body = response?.data?.docs?.map((item) => [
    item?.name,
    item?.noOfMembers,
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
        type="button"
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


  return (
    <>
      <Navbar text={"Cell"} />
      {loading && <FullscreenLoader />}

      <div className={styles.flex_container}>
        <div className={styles.left_container}>
          <div className={styles.head}>
            <div className={styles.blank} />
            <h5 className={styles.headline}>Cell</h5>
          </div>

          <div className={styles.table_container}>
            <TableLayout
              thead={["Cell Name", "Number of Memebers", "Action"]}
              tbody={body}
              setCurrentPage={setPage}
              currentPage={page}
              totalDocs={response?.data?.totalDocs}
            />
          </div>
        </div>

        <div className={styles.add_skills}>
          <div className={styles.head}>
            <div className={styles.point}></div>
            <h5 className={styles.headline}>Add Cell</h5>
          </div>
          <form className={styles.form_container} onSubmit={submitHandler}>
            <div className={styles.input_group}>
              <label htmlFor="parent_cell">Select Parent Cell*</label>
              <input
                type="text"
                name="parent_cell"
                id="parent_cell"
                value={parentCell}
                required
                onChange={(e) => setParentCell(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="cell_name">Cell Name*</label>
              <input
                type="text"
                name="cell_name"
                id="cell_name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="cell_image">Image</label>
              <input
                type="file"
                name="cell_image"
                id="cell_image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="cell_type">Type</label>
              <input
                type="text"
                name="cell_type"
                id="cell_type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="cell_description">Description</label>
              <input
                type="text"
                name="cell_description"
                id="cell_description"
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
                Rest
              </button>
            </div>
          </form>
        </div>
      </div>

      <DefaultDialog show={isEdit} handleClose={() => setIsEdit(false)}>
        <div className={"view_place_canvas"}>
          <div className={"head"}>
            <h6 className={"title"}> Edit Cell </h6>
            <div className={"close_btn"} onClick={() => setIsEdit(false)}>
              <IoClose size={20} />
            </div>
          </div>
          <div className="content">
            <div className={`${styles.add_skills} ${styles.edit_skills} `}>
              <form
                className={styles.form_container}
                onSubmit={update_cell_handler}
              >
                <div className={styles.input_group}>
                  <label htmlFor="parent_cell">Select Parent Cell*</label>
                  <input
                    type="text"
                    name="parent_cell"
                    id="parent_cell"
                    value={updateParentCell}
                    required
                    onChange={(e) => setUpdateParentCell(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label htmlFor="cell_name">Cell Name*</label>
                  <input
                    type="text"
                    name="cell_name"
                    id="cell_name"
                    value={updateCell}
                    required
                    onChange={(e) => setUpdateCell(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label htmlFor="cell_image">Image</label>
                  <input
                    type="file"
                    name="cell_image"
                    id="cell_image"
                    onChange={(e) => setUpdateImage(e.target.files[0])}
                  />
                </div>
                <div className={styles.input_group}>
                  <label htmlFor="cell_type">Type</label>
                  <input
                    type="text"
                    name="cell_type"
                    id="cell_type"
                    value={updateType}
                    onChange={(e) => setUpdateType(e.target.value)}
                  />
                </div>
                <div className={styles.input_group}>
                  <label htmlFor="cell_description">Description</label>
                  <input
                    type="text"
                    name="cell_description"
                    id="cell_description"
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
              <p className={"label"}>Parent Cell</p>
              <p className={"value"}> {selectedItem?.parentCell} </p>
            </div>
            <div className={"description_box"}>
              <p className={"label"}>Cell Name</p>
              <p className={"value"}> {selectedItem?.name} </p>
            </div>
           
            <div className={"description_box"}>
              <p className={"label"}>Type</p>
              <p className={"value"}> {selectedItem?.type} </p>
            </div>
          
            <div className={"description_box"}>
              <p className={"label"}>Description</p>
              <p className={"value"}> {selectedItem?.description} </p>
            </div>
          </div>
        </div>
      </DefaultDialog>
    </>
  );
};

export default Cell;
