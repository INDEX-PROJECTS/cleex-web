/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-internal-modules */
"use client";

import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

const Home = () => {
  const [token, setToken] = useState<string | null>("");
  const recaptchaRef = React.createRef();

  const onChange = (value: string | null) => {
    setToken(value);
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  const onSubmit = () => {
    //@ts-ignore
    recaptchaRef.current.execute();

    // if (token !== "") {
    //   fetch("https://testguru.ru/kvik_v3_test/api/v1/phone/registration_test", {
    //     method: "POST",
    //     body: {
    //       //@ts-ignore
    //       phone: "+79823256378",
    //       recaptcha_token: token,
    //     },
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       return console.log(error);
    //     });
    // }
  };

  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef as any}
        size="invisible"
        sitekey="6LcLLwYqAAAAADXUlmlZ_QfYc4gnrLDjoqNO8Jsh"
        onChange={onChange}
      />

      <Button
        onClick={onSubmit}
        theme={ThemeButton.DEFAULT}>
        Submit
      </Button>
    </div>
  );
};

export default Home;
