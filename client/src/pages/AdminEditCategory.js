import "../App.css";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useCategory from "../hooks/category";
import EditedCategoryForm from "../components/AdminCategoryPage/AdminEditedCategoryForm"

function AdminEditCategory() {
  const { category, setCategory, category_name, setCategory_name, setCategory_created_date, category_edited_date, setCategory_edited_date } = useCategory();
  return (
    <div>
      <SideBar />
      <EditedCategoryForm category={category} setCategory={setCategory} category_name={category_name} setCategory_name={setCategory_name} setCategory_created_date={setCategory_created_date} category_edited_date={category_edited_date} setCategory_edited_date={setCategory_edited_date}/>
    </div>
  );
}

export default AdminEditCategory;
