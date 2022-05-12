import "../App.css";
import AdminCategories from "../components/AdminCategoryPage/CategoriesList";
import AdminCategoryHeader from "../components/AdminCategoryPage/AdminCategoryHeader";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useCategory from "../hooks/category";

function AdminCategoryPage() {
  const { searchCategory, setSearchCategory, category, setCategory } =
    useCategory();
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
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        setCategory={setCategory}
      />
    </div>
  );
}

export default AdminCategoryPage;
