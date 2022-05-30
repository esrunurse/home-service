import "../App.css";
import CreateCategoryForm from "../components/AdminCategoryPage/AdminAddCategoryForm";
import SideBar from "../components/AdminSideBar";

function CreateCategory() {
  return (
    <div className="create-category-container h-screen bg-bg">
      <SideBar />
      <CreateCategoryForm />
    </div>
  );
}

export default CreateCategory;
