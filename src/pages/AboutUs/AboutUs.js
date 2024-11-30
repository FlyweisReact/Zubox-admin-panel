/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../css/modules/aboutus.module.css";
import UploadLogo from "../../components/About/UploadLogo";
import PageContent from "../../components/About/PageContent";
import MenuList from "../../components/About/MenuList";
import Article from "../../components/About/Article";
import Posts from "../../components/About/Posts";
import Events from "../../components/About/Events";
import Video from "../../components/About/Video";

const options = [
  "Logo",
  "Page Content",
  "Menu List",
  "Article’s",
  "Subscriber’s Post",
  "Event",
  "Video",
];

const AboutUs = () => {
  const [type, setType] = useState("Logo");

  return (
    <section className="page-container skill-page">
      <Navbar text={"About Us"} />

      <div className={styles.filter_btns}>
        {options.map((item, index) => (
          <button
            onClick={() => setType(item)}
            className={type === item ? styles.active : ""}
            key={`option${index}`}
          >
            {item}
          </button>
        ))}
      </div>

      {type === "Logo" && <UploadLogo />}
      {type === "Page Content" && <PageContent />}
      {type === "Menu List" && <MenuList />}
      {type === "Article’s" && <Article />}
      {type === "Subscriber’s Post" && <Posts />}
      {type === "Event" && <Events />}
      {type === "Video" && <Video />}
    </section>
  );
};

export default AboutUs;
