import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useHook() {
  const navigate = useNavigate();

  //category
  const [category, setCategory] = useState([]);
  const [category_name, setCategory_name] = useState("");
  const [category_created_date, setCategory_created_date] = useState("");
  const [category_edited_date, setCategory_edited_date] = useState("");

  const getCategory = async () => {
    const result = await axios("http://localhost:4000/category");
    setCategory(result.data.data);
  };

  const deleteCategoryId = async (categoryId) => {
    await axios.delete(`http://localhost:4000/category/${categoryId}`);
    getCategory();
    document.getElementById("popUp").style.display = "none";
    navigate("/category-dashboard");
  };

  const getCategoryById = async (categoryId) => {
    const result = await axios.get(
      `http://localhost:4000/category/${categoryId}`
    );
    setCategory(result.data.data);
  };

  //Filter
  const [searchService, setSearchService] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(20000);
  const [orderFilter, setOrderFilter] = useState("asc");

  //service
  const [service, setService] = useState([]);
  const [service_name, setService_name] = useState("");
  const [servicePhotos, setServicePhotos] = useState({});
  const [subServiceList, setSubServiceList] = useState([
    { sub_service_name: "", unit: "", price_per_unit: 0 },
    { sub_service_name: "", unit: "", price_per_unit: 0 },
  ]);

  const getService = async () => {
    const result = await axios("http://localhost:4000/service");
    setService(result.data.data);
  };

  const deleteServiceId = async (serviceId) => {
    await axios.delete(`http://localhost:4000/service/${serviceId}`);
    getService();
    document.getElementById("popUp").style.display = "none";
    navigate("/service-dashboard");
  };

  const getServiceById = async (serviceId) => {
    const result = await axios.get(
      `http://localhost:4000/service/${serviceId}`
    );
    setService(result.data.data);
  };

  //Service Image
  const handleFileChange = (event) => {
    const uniqueId = Date.now();
    setServicePhotos({
      ...servicePhotos,
      [uniqueId]: event.target.files[0],
    });
  };

  const handleRemoveImageService = (event, servicePhotosKey) => {
    event.preventDefault();
    delete servicePhotos[servicePhotosKey];
    setServicePhotos({ ...servicePhotos });
  };

  //Create Service
  const createService = async (data) => {
    await axios.post("http://localhost:4000/service", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/service-dashboard");
  };

  const handleSubmitService = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("service_name", service_name);
    formData.append("category_name", category_name);
    formData.append("sub_service", JSON.stringify(subServiceList));

    for (let servicePhotosKey in servicePhotos) {
      formData.append("servicePhoto", servicePhotos[servicePhotosKey]);
    }

    createService(formData);
  };

  //alert box
  const [deleteService, setDeleteService] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState(false);
  const [service_Id, setService_Id] = useState();
  const [category_Id, setCategory_Id] = useState();

  const serviceDeleteAlert = async (serviceId) => {
    setService_Id(serviceId);
    setDeleteService(true);
  };

  const categoryDeleteAlert = async (categoryId) => {
    setCategory_Id(categoryId);
    setDeleteCategory(true);
  };

  return {
    searchCategory,
    setSearchCategory,
    category,
    setCategory,
    category_name,
    setCategory_name,
    category_created_date,
    setCategory_created_date,
    category_edited_date,
    setCategory_edited_date,
    getCategory,
    deleteCategoryId,
    getCategoryById,
    searchService,
    setSearchService,
    service,
    setService,
    deleteServiceId,
    getServiceById,
    getService,
    deleteService,
    setDeleteService,
    deleteCategory,
    setDeleteCategory,
    service_Id,
    setService_Id,
    serviceDeleteAlert,
    category_Id,
    setCategory_Id,
    categoryDeleteAlert,
    service_name,
    setService_name,
    servicePhotos,
    setServicePhotos,
    createService,
    handleFileChange,
    handleSubmitService,
    subServiceList,
    setSubServiceList,
    handleRemoveImageService,
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    orderFilter,
    setOrderFilter,
    categoryFilter,
    setCategoryFilter,
  };
}

export default useHook;
