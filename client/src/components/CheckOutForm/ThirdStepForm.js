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

  const backStep = () => {
    setStep(2);
  };

  return (
    <div>
      <div className="px-[10vw] flex mt-8 mb-[125px] mx-0 justify-between w-screen">
        <div className=" w-[50vw] mr-[2vw] py-8 px-6 flex flex-col justify-between border border-grey300 rounded-lg">
          css is coming
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
