/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icons from "../../AdminPhoto/imageIndex.js";
import "../../App.css";
import Moment from "react-moment";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertBoxDelete from "../AlertBoxDelete.js";

function AdminService(props) {
  const {
    service,
    getService,
    serviceDeleteAlert,
    deleteService,
    deleteServiceId,
    service_Id,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    getService();
  }, []);

  const hide = () => {
    document.getElementById("popUp").style.display = "none";
    navigate("/service-dashboard");
  };

  const handleDelete = () => {
    deleteServiceId(service_Id);
  };

  return (
    <div
      className="w-screen min-h-screen"
      css={css`
        background: #e5e5e5;
        padding: 41px;
        border: 0.5px solid #e6e7eb;
      `}
    >
      <div
        className="pl-60"
        css={css`
          border-radius: 5px;
        `}
      >
        <div className="bg-grey100 text-grey700 text-sm flex h-10 items-center pl-14 rounded-t-md">
          <h5 className="w-24 py-6 font-normal">ลำดับ</h5>
          <h5 className="font-normal py-2 w-60">ชื่อบริการ</h5>
          <h5 className="font-normal py-2 w-60">หมวดหมู่</h5>
          <h5 className="font-normal py-2 w-60">สร้างเมื่อ</h5>
          <h5 className="font-normal py-2 w-60">แก้ไขล่าสุด</h5>
          <h5 className="w-32 py-2 pr-8 pl-6 font-normal">Action</h5>
        </div>
        <div className="bg-white rounded-b-lg">
          {service.map((data, index) => {
            return (
              <div
                key={data.service_id}
                className="flex justify-between "
                css={css`
                  height: 88px;
                  border: 0.5px solid #e6e7eb;
                `}
              >
                <div
                  className="pl-10 flex items-center"
                  css={css`
                    width: 888px;
                    height: 88px;
                  `}
                >
                  <div className="font-light text-center w-20">{index + 1}</div>
                  <div className="service-name p-6 font-light w-60">
                    {data.service_name}
                  </div>
                  <div className="service-name py-6 font-light w-36">
                    {" "}
                    {data.category_id % 2 === 0 ? (
                      <div className="bg-blue100 px-2.5 py-1 w-fit rounded-lg text-xs text-blue800">
                        {data.category_name}
                      </div>
                    ) : data.category_id % 3 === 0 ? (
                      <div className="bg-amber px-2.5 py-1 w-fit rounded-lg text-xs text-brown">
                        {data.category_name}
                      </div>
                    ) : data.category_id % 4 === 0 ? (
                      <div className="bg-lime px-2.5 py-1 w-fit rounded-lg text-xs text-green900">
                        {data.category_name}
                      </div>
                    ) : data.category_id % 5 === 0 ? (
                      <div className="bg-purple100 px-2.5 py-1 w-fit rounded-lg text-xs text-purple900">
                        {data.category_name}
                      </div>
                    ) : (
                      <div className="bg-pink px-2.5 py-1 w-fit rounded-lg text-xs text-red">
                        {data.category_name}
                      </div>
                    )}
                  </div>
                  <div className="w-64 p-5 font-light">
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.service_created_date}
                    </Moment>
                  </div>
                  <div className="w-64 p-5 font-light">
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.service_edited_date}
                    </Moment>
                  </div>
                </div>
                <div
                  className="flex items-center justify-around pr-6"
                  css={css`
                    width: 120px;
                    height: 88px;
                  `}
                >
                  <img
                    className="w-6 h-6 cursor-pointer"
                    alt="Delete"
                    src={icons.trashIcon}
                    onClick={() => {
                      serviceDeleteAlert(data.service_id);
                    }}
                  />
                  <img
                    className="w-6 h-6 cursor-pointer"
                    alt="Edit"
                    src={icons.editIcon}
                  />
                </div>
              </div>
            );
          })}
          {deleteService ? (
            <AlertBoxDelete
              name={service.service_name}
              deleteFunction={handleDelete}
              hideFunction={hide}
            />
          ) : //         <div className="h-screen w-screen fixed flex items-center justify-center top-0 left-0 ">
          //           <div
          //             id="popUp"
          //             className="z-20 h-screen w-screen bg-black bg-opacity-40 pl-60 flex items-center justify-center"
          //           >
          //             <div
          //               className="w-96 h-72 py-9 px-10
          // rounded-2xl p-10 shadow-2xl m-5 z-30 absolute bg-white"
          //             >
          //               <div className="w-72 h-52 flex flex-col justify-between items-center">
          //                 <div
          //                   className="w-72 h-36 py-1.5 texts-icon flex flex-col
          //      items-center justify-between"
          //                 >
          //                   <img
          //                     alt="Delete Icon"
          //                     className="w-7 h7"
          //                     src={icons.exclamation}
          //                   />
          //                   <div className="font-medium text-xl">
          //                     ยืนยันการลบรายการ?
          //                   </div>
          //                   <div className="h-12 w-72 text-grey700 font-light text-base">
          //                     <div className="w-72 leading-6 text-center">
          //                       คุณต้องการลบรายการ {service.service_name}
          //                       <br />
          //                       ใช่หรือไม่
          //                     </div>
          //                   </div>
          //                 </div>
          //                 <div className=" flex w-60 self-center justify-between">
          //                   <button
          //                     className="btn-primary"
          //                     onClick={() => {
          //                       deleteServiceId(service_Id);
          //                     }}
          //                   >
          //                     ลบรายการ
          //                   </button>
          //                   <button
          //                     className="btn-secondary"
          //                     onclick={() => { document.getElementById("popUp").style.display = "none"; }}
          //                   >
          //                     ยกเลิก
          //                   </button>
          //                 </div>
          //               </div>
          //             </div>
          //           </div>
          //         </div>
          null}
        </div>
      </div>
    </div>
  );
}

export default AdminService;
