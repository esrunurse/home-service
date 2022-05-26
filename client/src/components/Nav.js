import "../App.css"
import image from '../HomePagePhoto/imageIndex.js'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authentication'

function Nav() {
  const navigate = useNavigate()
  const auth = useAuth()
  const { logout } = useAuth()
  const loginName = localStorage.getItem('name') // ใช้อันนี้แล้ว user name บน nav ไม่หายตอน refresh
  const loginRole = localStorage.getItem('role')

  return (
    <nav className="flex justify-between items-center bg-white h-20 px-[10vw] shadow-[2px_2px_24px_rgba(23,51,106,0.12)] sticky top-0 z-[100]">
      <div className="flex items-center">
        <div
          className="cursor-pointer w-[207px] h-9 flex items-center"
          onClick={() => navigate('/')}
        >
          <img
            className="w-8 h-8"
            alt="Home Services Logo"
            src={image.logoHomeService}
          />
          <h1 className="text-blue600 text-2xl no-underline">HomeServices</h1>
        </div>
        <h5 className="cursor-pointer ml-[70px]" onClick={() => navigate('/service')}>
          บริการของเรา
        </h5>
      </div>
      <div>
        {auth.isAuthenticated ? (
          <div className="dropdown cursor-pointer">
            <div className="flex items-center cursor-pointer">
              <p className="text-grey700 text-sm ">{loginName}</p>
              <img
                src={image.avatar}
                className="rounded-full w-10 h-10 mx-4"
                alt="user's display"
              />
            </div>
            <div id="dropdown-content" className="dropdown-content cursor-pointer w-[190px]">
              {loginRole == 'admin' ? (
                <div>
                  <div
                    onClick={() => navigate('/category-dashboard')}
                    className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950"
                  >
                    <img
                      src={image.profileIcon}
                      className="ml-4 mr-2 my-2 "
                      alt="admin"
                    />
                    <a>Admin</a>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    onClick={() => navigate('/profile')}
                    className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950"
                  >
                    <img
                      src={image.profileIcon}
                      className="ml-4 mr-2 my-2 "
                      alt="ข้อมูลผู้ใช้งาน"
                    />
                    <a>ข้อมูลผู้ใช้งาน</a>
                  </div>
                  <div
                    onClick={() => navigate('/')}
                    className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950"
                  >
                    <img
                      src={image.orderIcon}
                      className="ml-4 mr-2 my-2 "
                      alt="รายการคำสั่งซ่อม"
                    />
                    <a>รายการคำสั่งซ่อม</a>
                  </div>
                  <div
                    onClick={() => navigate('/')}
                    className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950"
                  >
                    <img
                      src={image.historyIcon}
                      className="ml-4 mr-2 my-2 "
                      alt="ประวัติการซ่อม"
                    />
                    <a>ประวัติการซ่อม</a>
                  </div>
                </div>
              )}

              <hr className="text-grey300 my-1" />
              <div
                onClick={() => {
                  logout()
                }}
                className="flex items-center hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950"
              >
                <img
                  src={image.logoutIcon}
                  className="ml-4 mr-2 my-2 "
                  alt="ออกจากระบบ"
                />
                <a>ออกจากระบบ</a>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="btn-secondary">
            เข้าสู่ระบบ
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
