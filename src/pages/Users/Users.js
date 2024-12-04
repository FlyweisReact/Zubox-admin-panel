/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableLayout from "../../components/TableLayout";
import styles from "../../css/modules/users.module.css";
import { DeleteConfirmation } from "../../components/Modals/Modals";
import { AnimatePresence, motion } from "motion/react";
import { deleteApi, getApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { returnFullName } from "../../utils/utils";
import { FullscreenLoader } from "../../components/Loader";

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

const Users = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const fetchUsers = useCallback(() => {
    getApi(endPoints.users.getAll({ search: query }), {
      setResponse,
      setLoading,
    });
  }, [query]);

  const removeHandler = (id) => {
    deleteApi(endPoints.users.remove(id), {
      setLoading,
      successMsg: "Removed successfully !",
      additionalFunctions: [() => setIsDelete(false), fetchUsers],
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const editUser = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("fullName", fullName);
    fd.append("firstName", firstName);
    fd.append("lastName", lastName);
    fd.append("dateOfBirth", dateOfBirth);
    fd.append("gender", gender);
    fd.append("phone", phone);
    fd.append("email", email);
    putApi(endPoints.users.updateUser(selectedItem?._id), fd, {
      successMsg: "User updated successfully !",
      setLoading,
      additionalFunctions: [() => setIsEdit(false), fetchUsers],
    });
  };

  const handleReset = () => {
    setFullName("");
    setFirstName("");
    setLastName("");
    setDateofBirth("");
    setGender("");
    setPhone("");
    setEmail("");
    setIsEdit(false);
  };

  useEffect(() => {
    if (isEdit && selectedItem) {
      setFullName(selectedItem?.fullName);
      setFirstName(selectedItem?.firstName);
      setLastName(selectedItem?.lastName);
      setDateofBirth(selectedItem?.dateOfBirth?.slice(0, 10));
      setGender(selectedItem?.gender);
      setPhone(selectedItem?.phone);
      setEmail(selectedItem?.email);
    }
  }, [isEdit, selectedItem]);

  const thead = [
    "Name",
    "User Status",
    "Email Address",
    "Phone Number",
    "Joined On",
    "Action",
  ];

  const tbody = response?.data?.map((item) => [
    returnFullName(item),
    <div className={styles.status}>
      <span className={styles.blank} />
      {item?.status}
    </div>,
    item?.email,
    item?.phone,
    <span className={styles.date}>
      {" "}
      {item?.createdAt && formatDate(item?.createdAt)}{" "}
    </span>,
    <div className={styles.btn_container}>
      <button
        type="button"
        onClick={() => {
          setSelectedItem(item);
          setIsEdit(true);
        }}
      >
        Edit
      </button>
      <button
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
    <section className="page-container">
      <Navbar text={"Users"} setQuery={setQuery} />
      {loading && <FullscreenLoader />}

      <div className={styles.table_container}>
        <TableLayout thead={thead} tbody={tbody} />
      </div>

      {/* ------ edit canvas ------- */}
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

              <form className={styles.form_container} onSubmit={editUser}>
                <div className={styles.input_group}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>User Name *</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>DOB *</label>
                  <input
                    type="date"
                    required
                    onChange={(e) => setDateofBirth(e.target.value)}
                    value={dateOfBirth}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Gender</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Phone No.</label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Email Address*</label>
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- */}

      {/* ---- delete confirmation----- */}
      <DeleteConfirmation
        open={isDelete}
        setOpen={setIsDelete}
        deleteHandler={() => removeHandler(selectedItem?._id)}
      />
    </section>
  );
};

export default Users;
