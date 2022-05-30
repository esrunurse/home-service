import "../App.css";
import SideBar from "../components/AdminSideBar";
import ServiceEditForm from "../components/AdminServicePage/AdminEditServiceForm";

function AdminEditService() {
  return (
    <div>
      <SideBar />
      <ServiceEditForm />
    </div>
  );
}

export default AdminEditService;
