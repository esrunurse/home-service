import { GreyTextTwo } from './CheckOutForm'

function Summary() {
  return (
    <div className="w-[349px] h-full pt-4 px-6 pb-6 border rounded-lg border-[#D8D8D8]">
      <GreyTextTwo>สรุปรายการ</GreyTextTwo>
      <div className="flex flex-col gap-6 mt-4">
        {/* <div>9,000 - 18,000 BTU, แบบติดผนัง</div>
      <hr className="text-grey300" />
      <div className="w-[300px] h-[21px] ">วันเวลาสถานที่</div> */}
        <hr className="text-grey300" />
        <div className="h-7 w-[301px] flex items-center justify-between">
          <div className="text-base text-grey700">รวม</div>
          <span>0.00 ฿</span>
        </div>
      </div>
    </div>
  )
}

export default Summary
