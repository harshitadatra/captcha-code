import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [captchaText, setCaptchaText] = useState("");
  const [signUpData, setSignUPData] = useState({
    name: "",
    email: "",
    password: "",
    captcha: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;

    setSignUPData((signUpData) => ({ ...signUpData, [name]: value }));
  }

  function captchaGenerator() {
    const possibleText =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var text = "";
    for (let i = 0; i <= 5; i++) {
      text =
        text +
        possibleText.charAt(Math.floor(Math.random() * possibleText.length));
    }
    return text;
  }
  function captchaSetter() {
    setCaptchaText(captchaGenerator());
  }
  function signUpHandler() {
    if (captchaText === signUpData.captcha) {
      toast.success("verified");
    } else {
      toast.error("your are a bot");
    }
  }
  useEffect(() => {
    captchaSetter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="sign-up-container">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter you name"
          onChange={(e) => changeHandler(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your mail"
          onChange={(e) => changeHandler(e)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => changeHandler(e)}
        />
        <div className="captcha-image">
          <i onClick={captchaSetter} class="fa-solid fa-rotate-right"></i>
          <div className="captchaText">
            <strike>{captchaText}</strike>
          </div>
        </div>

        <input
          type="text"
          id="captcha"
          name="captcha"
          placeholder="Enter captcha"
          onChange={(e) => changeHandler(e)}
        />
        <button className="sign-up-button" onClick={signUpHandler}>
          Sign up
        </button>
      </div>
    </>
  );
};
