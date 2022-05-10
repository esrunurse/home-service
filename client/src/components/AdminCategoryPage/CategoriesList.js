/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icons from "../../AdminPhoto/imageIndex.js";
import "../../App.css";

export default function AdminCategories(props) {
  const { category, setCategory } = props;

  return (
    <div
      className="categories-data w-screen h-screen"
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
            className="categoryName"
            css={css`
              width: 262px;
              padding: 24px;
              font-weight: 400;
            `}
          >
            ชื่อหมวดหมู่
          </h5>
          <h5
            className="createdDate"
            css={css`
              width: 245px;
              padding: 24px;
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
              padding: 24px;
              font-weight: 400;
            `}
          >
            Action
          </h5>
        </div>
        <div className="bg-white rounded-b-lg">
          {category.map((data) => {
            return (
              <div
                key={data.id}
                className="data-category-box"
                css={css`
                  height: 88px;
                  display: flex;
                  justify-content: space-between;
                  border: 0.5px solid #e6e7eb;
                `}
              >
                <div
                  className="data-category"
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
                    {data.category_id}
                  </div>
                  <div
                    className="category-name"
                    css={css`
                      width: 262px;
                      padding: 24px;
                      font-weight: 300;
                    `}
                  >
                    {data.category_name}
                  </div>
                  <div
                    css={css`
                      width: 245px;
                      padding: 24px;
                      font-weight: 300;
                    `}
                  >
                    {data.category_created_date}
                  </div>
                  <div
                    css={css`
                      width: 245px;
                      padding: 24px;
                    `}
                  >
                    ไม่รู้
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
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
);}
