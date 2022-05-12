/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import image from "../../HomePagePhoto/imageIndex";

function ServicesList(props) {
  const { service } = props;
  console.log(service);

  return (
    <div className="our-services w-screen flex justify-center items-center">
      <div
        className="w-screen px-20 py-16"
        css={css`
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;
        `}
      >
        {service.map((data, index) => {
          return (
            <div
              className="my-5"
              css={css`
                width: 349px;
                height: 369px;
                background-color: #ffff;
                border: 1px solid #ccd0d7;
                border-radius: 8px;
              `}
              key={data.service_id}
            >
              <img
                src={data.service_photo.url}
                alt={data.service_name}
                css={css`
                  width: 349px;
                  height: 200px;
                  border-radius: 8px 8px 0px 0px;
                `}
              />
              <div
                className="service-description"
                css={css`
                  margin: 16px 24px;
                `}
              >
                <div
                  className="category-name"
                  css={css`
                    height: 26px;
                    width: 79px;
                    background-color: #e7eeff;
                    border-radius: 8px;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 150%;
                    color: #0e3fb0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 8px;
                  `}
                >
                  {data.category_name}
                </div>
                <h2>{data.service_name}</h2>
                <div
                  css={css`
                    height: 21px;
                    display: flex;
                    align-items: center;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #646c80;
                    margin: 4px 0px 22px 0px;
                  `}
                >
                  <img
                    src={image.tag}
                    alt="Price Tag"
                    css={css`
                      width: 16px;
                      height: 16px;
                      margin-right: 9.33px;
                    `}
                  />
                  ค่าบริการประมาณ {data.min_price} - {data.max_price} ฿
                </div>
                <a className="cursor-pointer">เลือกบริการ</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ServicesList; 