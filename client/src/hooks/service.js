import { useState } from "react";

function useService() {
  const [searchService, setSearchService] = useState("");
  const [service, setService] = useState([]);

  return {
    searchService,
    setSearchService,
    service,
    setService,
  };
}

export default useService;
