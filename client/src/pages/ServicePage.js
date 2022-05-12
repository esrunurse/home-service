import "../App.css";
import Nav from "../components/HomePage/Nav";
import ServicePageHeader from "../components/ServicePage/ServicePageHeader";
import ServicesList from "../components/ServicePage/ServicePageServicesList";
import ServicePageJobNotice from "../components/ServicePage/ServicesPageJobNotice";
import Footer from "../components/HomePage/Footer";
import useService from "../hooks/service";

function ServicePage() {
  const { searchService, setSearchService, service, setService } = useService();
  return (
    <div className="service-page">
      <Nav />
      <ServicePageHeader
        searchService={searchService}
        setSearchService={setSearchService}
        setService={setService}
      />
      <ServicesList service={service}/>
      <ServicePageJobNotice />
      <Footer />
    </div>
  );
}
export default ServicePage;
