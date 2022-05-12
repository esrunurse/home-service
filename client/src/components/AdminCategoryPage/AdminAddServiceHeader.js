import '../App.css'
import { useNavigate } from 'react-router-dom'

function createServiceHeader() {
    const navigate = useNavigate();
    return (<div
          className="header-name flex items-center h-20 px-10
         justify-between border-b border-grey300 bg-white"
        >
          <h1 className="text-xl font-medium">เพิ่มบริการ</h1>
          <div className="flex">
            <button
              className="btn-secondary flex items-center
               justify-center text-base font-medium w-28 h-11"
              onClick={() => navigate('/service-dashboard')}
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
        </div>)
}

export default createServiceHeader;