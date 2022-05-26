import "../App.css";
import SideBar from "../components/AdminSideBar";
import EditedCategoryForm from "../components/AdminCategoryPage/AdminEditedCategoryForm";

function AdminEditCategory() {
  return (
    <div>
      <SideBar />
      <EditedCategoryForm />
    </div>
  );
}

export default AdminEditCategory;
