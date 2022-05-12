import "../App.css";
import AdminCategories from "../components/AdminCategoryPage/CategoriesList";
import AdminCategoryHeader from "../components/AdminCategoryPage/AdminCategoryHeader";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useHook from "../hooks/util";

function AdminCategoryPage() {
  const { searchCategory, setSearchCategory, category, setCategory, getCategory, deleteCategoryId } =
    useHook();
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
      />
    </div>
  );
}

export default AdminCategoryPage;
