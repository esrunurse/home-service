import icons from '../../AdminPhoto/imageIndex.js'
import '../../App.css'
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AlertBoxDelete from '../AlertBoxDelete.js'

function AdminCategories(props) {
  const {
    category,
    getCategory,
    deleteCategoryId,
    categoryDeleteAlert,
    deleteCategory,
    category_Id,
    hide
  } = props

  const navigate = useNavigate()

  useEffect(() => {
    getCategory()
  }, [])

  const handleDelete = () => {
    deleteCategoryId(category_Id)
  }

  return (
    <div
      className="categories-data w-screen min-h-screen bg-bg p-[41px]
     border border-[0.5px] border-grey200"
    >
      <div className="pl-60 rounded-[5px]">
        <div
          className="table header h-[41px] bg-grey100 text-grey700 text-sm
           flex items-center pr-14 rounded-t-[5px] "
        >
          <h5 className="order number w-20 p-6 font-normal">ลำดับ</h5>
          <h5 className="categoryName w-[262px] p-6 font-normal">
            ชื่อหมวดหมู่
          </h5>
          <h5 className="createdDate w-[245px] p-6 font-normal">สร้างเมื่อ</h5>
          <h5 className="lastEdited w-[357px] p-6 font-normal">แก้ไขล่าสุด</h5>
          <h5 className="action w-[120px] p-6 font-normal">Action</h5>
        </div>
        <div className="bg-white rounded-b-lg">
          {category.map((data, index) => {
            return (
              <div
                key={data.category_id}
                className="data-category-box h-[88px] flex justify-between
                 border-[0.5px] border-grey200"
              >
                <div className="data-category w-[888px] h-[88px] pr-14 flex items-center">
                  <div className="order-number w-20 text-center font-light">
                    {index + 1}
                  </div>
                  <div className="category-name w-[262px] p-6 font-light">
                    {data.category_name}
                  </div>
                  <div className="created-date w-[245px] p-6 font-light">
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.category_created_date}
                    </Moment>
                  </div>
                  <div className="last-edited w-[245px] p-6 font-light">
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.category_edited_date}
                    </Moment>
                  </div>
                </div>
                <div className="icons-box w-[120px] h-[88px] flex items-center justify-around pl-6">
                  <img
                    alt="Delete"
                    src={icons.trashIcon}
                    className="cursor-pointer w-6 h-6"
                    onClick={() => {
                      categoryDeleteAlert(data.category_id)
                    }}
                  />
                  <img
                    alt="Edit"
                    src={icons.editIcon}
                    className="cursor-pointer w-6 h-6"
                    onClick={() =>
                      navigate(`/category/edit/${data.category_id}`)
                    }
                  />
                </div>
              </div>
            )
          })}
          {deleteCategory ? (
            <AlertBoxDelete deleteFunction={handleDelete} hideFunction={hide} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default AdminCategories
