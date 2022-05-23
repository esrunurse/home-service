import "../../App.css";
import image from "../../ServicePagePhoto/imageIndex";

function ServicePageJobNotice() {
  return (
    <div className="service-page-job-notice">
      <div className="flex justify-center items-center bg-blue600 relative">
        <p className="text-white text-xl py-20 px-80 text-center">
          เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร
          โดยทีมช่างมืออาชีพมากกว่า 100 ทีม
          <br />
          สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง
          <br />
          ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม.
          <br />
          มั่นใจ ช่างไม่ทิ้งงาน พร้อมรับประกันคุณภาพงาน
        </p>
        <img
          src={image.logoHomeService}
          alt="home-service-logo"
          className="absolute right-0 bottom-0 mix-blend-screen"
        />
      </div>
    </div>
  );
}

export default ServicePageJobNotice;
