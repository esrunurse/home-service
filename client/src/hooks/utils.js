import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useUtils() {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  //category
  const [category, setCategory] = useState([]);
  const [category_name, setCategory_name] = useState("");
  const [category_created_date, setCategory_created_date] = useState("");
  const [category_edited_date, setCategory_edited_date] = useState("");

  const getCategory = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios("http://localhost:4000/category");
      setCategory(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const deleteCategoryId = async (categoryId) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await axios.delete(`http://localhost:4000/category/${categoryId}`);
      getCategory();
      document.getElementById("popUp").style.display = "none";
      setIsLoading(false);
      navigate("/category-dashboard");
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const getCategoryById = async (categoryId) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios.get(
        `http://localhost:4000/category/${categoryId}`
      );
      setCategory(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  //Create Category
  const createCategory = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      await axios.post("http://localhost:4000/category", { category_name });
      navigate("/category-dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  //Filter
  const [searchService, setSearchService] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(20000);
  const [orderFilter, setOrderFilter] = useState("asc");

  //service
  const [service, setService] = useState([
    {
      service_name: "",
      category_name: "",
      service_photo: { url: "", publicId: "" },
      sub_service_name: "",
      unit: "",
      price_per_unit: 0,
      service_created_date: "",
      service_edited_date: "",
      sub_service_quantity: 0,
    },
  ]);
  const [service_name, setService_name] = useState("");
  const [sub_service_name, setSub_service_name] = useState("");
  const [price_per_unit, setPrice_per_unit] = useState(0);
  const [unit, setUnit] = useState("");
  const [servicePhotos, setServicePhotos] = useState({});
  const [subServiceList, setSubServiceList] = useState([
    { sub_service_name: "", unit: "", price_per_unit: 0 },
    { sub_service_name: "", unit: "", price_per_unit: 0 },
  ]);
  const [editHeader, setEditHeader] = useState("");

  const getService = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios("http://localhost:4000/service");
      setService(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const deleteServiceId = async (serviceId) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await axios.delete(`http://localhost:4000/service/${serviceId}`);
      getService();
      document.getElementById("popUp").style.display = "none";
      setIsLoading(false);
      navigate("/service-dashboard");
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const getServiceById = async (serviceId) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios.get(
        `http://localhost:4000/service/${serviceId}`
      );
      setService(result.data.data);
      setEditHeader(result.data.data[0].service_name);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
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
    try {
      setIsError(false);
      setIsLoading(true);
      await axios.post("http://localhost:4000/service", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsLoading(false);
      navigate("/service-dashboard");
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
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

  //checkout
  const [bookingDateAndTime, setBookingDateAndTime] = useState(null);
  const [step, setStep] = useState(1);
  const [subService, setSubService] = useState([]);
  const [fullAddress, setFullAddress] = useState({
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
  });
  const [total, setTotal] = useState("");
  const [note, setNote] = useState("");

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
    sub_service_name,
    setSub_service_name,
    price_per_unit,
    setPrice_per_unit,
    unit,
    setUnit,
    editHeader,
    setEditHeader,
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    createCategory,
    step,
    setStep,
    fullAddress,
    setFullAddress,
    bookingDateAndTime,
    setBookingDateAndTime,
    subService,
    setSubService,
    total,
    setTotal,
    note,
    setNote,
  };
}
