/** @format */
import { useEffect, useState } from "react";
import { logo, resetGif } from "../../assest";
import styles from "../../css/modules/login.module.css";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        navigate("/");
      }, [2000]);
    }
  }, [step, navigate]);

  return (
    <section className={styles.container}>
      {step === 1 && (
        <div className={styles.main_container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="" />
          </div>
          <h5 className={styles.headline}>Forgot password?</h5>
          <h5 className={styles.sub_headline}>
            We'll send you a link to reset your password.
          </h5>

          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <div className={styles.input_container}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              className={styles.submitBtn}
              type="button"
              onClick={() => setStep(2)}
            >
              Reset Password
            </button>
            <button
              className={styles.backBtn}
              type="button"
              onClick={() => navigate(-1)}
            >
              <IoArrowBack />
              Back
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className={styles.main_container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="" />
          </div>
          <img src={resetGif} alt="" className={styles.gif_thumbnail} />
          <h5 className={styles.headline}>Rest link sent succesfully</h5>
          <h5 className={styles.sub_headline}>Please check your mail.</h5>
        </div>
      )}
    </section>
  );
};

export default Forgotpassword;
