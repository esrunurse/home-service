import { useEffect } from "react";
import { GreyTextTwo } from "./CheckOutForm";
import image from "../../HomePagePhoto/imageIndex";
import icons from "../../AdminPhoto/imageIndex";
import { useNavigate, useParams } from "react-router-dom";
import { Summary } from "./Summary";
import SubmitTab from "./SubmitTab";

function FirstStepForm(props) {
  const {
    getServiceById,
    service,
    setService,
    setStep,
    subService,
    setSubService,
    error,
    setError,
    setTotal,
  } = props;

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getServiceById(params.serviceId);
  }, []);

  const addSubService = (data) => {
    const added = subService.find(
      (item) => item.sub_service_id === data.sub_service_id
    );

    if (added) {
      let itemIndex = subService.findIndex(
        (item) => item.sub_service_id === data.sub_service_id
      );
      let index = service.findIndex(
        (item) => item.sub_service_id === data.sub_service_id
      );
      let tempList = [...subService];
      tempList[itemIndex].sub_service_quantity =
        tempList[itemIndex].sub_service_quantity + 1;
      setSubService(tempList);
      let tempService = [...service];
      tempService[index].sub_service_quantity =
        tempService[index].sub_service_quantity + 1;
      setService(tempService);
    } else {
      let tempSubService = {
        sub_service_id: data.sub_service_id,
        service_name: data.service_name,
        sub_service_name: data.sub_service_name,
        price_per_unit: data.price_per_unit,
        unit: data.unit,
        sub_service_quantity: 1,
      };
      setSubService([...subService, tempSubService]);
      let tempService = [...service];
      let index = service.findIndex(
        (item) => item.sub_service_id === data.sub_service_id
      );
      tempService[index].sub_service_quantity = 1;
      setService(tempService);
    }
  };

  console.log(subService);

  const subtractQuantity = (data) => {
    let tempList = [...subService];
    let tempService = [...service];
    let itemIndex = subService.findIndex(
      (item) => item.sub_service_id === data.sub_service_id
    );
    let index = service.findIndex(
      (item) => item.sub_service_id === data.sub_service_id
    );

    if (tempList[itemIndex].sub_service_quantity === 1) {
      const newItems = tempList.filter(
        (item) => item.sub_service_id !== data.sub_service_id
      );
      setSubService(newItems);
      tempService[index].sub_service_quantity = 0;
      setService(tempService);
    } else {
      tempList[itemIndex].sub_service_quantity =
        tempList[itemIndex].sub_service_quantity - 1;
      setSubService(tempList);
      tempService[index].sub_service_quantity =
        tempService[index].sub_service_quantity - 1;
      setService(tempService);
    }
  };

  const totalPrice = subService.reduce((acc, item) => {
    return acc + item.price_per_unit * item.sub_service_quantity;
  }, 0);

  const nextStep = () => {
    if (subService.length !== 0) {
      setStep(2);
      setTotal(totalPrice);
    } else {
      setError("กรุณาเลือกอย่างน้อย 1 รายการ");
    }
  };

  return (
    <div>
      <div className="px-[10vw] flex mt-8  mx-0 justify-between w-screen">
        <div className="w-[50vw] mr-[2vw] py-8 px-6 mb-[125px] flex flex-col justify-between border border-grey300 rounded-lg">
          <div className="mb-5">
            <GreyTextTwo>
              เลือกรายการ{service[service.length - 1].service_name}
            </GreyTextTwo>
          </div>
          <div>
            {service.map((data) => {
              return (
                <div
                  className="w-full h-[105px] py-[23px] flex justify-between 
            items-center last:border-b-0 border-b border-solid border-grey300 "
                  key={data.sub_service_id}
                >
                  <div className="h-14 w-[343px] flex flex-col justify-between">
                    <div className="text-black text-lg font-medium leading-[150%]">
                      {data.sub_service_name}
                    </div>
                    <div className="text-grey700 text-sm leading-[150%] flex">
                      <img
                        className="mr-[13.33px]"
                        alt="Price Tag"
                        src={image.tag}
                      />
                      <div>
                        {data.price_per_unit} ฿ / {data.unit}
                      </div>
                    </div>
                  </div>
                  <div className="w-[140px] h-[43px] flex justify-between items-center">
                    <button
                      type="button"
                      className="w-[43px] h-[43px] bg-white border rounded-lg border-blue600 
                  flex items-center justify-center"
                      onClick={() => subtractQuantity(data)}
                    >
                      <img
                        className="h-0.5 w-2.5"
                        alt="Minus"
                        src={icons.minus}
                      />
                    </button>
                    {data.sub_service_quantity}
                    <button
                      type="button"
                      className="w-[43px] h-[43px] bg-white border 
                  rounded-lg border-blue600 flex items-center justify-center"
                      onClick={() => addSubService(data)}
                    >
                      <img
                        className="h-2.5 w-2.5"
                        alt="Plus Symbol"
                        src={icons.bluePlusSymbol}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Summary total={totalPrice}>
          {subService.length === 0 ? <p className="text-red">{error}</p> : null}
          {subService.map((data) => {
            return (
              <div key={data.sub_service_id}>
                <p className="float-left my-2 text-black text-sm font-light">
                  {data.sub_service_name}
                </p>{" "}
                <p className="float-right my-2 text-grey900 text-sm font-light">
                  {data.sub_service_quantity} รายการ
                </p>
              </div>
            );
          })}
        </Summary>
      </div>
      <SubmitTab
        onClickBack={() => navigate("/service")}
        onClickNext={nextStep}
      />
    </div>
  );
}

export default FirstStepForm;
