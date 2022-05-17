import "../App.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/AdminCategoryPage/SideBar";
import AddService from "../components/AdminServicePage/AdminAddService";
import useHook from "../hooks/util";

function CreateService() {
  const navigate = useNavigate();
  const {
    service_name,
    setService_name,
    category,
    category_name,
    setCategory_name,
    handleSubmitService,
    getCategory,
    handleFileChange,
    servicePhotos,
    sub_service,
    setSub_service
  } = useHook();
  return (
    <div className="create-service-container h-screen bg-bg">
      <SideBar />
      <AddService
        service_name={service_name}
        setService_name={setService_name}
        category={category}
        category_name={category_name}
        setCategory_name={setCategory_name}
        handleSubmitService={handleSubmitService}
        getCategory={getCategory}
        handleFileChange={handleFileChange}
        servicePhotos={servicePhotos}
        sub_service={sub_service}
        setSub_service={setSub_service}
      />
    </div>
  );
}

export default CreateService;
