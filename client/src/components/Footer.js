import image from '../HomePagePhoto/imageIndex'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="home-page-footer">
      <div className="h-[150px] flex justify-between items-center px-[10vw] bg-white">
        <div className="cursor-pointer flex" onClick={() => navigate('/')}>
          <img
            className="w-[39.11px] h-[39.11px]"
            alt="homeservices"
            src={image.logoHomeService}
          />
          <h1 className="text-blue600 no-underline text-[29.33px] leading-[44.35px]">
            HomeServices
          </h1>
        </div>
        <div className="footer-contact1">
          <div className="mb-2">บริษัท โฮมเซอร์วิสเซส จำกัด</div>
          <div className="text-grey800">
            452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
          </div>
        </div>
        <div className="footer-contact2">
          <div className="flex items-center mb-2 text-grey800">
            <img
              className=" w-[15px] h-[15px] mr-2.5"
              alt="phone icon"
              src={image.phoneIcon}
            />
            080-540-6357
          </div>
          <div className="flex items-center text-grey800">
            <img
              className="w-[16.67px] h-[13.33px] mr-2.5"
              alt="email icon"
              src={image.envelopeIcon}
            />
            contact@homeservices.co
          </div>
        </div>
      </div>
      <div className="h-[40px] bg-grey100 flex justify-between items-center px-[10vw]">
        <p className="text-xs leading-[150%] text-grey500 my-1">
          copyright © 2021 HomeServices.com All rights reserved
        </p>
        <div className="text-grey700 text-sm leading-[150%] flex justify-evenly">
          <p className="ml-6 my-1">เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์</p>
          <p className="ml-6 my-1">นโยบายความเป็นส่วนตัว</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
