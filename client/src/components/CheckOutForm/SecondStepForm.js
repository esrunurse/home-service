/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import "../../App.css";
import "./SecondStepForm.css";
import { TimePicker, DatePicker } from "antd";

function SecondStep() {
  const format = "HH:mm";
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  function disabledDate(current) {
    return current && current.valueOf() < Date.now();
  }
  return (
    <div className=" px-6 pt-6 pb-8  flex flex-col justify-between border border-grey300 rounded-lg">
      <div>
        <h3 className="text-grey700">กรอกข้อมูลบริการ</h3>
      </div>
      <form>
        <div className="flex justify-between mt-4">
          <label>
            <h5 className="text-grey900">
              วันที่สะดวกใช้บริการ<span className="text-red"> *</span>
            </h5>
            <div className="mt-2">
              <DatePicker
                onChange={onChange}
                disabledDate={disabledDate}
                placeholder="กรุณาเลือกเวลา"
                showToday={false}
                css={css`border-radius: 8px;`}
                className="w-[47vw] h-[44px] px-4 py-2.5"
              />
            </div>
          </label>
          <label>
            <h5 className="text-grey900">
              เวลาที่สะดวกใช้บริการ<span className="text-red"> *</span>
            </h5>
            <div className="mt-2">
              <TimePicker
                format={format}
                placeholder="กรุณาเลือกวันที่"
                showNow={false}
                css={css`border-radius: 8px;`}
                className="w-[47vw] h-[44px] px-4 py-2.5"
              />
            </div>
          </label>
        </div>
        <div className="w-full flex justify-between mt-4">
          <label>
            <h5 className="text-grey900">
              ที่อยู่<span className="text-red"> *</span>
            </h5>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="กรุณากรอกที่อยู่"
              className="mt-2 w-[47vw] h-[44px] rounded-lg px-4 py-2.5 border border-grey300 focus:border-blue600 focus:outline-none"
            />
          </label>
          <label>
            <h5 className="text-grey900">
              แขวง / ตำบล<span className="text-red"> *</span>
            </h5>
            <select
              id="district"
              name="district"
              type="text"
              className="mt-2 w-[47vw] h-[44px] rounded-lg px-4 py-2.5 border  border-grey300 focus:border-blue600 focus:outline-none"
            >
              <option disabled value="">
                แขวง / ตำบล
              </option>
            </select>
          </label>
        </div>
        <div className="w-full flex justify-between mt-4">
          <label>
            <h5 className="text-grey900">
              เขต / อำเภอ<span className="text-red"> *</span>
            </h5>
            <select
              id="subdistrict"
              name="subdistrict"
              type="text"
              className="mt-2 w-[47vw] h-[44px] px-4 py-2.5 border rounded-lg border-grey300 focus:border-blue600 focus:outline-none"
            >
              <option disabled value="">
                เลือกเขต / อำเภอ
              </option>
            </select>
          </label>
          <label>
            <h5 className="text-grey900">
              จังหวัด<span className="text-red"> *</span>
            </h5>
            <select id="province" name="province" type="text" className="mt-2 w-[47vw] h-[44px] px-4 py-2.5 border rounded-lg border-grey300 focus:border-blue600 focus:outline-none" >
              <option disabled value="">
                เลือกจังหวัด
              </option>
            </select>
          </label>
        </div>
        <div className="mt-4">
        <label>
            <h5 className="text-grey900">
              ระบุข้อมูลเพิ่มเติม
            </h5>
            <textarea id="province" name="province" placeholder="กรุณาระบุข้อมูลเพิ่มเติม" type="text" className="mt-2 w-full h-[92px] px-4 py-2.5 border rounded-lg border-grey300 focus:border-blue600 focus:outline-none" />
          </label></div>
      </form>
    </div>
  );
}

export default SecondStep;
