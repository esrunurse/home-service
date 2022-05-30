import "../App.css";
import Nav from "../components/Nav";
import ServicePageHeader from "../components/ServicePage/ServicePageHeader";
import ServicesList from "../components/ServicePage/ServicePageServicesList";
import ServicePageJobNotice from "../components/ServicePage/ServicesPageJobNotice";
import Footer from "../components/Footer";
import { useUtils } from "../hooks/utils";

function ServicePage() {
  const {
    searchService,
    setSearchService,
    service,
    setService,
    getCategory,
    category,
    setCategory,
    orderFilter,
    setOrderFilter,
    categoryFilter,
    setCategoryFilter,
  } = useUtils();
  return (
    <div className="service-page">
      <Nav />
      <ServicePageHeader
        service={service}
        searchService={searchService}
        setSearchService={setSearchService}
        setService={setService}
        getCategory={getCategory}
        category={category}
        setCategory={setCategory}
        orderFilter={orderFilter}
        setOrderFilter={setOrderFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <ServicesList service={service} />
      <ServicePageJobNotice />
      <Footer />
    </div>
  );
}
export default ServicePage;
