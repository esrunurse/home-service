import '../App.css'
import image from '../AdminPhoto/imageIndex'
import { useNavigate } from 'react-router-dom';

function AlertBoxDelete(props) {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen fixed flex items-center justify-center top-0 left-0 ">
              <div
                id="popUp"
                className="z-20 h-screen w-screen bg-black bg-opacity-40 pl-60 flex items-center justify-center"
              >
                <div
                  className="w-96 h-72 py-9 px-10
    rounded-2xl p-10 shadow-2xl m-5 z-30 absolute bg-white"
                >
                  <div className="w-72 h-52 flex flex-col justify-between items-center">
                    <div
                      className="w-72 h-36 py-1.5 texts-icon flex flex-col
         items-center justify-between"
                    >
                      <img
                        alt="Delete Icon"
                        className="w-7 h7"
                        src={image.exclamation}
                      />
                      <div className="font-medium text-xl">
                        ยืนยันการลบรายการ?
                      </div>
                      <div className="h-12 w-72 text-grey700 font-light text-base">
                        <div className="w-72 leading-6 text-center">
                          คุณต้องการลบรายการ
                          <br />
                          ใช่หรือไม่
                        </div>
                      </div>
                    </div>
                    <div className=" flex w-60 self-center justify-between">
                      <button
                        className="btn-primary"
                        onClick={props.deleteFunction}
                      >
                        ลบรายการ
                      </button>
                      <button
                        className="btn-secondary"
                        onclick={props.hideFunction}
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default AlertBoxDelete;
