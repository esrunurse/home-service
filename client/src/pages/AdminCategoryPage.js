import "../App.css";
import AdminCategories from "../components/AdminCategoryPage/CategoriesList";
import AdminCategoryHeader from "../components/AdminCategoryPage/AdminCategoryHeader";
import SideBar from "../components/AdminSideBar";
import useUtils from "../hooks/utils";

function AdminCategoryPage() {
  const {
    searchCategory,
    setSearchCategory,
    category,
    setCategory,
    getCategory,
    deleteCategoryId,
    deleteCategory,
    categoryDeleteAlert,
    category_Id,
    hide,
    setDeleteCategory
  } = useUtils();
  return (
    <div className="admin-category-page">
      <SideBar />
      <AdminCategoryHeader
        setCategory={setCategory}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      <AdminCategories
        category={category}
        getCategory={getCategory}
        deleteCategoryId={deleteCategoryId}
        categoryDeleteAlert={categoryDeleteAlert}
        deleteCategory={deleteCategory}
        category_Id={category_Id}
        hide={hide}
        setDeleteCategory={setDeleteCategory}
      />
    </div>
  );
}

export default AdminCategoryPage;