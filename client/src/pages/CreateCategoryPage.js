import "../App.css";
import CreateCategoryForm from "../components/AdminCategoryPage/AdminAddCategoryForm";
import useUtils from "../hooks/utils";
import SideBar from "../components/AdminSideBar"

function CreateCategory() {
  const { category_name, setCategory_name, createCategory } = useUtils;
  return (
    <div className="create-category-container h-screen bg-bg">
      <SideBar />
      <CreateCategoryForm
        category_name={category_name}
        setCategory_name={setCategory_name}
        createCategory={createCategory}
      />
    </div>
  );
}

export default CreateCategory;
