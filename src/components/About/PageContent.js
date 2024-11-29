/** @format */

import styles from "../../css/modules/aboutus.module.css";

const PageContent = () => {
  return (
    <div className={styles.page_content}>
      <div className={styles.head}>
        <span className={styles.blank} />
        <h5 className={styles.headline}>Header</h5>
      </div>

      <form className={styles.form_container}>
        <textarea rows={3} />
        <button className={styles.save_btn}>Save</button>
      </form>
    </div>
  );
};

export default PageContent;
