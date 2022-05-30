import image from "../../CustomerPhoto/imageIndex";
import Moment from "react-moment";
import "../../App.css";

function PaymentComplete(props) {
  const {
    fullAddress,
    bookingDateAndTime,
    subService,
    total,
    note,
    service_name,
  } = props;

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex justify-center px-[30vw]">
      <div className="w-full h-full my-[52px] pt-12 pb-[52px] px-[60px] border border-grey300 rounded-lg bg-white flex flex-col items-center gap-[38px]">
        <div className="flex flex-col items-center gap-[23px]">
          <img
            className="w-16 h-16"
            alt="Complete Icon"
            src={image.completeIcon}
          />
          <div className="text-[32px] font-medium leading-[150%]">
            ชำระเงินเรียบร้อย !
          </div>
        </div>
        <div className="w-full flex flex-col gap-[26px] justify-between h-full">
          <div className="flex flex-col justify-between">
            <p className="text-left my-4 text-black text-lg font-semibold">
              {service_name}
            </p>
            {subService.map((data) => {
              return (
                <div key={data.sub_service_id}>
                  <p className="float-left my-2 text-black text-sm font-normal">
                    {data.sub_service_name}
                  </p>{" "}
                  <p className="float-right my-2 text-black text-sm font-normal">
                    {data.sub_service_quantity} รายการ
                  </p>
                </div>
              );
            })}
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
            <div >
              <p className="float-left my-2 text-grey700 text-sm font-light">
                สถานที่
              </p>
              <p className="float-right my-2 text-black text-sm font-normal w-[80%] text-right">
                {fullAddress.address} {fullAddress.subdistrict}{" "}
                {fullAddress.district} {fullAddress.province}{" "}
                {fullAddress.zipcode}
              </p>
            </div>
          </div>
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
          <hr className="text-grey300 my-2" />
          <div className="h-7 flex items-center justify-between">
            <div className="text-base text-grey700">รวม</div>
            <span className="text-base text-black font-semibold">
              {" "}
              {Number(total).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}{" "}
              ฿
            </span>
          </div>
        </div>
        <button className="bg-blue600 w-full h-11 rounded-lg text-white">
          เช็ครายการซ่อม
        </button>
      </div>
    </div>
  );
}

export default PaymentComplete;
