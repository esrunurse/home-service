import "../App.css";
import AdminService from "../components/AdminCategoryPage/ServicesList";
import AdminServiceHeader from "../components/AdminCategoryPage/AdminServiceHeader";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useService from "../hooks/service";

function AdminServicePage() {
  const { searchService, setSearchService, service, setService } = useService();
  return (
    <div className="admin-service-page">
      <SideBar />
      <AdminServiceHeader
        setService={setService}
        searchService={searchService}
        setSearchService={setSearchService}
      />
      <AdminService service={service} />
    </div>
  );
}

export default AdminServicePage;
