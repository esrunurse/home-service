import { useUtils } from "../../hooks/utils"
import CheckoutHeader from "./CheckoutHeader";
import FirstStepForm from "./FirstStepForm"
import SubmitTab from "./SubmitTab";

function AllStepCheckOutForm() {
    const { getServiceById, service, setService, step} = useUtils();
    return (
        <div className="checkout form">
            <CheckoutHeader service={service} step={step}/>
            <FirstStepForm getServiceById={getServiceById} service={service} setService={setService} />
            <SubmitTab/>
        </div>
    )
}

export default AllStepCheckOutForm;