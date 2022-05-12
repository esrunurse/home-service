/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icons from "../../AdminPhoto/imageIndex.js";
import "../../App.css";
import Moment from "react-moment";
// import { useNavigate, useParams } from "react-router-dom";

function AdminService(props) {
  const { service } = props;
//   const navigate = useNavigate();
  return (
    <div
      className="service-data w-screen h-screen"
      css={css`
        background: #e5e5e5;
        padding: 41px;
        border: 0.5px solid #e6e7eb;
      `}
    >
      <div
        className="pl-60"
        css={css`
          height: 305px;
          border-radius: 5px;
        `}
      >
        <div
          className="table header"
          css={css`
            height: 41px;
            background-color: #efeff2;
            color: #646c80;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            align-items: center;
            padding-left: 56px;
            border-radius: 5px 5px 0px 0px;
          `}
        >
          <h5
            className="order number"
            css={css`
              width: 80px;
              padding: 24px;
              font-weight: 400;
            `}
          >
            ลำดับ
          </h5>
          <h5
            className="serviceName"
            css={css`
              width: 262px;
              padding: 24px;
              font-weight: 400;
            `}
          >
            ชื่อบริการ
                  </h5>
                  <h5
            className="createdDate"
            css={css`
              width: 245px;
              padding: 24px;
              font-weight: 400;
            `}
          >
            หมวดหมู่
          </h5>
                  <h5
            className="createdDate"
            css={css`
              width: 245px;
              padding: 24px;
              font-weight: 400;
            `}
          >
            สร้างเมื่อ
          </h5>
          <h5
            className="lastEdited"
            css={css`
              width: 357px;
              padding: 24px;
              font-weight: 400;
            `}
          >
            แก้ไขล่าสุด
          </h5>
          <h5
            className="action"
            css={css`
              width: 120px;
              padding: 24px 30px 24px 24px;
              font-weight: 400;
            `}
          >
            Action
          </h5>
        </div>
        <div className="bg-white rounded-b-lg">
          {service.map((data, index) => {
            return (
              <div
                key={data.service_id}
                className="data-service-box"
                css={css`
                  height: 88px;
                  display: flex;
                  justify-content: space-between;
                  border: 0.5px solid #e6e7eb;
                `}
              >
                <div
                  className="data-service"
                  css={css`
                    width: 888px;
                    height: 88px;
                    padding-left: 56px;
                    display: flex;
                    align-items: center;
                  `}
                >
                  <div
                    className="order-number"
                    css={css`
                      width: 80px;
                      text-align: center;
                      font-weight: 300;
                    `}
                  >
                    {index+1}
                  </div>
                  <div
                    className="service-name"
                    css={css`
                      width: 262px;
                      padding: 24px;
                      font-weight: 300;
                    `}
                  >
                    {data.service_name}
                  </div>
                  <div
                    css={css`
                      width: 245px;
                      padding: 24px;
                      font-weight: 300;
                    `}
                  >
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.service_created_date}
                    </Moment>
                  </div>
                  <div
                    css={css`
                      width: 245px;
                      padding: 24px;
                    `}
                  >
                    <Moment format="DD/MM/YYYY hh:mm A">
                      {data.service_edited_date}
                    </Moment>
                  </div>
                </div>
                <div
                  className="icons-box"
                  css={css`
                    width: 120px;
                    height: 88px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding-right: 24px;
                  `}
                >
                  <img
                    alt="Delete"
                    src={icons.trashIcon}
                    css={css`
                      width: 24px;
                      height: 24px;
                    `}
                  />
                  <img
                    alt="Edit"
                    src={icons.editIcon}
                    css={css`
                      width: 24px;
                      height: 24px;
                    `}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminService;
