import "../App.css";
import Nav from "../components/HomePage/Nav";
import ServicePageHeader from "../components/ServicePage/ServicePageHeader";
import ServicesList from "../components/ServicePage/ServicePageServicesList";
import ServicePageJobNotice from "../components/ServicePage/ServicesPageJobNotice";
import Footer from "../components/HomePage/Footer";
import useHook from "../hooks/util";

function ServicePage() {
  const { searchService, setSearchService, service, setService, getCategory, category, setCategory } = useHook();
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
      />
      <ServicesList service={service}/>
      <ServicePageJobNotice />
      <Footer />
    </div>
  );
}
export default ServicePage;
