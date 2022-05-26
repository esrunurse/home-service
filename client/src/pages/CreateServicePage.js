import "../App.css";
import SideBar from "../components/AdminSideBar";
import AddService from "../components/AdminServicePage/AdminAddService";

function CreateService() {
  return (
    <div className="create-service-container h-screen bg-bg">
      <SideBar />
      <AddService />
    </div>
  );
}

export default CreateService;
