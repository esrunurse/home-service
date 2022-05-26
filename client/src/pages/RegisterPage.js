import "../App.css";
import Nav from "../components/Nav.js";
import { useAuth } from "../contexts/authentication.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/user";

function RegisterPage() {

  const { name,
    phoneNumber,
    email,
    password,
    errorForm,
    setErrorForm,
    validated,
    setValidated,
    emailError,
    validateEmail,
    phoneNumberError,
    validatePhoneNumber,
    nameError,
    validateName,
    passwordError,
    validatePassword } = useUser();

  const { register } = useAuth();
  const navigate = useNavigate();

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
            <p className="text-red text-xs text-center mt-6">{errorForm}</p>
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
