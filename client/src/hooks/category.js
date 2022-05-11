import { useState } from "react";

function useCategory() {
  const [searchService, setSearchService] = useState("");
  const [service, setService] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [category, setCategory] = useState([]);
  const [category_name, setCategory_name] = useState("");
  const [category_created_date, setCategory_created_date] = useState("");
  const [category_edited_date, setCategory_edited_date] = useState("");

  return {
    searchService,
    setSearchService,
    service,
    setService,
    searchCategory,
    setSearchCategory,
    category,
    setCategory,
    category_name,
    setCategory_name,
    category_created_date,
    setCategory_created_date,
    category_edited_date,
    setCategory_edited_date
  };
}

export default useCategory;
