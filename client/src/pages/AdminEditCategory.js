import "../App.css";
import SideBar from "../components/AdminSideBar";
import useUtils from "../hooks/utils";
import EditedCategoryForm from "../components/AdminCategoryPage/AdminEditedCategoryForm";

function AdminEditCategory() {
  const {
    category,
    category_name,
    setCategory_name,
    category_edited_date,
    setCategory_edited_date,
    getCategoryById
  } = useUtils();
  return (
    <div>
      <SideBar />
      <EditedCategoryForm
    category={category}
    category_name={category_name}
    setCategory_name={setCategory_name}
    category_edited_date={category_edited_date}
    setCategory_edited_date={setCategory_edited_date}
    getCategoryById={getCategoryById}
      />
    </div>
  );
}

export default AdminEditCategory;
