/** @format */
import { useEffect, useState } from "react";
import { logo, resetGif } from "../../assest";
import styles from "../../css/modules/login.module.css";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  

  const forgetPassword = (e) => {
    e.preventDefault();
    const payload = {
      email,
    };
    postApi(endPoints.auth.forgetPassword, payload, {
      setResponse,
    });
  };

  console.log(response);

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

          <form className={styles.form_container} onSubmit={forgetPassword}>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <div className={styles.input_container}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className={styles.submitBtn} type="submit">
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
