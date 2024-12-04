/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableLayout from "../../components/TableLayout";
import styles from "../../css/modules/category.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { DeleteConfirmation } from "../../components/Modals/Modals";
import { deleteApi, getApi, postApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchhandler = () => {
    getApi(endPoints.skill.getAll, {
      setLoading,
      setResponse,
    });
  };

  useEffect(() => {
    fetchhandler();
  }, []);

  const insertSkill = (e) => {
    e.preventDefault();
    const payload = {
      name,
    };
    postApi(endPoints.skill.create, payload, {
      setLoading,
      successMsg: "Created !",
      additionalFunctions: [fetchhandler],
    });
  };

  const handleReset = () => {
    setName("");
    setUpdateName("");
  };

  useEffect(() => {
    if (isEdit) {
      setUpdateName(selectedItem?.name);
    }
  }, [isEdit]);

  const updateSkill = (e) => {
    e.preventDefault();
    const payload = {
      name: updateName,
    };
    putApi(endPoints.skill.update(selectedItem?._id), payload, {
      setLoading,
      successMsg: "Updated successfully !",
      additionalFunctions: [() => setIsEdit(false), fetchhandler],
    });
  };

  const removeSkill = (id) => {
    deleteApi(endPoints.skill.remove(id), {
      setLoading,
      successMsg: "Removed successfully !",
      additionalFunctions: [() => setOpen(false), fetchhandler],
    });
  };

  const thead = ["Skill Name", "Action"];
  const tbody = response?.data?.map((item) => [
    item?.name,
    <div className={styles.btn_container}>
      <button
        className={styles.edit_btn}
        type="button"
        onClick={() => {
          setSelectedItem(item);
          setIsEdit(true);
        }}
      >
        Edit
      </button>
      <button
        className={styles.delete_btn}
        onClick={() => {
          setSelectedItem(item);
          setOpen(true);
        }}
      >
        Delete
      </button>
    </div>,
  ]);

  return (
    <section className="page-container skill-page">
      <Navbar text={"Skill Catagory"} />
      {loading && <FullscreenLoader />}
      <div className="main-content">
        <h5 className="headline">Skill List</h5>

        <div className={styles.flex_container}>
          <div className={styles.table_container}>
            <TableLayout thead={thead} tbody={tbody} />
          </div>

          <div className={styles.add_skills}>
            <div className={styles.head}>
              <div className={styles.point}></div>
              <h5 className={styles.headline}>Add Skill</h5>
            </div>
            <form className={styles.form_container} onSubmit={insertSkill}>
              <label>Enter Skill</label>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <div className={styles.btn_container}>
                <button className={styles.submit} type="submit">
                  Submit
                </button>
                <button
                  onClick={() => handleReset()}
                  className={styles.reset}
                  type="button"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <DeleteConfirmation
        open={open}
        setOpen={setOpen}
        deleteHandler={() => removeSkill(selectedItem?._id)}
      />

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

              <form className={styles.form_container} onSubmit={updateSkill}>
                <div className={styles.input_group}>
                  <label>Name</label>
                  <input
                    required
                    onChange={(e) => setUpdateName(e.target.value)}
                    value={updateName}
                    type="text"
                  />
                </div>
                <div className={styles.btn_container}>
                  <button className={styles.submit} type="submit">
                    Submit
                  </button>
                  <button
                    className={styles.reset}
                    type="button"
                    onClick={() => {
                      handleReset();
                      setIsEdit(false);
                    }}
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

export default Category;
