import image from "../../AdminPhoto/imageIndex";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import SubService_list from "./SubServiceList";

function AddService(props) {
  const {
    servicePhotos,
    service_name,
    setService_name,
    category,
    category_name,
    setCategory_name,
    getCategory,
    handleSubmitService,
    handleFileChange,
    sub_service,
    setSub_service,
  } = props;

  const [subServiceList, setSubServiceList] = useState([]);

  const addList = () => {
    //setSubServiceList([...subServiceList, sub_service]);
     const newObj = [...subServiceList, sub_service];
     if (sub_service !== {}) {
       setSubServiceList(newObj);
     }
    //console.log(subServiceList);
  };

  //   const addList = (event) => {
  //   setSubServiceList(subServiceList.concat(<div></div>));
  //   console.log(subServiceList);
  // };

  const handleChange = (e) => {
    setSub_service({
      sub_service_name: e.target.value
    })
  }

  const deleteList = (index) => {
    let deleteSubService = [...subServiceList];
    let newDeleteSubService = deleteSubService.filter(
      (deleteSubService, itemIndex) => {
        return itemIndex !== index;
      }
    );
    setSubServiceList(newDeleteSubService);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const navigate = useNavigate();
  return (
    <form className="pl-60" onSubmit={handleSubmitService}>
      <div
        className="header-name flex items-center h-20 px-10
         justify-between border-b border-grey300 bg-white"
      >
        <h1 className="text-xl font-medium">เพิ่มบริการ</h1>
        <div className="flex">
          <button
            className="btn-secondary flex items-center
               justify-center text-base font-medium w-28 h-11"
            onClick={() => navigate("/service-dashboard")}
          >
            ยกเลิก
          </button>
          <button
            className="btn-primary flex items-center justify-center
               ml-6 text-base font-medium w-28 h-11"
            type="submit"
          >
            สร้าง
          </button>
        </div>
      </div>
      <div className="edit-container min-h-screen bg-bg">
        <div className="add-service-box ">
          <div className="add-service-white-box bg-white  mb-24 mt-10 mx-10 py-10 px-6">
            <div className="service-name h-11 w-8/12 mb-10 flex justify-between items-center pr-16">
              <label
                className="serviceName w-52 text-grey700 text-base font-medium"
                htmlFor="serviceName"
              >
                ชื่อบริการ
              </label>
              <input
                className="serviceName rounded-lg h-11 w-3/4 border border-grey300"
                type="text"
                name="serviceName"
                value={service_name}
                onChange={(event) => {
                  setService_name(event.target.value);
                }}
              />
            </div>
            <div className="choose-category h-11 w-8/12 mb-10 flex justify-between items-center pr-16">
              <label
                className="chooseCategory w-52 text-grey700 text-base font-medium"
                htmlFor="chooseCategory"
              >
                หมวดหมู่
              </label>
              <select
                className="input-chooseCategory rounded-lg h-11 w-3/4 border border-grey300"
                type="text"
                name="chooseCategory"
                value={category_name}
                onChange={(event) => {
                  setCategory_name(event.target.value);
                }}
              >
                <option disabled value="">
                  -- Select a category --
                </option>

                {category.map((dt) => {
                  return (
                    <option key={dt.category_id} value={dt.category_name}>
                      {dt.category_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="choose-image h-40 w-8/12 pr-16 mb-10 flex justify-between">
              <div className="text-grey700 w-52 text-base font-medium">
                รูปภาพ
              </div>

              <div className="add-image w-3/4 h-40">
                <div className="h-36 border border-dashed border-grey300 rounded-md py-6 flex flex-col items-center justify-between text-grey700 relative">
                  <img
                    className="w-9 h-9"
                    alt="addimage"
                    src={image.addPhoto}
                  />
                  <div className=" text-sm">
                    <label
                      htmlFor="upload"
                      className="text-blue600 font-normal mr-2 cursor-pointer"
                    >
                      อัพโหลดรูปภาพ
                      <input
                        id="upload"
                        name="servicePhoto"
                        type="file"
                        onChange={handleFileChange}
                        hidden
                      />
                    </label>
                    หรือ ลากและวางที่นี่
                  </div>
                  <div className="text-xs">PNG, JPG ขนาดไม่เกิน 5MB</div>
                </div>
                <div className="text-grey700 text-xs">
                  ขนาดภาพที่แนะนำ: 1440 x 225 PX
                </div>
                {Object.keys(servicePhotos).map((servicePhotosKey) => {
                  const file = servicePhotos[servicePhotosKey];
                  return (
                    <div key={servicePhotosKey} className="absolute">
                      <img
                        className="h-36 z-50"
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <hr className="break-line mb-10 text-grey300 "></hr>
            <div className="title mb-10 text-grey700 text-base font-medium ">
              รายการบริการย่อย
            </div>
            {subServiceList.map((subService, index) => {
              return (
                <div key={index}>
                  <div
                    id="add-details-box"
                    className=" h-full mb-10 flex justify-between"
                  >
                    <div className="flex flex-col w-2/5">
                      <label
                        className="orderName text-sm text-grey700"
                        htmlFor="orderName"
                      >
                        ชื่อรายการ
                      </label>
                      <input
                        className="orderName rounded-lg h-11 border border-grey300 mr-4"
                        type="text"
                        name="orderName"
                        value={subService.sub_service_name}
                        onChange={handleChange}
                        //   setSub_service({
                        //     sub_service_name: event.target.value
                        //   })
                        //   console.log(sub_service);
                        // }}
                      />
                    </div>
                    <div className="flex flex-col w-60">
                      <label className="serviceCharge text-sm text-grey700">
                        ค่าบริการ / 1 หน่วย
                      </label>
                      <input
                        className="serviceCharge rounded-lg h-11 border border-grey300 mr-4"
                        type="text"
                        name="serviceCharge"
                      />
                    </div>
                    <div className="flex flex-col w-60">
                      <label
                        className="unitService text-sm text-grey700 "
                        htmlFor="unitService"
                      >
                        หน่วยการบริการ
                      </label>
                      <input className="unitService rounded-lg h-11 border border-grey300 mr-4" />
                    </div>
                  </div>
                  <button
                    className="text-grey600 underline"
                    onClick={() => deleteList(index)}
                    type="button"
                  >
                    ลบรายการ
                  </button>
                </div>
              );
            })}
            <button
              className="add-new-order h-11 w-48 bg-white text-blue600 rounded-lg border"
              onClick={addList}
              type="button"
            >
              เพิ่มรายการ +
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddService;
