import { GreyTextTwo } from './CheckOutForm'

export function Summary(props) {
  return (
    <div className="w-[28vw] h-full p-6 border rounded-lg border-[#D8D8D8]">
      <GreyTextTwo>สรุปรายการ</GreyTextTwo>
      <div className="flex flex-col justify-between">
        {props.children}
        <hr className="text-grey300 my-4" />
        <div className="h-7 flex items-center justify-between">
          <div className="text-base text-grey700">รวม</div>
          <span>0.00 ฿</span>
        </div>
      </div>
      </div>
  )
}
