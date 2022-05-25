import image from "../../HomePagePhoto/imageIndex";
import React from "react";
import "../../App.css"

function ServicesList(props) {
  const { service } = props;

  return (
    <div className="px-[5%]">
      {service.length !== 0 && service[0].service_name !== ""  ? (<div
        className="w-full py-16 grid grid-cols-3 justify-items-center"
      >
        {service.map((data) => {
          return (
            <div
              className="my-5 bg-white border border-grey300 rounded-lg w-[349px] h-[369px]"
              key={data.service_id}
            >
              <img
                className="rounded-t-lg object-cover w-[349px] h-[200px]"
                src={data.service_photo.url}
                alt={data.service_name}
              />
              <div className="p-6">
                <div className="category-name font-normal mb-2">
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
                <h2>{data.service_name}</h2>
                <div className="h-5 flex items-center font-normal text-sm text-grey700 mt-1 mb-3.5">
                  <img
                    className="mr-2.5 h-4 w-4"
                    src={image.tag}
                    alt="Price Tag"
                  />
                  {data.min_price === data.max_price ? (
                    <div>
                      ค่าบริการ{" "}
                      {Number(data.min_price).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      ฿
                    </div>
                  ) : (
                    <div>
                      ค่าบริการประมาณ{" "}
                      {Number(data.min_price).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      -{" "}
                      {Number(data.max_price).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      ฿
                    </div>
                  )}
                </div>
                <button className="btn-ghost">เลือกบริการ</button>
              </div>
            </div>
          );
        })}
      </div>) : (null)  }
      
    </div>
  );
}
export default ServicesList;