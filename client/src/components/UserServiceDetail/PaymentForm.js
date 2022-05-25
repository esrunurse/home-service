import '../../App.css'
import { GreyTextTwo } from './CheckOutForm'

function PaymentForm() {
  return (
    <div className="w-[735px] pt-6 px-6 pb-11 flex flex-col gap-[22px] border rounded-lg border-[#D8D8D8]">
      <GreyTextTwo className="">ชำระเงิน</GreyTextTwo>
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
  )
}

export default PaymentForm
