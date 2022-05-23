<<<<<<< HEAD:client/src/components/AdminCategoryPage/AdminServiceHeader.js
import '../../App.css'
import { useEffect } from 'react'
import image from '../../AdminPhoto/imageIndex'
import axios from 'axios'
// import { useNavigate } from "react-router-dom";

function AdminServiceHeader(props) {
  // const navigate = useNavigate();
  const { searchService, setSearchService, setService } = props
=======
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css";
import { useEffect } from "react";
import image from "../../AdminPhoto/imageIndex";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminServiceHeader(props) {
  const navigate = useNavigate();
  const { searchService, setSearchService, setService } = props;
>>>>>>> dev:client/src/components/AdminServicePage/AdminServiceHeader.js

  const searchServiceData = async () => {
    const results = await axios.get(
      `http://localhost:4000/service?keywords=${searchService}`
    )
    setService(results.data.data)
  }

  useEffect(() => {
    let timerId
    timerId = setTimeout(searchServiceData, 1000)
    return () => {
<<<<<<< HEAD:client/src/components/AdminCategoryPage/AdminServiceHeader.js
      clearTimeout(timerId)
    }
  }, [searchService])
=======
      clearTimeout(timerId);
    };
  }, [searchService]);
>>>>>>> dev:client/src/components/AdminServicePage/AdminServiceHeader.js

  return (
    <header className="admin-header ">
      <div className="header-name pl-60 w-screen flex items-center h-20 pr-10 justify-between border-b border-grey300 ">
        <h1 className="text-xl font-medium pl-10">บริการ</h1>
        <div className="flex">
          <input
            id="search-text"
            name="search-text"
            type="text"
            placeholder="ค้นหาบริการ..."
            onChange={(event) => {
              setSearchService(event.target.value)
            }}
            value={searchService}
            className="border rounded-lg border-grey300 py-2.5 px-4"
          />
<<<<<<< HEAD:client/src/components/AdminCategoryPage/AdminServiceHeader.js
          <button className="btn-primary flex items-center ml-6">
            <div className="text-base font-medium mr-3">เพิ่มบริการ</div>
            <img alt="Plus Symbol" src={image.plusSign} />
=======
          <button className="btn-primary flex items-center ml-6" onClick={() => navigate("/create-service")}>
            <div
              className="text-base font-medium mr-3"
            >
              เพิ่มบริการ
            </div>
            <img src={image.plusSign} />
>>>>>>> dev:client/src/components/AdminServicePage/AdminServiceHeader.js
          </button>
        </div>
      </div>
    </header>
  )
}

export default AdminServiceHeader
