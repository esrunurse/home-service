import { useUtils } from "../../hooks/utils";
import CheckoutHeader from "./CheckoutHeader";
import FirstStepForm from "./FirstStepForm";
import PaymentComplete from "./PaymentComplete";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import Nav from "../Nav";

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
    note,
    setNote,
  } = useUtils();
  return (
    <div className="checkout form">
      <Nav />
      {step === 4 ? null : <CheckoutHeader service={service} step={step} />}
      {step === 2 ? (
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
          note={note}
          setNote={setNote}
        />
      ) : step === 3 ? (
        <ThirdStepForm
          total={total}
          fullAddress={fullAddress}
          bookingDateAndTime={bookingDateAndTime}
          subService={subService}
          setStep={setStep}
          note={note}
          service_name={service_name}
        />
      ) : step === 4 ? (
        <PaymentComplete
          fullAddress={fullAddress}
          bookingDateAndTime={bookingDateAndTime}
          subService={subService}
          total={total}
          note={note}
          service_name={service_name}
        />
      ) : (
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
      )}
    </div>
  );
}

export default AllStepCheckOutForm;
