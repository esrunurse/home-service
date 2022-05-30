import "../../App.css";
import { GreyTextTwo } from "./CheckOutForm";
import { Summary } from "./Summary";
import Moment from "react-moment";
import SubmitTab from "./SubmitTab";
import validator from "validator";
import image from "../../CustomerPhoto/imageIndex";
import { useState } from "react";
import { useUser } from "../../hooks/user";
import axios from "axios";

function ThirdStep(props) {
  const {
    fullAddress,
    bookingDateAndTime,
    subService,
    total,
    setStep,
    note,
    service_name,
  } = props;
  const { validateName, nameError, name, setNameError } = useUser();

  const [creditcardError, setCreditcardError] = useState("");
  const [creditcardCheck, setCreditcardCheck] = useState("");
  const [creditcardNumber, setCreditcardNumber] = useState("");
  const [code, setCode] = useState("");
  const [expired, setExpired] = useState("");
  const [codeError, setCodeError] = useState("");
  const [expiredError, setExpiredError] = useState("");
  const [error, setError] = useState("");

  let user_id = localStorage.getItem("user_id");

  const backStep = () => {
    setStep(2);
  };

  const validateCreditCard = (event) => {
    var validCreditCard = event.target.value;
    for (let i = 0; i < validCreditCard.length; i++) {
      let prefix2digit =
        String(validCreditCard[0]) + String(validCreditCard[1]);
      let prefix4digit =
        String(validCreditCard[0]) +
        String(validCreditCard[1]) +
        String(validCreditCard[2]) +
        String(validCreditCard[3]);
      if (
        prefix2digit === "34" ||
        (prefix2digit === "37" && validator.isNumeric(validCreditCard))
      ) {
        setCreditcardCheck(image.AMEX);
        setCreditcardError("");
      } else if (
        prefix2digit === "51" ||
        prefix2digit === "52" ||
        prefix2digit === "53" ||
        prefix2digit === "54" ||
        (prefix2digit === "55" && validator.isNumeric(validCreditCard))
      ) {
        setCreditcardCheck(image.MASTERCARD);
        setCreditcardError("");
      } else if (
        prefix4digit === "4539" ||
        prefix4digit === "4556" ||
        prefix4digit === "4916" ||
        prefix4digit === "4532" ||
        prefix4digit === "4929" ||
        prefix4digit === "4485" ||
        prefix4digit === "4716" ||
        prefix4digit === "4024" ||
        (String(validCreditCard[0]) === "4" &&
          validator.isNumeric(validCreditCard))
      ) {
        setCreditcardCheck(image.VISA);
        setCreditcardError("");
      } else {
        setCreditcardCheck("");
        setCreditcardError("We only accept AMEX, Mastercard and Visa cards.");
      }
    }
    setCreditcardNumber(validCreditCard);
  };

  const validateCode = (e) => {
    var validCode = e.target.value;
    if (!validator.isNumeric(validCode) || validCode.length !== 3) {
      setCodeError("กรุณากรอกรหัสให้ถูกต้อง");
    } else {
      setCodeError("");
    }
    setCode(validCode);
  };

  const expiredChange = (e) => {
    if (validator.isNumeric(e.target.value) && e.target.value.length === 4) {
      setExpired(e.target.value);
      setExpiredError("");
    } else {
      setExpired(e.target.value);
      setExpiredError("กรุณากรอกวันหมดอายุให้ถูกต้อง");
    }
  };

  const createOrder = async (data) => {
    await axios.post("http://localhost:4000/checkout", data);
  };

  const nextStep = () => {
    if (
      codeError === "" &&
      nameError === "" &&
      creditcardError === "" &&
      expiredError === ""
    ) {
      const data = {
        user_id: user_id,
        service_name: service_name,
        date_time: bookingDateAndTime,
        address: fullAddress.address,
        subdistrict: fullAddress.subdistrict,
        district: fullAddress.district,
        province: fullAddress.province,
        zipcode: fullAddress.zipcode,
        total_price: total,
        sub_service: subService,
        note,
      };
      createOrder(data);
      setStep(4);
    } else {
      setError("กรุณากรอกข้อมูลการชำระเงิน");
    }
  };

  return (
    <div>
      <div className="px-[10vw] flex mt-8 mb-[125px] mx-0 justify-between w-screen">
        <div className=" w-[50vw] mr-[2vw] mb-[125px] py-8 px-6 flex flex-col justify-between border border-grey300 rounded-lg">
          <div className="mb-4 flex items-center">
            {creditcardCheck !== "" ? (
              <GreyTextTwo>
                ชำระเงินด้วย{" "}
                <img
                  src={creditcardCheck}
                  alt="type of card"
                  className=" h-12 inline"
                />
              </GreyTextTwo>
            ) : (
              <GreyTextTwo>ชำระเงิน</GreyTextTwo>
            )}
          </div>
          <form>
            <div className="mt-4">
              <label>
                <h5 className="text-grey900 font-medium">
                  หมายเลขบัตรเครดิต<span className="text-red">*</span>
                </h5>
                <input
                  className="h-11 py-2.5 px-4 border rounded-lg w-full focus:placeholder:text-grey950 mt-2 border-grey300 focus:border-blue600 focus:outline-none"
                  placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
                  value={creditcardNumber}
                  onChange={(event) => {
                    if (creditcardNumber === "") {
                      validateCreditCard(event);
                      setCreditcardError("กรุณากรอกหมายเลขบัตรเครดิต");
                    } else {
                      validateCreditCard(event);
                    }
                  }}
                  max="16"
                />
                <br />
                <p className="text-red text-xs mt-2">{creditcardError}</p>
              </label>
            </div>
            <div className="mt-4">
              <label>
                <h5 className="text-grey900 font-medium">
                  ชื่อบนบัตร<span className="text-red">*</span>
                </h5>
                <input
                  className="w-full h-11 py-2.5 px-4 border rounded-lg focus:placeholder:text-grey950 mt-2 border-grey300 focus:border-blue600 focus:outline-none"
                  placeholder="กรุณากรอกชื่อบนบัตร"
                  value={name}
                  onChange={(event) => {
                    if (name === "") {
                      validateName(event);
                      setNameError("กรุณากรอกชื่อบนบัตร");
                    } else {
                      validateName(event);
                    }
                  }}
                />
                <br />
                <p className="text-red text-xs mt-2">{nameError}</p>
              </label>
            </div>
            <div className="w-full flex justify-between mt-4">
              <label>
                <h5 className="text-grey900 font-medium">
                  วันหมดอายุ<span className="text-red">*</span>
                </h5>
                <input
                  onChange={(e) => {
                    if (expired === "") {
                      expiredChange(e);
                      setExpiredError("กรุณากรอกวันหมดอายุ");
                    } else {
                      expiredChange(e);
                    }
                  }}
                  value={expired}
                  className="h-11 py-2.5 px-4 border rounded-lg focus:placeholder:text-grey950 mt-2 w-[22.5vw] border-grey300 focus:border-blue600 focus:outline-none"
                  placeholder="MMYY"
                  max="4"
                />
                <br />
                <p className="text-red text-xs mt-2">{expiredError}</p>
              </label>
              <label>
                <h5 className="text-grey900 font-medium">
                  รหัส CVC / CVV<span className="text-red">*</span>
                </h5>
                <input
                  className="h-11 py-2.5 px-4 border rounded-lg focus:placeholder:text-grey950 mt-2 w-[22.5vw] border-grey300 focus:border-blue600 focus:outline-none"
                  type="password"
                  placeholder="xxx"
                  max="3"
                  value={code}
                  onChange={(e) => {
                    if (code === "") {
                      validateCode(e);
                      setCodeError("กรุณากรอกรหัส CVC / CVV");
                    } else {
                      validateCode(e);
                    }
                  }}
                />
                <br />
                <p className="text-red text-xs mt-2">{codeError}</p>
              </label>
            </div>
          </form>
        </div>
        <Summary total={total}>
          {codeError === "" &&
          nameError === "" &&
          creditcardError === "" &&
          expiredError === "" ? null : (
            <p className="text-red mt-2">{error}</p>
          )}
          {subService.map((data) => {
            return (
              <div key={data.sub_service_id}>
                <p className="float-left my-2 text-black text-sm font-light">
                  {data.sub_service_name}
                </p>{" "}
                <p className="float-right my-2 text-grey900 text-sm font-light">
                  {data.sub_service_quantity} รายการ
                </p>
              </div>
            );
          })}
          {bookingDateAndTime !== null ? (
            <div>
              <hr className="text-grey300 my-4" />
              <div>
                <p className="float-left my-2 text-grey700 text-sm font-light">
                  วันที่-เวลา
                </p>
                <p className="float-right my-2 text-black text-sm font-normal">
                  <Moment format="DD MMMM YYYY HH:mm">
                    {bookingDateAndTime}
                  </Moment>
                </p>
              </div>
            </div>
          ) : null}
          {fullAddress.address !== "" ||
          fullAddress.subdistrict !== "" ||
          fullAddress.district !== "" ||
          fullAddress.province !== "" ||
          fullAddress.zipcode !== "" ? (
            <div>
              <p className="float-left my-2 text-grey700 text-sm font-light">
                สถานที่
              </p>
              <p className="float-right my-2 text-black text-sm font-normal w-[80%] text-right">
                {fullAddress.address} {fullAddress.subdistrict}{" "}
                {fullAddress.district} {fullAddress.province}{" "}
                {fullAddress.zipcode}
              </p>
            </div>
          ) : null}
          {note !== "" ? (
            <div>
              <p className="float-left my-2 text-grey700 text-sm font-light">
                ข้อมูลเพิ่มเติม
              </p>
              <p className="float-right my-2 text-black text-sm font-normal">
                {note}
              </p>
            </div>
          ) : null}
        </Summary>
      </div>
      <SubmitTab
        onClickBack={backStep}
        next="ยืนยันการชำระเงิน"
        onClickNext={nextStep}
      />
    </div>
  );
}

export default ThirdStep;
