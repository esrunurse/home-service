/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css";
import image from "../../HomePagePhoto/imageIndex.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function PopularService() {
  const navigate = useNavigate();

  const [service, setService] = useState([]);

  const getService = async () => {
    const result = await axios("http://localhost:4000/service");
    setService(result.data.data);
  };

  useEffect(() => {
    getService();
  }, []);

  console.log(service);

  return (
    <div
      className="popular-service"
      css={css`
        background-color: rgba(229, 229, 229, 0.2);
      `}
    >
      <h1 className="text-blue950 text-center pt-14">บริการยอดฮิตของเรา</h1>
      <div
        className="w-screen px-20 py-8"
        css={css`
          display: grid;
          grid-template-columns: 2fr 2fr 2fr;
        `}
      >
        {service.slice(0, 3).map((data) => {
          return (
            <div
              className="my-5 bg-white border border-grey300 rounded-lg"
              css={css`
                width: 349px;
                height: 369px;
              `}
              key={data.service_id}
            >
              <img
                className="rounded-t-lg"
                src={data.service_photo.url}
                alt={data.service_name}
                css={css`
                  width: 349px;
                  height: 200px;
                `}
              />
              <div className="p-6">
                <div className="category-name font-normal mb-2">
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
                <a className="cursor-pointer">เลือกบริการ</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-screen">
        <button
          className="btn-primary"
          css={css`
            width: 155px;
            height: 44px;
            margin-bottom: 147px;
          `}
          onClick={() => navigate("/service")}
        >
          ดูบริการท้ังหมด
        </button>
      </div>
    </div>
  );
}

export default PopularService;
