/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/modules/login.module.css";
import { logo } from "../../assest";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="" />
          </div>
          <h5 className={styles.headline}>Admin Login</h5>

          <form className={styles.form_container}>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.input_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
              />
            </div>

            <Link className={styles.forget_password} to={"/forgetpassword"}>
              Forget Password ?
            </Link>

            <button
              className={styles.submitBtn}
              type="button"
              onClick={() => navigate("/dashboard")}
            >
              Continue
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
