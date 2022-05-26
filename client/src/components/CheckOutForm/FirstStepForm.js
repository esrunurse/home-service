import { useEffect } from "react";
import { GreyTextTwo } from "./CheckOutForm";
import image from "../../HomePagePhoto/imageIndex";
import icons from "../../AdminPhoto/imageIndex";
import { useParams } from "react-router-dom";
import { Summary } from "./Summary"

function FirstStepForm(props) {
  const { getServiceById, service, setService } = props;
  const params = useParams();

  useEffect(() => {
    getServiceById(params.serviceId);
  }, []);

  function addQuantity(index) {
    const tempList = [...service];
    tempList[index].sub_service_quantity =
      tempList[index].sub_service_quantity + 1;
    setService(tempList);
  }

  function subtractQuantity(index) {
    const tempList = [...service];
    if (tempList[index].sub_service_quantity === 0) {
      tempList[index].sub_service_quantity = 0;
    } else {
      tempList[index].sub_service_quantity =
        tempList[index].sub_service_quantity - 1;
    }
    setService(tempList);
  }

  return (
     <div className="px-[10vw] flex mt-8 mb-[125px] mx-0 justify-between w-screen">
    <div className="w-[50vw] mr-[2vw] py-8 px-6 flex flex-col justify-between border border-grey300 rounded-lg">
      <div className="mb-5">
        <GreyTextTwo>
          เลือกรายการ{service[service.length - 1].service_name}
        </GreyTextTwo>
      </div>
      <div>
        {service.map((data, index) => {
          return (
            <div
              className="w-full h-[105px] py-[23px] flex justify-between 
            items-center last:border-b-0 border-b border-solid border-grey300 "
              key={index}
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
                  className="w-[43px] h-[43px] bg-white border rounded-lg border-blue600 
                  flex items-center justify-center"
                  onClick={() => subtractQuantity(index)}
                >
                  <img className="h-0.5 w-2.5" alt="Minus" src={icons.minus} />
                </button>
                {data.sub_service_quantity}
                <button
                  className="w-[43px] h-[43px] bg-white border 
                  rounded-lg border-blue600 flex items-center justify-center"
                  onClick={() => addQuantity(index)}
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
      <Summary>
        {service.map((data) => { return <div>{data.sub_service_quantity !== 0 ? <div><span className="float-left my-2">{data.sub_service_name}</span> <span className="float-right my-2">{data.sub_service_quantity} รายการ</span></div> : null}</div>})}
        </Summary>
 </div>
  );
}

export default FirstStepForm;
