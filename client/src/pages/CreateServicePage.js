import "../App.css";
import SideBar from "../components/AdminSideBar";
import AddService from "../components/AdminServicePage/AdminAddService";
import useUtils from "../hooks/utils";

function CreateService() {
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
    setSub_service,
    subServiceList,
    setSubServiceList,
    handleRemoveImageService
  } = useUtils();
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
        subServiceList={subServiceList}
        setSubServiceList={setSubServiceList}
        handleRemoveImageService={handleRemoveImageService}
      />
    </div>
  );
}

export default CreateService;
