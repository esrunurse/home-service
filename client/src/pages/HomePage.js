import HomePageHeader from "../components/HomePage/HomePageHeader";
import PopularService from "../components/HomePage/HomePagePopular";
import HomePageJobNotice from "../components/HomePage/HomePageJobNotice";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../App.css"

function HomePage() {
  return (
    <div className="home-page">
      <Nav />
      <HomePageHeader />
      <PopularService />
      <HomePageJobNotice />
      <Footer />
    </div>
  );
}

export default HomePage;
