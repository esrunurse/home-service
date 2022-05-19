/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import SideBar from "../components/AdminCategoryPage/SideBar";
import ServiceEditForm from "../components/AdminServicePage/EditForm";
import useHook from "../hooks/util";
import Moment from "react-moment";

function AdminEditService() {
  const {
    getServiceById,
    service,
    getCategory,
    category,
    setService,
    setCategory_name,
    category_name,
    service_name,
    setService_name,
    handleFileChange
  } = useHook();
  return (
    <div>
      <SideBar />
      <ServiceEditForm
        getServiceById={getServiceById}
        service={service}
        getCategory={getCategory}
        category={category}
        setService={setService}
        setCategory_name={setCategory_name}
        category_name={category_name}
        service_name={service_name}
        setService_name={setService_name}
        handleFileChange={handleFileChange}
      />
    </div>
  );
}

export default AdminEditService;
