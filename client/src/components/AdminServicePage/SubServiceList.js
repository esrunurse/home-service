import React from "react";

function SubService_list(props) {
  // const {
  //   sub_service,
  //   setSub_service,
  // } = props;

  return (
    <div id="add-details-box" className=" h-full mb-10 flex justify-between">
      <div className="flex flex-col w-2/5">
        <label className="orderName text-sm text-grey700" htmlFor="orderName">
          ชื่อรายการ
        </label>
        <input
          className="orderName rounded-lg h-11 border border-grey300 mr-4"
          type="text"
          name="orderName"
          // value={sub_service.sub_service_name}
          // onChange={(event) => {
          //   setSub_service({
          //     sub_service_name:
          //       event.target.value
          //   });
          // }}
value={props.value}
          onChange={props.change}
        />
      </div>
      <div className="flex flex-col w-60">
        <label className="serviceCharge text-sm text-grey700">
          ค่าบริการ / 1 หน่วย
        </label>
        <input
          className="serviceCharge rounded-lg h-11 border border-grey300 mr-4"
          type="text"
          name="serviceCharge"
          // value={sub_service.price_per_unit}
          // onChange={(event) => {
          //   setSub_service({
          //     price_per_unit:
          //       event.target.value
          //   });
          // }}
        />
      </div>
      <div className="flex flex-col w-60">
        <label
          className="unitService text-sm text-grey700 "
          htmlFor="unitService"
        >
          หน่วยการบริการ
        </label>
        <input
          className="unitService rounded-lg h-11 border border-grey300 mr-4"
          // value={sub_service.unit}
          // onChange={(event) => {
          //   setSub_service({
          //     unit:
          //       event.target.value
          //   });
          // }}
        />
      </div>
    </div>
  );
}

export default SubService_list;
