/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/modules/login.module.css";
import { logo } from "../../assest";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);

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
              <div className={styles.input_container}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className={styles.input_group}>
              <label htmlFor="password">Password</label>
              <div className={styles.input_container}>
                <input
                  type={isPassword ? "password" : "text"}
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                />
                {!isPassword ? (
                  <FaEyeSlash
                    size={20}
                    cursor={"pointer"}
                    onClick={() => setIsPassword(true)}
                  />
                ) : (
                  <FaEye
                    size={20}
                    cursor={"pointer"}
                    onClick={() => setIsPassword(false)}
                  />
                )}
              </div>
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
