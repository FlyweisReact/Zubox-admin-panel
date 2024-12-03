/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/logo.module.css";
import { chose_img_icon } from "../../assest";
import { deleteApi, getApi, postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { FullscreenLoader } from "../../components/Loader";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = [
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
    date.getFullYear(),
  ].join("/");
  return formattedDate;
};

const Logo = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getApi(endPoints.logo.getLogo, {
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const uploadLogo = (file) => {
    const fd = new FormData();
    fd.append("image", file);
    postApi(endPoints.logo.createLogo, fd, {
      setLoading,
      successMsgTitle: "Success",
      successMsg: "logo uploaded successfully !",
      errorMsgTitle: "Error",
      errorMsg:
        "Please upload a file smaller than [2 MB]. If the issue persists, refresh the page and try again",
      additionalFunctions: [fetchHandler],
    });
  };

  console.log(response);

  const resetLogo = () => {
    deleteApi(endPoints.logo.removeLogo(response?.cart?._id), {
      setLoading,
      successMsgTitle: "Success",
      successMsg: "logo removed successfully !",
      additionalFunctions: [fetchHandler],
    });
  };

  return (
    <>
      <Navbar text={"Logo"} />
      {loading && <FullscreenLoader />}
      <div className={styles.choose_logo_container}>
        <div className={styles.choose_new_one}>
          <div className={styles.head}>
            <span className={styles.blank} />
            <h5 className={styles.headline}>Choose New Logo</h5>
          </div>

          <div className={styles.content}>
            <div className={styles.img_container}>
              <img src={chose_img_icon} alt="" />
            </div>
            <div className={styles.info}>
              <h5 className={styles.headline}>
                Last Changed on <br />{" "}
                {response?.cart?.updatedAt &&
                  formatDate(response?.cart?.updatedAt)}
              </h5>
              <button
                className={styles.new_logo}
                type="button"
                onClick={() => document.getElementById("new_file").click()}
              >
                Choose New Logo
              </button>
              <input
                type="file"
                id="new_file"
                onChange={(e) => uploadLogo(e.target.files[0])}
                style={{ display: "none" }}
              />
              <br />
              <div className={styles.btn_container}>
                <button
                  className={styles.update_btn}
                  type="button"
                  onClick={() => document.getElementById("new_file").click()}
                >
                  Update
                </button>
                <button
                  className={styles.reset_btn}
                  type="button"
                  onClick={() => resetLogo()}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.current_logo_container}>
          <div className={styles.head}>
            <span className={styles.blank} />
            <h5 className={styles.headline}>Current Logo</h5>
          </div>
          <div className={styles.content}>
            <div className={styles.img_container}>
              <img src={response?.cart?.logo} alt="" />
            </div>

            <button
              className={styles.change_btn}
              type="button"
              onClick={() => document.getElementById("new_file").click()}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
