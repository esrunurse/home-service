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
    const result = await axios.delete(
      `http://localhost:4000/category/${categoryId}`
    );
    getCategory();
    navigate("/category-dashboard");
    console.log(result);
  };

  const getCategoryById = async (categoryId) => {
    const result = await axios.get(
      `http://localhost:4000/category/${categoryId}`
    );
    setCategory(result.data.data);
  };

  //service
  const [searchService, setSearchService] = useState("");
  const [service, setService] = useState([]);

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
  };
}

export default useHook;
