import { useUtils } from "../../hooks/utils";
import CheckoutHeader from "./CheckoutHeader";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";

function AllStepCheckOutForm() {
  const {
    getServiceById,
    service,
    setService,
    step,
    setStep,
    fullAddress,
    setFullAddress,
    bookingDateAndTime,
    setBookingDateAndTime,
    subService,
    setSubService,
    total,
    setTotal,
    service_name,
    setService_name,
  } = useUtils();
  return (
    <div className="checkout form">
      <CheckoutHeader service={service} step={step} />
      {step === 1 ? (
        <FirstStepForm
          getServiceById={getServiceById}
          service={service}
          setService={setService}
          setStep={setStep}
          step={step}
          subService={subService}
          setSubService={setSubService}
          setTotal={setTotal}
          setService_name={setService_name}
        />
      ) : step === 2 ? (
        <SecondStepForm
          total={total}
          setTotal={setTotal}
          fullAddress={fullAddress}
          setFullAddress={setFullAddress}
          bookingDateAndTime={bookingDateAndTime}
          setBookingDateAndTime={setBookingDateAndTime}
          subService={subService}
          setSubService={setSubService}
          setStep={setStep}
            service_name={service_name}
            setService={setService}
        />
      ) : step === 3 ? (
        <ThirdStepForm
          total={total}
          fullAddress={fullAddress}
          bookingDateAndTime={bookingDateAndTime}
          subService={subService}
          setStep={setStep}
        />
      ) : null}
    </div>
  );
}

export default AllStepCheckOutForm;
