import icons from "../../AdminPhoto/imageIndex.js";
import "../../App.css";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AlertBoxDelete from "../AlertBoxDelete.js";

function AdminCategories(props) {
  const {
    category,
    getCategory,
    deleteCategoryId,
    categoryDeleteAlert,
    deleteCategory,
    category_Id,
    setDeleteCategory,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);

  const hide = () => {
    document.getElementById("popUp").style.display = "none";
    setDeleteCategory(false);
  };

  const handleDelete = () => {
    deleteCategoryId(category_Id);
    setDeleteCategory(false);
  };

  return (
    <div className="categories-data min-h-screen bg-bg p-[41px]">
      <div className="ml-60 rounded-[5px] border border-grey200">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr>
              <th className="py-3 font-normal text-center">ลำดับ</th>
              <th className="py-3 font-normal">ชื่อหมวดหมู่</th>
              <th className="mr-6 py-3 font-normal">สร้างเมื่อ</th>
              <th className="mr-6 py-3 font-normal">แก้ไขล่าสุด</th>
              <th className="pl-6 py-3 font-normal text-center">Action</th>
            </tr>
          </thead>
          </table>
          <table className="bg-white rounded-b-[5px] table-fixed w-full">
            <tbody>
              {category.map((data, index) => {
                return (
                  <tr className="border-t border-grey200">
                    <td className="order-number font-light text-center">
                      {index + 1}
                    </td>
                    <td className="category-name font-light">
                      {data.category_name}
                    </td>
                    <td className="created-date font-light mr-6">
                      <Moment format="DD/MM/YYYY hh:mm A ">
                        {data.category_created_date}
                      </Moment>
                    </td>
                    <td className="last-edited font-light mr-6">
                      <Moment format="DD/MM/YYYY hh:mm A">
                        {data.category_edited_date}
                      </Moment>
                    </td>
                    <td className="icons-box h-[88px] pl-6 flex items-center justify-center">
                      <img
                        alt="Delete"
                        src={icons.trashIcon}
                        className="cursor-pointer w-6 h-6 mx-2"
                        onClick={() => {
                          categoryDeleteAlert(data.category_id);
                        }}
                      />
                      <img
                        alt="Edit"
                        src={icons.editIcon}
                        className="cursor-pointer w-6 h-6 mx-2"
                        onClick={() =>
                          navigate(`/category/edit/${data.category_id}`)
                        }
                      />
                    </td>
                  </tr>
                );
              })}
              {deleteCategory ? (
                <AlertBoxDelete
                  deleteFunction={handleDelete}
                  hideFunction={hide}
                />
              ) : null}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default AdminCategories;
