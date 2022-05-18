import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useHook() {
  const navigate = useNavigate();
  //category
  const [searchCategory, setSearchCategory] = useState("");
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

  const [searchService, setSearchService] = useState("");
  const [service, setService] = useState([]);
  const [service_name, setService_name] = useState("");
  const [sub_service_name, setSub_service_name] = useState("");
  // const [sub_service_list, setSub_service_list] = useState({});
  const [unit, setUnit] = useState("");
  const [price_per_unit, setPrice_per_unit] = useState("");
  const [servicePhotos, setServicePhotos] = useState({});
  const [sub_service, setSub_service] = useState({});

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

  const createService = async (data) => {
    await axios.post("http://localhost:4000/service", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/service-dashboard");
  };

  const handleFileChange = (event) => {
    const uniqueId = Date.now();
    setServicePhotos({
      ...servicePhotos,
      [uniqueId]: event.target.files[0],
    });
  };

  // const subServiceChange = (event) => {
  //   setSub_service(...sub_service,{
  //     sub_service_name: event.target.value,
  //     unit: event.target.value,
  //     price_per_unit: event.target.value,
  //   });
  // };

  const handleSubmitService = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("service_name", service_name);
    formData.append("category_name", category_name);

    for (let servicePhotosKey in servicePhotos) {
      formData.append("servicePhoto", servicePhotos[servicePhotosKey]);
    }
    // for (let sub_serviceKey in sub_service) {
    //   formData.append("sub_service", sub_service[sub_serviceKey]);
    // }
    createService(formData);
  };

  // const handleRemoveImageService = (event, service_photoKey) => {
  //   event.preventDefault();
  //   delete service_photo[service_photoKey];
  //   setService_photo({ ...service_photo });
  // };

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
    sub_service,
    setSub_service,
    sub_service_name,
    setSub_service_name,
    price_per_unit,
    setPrice_per_unit,
    unit,
    setUnit,
    servicePhotos,
    setServicePhotos,
    createService,
    handleFileChange,
    handleSubmitService,
    // sub_service_list,
    // setSub_service_list,
    // handleRemoveImageService,
  };
}

export default useHook;
