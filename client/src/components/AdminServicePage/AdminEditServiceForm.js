import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";
import { useEffect } from "react";
import Moment from "react-moment";
import axios from "axios";
import { useUtils } from "../../hooks/utils";
import AdminEditedHeader from "../AdminEditedHeader";

function ServiceEditForm() {
  const navigate = useNavigate();
  const params = useParams();
  const {
    getServiceById,
    service,
    getCategory,
    category,
    setService,
    category_name,
    service_name,
    editHeader,
  } = useUtils();

  useEffect(() => {
    getServiceById(params.serviceId);
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

  const updateServiceById = async (serviceId, data) => {
    console.log(data);
    await axios.put(`http://localhost:4000/service/${serviceId}`, data);
    navigate("/service-dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(service);
    updateServiceById(params.serviceId, service);
  };

  const deleteList = (index) => {
    let deleteSubService = [...service];
    let newDeleteSubService = deleteSubService.filter(
      (deleteSubService, itemIndex) => {
        return itemIndex !== index;
      }
    );
    setService(newDeleteSubService);
  };

  const handleChangeServiceName = (e, index) => {
    const tempList = [...service];
    tempList[index].service_name = e.target.value;
    setService(tempList);
  };

  const handleChangeCategory = (e, index) => {
    const tempList = [...service];
    tempList[index].category_name = e.target.value;
    setService(tempList);
  };

  const handleChangeName = (e, index) => {
    const tempList = [...service];
    tempList[index].sub_service_name = e.target.value;
    setService(tempList);
  };

  const handleChangePricePerUnit = (e, index) => {
    const tempList = [...service];
    tempList[index].price_per_unit = e.target.value;
    setService(tempList);
  };

  const handleChangeUnit = (e, index) => {
    const tempList = [...service];
    tempList[index].unit = e.target.value;
    setService(tempList);
  };

  const addList = () => {
    const newObj = [
      ...service,
      {
        service_name: service[service.length - 1].service_name,
        category_name: service[service.length - 1].category_name,
        service_photo: {
          url: service[service.length - 1].service_photo.url,
          publicId: service[service.length - 1].service_photo.publicId,
        },
        sub_service_name: "",
        unit: "",
        price_per_unit: 0,
        service_created_date: service[0].service_created_date,
        service_edited_date: service[service.length - 1].service_edited_date,
      },
    ];
    setService(newObj);
  };

  const title = "บริการ";

  return (
    <form className="pl-60 min-h-screen" onSubmit={handleSubmit}>
      <AdminEditedHeader
        back={() => navigate("/service-dashboard")}
        title={title}
        name={editHeader}
      />
      <div className=" bg-bg">
        <div className=" py-10">
          <div className=" bg-white mx-10 p-6">
            <div className=" h-11 w-8/12 mb-10 flex justify-between items-center pr-16">
              <label
                className="w-52 text-grey700 text-base font-medium"
                htmlFor="serviceName"
              >
                ชื่อบริการ
              </label>
              <input
                required
                className="h-11 w-3/4 py-2.5 pl-4 border rounded-lg border-grey300 focus:border-blue600 focus:outline-none"
                type="text"
                id="service name"
                name="service name"
                value={
                  service_name === ""
                    ? service[service.length - 1].service_name
                    : service_name
                }
                onChange={(e) => {
                  handleChangeServiceName(e, service.length - 1);
                }}
              />
            </div>
            <div className="h-11 w-8/12 mb-10 flex justify-between items-center pr-16">
              <label
                className="w-52 text-grey700 text-base font-medium"
                htmlFor="chooseCategory"
              >
                หมวดหมู่
              </label>
              <select
                required
                className="h-11 w-3/4 border border-grey300 py-2.5 pl-4 focus:border-blue600 focus:outline-none"
                value={
                  category_name === ""
                    ? service[service.length - 1].category_name
                    : category_name
                }
                onChange={(e) => {
                  handleChangeCategory(e, service.length - 1);
                }}
              >
                {category.map((dt) => {
                  return (
                    <option key={dt.category_id} value={dt.category_name}>
                      {dt.category_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="h-40 w-8/12 pr-16 mb-10 flex justify-between ">
              <div className="text-grey700 w-52 text-base font-medium ">
                รูปภาพ
              </div>
              <div className="w-3/4 h-40 relative">
                <div className="z-0 h-36 border border-dashed border-grey300 rounded-md py-6 flex flex-col items-center justify-between text-grey700 ">
                  <img
                    className="object-cover h-[200px] w-full rounded-md z-50 absolute inset-0"
                    src={service[service.length - 1].service_photo.url}
                    alt={service[service.length - 1].service_name}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-20 mb-10 text-grey300 " />
            <div className="mb-10 text-grey700 text-base font-medium ">
              รายการบริการย่อย
            </div>
            {service.map((subService, index) => {
              return (
                <div key={index}>
                  <div
                    id="add-details-box"
                    className=" h-full mb-10 flex justify-between"
                  >
                    <div className="flex flex-col w-2/5">
                      <label
                        className="text-sm text-grey700"
                        htmlFor="orderName"
                      >
                        ชื่อรายการ
                      </label>
                      <input
                        required
                        className="rounded-lg h-11 border border-grey300 mr-4 py-2.5 pl-4 focus:border-blue600 focus:outline-none"
                        type="text"
                        value={subService.sub_service_name}
                        onChange={(e) => {
                          handleChangeName(e, index);
                          console.log(service);
                        }}
                      />
                    </div>
                    <div className="flex flex-col w-56">
                      <label className="text-sm text-grey700">
                        ค่าบริการ / 1 หน่วย
                      </label>
                      <input
                        required
                        className="rounded-lg h-11 border border-grey300 mr-4 py-2.5 pl-4 focus:border-blue600 focus:outline-none"
                        type="number"
                        step="any"
                        value={subService.price_per_unit}
                        onChange={(e) => {
                          handleChangePricePerUnit(e, index);
                        }}
                      />
                    </div>
                    <div className="flex flex-col w-56">
                      <label
                        className="text-sm text-grey700 "
                        htmlFor="unitService"
                      >
                        หน่วยการบริการ
                      </label>
                      <input
                        required
                        className="rounded-lg h-11 border border-grey300 py-2.5 pl-4 focus:border-blue600 focus:outline-none mr-4"
                        type="text"
                        value={subService.unit}
                        onChange={(e) => {
                          handleChangeUnit(e, index);
                        }}
                      />
                    </div>
                    {service.length === 1 ? (
                      <p className="text-red text-xs w-20 pt-4 text-center">
                        ต้องมีบริการย่อยอย่างน้อย 1 รายการ
                      </p>
                    ) : (
                      <button
                        id="del"
                        className="text-base text-blue600 font-semibold underline"
                        type="button"
                        onClick={() => deleteList(index)}
                      >
                        ลบรายการ
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            <button
              className="btn-secondary h-11 w-48"
              onClick={addList}
              type="button"
            >
              เพิ่มรายการ +
            </button>
            <hr className="text-grey300 my-10" />
            <div className="h-[100px] w-[387px] flex flex-col justify-between">
              <div className="h-11 w-[387px] flex justify-between items-center">
                <label className="font-medium text-base text-grey700">
                  สร้างเมื่อ
                </label>
                <div>
                  <Moment format="DD/MM/YYYY hh:mm A">
                    {service[0].service_created_date}
                  </Moment>
                </div>
              </div>
              <div className="h-11 w-[387px] flex justify-between">
                <label className="font-medium text-base items-center text-grey700">
                  แก้ไขล่าสุด
                </label>
                <div>
                  <Moment format="DD/MM/YYYY hh:mm A">
                    {service[service.length - 1].service_edited_date}
                  </Moment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ServiceEditForm;
