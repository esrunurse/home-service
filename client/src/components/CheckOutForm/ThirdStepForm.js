/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css";
import "./SecondStepForm.css";
import { DatePicker } from "antd";
import InputAddress from "react-thailand-address-autocomplete";
import { GreyTextTwo } from "./CheckOutForm";
import { Summary } from "./Summary";
import moment from "moment";
import SubmitTab from "./SubmitTab";
import validator from "validator";

function ThirdStep(props) {
  const { fullAddress, bookingDateAndTime, subService, total, setStep } = props;

  let user_id = localStorage.getItem("user_id");
  console.log(user_id);
  const backStep = () => {
    setStep(2);
  };

  return (
    <div>
      <div className="px-[10vw] flex mt-8 mb-[125px] mx-0 justify-between w-screen">
        <div className=" w-[50vw] mr-[2vw] py-8 px-6 flex flex-col justify-between border border-grey300 rounded-lg">
          <div className="mb-4">
            <GreyTextTwo className="">ชำระเงิน</GreyTextTwo>
          </div>
          <form className="h-[280px] w-[686px] flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <label
                for="cardNumber"
                className="leading-[150%] text-[#323640] font-medium"
              >
                หมายเลขบัตรเครดิต<span className="text-red">*</span>
              </label>
              <input
                className="h-11 py-2.5 px-4 border rounded-lg"
                type="srting"
                placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                for="cardName"
                className="leading-[150%] text-[#323640] font-medium"
              >
                ชื่อบนบัตร<span className="text-red">*</span>
              </label>
              <input
                className="h-11 py-2.5 px-4 border rounded-lg"
                type="srting"
                placeholder="กรุณากรอกชื่อบนบัตร"
              />
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <label
                  for="cardName"
                  className="leading-[150%] text-[#323640] font-medium"
                >
                  วันหมดอายุ<span className="text-red">*</span>
                </label>
                <input
                  className="h-11 w-[331px] py-2.5 px-4 border rounded-lg"
                  type="srting"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  for="cardName"
                  className="leading-[150%] text-[#323640] font-medium"
                >
                  รหัส CVC / CVV<span className="text-red">*</span>
                </label>
                <input
                  className="h-11 w-[331px] py-2.5 px-4 border rounded-lg"
                  type="password"
                  placeholder="xxx"
                />
              </div>
            </div>
          </form>
        </div>
        <Summary total={total}>
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
                  {bookingDateAndTime}
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
              <hr className="text-grey300 my-4" />
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
            </div>
          ) : null}
        </Summary>
      </div>
      <SubmitTab
        onClickBack={backStep}
        // onClickNext={nextStep}
      />
    </div>
  );
}

export default ThirdStep;
