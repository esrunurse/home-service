import "../App.css";
import Nav from "../components/Nav.js";
import { useAuth } from "../contexts/authentication.js";
import React, { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  //validation
  const [errorForm, setErrorForm] = useState("");
  const [validated, setValidated] = useState(false);

  //email validation
  const [emailError, setEmailError] = useState("");

  const validateEmail = (event) => {
    var validEmail = event.target.value;

    if (!validator.isEmail(validEmail)) {
      setEmailError("กรุณากรอกอีเมลให้ถูกต้อง");
    } else if (validator.isEmpty(validEmail)) {
      setEmailError("กรุณากรอกอีเมล");
    } else {
      setEmailError("");
    }
    setEmail(validEmail);
  };

  //phone number validation
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatePhoneNumber = (event) => {
    var validPhoneNumber = event.target.value;
    if (validator.isEmpty(validPhoneNumber)) {
      setPhoneNumberError("กรุณากรอกเบอร์โทรศัพท์");
    } else if (
      !validator.isNumeric(validPhoneNumber) ||
      !validPhoneNumber.length === 10
    ) {
      setPhoneNumberError("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
    } else {
      setPhoneNumberError("");
    }
    setPhoneNumber(validPhoneNumber);
  };

  //name validation
  const [nameError, setNameError] = useState("");

  const validateName = (event) => {
    var validName = event.target.value;
    const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (validator.isEmpty(validName)) {
      setNameError("กรุณากรอกชื่อ-นามสกุล");
    } else if (!validator.matches(validName, pattern)) {
      setNameError("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง");
    } else {
      setNameError("");
    }
    setName(validName);
  };

  //password validation
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (event) => {
    var validPassword = event.target.value;
    if (validator.isEmpty(validPassword)) {
      setPasswordError("กรุณากรอกรหัสผ่าน");
    } else if (validPassword.length < 8) {
      setPasswordError("รหัสผ่านต้องมีอย่างน้อย 8 ตัว");
    } else {
      setPasswordError("");
    }
    setPassword(validPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validated === true &&
      emailError === "" &&
      phoneNumberError === "" &&
      passwordError === "" &&
      nameError === ""
    ) {
      const data = {
        name,
        phoneNumber,
        email,
        password,
        role: "customer",
      };
      register(data);
    } else {
      setErrorForm("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  return (
    <div className="register-form-container">
      <Nav />
      <div className="flex justify-center bg-bg">
        <form
          className="bg-white border border-grey300 rounded-lg w-[614px] px-[87px] pt-8 pb-[45px] mt-[52px] mb-[87px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-blue950 text-center">ลงทะเบียน </h1>
          <div className="mt-5">
            <label>
              <h5>
                ชื่อ - นามสกุล<span className="text-red">*</span>
              </h5>
              <input
                id="name"
                name="name"
                placeholder="กรุณากรอกชื่อ-นามสกุล"
                onChange={(event) => {
                  if (name === "") {
                    validateName(event);
                    setValidated(false);
                  } else {
                    validateName(event);
                  }
                }}
                value={name}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
              <br />
              <p className="text-red text-xs">{nameError}</p>
            </label>
          </div>
          <div className="mt-5">
            <label htmlFor="phone">
              <h5>
                เบอร์โทรศัพท์<span className="text-red">*</span>
              </h5>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                onChange={(event) => {
                  if (phoneNumber === "") {
                    validatePhoneNumber(event);
                    setValidated(false);
                  } else {
                    validatePhoneNumber(event);
                  }
                }}
                value={phoneNumber}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5 "
              />
              <br />
              <p className="text-red text-xs">{phoneNumberError}</p>
            </label>
          </div>
          <div className="mt-5">
            <label>
              <h5>
                อีเมล<span className="text-red">*</span>
              </h5>
              <input
                id="email"
                name="email"
                placeholder="กรุณากรอกอีเมล"
                onChange={(event) => {
                  if (email === "") {
                    validateEmail(event);
                    setValidated(false);
                  } else {
                    validateEmail(event);
                  }
                }}
                value={email}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
              <br />
              <p className="text-red text-xs">{emailError}</p>
            </label>
          </div>
          <div className="mt-5">
            <label>
              <h5>
                รหัสผ่าน<span className="text-red">*</span>
              </h5>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                onChange={(event) => {
                  if (password === "") {
                    validatePassword(event);
                    setValidated(false);
                  } else {
                    validatePassword(event);
                  }
                }}
                value={password}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
              <br />
              <p className="text-red text-xs">{passwordError}</p>
            </label>
            <br />
            <div className="mt-[30px]">
              <label>
                <input
                  id="conditionAndPrivacy"
                  name="conditionAndPrivacy"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setValidated(true);
                    } else {
                      setValidated(false);
                    }
                  }}
                />
                <span className="absolute">
                  ยอมรับ <button className="btn-ghost">ข้อตกลงและเงื่อนไข</button> และ{" "}
                  <button className="btn-ghost">นโยบายความเป็นส่วนตัว</button>
                </span>
              </label>
            </div>
          </div>
          <div className="form-actions">
            <p className="text-red text-xs text-center">{errorForm}</p>
            <button className="btn-primary w-full my-[30px]" type="submit">
              ลงทะเบียน
            </button>
            <div className="text-center">
              <button className="btn-ghost" onClick={()=>navigate("/login")}>กลับไปหน้าเข้าสู่ระบบ</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
