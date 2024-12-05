/** @format */

import React, { useEffect, useState } from "react";
import styles from "../../css/modules/aboutus.module.css";
import TableLayout from "../TableLayout";
import { DefaultDialog, DeleteConfirmation } from "../Modals/Modals";
import { deleteApi, getApi, postApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { IoClose } from "react-icons/io5";
import { FullscreenLoader } from "../Loader";

const thead = ["ID", "Subscriber Post", "Action"];

const Posts = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchHandler = () => {
    getApi(endPoints.subscriberPost.getAll({ page }), {
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (isEdit && selectedItem && isOpen) {
      setDescription(selectedItem?.description);
    }
    if ((isOpen, !isEdit)) {
      setDescription("");
    }
  }, [isOpen, isEdit, selectedItem]);

  const removePost = () => {
    deleteApi(endPoints.subscriberPost.remove(selectedItem?._id), {
      successMsg: "Post Removed !",
      setLoading,
      additionalFunctions: [() => setOpen(false), fetchHandler],
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      description,
    };
    if (!isEdit) {
      postApi(endPoints.subscriberPost.create, payload, {
        successMsg: "Post Created !",
        setLoading,
        additionalFunctions: [() => setIsOpen(false), fetchHandler],
      });
    } else {
      putApi(endPoints.subscriberPost.update(selectedItem?._id), payload, {
        successMsg: "Post Edited !",
        setLoading,
        additionalFunctions: [() => setIsOpen(false), fetchHandler],
      });
    }
  };

  const tbody = response?.data?.docs?.map((item, index) => [
    `#${index + 1}`,
    <span className={styles.description_container}>{item?.description}</span>,
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
        className={styles.remove_btn}
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
          Create Post
        </button>
      </div>

      <div className={styles.subscriber_post}>
        <TableLayout
          thead={thead}
          tbody={tbody}
          isPagination={true}
          setCurrentPage={setPage}
          currentPage={page}
          totalDocs={response?.data?.totalDocs}
        />
      </div>
      <DeleteConfirmation
        setOpen={setOpen}
        open={open}
        deleteHandler={removePost}
      />

      <DefaultDialog show={isOpen} handleClose={() => setIsOpen(false)}>
        <div className={"view_place_canvas"}>
          <div className={"head"}>
            <h6 className={"title"}>{isEdit ? "Edit" : "Create"} Post </h6>
            <div className={"close_btn"} onClick={() => setIsOpen(false)}>
              <IoClose size={20} />
            </div>
          </div>

          <div className={"content"}>
            <div className={`${styles.edit_container} ${styles.edit_modal}`}>
              <form className={styles.form_container} onSubmit={submitHandler}>
                <div className={styles.input_group}>
                  <label>Menu Name</label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className={styles.btn_container}>
                  <button type="submit" className={styles.submit}>
                    Submit
                  </button>
                  <button type="button" className={styles.reset}>
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

export default Posts;
