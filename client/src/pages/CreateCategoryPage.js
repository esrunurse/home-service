import '../App.css'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/AdminCategoryPage/SideBar'
import axios from 'axios'
import { useState } from "react";

function CreateCategory() {
  const navigate = useNavigate();
  const [category_name, setCategory_name] = useState("");
  const createCategory = async () => {
    await axios.post('http://localhost:4000/category', { category_name })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createCategory()
    navigate('/category-dashboard')
  }

  return (
    <div className="create-category-container h-screen bg-bg">
      <SideBar />
      <form className="pl-60" onSubmit={handleSubmit}>
        <div
          className="header-name flex items-center h-20 px-10
         justify-between border-b border-grey300 bg-white"
        >
          <h1 className="text-xl font-medium">เพิ่มหมวดหมู่</h1>
          <div className="flex">
            <button
              className="btn-secondary flex items-center
               justify-center text-base font-medium w-28 h-11"
              onClick={() => navigate('/category-dashboard')}
            >
              ยกเลิก
            </button>
            <button
              className="btn-primary flex items-center justify-center
               ml-6 text-base font-medium w-28 h-11"
              type="submit"
            >
              สร้าง
            </button>
          </div>
        </div>
        <div
          className="createCategory 
          bg-white border border-grey200
           flex items-center rounded-lg h-32 mx-6 my-10 py-0 px-24"
        >
          <div
            className="inputForCreate 
            flex justify-between items-center h-11 w-2/4"
          >
            <label className="h-6 text-grey700">
              ชื่อหมวดหมู่<span className="text-red">*</span>
            </label>
            <input
              required
              id="categoryName"
              name="categoryName"
              type="text"
              className="border rounded-lg border-grey300
              focus:border-blue600 focus:outline-none w-4/6 h-11 py-2.5 pl-4"
              value={category_name}
              onChange={(event) => {
                setCategory_name(event.target.value)
              }}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCategory
