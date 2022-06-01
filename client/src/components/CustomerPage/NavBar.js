import image from "../../CustomerPhoto/imageIndex";
import icon from "../../HomePagePhoto/imageIndex"
import "../../App.css"
import { useNavigate } from "react-router-dom";

function NavBar() {
  const user_id = localStorage.getItem("user_id");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  return (
    <aside className="h-full w-[18vw] border border-grey300 rounded-lg pt-6 pb-[18px] bg-white mb-10">
      <div className="text-grey700 text-xl font-normal leading-[150%] ml-6">
        บัญชีผู้ใช้
      </div>
      <hr className="text-grey300 my-3 mx-6" />
      <nav className="w-full">
        <div className="flex w-full justify-between items-center h-10 my-2 cursor-pointer hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950" onClick={() => navigate("/profile")}>
          <img className="w-6 h-6 ml-6" alt="Person Icon" src={image.personIcon} />
          <p className="w-full text-grey950 font-normal no-underline ml-4 ">
            ข้อมูลผู้ใช้งาน
          </p>
        </div>
        {role==="admin" ? <div className="flex w-full justify-between my-2 items-center h-10 cursor-pointer hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950" onClick={() => navigate("/category-dashboard")}>
          <img className="w-6 h-6 ml-6" alt="Time" src={icon.orderIcon} />
          <p className="w-full text-grey950 font-normal no-underline ml-4 ">
           Admin
          </p>
        </div> : <div className="flex w-full justify-between items-center h-10 my-2 cursor-pointer hover:bg-grey100 hover:bg-opacity-50 hover:text-grey950" onClick={() => navigate(`/order-history/${user_id}`)}>
          <img className="w-6 h-6 ml-6" alt="Time" src={image.time} />
          <p className="w-full text-grey950 font-normal no-underline ml-4 ">
            ประวัติการซ่อม
          </p>
        </div>}
      </nav>
    </aside>
  );
}

export default NavBar;
