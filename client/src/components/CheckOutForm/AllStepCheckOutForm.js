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
    error,
    setError,
    total,
    setTotal,
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
          error={error}
          setError={setError}
          setTotal={setTotal}
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
          setStep={setStep}
          setError={setError}
          error={error}
        />
      ) : <ThirdStepForm           total={total}
          fullAddress={fullAddress}
          bookingDateAndTime={bookingDateAndTime}
          subService={subService}/>}
    </div>
  );
}

export default AllStepCheckOutForm;
