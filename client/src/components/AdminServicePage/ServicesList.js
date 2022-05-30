import icons from "../../AdminPhoto/imageIndex.js";
import "../../App.css";
import Moment from "react-moment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertBoxDelete from "../AlertBoxDelete.js";

function AdminService(props) {
  const {
    service,
    getService,
    serviceDeleteAlert,
    deleteService,
    deleteServiceId,
    service_Id,
    setDeleteService,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    getService();
  }, []);

  const hide = () => {
    document.getElementById("popUp").style.display = "none";
    setDeleteService(false);
  };

  const handleDelete = () => {
    deleteServiceId(service_Id);
    setDeleteService(false);
  };

  return (
    <div className="categories-data min-h-screen bg-bg p-[41px]">
      <div className="ml-60 rounded-[5px] border border-grey200">
        <table className="table-fixed w-full text-left">
          <thead>
            <tr>
              <th className="py-3 font-normal text-center">ลำดับ</th>
              <th className="py-3 font-normal">ชื่อบริการ</th>
              <th className="p-3 font-normal">หมวดหมู่</th>
              <th className="py-3 w-[185px] font-normal">สร้างเมื่อ</th>
              <th className="py-3 w-[185px] font-normal">แก้ไขล่าสุด</th>
              <th className="py-3 font-normal text-center">Action</th>
            </tr>
          </thead>
        </table>
        <table className="bg-white rounded-b-[5px] table-fixed w-full">
          {service.length !== 0 && service[0].service_name !== "" ? (
            <tbody className="text-left">
              {service.map((data, index) => {
                return (
                  <tr className="border-t border-grey200 ">
                    <td className="font-light text-center">{index + 1}</td>
                    <td className="font-light">{data.service_name}</td>
                    <td className="px-3">
                      {data.category_id % 4 === 0 ? (
                        <td className="bg-blue100 px-2.5 py-1 rounded-lg text-xs text-blue800">
                          {data.category_name}
                        </td>
                      ) : data.category_id % 3 === 0 ? (
                        <td className="bg-amber px-2.5 py-1 rounded-lg text-xs text-brown">
                          {data.category_name}
                        </td>
                      ) : data.category_id % 2 === 0 ? (
                        <td className="bg-lime px-2.5 py-1 rounded-lg text-xs text-green900">
                          {data.category_name}
                        </td>
                      ) : data.category_id % 5 === 0 ? (
                        <td className="bg-purple100 px-2.5 py-1 rounded-lg text-xs text-purple900">
                          {data.category_name}
                        </td>
                      ) : (
                        <td className="bg-pink px-2.5 py-1 rounded-lg text-xs text-red">
                          {data.category_name}
                        </td>
                      )}
                    </td>
                    <td className="font-light w-[185px]">
                      <Moment format="DD/MM/YYYY hh:mm A ">
                        {data.service_created_date}
                      </Moment>
                    </td>
                    <td className="font-light w-[185px]">
                      <Moment format="DD/MM/YYYY hh:mm A">
                        {data.service_edited_date}
                      </Moment>
                    </td>
                    <td className="h-[88px] flex items-center justify-center">
                      <img
                        className="w-6 h-6 cursor-pointer mx-2"
                        alt="Delete"
                        src={icons.trashIcon}
                        onClick={() => {
                          serviceDeleteAlert(data.service_id);
                        }}
                      />
                      <img
                        className="w-6 h-6 cursor-pointer mx-2"
                        alt="Edit"
                        src={icons.editIcon}
                        onClick={() =>
                          navigate(`/service/edit/${data.service_id}`)
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : null}
          {deleteService ? (
            <AlertBoxDelete deleteFunction={handleDelete} hideFunction={hide} />
          ) : null}
        </table>
      </div>
    </div>
  );
}

export default AdminService;
