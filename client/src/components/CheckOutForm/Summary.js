import { GreyTextTwo } from "./CheckOutForm";
import React from "react";

export function Summary(props) {
  return (
    <div className="w-[28vw] mb-[125px] h-full p-6 border rounded-lg border-[#D8D8D8]">
      <GreyTextTwo>สรุปรายการ</GreyTextTwo>
      <div className="flex flex-col justify-between">
        {props.children}
        <hr className="text-grey300 my-4" />
        <div className="h-7 flex items-center justify-between">
          <div className="text-base text-grey700">รวม</div>
          <span>
            {}{" "}
            {Number(props.total).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{" "}
            ฿
          </span>
        </div>
      </div>
    </div>
  );
}
