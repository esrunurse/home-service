import '../../App.css'
import axios from 'axios'
import { useEffect } from 'react'
import image from '../../AdminPhoto/imageIndex'
import { useNavigate } from 'react-router-dom'

function AdminCategoryHeader(props) {
  const navigate = useNavigate()
  const { searchCategory, setSearchCategory, setCategory } = props;
  
  const searchCategoryData = async () => {
    const results = await axios.get(
      `http://localhost:4000/category?keywords=${searchCategory}`
    )
    setCategory(results.data.data)
  }

  useEffect(() => {
    let timerId
    timerId = setTimeout(searchCategoryData, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [searchCategory])

  return (
    <header className="sticky top-0 bg-white">
      <div className="pl-60 flex items-center h-20 pr-10 justify-between border-b border-grey300 ">
        <h1 className="text-xl font-medium pl-10">หมวดหมู่</h1>
        <div className="flex">
          <input
            id="search-text"
            name="search-text"
            type="text"
            placeholder="ค้นหาหมวดหมู่..."
            onChange={(event) => {
              setSearchCategory(event.target.value)
            }}
            value={searchCategory}
            className="border rounded-lg border-grey300 px-4 py-2.5"
          />
          <button
            className="btn-primary flex items-center ml-6"
            onClick={() => navigate('/create-category')}
          >
            <div className="text-base font-medium mr-3">เพิ่มหมวดหมู่</div>
            <img alt="Plus Symbol" src={image.plusSign} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default AdminCategoryHeader
