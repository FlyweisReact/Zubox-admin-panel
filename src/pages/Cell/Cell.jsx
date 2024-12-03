/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/cell.module.css";
import TableLayout from "../../components/TableLayout";
import { deleteApi, getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";

const Cell = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [parentCell, setParentCell] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState(1);

  const fetchHandler = useCallback(() => {
    getApi(endPoints.cell.getAll({ limit: 5, page }), {
      setResponse,
      setLoading,
    });
  }, [page]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

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
      <button className={styles.submit} type="button">
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
    </>
  );
};

export default Cell;
