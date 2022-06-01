import {
  BgCircleGrey,
  CerrentCircle,
  GreyTextOne,
  BlueTextFive,
  BgCircleBlue,
} from "./CheckOutForm";
import "../../App.css";
import image from "../../CustomerPhoto/imageIndex";
import { useNavigate } from "react-router-dom";

function CheckoutHeader(props) {
  const { service, step } = props;
  const navigate = useNavigate();
  return (
    <header className="mb-[-168px] w-full">
      <img
        alt="Service"
        src={service[service.length - 1].service_photo.url}
        className="h-80 z-10 static w-screen object-cover"
      />
      <div className="h-[247px] flex flex-col justify-between px-[10vw] relative z-20 top-[-168px]">
        <div
          className="h-[68px] rounded-lg bg-white
        shadow-[2px_2px_24px_(rgba(23, 51, 106, 0.12))] flex justify-evenly items-center px-[32px] w-fit"
        >
          <GreyTextOne>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/service")}
            >
              บริการของเรา
            </div>
          </GreyTextOne>
          <span className="text-grey400 font-medium mx-3">{">"}</span>
          <h1 className="text-blue600 text-[32px] font-medium">
            {service[service.length - 1].service_name}
          </h1>
        </div>
        
        <div className="h-[129px] rounded-[10px] bg-white flex justify-between px-[10vw] items-center border border-[#D8D8D8]">
          {step === 1 ? (
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
          ) : (
            <div className="h-[76px] w-[51px] flex flex-col items-center justify-between">
              <BgCircleBlue>
                <img
                  className="h-[25px] w-[25px]"
                  alt="Order Icon"
                  src={image.StepOrderIcon}
                ></img>
              </BgCircleBlue>
              <BlueTextFive>รายการ</BlueTextFive>
            </div>
          )}
          {step === 1 ? (
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
          ) : step === 2 ? (
            <div className="h-[76px] w-[123px] flex flex-col items-center justify-between">
              <CerrentCircle>
                <img
                  className="h-[24px] w-[24px]"
                  alt="Pen Icon"
                  src={image.StepPenIcon}
                ></img>
              </CerrentCircle>
              <BlueTextFive>กรอกข้อมูลบริการ</BlueTextFive>
            </div>
          ) : (
            <div className="h-[76px] w-[123px] flex flex-col items-center justify-between">
              <BgCircleBlue>
                <img
                  className="h-[24px] w-[24px]"
                  alt="Pen Icon"
                  src={image.FinalPenIcon}
                ></img>
              </BgCircleBlue>
              <BlueTextFive>กรอกข้อมูลบริการ</BlueTextFive>
            </div>
          )}
          {step === 1 || step === 2 ? (
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
          ) : (
            <div className="h-[76px] w-14 flex flex-col items-center justify-between">
              <CerrentCircle>
                <img
                  className="h-[18px] w-5"
                  alt="Payment Icon"
                  src={image.StepPaymentIcon}
                ></img>
              </CerrentCircle>
              <BlueTextFive>ชำระเงิน</BlueTextFive>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default CheckoutHeader;
