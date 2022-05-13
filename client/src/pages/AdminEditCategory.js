import "../App.css";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useHook from "../hooks/util";
import EditedCategoryForm from "../components/AdminCategoryPage/AdminEditedCategoryForm";

function AdminEditCategory() {
  const {
    category,
    setCategory,
    category_name,
    setCategory_name,
    setCategory_created_date,
    category_edited_date,
    setCategory_edited_date,
    deleteCategoryId,
    getCategory,
    getCategoryById,
    categoryDeleteAlert,
    deleteCategory,
    category_Id,
  } = useHook();
  return (
    <div>
      <SideBar />
      <EditedCategoryForm
        category={category}
        setCategory={setCategory}
        category_name={category_name}
        setCategory_name={setCategory_name}
        setCategory_created_date={setCategory_created_date}
        category_edited_date={category_edited_date}
        setCategory_edited_date={setCategory_edited_date}
        deleteCategoryId={deleteCategoryId}
        getCategory={getCategory}
        getCategoryById={getCategoryById}
        categoryDeleteAlert={categoryDeleteAlert}
        deleteCategory={deleteCategory}
        category_Id={category_Id}
      />
    </div>
  );
}

export default AdminEditCategory;
