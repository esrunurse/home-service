import image from '../AdminPhoto/imageIndex'
import Sidebar from './AdminCategoryPage/SideBar'

function EditForm() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-bg w-[1200px] min-h-screen flex justify-center">
        <div className="edit-box w-[1120px] min-h-screen bg-purple100 mb-[72px] flex flex-col items-center">
          {/*mt-10 mr-[] ml-[280px]*/}
          {/* <div className="bg-green900 w-[1200px] h-20"></div> */}
          <form className="edit-form w-[1120px] min-h-screen bg-white py-10 px-6 grid gap-y-10 mt-10">
            <div className="service-name w-[662px] h-11 flex items-center justify-between">
              <label
                className="title-service-name text-base text-grey700 font-medium"
                for="titleService"
              >
                ชื่อบริการ<span className="text-red">*</span>
              </label>
              <input
                className="input-service-name w-[433px] h-11 rounded-lg border border-grey300 px-4 py-3"
                type="text"
                id="titleService"
                name="titleService"
              />
            </div>
            <div className="choose-category w-[662px] h-11 flex items-center justify-between">
              <label className="title-service-name text-base text-grey700 font-medium">
                หมวดหมู่<span className="text-red">*</span>
              </label>
              <select className="input-service-name w-[433px] h-11 rounded-lg border border-grey300"></select>
            </div>
            <div className="addImg w-[662px] h-[232px] flex justify-between">
              <label className="text-grey700 font-medium">
                รูปภาพ<span className="text-red">*</span>
              </label>
              <div className="w-[433px] h-[232px] flex flex-col justify-between">
                <div className="w-[433px] h-[200px] rounded-lg border border-grey300"></div>
                <div className="w-[433px] h-6 flex justify-between items-center">
                  <div className="text-xs text-grey700">
                    ขนาดภาพที่แนะนำ: 1440 x 225 PX
                  </div>
                  <div className="text-blue600 flex justify-between h-6 w-[220px] ">
                    <button className="underline text-base font-semibold">
                      ลบรูปภาพ
                    </button>
                    <button className="underline text-base font-semibold">
                      อัพโหลดรูปภาพใหม่
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="break-line text-grey300" />
            <label className="text-grey700 text-base font-medium flex self-start">
              รายการบริการย่อย
            </label>
            <div className="priceBox flex items-center justify-between pl-11 w-[1072px] h-[69px]">
              <div className="w-[422px] h-[69px]">
                <label className="order-name text-grey700">
                  ชื่อรายการ<span className="text-red">*</span>
                </label>
                <input
                  className="w-[422px] h-11 rounded-md border border-gray-300 px-4 py-3"
                  type="text"
                />
              </div>
              <div className="w-60 h-[69px]">
                <label className="unit-price text-grey700">
                  หน่วยการบริการ<span className="text-red">*</span>
                </label>
                <input
                  className="w-60 h-11 rounded-md border border-gray-300 px-4 py-3"
                  type="text"
                />
              </div>
              <div className="w-60 h-[69px]">
                <label className="unit-price text-grey700">
                  ค่าบริการ / 1 หน่วย<span className="text-red">*</span>
                </label>
                <input
                  className="w-60 h-11 rounded-md border border-gray-300 px-4 py-3"
                  type="text"
                  placeholder="฿"
                />
              </div>
              <button className="text-base text-blue600 font-semibold underline">
                ลบรายการ
              </button>
            </div>
            <button className="h-11 w-[185px] border border-blue600 rounded-lg font-medium text-base text-blue600">
              เพิ่มรายการ
            </button>
            <hr className="break-line text-grey300" />
            <div className="time-line h-[100px] w-[387px] flex flex-col justify-between">
              <div className="created-time h-11 w-[387px] flex justify-between items-center">
                <label className="font-medium text-base text-grey700">
                  สร้างเมื่อ
                </label>
                <div>12/02/2022 10:30PM</div>
              </div>
              <div className="last-edited h-11 w-[387px] flex justify-between">
                <label className="font-medium text-base items-center text-grey700">
                  แก้ไขล่าสุด
                </label>
                <div>12/02/2022 10:30PM</div>
              </div>
            </div>
          </form>
          <button className="w-[97px] h-6 flex justify-between text-grey600 text-base font-semibold underline self-end mt-5">
            <img className="w-6 h-6" alt="Trash" src={image.trashIcon} />
            ลบบริการ
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditForm
