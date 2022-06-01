import "../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import { useUtils } from "../../hooks/utils";
import AdminEditedHeader from "../AdminEditedHeader";

function EditedCategoryForm() {
  const {
    category,
    category_name,
    setCategory_name,
    category_edited_date,
    setCategory_edited_date,
    getCategoryById,
  } = useUtils();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryById(params.categoryId);
  }, []);

  const updateCategoryById = async (categoryId) => {
    await axios.put(`http://localhost:4000/category/${categoryId}`, {
      category_name,
      category_edited_date,
    });
    navigate("/category-dashboard");
  };

  useEffect(() => {
    if (category) {
      setCategory_name(category.category_name);
      setCategory_edited_date(category.category_edited_date);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategoryById(params.categoryId, {
      category_name,
      category_edited_date,
    });
  };

  return (
    <div className="edit-container h-screen bg-bg">
      <form
        className="header-and-content ml-60 h-screen"
        onSubmit={handleSubmit}
      >
        <AdminEditedHeader
          back={() => navigate("/category-dashboard")}
          title="หมวดหมู่"
          name={category.category_name}
        />
        <div className="editCategory h-1/5 w-full py-14 px-10 flex flex-col ">
          <div className="editBox bg-white h-auto border border-grey200 rounded-lg px-6 py-10 w-full">
            <div className="input-box flex  items-center h-11 w-3/5">
              <label className=" text-grey700">
                ชื่อหมวดหมู่<span className=" text-red">*</span>
              </label>
              <input
                className="rounded-lg border ml-16 px-4 h-11 w-4/6 border-grey300 focus:border-blue600 focus:outline-none"
                type="text"
                name="edited_category"
                value={category_name}
                onChange={(e) => {
                  setCategory_name(e.target.value);
                }}
              />
            </div>
            <hr className=" border-grey300 my-10 "></hr>
            <div
              className="time-line-category
             h-24 flex"
            >
              <div className="h-11 flex-col">
                <div className="text-base text-grey700 font-medium mt-3 mb-6">
                  สร้างเมื่อ
                </div>
                <div className="text-base text-grey700 font-medium mt-3 mb-6">
                  แก้ไขล่าสุด
                </div>
              </div>
              <div className="ml-16 flex-col my-1">
                <div className="mt-3 mb-6">
                  <Moment format="DD/MM/YYYY hh:mm A">
                    {category.category_created_date}
                  </Moment>
                </div>
                <div className="mt-3 mb-6">
                  <Moment format="DD/MM/YYYY hh:mm A">
                    {category.category_edited_date}
                  </Moment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditedCategoryForm;
