import '../App.css'
import image from '../AdminPhoto/imageIndex'

function AlertBoxDelete(props) {
  const { deleteCategoryId, categoryId, category_name } = props;
  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      <div className="after-clicked-trash z-20 absolute h-screen w-screen bg-black opacity-40"></div>
      <div
        className="boxDelete w-96 h-72 py-9 px-10
    rounded-2xl flex items-center justify-center p-10 shadow-2xl m-5 z-30 absolute bg-white"
      >
        <div className="w-72 h-52 flex flex-col justify-between items-center">
          <div
            className="w-72 h-36 py-1.5 texts-icon flex flex-col
         items-center justify-between"
          >
            <img alt="Delete Icon" className="w-7 h7" src={image.exclamation} />
            <div className="font-medium text-xl">ยืนยันการลบรายการ?</div>
            <div className="h-12 w-72 text-grey700 font-light text-base">
              <div className="w-72 leading-6 text-center">
                คุณต้องการลบรายการ {category_name}
                <br />
                ใช่หรือไม่
              </div>
            </div>
          </div>
          <div className="buttons flex w-60 self-center justify-between">
            <button className="bg-blue600 text-white w-28 h-11 rounded-lg"
            onClick={() => {
                deleteCategoryId(categoryId);
              }}>
              ลบรายการ
            </button>
            <button className="bg-white w-28 h-11 rounded-lg border border-blue600 ">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertBoxDelete;
