import '../App.css'
import Nav from "../components/HomePage/Nav";
import ServicePageHeader from "../components/ServicePage/ServicePageHeader";
import ServicesList from '../components/ServicePage/ServicePageServicesList'
import ServicePageJobNotice from "../components/ServicePage/ServicesPageJobNotice";
import Footer from "../components/HomePage/Footer";


function ServicePage() {
  return (
    <div className="service-page">
      <Nav />
      <ServicePageHeader />
      <ServicesList />
      <ServicePageJobNotice /> 
      <Footer />
    </div>
  );
}
export default ServicePage;
