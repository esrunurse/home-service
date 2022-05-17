/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css";
import MultiRangeSlider from "./MultiRangeSlider";
import axios from "axios";
import { useEffect } from "react";

function ServiceHeader(props) {
  const { category, searchService, setSearchService, setService, getCategory } = props;

  const searchServiceData = async () => {
    const results = await axios.get(
      `http://localhost:4000/service?keywords=${searchService}`
    );
    setService(results.data.data);
  };

  useEffect(() => {
    let timerId;
    timerId = setTimeout(searchServiceData, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchService]);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <header className="service-header">
      <div className="banner">
        <h1 className=" text-white pt-16 mb-3">บริการของเรา</h1>
        <p className="text-white font-normal text-base">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
        </p>
        <p className="text-white font-normal text-base">
          โดย พนักงานแม่บ้านและช่างมืออาชีพ
        </p>
      </div>
      <div className="h-20 w-screen flex items-center justify-evenly border-b border-grey300">
        <input
          id="search-text"
          name="search-text"
          type="text"
          placeholder="ค้นหาบริการ..."
          onChange={(event) => {
            setSearchService(event.target.value);
          }}
          value={searchService}
          className="border rounded-lg border-grey300"
          css={css`
            padding: 10px 0px 10px 16px;
          `}
        />

        <div className="flex">
          <div className="flex-col">
            <p className="text-xs text-grey700 font-normal">หมวดหมู่บริการ</p>
            <div className="dropdown cursor-pointer">
              <p className="cursor-pointer">บริการทั้งหมด ▾ </p>
              <div
                className="dropdown-content cursor-pointer "
              >
                {category.map((data) => {
                  return (<div className="ml-4" key={data.category_id}>
                  <p>{data.category_name}</p>
                </div>)
                })}
              </div>
            </div>
          </div>
          <div className="vl"></div>
          <div className="flex-col">
            <p className="text-xs text-grey700 font-normal">ราคา</p>
            <div className="dropdown cursor-pointer">
              <p className="cursor-pointer"> 0-3000฿ ▾ </p>
              <div
                className="dropdown-content"
                css={css`
                  width: 253px;
                  height: 112px;
                `}
              >
                <div>
                  <MultiRangeSlider
                    min={0}
                    max={3000}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="vl"></div>
          <div className="flex-col">
            <p className="text-xs text-grey700 font-normal">เรียงตาม</p>
            <div className="dropdown cursor-pointer">
              <p className="cursor-pointer">บริการแนะนำ ▾ </p>
              <div
                className="dropdown-content cursor-pointer"
                css={css`
                  height: 123px;
                `}
              >
                <div className="ml-4 ">
                  <p>บริการแนะนำ</p>
                </div>
                <div className="ml-4 ">
                  <p>บริการยอดนิยม</p>
                </div>
                <div className=" ml-4 ">
                  <p>ตามตัวอักษร</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-primary">ค้นหา</button>
      </div>
    </header>
  );
}

export default ServiceHeader;
