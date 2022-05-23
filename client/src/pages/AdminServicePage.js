import "../App.css";
import AdminService from "../components/AdminServicePage/ServicesList";
import AdminServiceHeader from "../components/AdminServicePage/AdminServiceHeader";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useUtils from "../hooks/utils";

function AdminServicePage() {
  const {
    searchService,
    setSearchService,
    service,
    setService,
    getService,
    deleteServiceId,
    serviceDeleteAlert,
    deleteService,
    service_Id,
    setDeleteService,
  } = useUtils();
  return (
    <div className="admin-service-page">
      <SideBar />
      <AdminServiceHeader
        setService={setService}
        searchService={searchService}
        setSearchService={setSearchService}
      />
      <AdminService
        service={service}
        getService={getService}
        deleteServiceId={deleteServiceId}
        serviceDeleteAlert={serviceDeleteAlert}
        deleteService={deleteService}
        setDeleteService={setDeleteService}
        service_Id={service_Id}
      />
    </div>
  );
}

export default AdminServicePage;
