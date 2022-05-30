import image from '../CustomerPhoto/imageIndex'

function NavBar() {
  return (
    <aside className="h-[204px] w-[253px] border border-grey300 rounded-lg px-6 pt-6 pb-[18px]">
      <div className="text-grey700 text-xl font-normal leading-[150%]">
        บัญชีผู้ใช้
      </div>
      <hr className="text-grey300 mt-5 mb-4" />
      <nav className="w-[180px]">
        <div className="flex justify-between items-center h-12">
          <img className="w-6 h-6" alt="Person Icon" src={image.personIcon} />
          <a href="-" className="w-[80%] text-grey950 font-normal no-underline">
            ข้อมูลผู้ใช้งาน
          </a>
        </div>
        <div className="flex justify-between items-center h-12">
          <img className="w-6 h-6" alt="Time" src={image.time} />
          <a href="-" className="w-[80%] text-grey950 font-normal no-underline">
            ประวัติการซ่อม
          </a>
        </div>
      </nav>
    </aside>
  )
}

export default NavBar
