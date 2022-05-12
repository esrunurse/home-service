import "../App.css";
import AdminService from "../components/AdminCategoryPage/ServicesList";
import AdminServiceHeader from "../components/AdminCategoryPage/AdminServiceHeader";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useHook from "../hooks/util";

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
  } = useHook();
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
        service_Id={service_Id}
      />
    </div>
  );
}

export default AdminServicePage;
