import '../../App.css'
import image from '../../HomePagePhoto/imageIndex.js'

function HomePageHeader() {
  return (
    <header className="home-page-header bg-blue100 px-10 relative">
      <div className="py-32 pl-[122px]">
        <div className="flex flex-col justify-center">
          <span className="absolute bottom-0 right-20">
            <img src={image.homepageHeaderWorkman} alt="header-workman" />
          </span>
          <div className="flex flex-col gap-[39px]">
            <div>
              <h1 className="text-blue700 font-bold text-[64px]">
                เรื่องบ้าน...ให้เราช่วยดูแลคุณ
              </h1>
              <h2 className="text-black font-semibold text-[42px]">
                “สะดวก ราคาคุ้มค่า เชื่อถือได้“
              </h2>
            </div>
            <div className="text-grey700 font-normal text-2xl leading-9">
              <p>ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน</p>
              <p>โดยพนักงานแม่บ้าน และช่างมืออาชีพ</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomePageHeader
