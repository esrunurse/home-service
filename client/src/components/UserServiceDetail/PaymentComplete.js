import image from '../../CustomerPhoto/imageIndex'

function PaymentComplete() {
  return (
    <div className="bg-[#F3F4F6] h-full flex justify-center">
      <div className="w-[542px] h-full mt-[52px] mb-[280px] pt-12 pb-[52px] px-[60px] border border-grey300 rounded-lg bg-white flex flex-col items-center gap-[38px]">
        <div className="h-[135px] flex flex-col items-center gap-[23px]">
          <img
            className="w-16 h-16"
            alt="Complete Icon"
            src={image.completeIcon}
          />
          <div className="text-[32px] font-medium leading-[150%]">
            ชำระเงินเรียบร้อย !
          </div>
        </div>
        <div className="w-full flex flex-col gap-[26px]">
          <div className="flex justify-between font-normal text-sm leading-[150%]">
            <div className="">9,000 - 18,000 BTU, แบบติดผนัง</div>
            <div>รายการ</div>
          </div>
          <hr className="text-grey300" />
          <div className="flex flex-col gap-[12px] text-sm">
            <div className="flex justify-between">
              <div className="font-light text-grey700">วันที่</div>
              <div className="font-normal">23 เม.ย. 19990</div>
            </div>
            <div className="flex justify-between">
              <div className="font-light text-grey700">เวลา</div>
              <div className="font-normal">11.00 น.</div>
            </div>
            <div className="flex justify-between">
              <div className="font-light text-grey700">สถานที่</div>
              <div className="font-normal">
                444/4 คอนโดสุภาลัย เสนานิคม จตุจักร กรุงเทพ
              </div>
            </div>
          </div>
          <hr className="text-grey300" />
          <div className="flex justify-between">
            <div className="font-light text-grey700">รวม</div>
            <div className="font-semibold text-base leading-[150%]">{} ฿</div>
          </div>
          <button className="bg-blue600 w-full h-11 rounded-lg text-white">
            เช็ครายการซ่อม
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentComplete
