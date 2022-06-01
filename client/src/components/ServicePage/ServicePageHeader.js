import "../../App.css";
import MultiRangeSlider from "./MultiRangeSlider";
import axios from "axios";
import { useEffect } from "react";
import { useUtils } from "../../hooks/utils";

function ServiceHeader(props) {
  const {
    category,
    searchService,
    setSearchService,
    setService,
    getCategory,
    orderFilter,
    setOrderFilter,
    categoryFilter,
    setCategoryFilter,
  } = props;

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

  const { minFilter, setMinFilter, maxFilter, setMaxFilter } = useUtils();
  return (
    <header className="service-header">
      <div className="banner">
        <h1 className=" text-white pt-16 mb-3 text-[32px] font-medium">บริการของเรา</h1>
        <p className="text-white font-normal text-base">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
        </p>
        <p className="text-white font-normal text-base">
          โดย พนักงานแม่บ้านและช่างมืออาชีพ
        </p>
      </div>
      <div className="h-20 flex items-center justify-evenly border-b border-grey300">
        <input
          id="search-text"
          name="search-text"
          type="text"
          placeholder="ค้นหาบริการ..."
          onChange={(event) => {
            setSearchService(event.target.value);
          }}
          value={searchService}
          className="border rounded-lg border-grey300 py-2.5 px-4 h-11"
        />
        <div className="flex">
          <div className="flex-col">
            <p className="text-xs text-grey700 font-normal mb-1">
              หมวดหมู่บริการ
            </p>
            <div className="dropdown cursor-pointer">
              {categoryFilter === "" ? (
                <p className="cursor-pointer mb-1">บริการทั้งหมด ▾</p>
              ) : (
                <p className="cursor-pointer">{categoryFilter} ▾</p>
              )}
              <div className="dropdown-content cursor-pointer w-44">
                <div
                  className="ml-4"
                  onClick={() => {
                    setCategoryFilter("");
                  }}
                >
                  <p>บริการทั้งหมด</p>
                </div>
                {category.map((data,index) => {
                  return (
                    <div
                      className="ml-4"
                      key={index}
                      onClick={() => {
                        const value = data.category_name;
                        setCategoryFilter(String(value));
                      }}
                    >
                      <p>{data.category_name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="vl"></div>
          <div className="flex-col">
            <p className="text-xs text-grey700 font-normal mb-1">ราคา</p>
            <div className="dropdown cursor-pointer">
              <p className="cursor-pointer w-36 mb-1">
                {" "}
                {minFilter} - {maxFilter} ฿ ▾{" "}
              </p>
              <div className="dropdown-content w-64 h-28">
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
            <p className="text-xs text-grey700 font-normal mb-1">เรียงตาม</p>
            <div className="dropdown cursor-pointer ">
              {orderFilter === "asc" ? (
                <p className="cursor-pointer w-56 mb-1">
                  ตามตัวอักษร (Ascending) ▾
                </p>
              ) : (
                <p className="cursor-pointer w-56">
                  ตามตัวอักษร (Descending) ▾
                </p>
              )}
              <div className="dropdown-content cursor-pointer w-60">
                <div
                  className="ml-4"
                  onClick={() => {
                    setOrderFilter("asc");
                  }}
                >
                  <p>ตามตัวอักษร (Ascending)</p>
                </div>
                <div
                  className="ml-4"
                  onClick={() => {
                    setOrderFilter("desc");
                  }}
                >
                  <p>ตามตัวอักษร (Descending)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-primary" onClick={searchServiceData}>
          ค้นหา
        </button>
      </div>
    </header>
  );
}

export default ServiceHeader;
