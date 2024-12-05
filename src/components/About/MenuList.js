/** @format */

import React, { useEffect, useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";
import { DefaultDialog, DeleteConfirmation } from "../Modals/Modals";
import { deleteApi, getApi, postApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../Loader";
import { IoClose } from "react-icons/io5";

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const MenuList = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchMenu = () => {
    getApi(endPoints.menuList.getAll, {
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    if (isEdit && selectedItem && isOpen) {
      setName(selectedItem?.name);
    }
    if (!isEdit && isOpen) {
      setName("");
    }
  }, [isEdit, selectedItem, isOpen]);

  const createMenu = (e) => {
    e.preventDefault();
    const payload = {
      name,
    };
    if (isEdit) {
      putApi(endPoints.menuList.update(selectedItem?._id), payload, {
        successMsg: "Menu Edited Successfully !",
        setLoading,
        additionalFunctions: [() => setIsOpen(false), fetchMenu],
      });
    } else {
      postApi(endPoints.menuList.create, payload, {
        successMsg: "Menu Created Successfully !",
        setLoading,
        additionalFunctions: [() => setIsOpen(false), fetchMenu],
      });
    }
  };

  const handleReset = () => {
    setName("");
    setIsOpen(false);
  };

  const removeHandler = (id) => {
    deleteApi(endPoints.menuList.remove(id), {
      successMsg: "Menu Removed Successfully !",
      setLoading,
      additionalFunctions: [() => setIsDelete(false), fetchMenu],
    });
  };

  const thead = ["Menu ID", "Menu ID", "Created on", "Actions"];

  const tbody = response?.data?.map((item, index) => [
    index + 1,
    <span className={styles.status}>
      <span className={styles.blank} />
      {item?.name}
    </span>,
    <span className={styles.date}>
      {" "}
      {item?.updatedAt && formatDate(item?.updatedAt)}{" "}
    </span>,
    <div className={styles.btn_container}>
      <button
        className={styles.edit_btn}
        type="button"
        onClick={() => {
          setSelectedItem(item);
          setIsEdit(true);
          setIsOpen(true);
        }}
      >
        Edit
      </button>
      <button
        className={styles.delete_btn}
        type="button"
        onClick={() => {
          setSelectedItem(item);
          setIsDelete(true);
        }}
      >
        Delete
      </button>
    </div>,
  ]);

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

      <div className={styles.menu_list}>
        <TableLayout thead={thead} isPagination={false} tbody={tbody} />
      </div>

      <DeleteConfirmation
        open={isDelete}
        setOpen={setIsDelete}
        deleteHandler={() => removeHandler(selectedItem?._id)}
      />

      <DefaultDialog show={isOpen} handleClose={() => setIsOpen(false)}>
        <div className={"view_place_canvas"}>
          <div className={"head"}>
            <h6 className={"title"}> {isEdit ? "Edit" : "Create"} Menu </h6>
            <div className={"close_btn"} onClick={() => setIsOpen(false)}>
              <IoClose size={20} />
            </div>
          </div>

          <div className={"content"}>
            <div className={`${styles.edit_container} ${styles.edit_modal}`}>
              <form className={styles.form_container} onSubmit={createMenu}>
                <div className={styles.input_group}>
                  <label>Menu Name</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className={styles.btn_container}>
                  <button type="submit" className={styles.submit}>
                    Submit
                  </button>
                  <button
                    type="button"
                    className={styles.reset}
                    onClick={() => handleReset()}
                  >
                    Reset
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

export default MenuList;
