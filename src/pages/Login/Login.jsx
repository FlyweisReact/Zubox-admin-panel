/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/modules/login.module.css";
import { logo } from "../../assest";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { postApi, tokenSaver } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const payload = {
    email,
    password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.auth.login, payload, {
      successMsg: "Welcome Back !",
      successMsgTitle: "Success",
      setLoading,
      additionalFunctions: [
        (res) => tokenSaver(res?.accessToken),
         () => navigate("/dashboard")
      ],
    });
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="" />
          </div>
          <h5 className={styles.headline}>Admin Login</h5>

          <form className={styles.form_container} onSubmit={submitHandler}>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <div className={styles.input_container}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <button className={styles.submitBtn} type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
