/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css";
import MultiRangeSlider from "./MultiRangeSlider";
import axios from "axios";
import { useEffect } from "react";
import useHook from "../../hooks/util";

function ServiceHeader(props) {
  const { category, searchService, setSearchService, setService, getCategory, orderFilter, setOrderFilter, categoryFilter, setCategoryFilter } = props;
  const searchServiceData = async () => {
    const results = await axios.get(
      `http://localhost:4000/service?keywords=${searchService}&categoryFilter=${categoryFilter}&maxPriceFilter=${maxFilter}&minPriceFilter=${minFilter}&orderFilter=${orderFilter}`
    );
    setService(results.data.data);
  };

  useEffect(() => {
    let timerId;
    timerId = setTimeout(searchServiceData, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

  const { minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter, } = useHook();
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
            <select
              className="cursor-pointer"
              name="filter-category"
              type="text"
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(String(e.target.value))
              }}
            >
              <option value="" className="cursor-pointer  text-grey700 text-sm font-normal focus:text-blue700 ">
                บริการทั้งหมด {""}
              </option>
                {category.map((data) => {
                  return (
                    <option
                      className="cursor-pointer text-grey700 text-sm font-normal focus:text-blue700 "
                      key={data.category_id}
                      value={data.category_name}
                    >
                      {data.category_name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="vl"></div>
          <div className="flex-col">
            <p className="text-xs text-grey700 font-normal">ราคา</p>
            <div className="dropdown cursor-pointer">
              <p className="cursor-pointer w-36"> {minFilter} - {maxFilter} ฿ ▾ </p>
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
                    max={20000}
                    minFilter={minFilter}
    setMinFilter={setMinFilter}
    maxFilter={maxFilter}
    setMaxFilter={setMaxFilter}
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
              <select
              className="cursor-pointer"
              name="filter-category"
              type="text"
              value={orderFilter}
              onChange={(e) => { setOrderFilter(e.target.value) }}
            >
              <option value="asc" className="cursor-pointer  text-grey700 text-sm font-normal focus:text-blue700 ">
                ตามตัวอักษร (Ascending) {""}
              </option>
              <option value="desc" className="cursor-pointer  text-grey700 text-sm font-normal focus:text-blue700 ">
                ตามตัวอักษร (Descending) {""}
              </option>
            </select>
            
          </div>
        </div>
        <button className="btn-primary" onClick={searchServiceData}>ค้นหา</button>
      </div>
    </header>
  );
}

export default ServiceHeader;
