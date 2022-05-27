import image from '../../CustomerPhoto/imageIndex'
import {
  BgCircleGrey,
  CerrentCircle,
  GreyTextOne,
  BlueTextFive
} from './CheckOutForm'

function ServiceDetailOneTop() {
  return (
    <div className="h-[319px] w-screen absolute">
      <img alt="Service" className="h-60 w-screen bg-blue300 z-10 static"></img>
      <div className="h-[247px] flex flex-col justify-between relative z-20 top-[-168px] px-40">
        <div
          className="h-[68px] w-[300px] rounded-lg bg-white
        shadow-[2px_2px_24px_(rgba(23, 51, 106, 0.12))] flex items-center px-[32px]"
        >
          <GreyTextOne>บริการของเรา</GreyTextOne>
        </div>
        <div className="h-[129px] rounded-[10px] bg-white flex justify-around items-center border border-[#D8D8D8]">
          <div className="h-[76px] w-[51px] flex flex-col items-center justify-between">
            <CerrentCircle>
              <img
                className="h-[25px] w-[25px]"
                alt="Order Icon"
                src={image.orderIcon}
              ></img>
            </CerrentCircle>
            <BlueTextFive>รายการ</BlueTextFive>
          </div>
          <div className="h-[76px] w-[123px] flex flex-col items-center justify-between">
            <BgCircleGrey>
              <img
                className="h-[18px] w-[18px]"
                alt="Pen Icon"
                src={image.penIcon}
              ></img>
            </BgCircleGrey>
            <GreyTextOne>กรอกข้อมูลบริการ</GreyTextOne>
          </div>
          <div className="h-[76px] w-14 flex flex-col items-center justify-between">
            <BgCircleGrey>
              <img
                className="h-[18px] w-5"
                alt="Payment Icon"
                src={image.paymentIcon}
              ></img>
            </BgCircleGrey>
            <GreyTextOne>ชำระเงิน</GreyTextOne>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailOneTop
