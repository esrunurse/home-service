import icons from '../../AdminPhoto/imageIndex.js'
import '../../App.css'
import Moment from 'react-moment'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AlertBoxDelete from '../AlertBoxDelete.js'

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

  const navigate = useNavigate()

  useEffect(() => {
    getService()
  }, [])

  const hide = () => {
    document.getElementById("popUp").style.display = "none";
    setDeleteService(false);
  };

  const handleDelete = () => {
    deleteServiceId(service_Id);
    setDeleteService(false);
  };

  console.log(service)

  return (
    <div className=" min-h-screen bg-[#E5E5E5] p-[41px] border-[0.5px] border-grey200">
      <div className="pl-60 rounded-[5px]">
        <div className="bg-grey100 text-grey700 text-sm flex h-10 items-center pl-14 rounded-t-md">
          <h5 className="w-24 py-6 font-normal">ลำดับ</h5>
          <h5 className="font-normal py-2 w-60">ชื่อบริการ</h5>
          <h5 className="font-normal py-2 w-60">หมวดหมู่</h5>
          <h5 className="font-normal py-2 w-60">สร้างเมื่อ</h5>
          <h5 className="font-normal py-2 w-60">แก้ไขล่าสุด</h5>
          <h5 className="w-32 py-2 pr-8 pl-6 font-normal">Action</h5>
        </div>
        <div className="bg-white rounded-b-lg">
          {service.length !== 0 && service[0].service_name !== ""  ?  (<div>{service.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-between h-[88px] border-[0.5px] border-grey200"
              >
                <div className="pl-10 flex items-center w-[888px] h-[88px]">
                  <div className="font-light text-center w-20">{index + 1}</div>
                  <div className="service-name p-6 font-light w-60">
                    {data.service_name}
                  </div>
                  <div className="service-name py-6 font-light w-36">
                    {" "}
                    {data.category_id % 4 === 0 ? (
                      <div className="bg-blue100 px-2.5 py-1 w-fit rounded-lg text-xs text-blue800">
                        {data.category_name}
                      </div>
                    ) : data.category_id % 3 === 0 ? (
                      <div className="bg-amber px-2.5 py-1 w-fit rounded-lg text-xs text-brown">
                        {data.category_name}
                      </div>
                    ) : data.category_id % 2 === 0 ? (
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
                <div className="flex items-center justify-around pr-6 w-[120px] h-[88px]">
                  <img
                    className="w-6 h-6 cursor-pointer"
                    alt="Delete"
                    src={icons.trashIcon}
                    onClick={() => {
                      serviceDeleteAlert(data.service_id)
                    }}
                  />
                  <img
                    className="w-6 h-6 cursor-pointer"
                    alt="Edit"
                    src={icons.editIcon}
                    onClick={() =>
                      navigate(`/service/edit/${data.service_id}`)
                    }
                  />
                </div>
              </div>
            )
          })}
          {deleteService ? (
            <AlertBoxDelete deleteFunction={handleDelete} hideFunction={hide}/>
          ) : null}</div>) : (null) }
        </div>
      </div>
    </div>
  )
}

export default AdminService
