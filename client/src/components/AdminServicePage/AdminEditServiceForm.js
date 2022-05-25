import { useNavigate, useParams } from "react-router-dom";
import image from "../../AdminPhoto/imageIndex";
import "../../App.css";
import { useEffect } from "react";
import Moment from "react-moment";
import axios from "axios";

function ServiceEditForm(props) {
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
  } = props;

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

  return (
    <div className="flex flex-col ml-60 ">
      <form onSubmit={handleSubmit}>
        <header
          className="h-20 w-full flex items-center justify-between 
        border-b border-grey300 px-10 py-10 bg-white"
        >
          <div className="flex justify-between h-12 w-44">
            <button onClick={() => navigate("/service-dashboard")}>
              <img alt="Arrow Icon" src={image.arrow} className="w-10 h10" />
            </button>
            <div className="w-52 h-12">
              <div className="font-normal text-grey700 text-xs">บริการ</div>
              <div className="font-medium text-xl">{editHeader}</div>
            </div>
          </div>
          <div className="buttons flex justify-between h-11 w-64 px-1">
            <button
              className="btn-secondary 
            w-28 h-11 "
              type="button"
              onClick={() => navigate("/service-dashboard")}
            >
              ยกเลิก
            </button>
            <button
              className="btn-primary 
          w-28 h-11"
            >
              ยืนยัน
            </button>
          </div>
        </header>
        <div className="bg-bg w-[1200px] min-h-screen flex justify-center">
          <div className="edit-box w-[1120px] min-h-screen mb-[72px] flex flex-col items-center">
            <form className="edit-form w-[1120px] min-h-screen bg-white py-10 px-6 grid gap-y-10 mt-10 rounded-lg border border-grey200">
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
              <div className="choose-category w-[662px] h-11 flex items-center justify-between">
                <label className="title-service-name text-base text-grey700 font-medium">
                  หมวดหมู่<span className="text-red">*</span>
                </label>
                <select
                  className="input-service-name w-[433px] h-11 rounded-lg border border-grey300"
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
              <div className="addImg w-[662px] h-[232px] flex justify-between">
                <label className="text-grey700 font-medium">
                  รูปภาพ<span className="text-red">*</span>
                </label>
                <div className="w-[433px] h-[232px] flex flex-col justify-between relative">
                  <div className="w-[433px] h-[200px] rounded-lg border border-grey300"></div>
                  <div className="w-[433px] h-6 flex justify-between items-center">
                    <div className="text-xs text-grey700">
                      ขนาดภาพที่แนะนำ: 1440 x 225 PX
                    </div>
                    <div className="z-50 absolute inset-0 ">
                      <img
                        className="object-cover h-[200px] w-full rounded-md "
                        src={service[service.length - 1].service_photo.url}
                        alt={service[service.length - 1].service_name}
                      />
                    </div>
                    {/* <div className="text-blue600 flex justify-between h-6 w-[220px] ">
                      <button className="underline text-base font-semibold">
                        ลบรูปภาพ
                      </button>
                      <label
                        htmlFor="upload"
                        className="underline text-blue600 text-base font-semibold cursor-pointer"
                      >
                        อัพโหลดรูปภาพใหม่
                        <input
                          id="upload"
                          name="servicePhoto"
                          type="file"
                          hidden
                          onChange={handleFileChange}
                        />
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
              <hr className="break-line text-grey300" />
              <label className="text-grey700 text-base font-medium flex self-start">
                รายการบริการย่อย
              </label>
              {service.map((subService, index) => {
                return (
                  <div
                    key={index}
                    className="priceBox flex items-center justify-between pl-11 w-[1072px] h-[69px]"
                  >
                    <div className="w-[422px] h-[69px]">
                      <label className="order-name text-grey700">
                        ชื่อรายการ<span className="text-red">*</span>
                      </label>
                      <input
                        className="w-[422px] h-11 rounded-md border border-gray-300 px-4 py-3"
                        type="text"
                        value={subService.sub_service_name}
                        onChange={(e) => {
                          handleChangeName(e, index);
                          console.log(service);
                        }}
                      />
                    </div>
                    <div className="w-60 h-[69px]">
                      <label className="unit-price text-grey700">
                        ค่าบริการ / 1 หน่วย<span className="text-red">*</span>
                      </label>
                      <input
                        className="w-60 h-11 rounded-md border border-gray-300 px-4 py-3"
                        type="number"
                        step="any"
                        value={subService.price_per_unit}
                        onChange={(e) => {
                          handleChangePricePerUnit(e, index);
                        }}
                      />
                    </div>
                    <div className="w-60 h-[69px]">
                      <label className="unit-price text-grey700">
                        หน่วยการบริการ<span className="text-red">*</span>
                      </label>
                      <input
                        className="w-60 h-11 rounded-md border border-gray-300 px-4 py-3"
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
                );
              })}
              <button
                className="btn-secondary h-11 w-[185px] flex items-center"
                onClick={addList}
                type="button"
              >
                <div className="ml-[15px] mr-[13px]">เพิ่มรายการ</div>
                <img
                  className="h-2.5 w-2.5"
                  alt="Blue Plus Symbol"
                  src={image.bluePlusSymbol}
                />
              </button>
              <hr className="break-line text-grey300" />
              <div className="time-line h-[100px] w-[387px] flex flex-col justify-between">
                <div className="created-time h-11 w-[387px] flex justify-between items-center">
                  <label className="font-medium text-base text-grey700">
                    สร้างเมื่อ
                  </label>
                  <div>
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {service[0].service_created_date}
                    </Moment>
                  </div>
                </div>
                <div className="last-edited h-11 w-[387px] flex justify-between">
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
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceEditForm;
