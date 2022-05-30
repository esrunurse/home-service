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
import { useState } from "react";
import Moment from "react-moment";

function SecondStep(props) {
  const {
    fullAddress,
    setFullAddress,
    bookingDateAndTime,
    setBookingDateAndTime,
    subService,
    setSubService,
    total,
    setStep,
    setService,
    service_name,
    note,
    setNote,
  } = props;

  const [error, setError] = useState("");

  const changeDateAndTime = (date, dateString) => {
    setBookingDateAndTime(
      moment(dateString, "DD MMMM YYYY HH:mm").toISOString()
    );
  };
  console.log(bookingDateAndTime);

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () =>
      range(0, 24).splice(0, 9).concat(range(0, 24).splice(18, 6)),
  });

  const handleChangeAddress = (e) => {
    const temp = { ...fullAddress };
    temp.address = e;
    setFullAddress(temp);
  };

  const handleChangeSubDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.subdistrict = e;
    setFullAddress(temp);
  };

  const handleChangeDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.district = e;
    setFullAddress(temp);
  };

  const handleChangeProvince = (e) => {
    const temp = { ...fullAddress };
    temp.province = e;
    setFullAddress(temp);
  };

  const handleChangeZipcode = (e) => {
    const temp = { ...fullAddress };
    temp.zipcode = e;
    setFullAddress(temp);
  };

  const handleSelectAddress = (addresses) => {
    //const { address, subdistrict, district, province, zipcode } = addresses;
    setFullAddress({
      ...fullAddress,
      ...addresses,
    });
    // or setFullAddress({ address, subdistrict, district, province, zipcode, })
  };

  const addressStyle = {
    marginTop: "0.5rem",
    width: "22.5vw",
    height: "44px",
    borderRadius: "0.5rem",
    padding: "0.625rem 1rem",
    borderWidth: "1px",
    borderColor: "#ccd0d7",
  };

  console.log(service_name);
  console.log(total);
  console.log(subService);

  const backStep = () => {
    setService([
      {
        service_name: "",
        category_name: "",
        service_photo: { url: "", publicId: "" },
        sub_service_name: "",
        unit: "",
        price_per_unit: 0,
        service_created_date: "",
        service_edited_date: "",
        sub_service_quantity: 0,
      },
    ]);
    setSubService([]);
    setStep(1);
  };

  const nextStep = () => {
    if (
      bookingDateAndTime !== "" &&
      fullAddress.address !== "" &&
      fullAddress.subdistrict !== "" &&
      fullAddress.district !== "" &&
      fullAddress.province !== "" &&
      fullAddress.zipcode !== ""
    ) {
      setStep(3);
    } else {
      setError("กรุณากรอกข้อมูลบริการให้ครบถ้วน");
    }
  };

  return (
    <div>
      <div className="px-[10vw] flex mt-8  mx-0 justify-between w-screen">
        <div className=" w-[50vw] mr-[2vw] mb-[125px] py-8 px-6 flex flex-col justify-between border border-grey300 rounded-lg">
          <div className="mb-4">
            <GreyTextTwo>กรอกข้อมูลบริการ</GreyTextTwo>
          </div>
          <div>
            <div className="flex justify-between mt-4">
              <label>
                <h5 className="font-medium text-grey900">
                  วันที่-เวลาที่สะดวกใช้บริการ
                  <span className="text-red"> *</span>
                </h5>
                <div className="mt-2">
                  <DatePicker
                    format="DD MMMM YYYY HH:mm"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    css={css`
                      border-radius: 8px;
                    `}
                    className="w-[22.5vw] h-[44px] px-4 py-2.5"
                    showToday={false}
                    showNow={false}
                    placeholder="กรุณาเลือกวันที่-เวลา"
                    onChange={changeDateAndTime}
                    showTime={{
                      defaultValue: moment("09:00", "HH:mm"),
                    }}
                  />
                </div>
              </label>
              <label>
                <h5 className="font-medium text-grey900">
                  ที่อยู่<span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="address"
                  address="address"
                  value={fullAddress.address}
                  type="text"
                  placeholder="กรุณากรอกที่อยู่"
                  onChange={(e) => {
                    handleChangeAddress(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  style={addressStyle}
                />
              </label>
            </div>
            <div className="w-full flex justify-between mt-4">
              <label>
                <h5 className="font-medium text-grey900">
                  แขวง / ตำบล<span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="subdistrict"
                  address="subdistrict"
                  value={fullAddress.subdistrict}
                  type="text"
                  onChange={(e) => {
                    handleChangeSubDistrict(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  placeholder="กรุณากรอกแขวง / ตำบล"
                  style={addressStyle}
                />
              </label>
              <label>
                <h5 className="font-medium text-grey900">
                  เขต / อำเภอ<span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="district"
                  address="district"
                  value={fullAddress.district}
                  type="text"
                  onChange={(e) => {
                    handleChangeDistrict(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  placeholder="กรุณากรอกเขต / อำเภอ"
                  style={addressStyle}
                />
              </label>
            </div>
            <div className="w-full flex justify-between mt-4">
              <label>
                <h5 className="font-medium text-grey900">
                  จังหวัด<span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="province"
                  address="province"
                  value={fullAddress.province}
                  type="text"
                  onChange={(e) => {
                    handleChangeProvince(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  placeholder="กรุณากรอกจังหวัด"
                  style={addressStyle}
                />
              </label>
              <label>
                <h5 className="font-medium text-grey900">
                  รหัสไปรษณีย์<span className="text-red"> *</span>
                </h5>
                <InputAddress
                  address="zipcode"
                  value={fullAddress.zipcode}
                  onChange={(e) => {
                    handleChangeZipcode(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  placeholder="กรุณากรอกรหัสไปรษณีย์"
                  style={addressStyle}
                />
              </label>
            </div>
            <div className="mt-4">
              <label>
                <h5 className="font-medium text-grey900">
                  ระบุข้อมูลเพิ่มเติม
                </h5>
                <textarea
                  id="province"
                  name="province"
                  placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="focus:placeholder:text-grey950 mt-2 w-full h-[92px] px-4 py-2.5 border rounded-lg border-grey300 focus:border-grey300 focus:outline-none"
                />
              </label>
            </div>
          </div>
        </div>
        <Summary total={total}>
          {bookingDateAndTime !== "" &&
          fullAddress.address !== "" &&
          fullAddress.subdistrict !== "" &&
          fullAddress.district !== "" &&
          fullAddress.province !== "" &&
          fullAddress.zipcode !== "" ? null : (
            <p className="text-red my-2">{error}</p>
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
        next="ดำเนินการต่อ"
        onClickBack={backStep}
        onClickNext={nextStep}
      />
    </div>
  );
}

export default SecondStep;
