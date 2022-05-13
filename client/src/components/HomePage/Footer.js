/** @jsxImportSource @emotion/react */
import '../../App.css'
import { css } from '@emotion/react'
import image from '../../HomePagePhoto/imageIndex.js'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      className="home-page-footer"
      css={css`
        width: 100vw;
      `}
    >
      <div
        className="footer1"
        css={css`
          width: 100vw;
          height: 151px;
          display: flex;
          justify-content: space-between;
          padding: 0px 10vw 0px 10vw;
          align-items: center;
        `}
      >
        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
          css={css`
            display: flex;
          `}
        >
            <img
              alt="homeservices"
              src={image.logoHomeService}
              css={css`
                width: 39.11px;
                height: 39.11px;
              `}
            />
          <h1
            className="text-blue600 no-underline"
            css={css`
              font-size: 29.33px;
              line-height: 44.35px;
            `}
          >
            HomeServices
          </h1>
        </div>
        <div className="footer-contact1">
          <div className="mb-2">บริษัท โฮมเซอร์วิสเซส จำกัด</div>
          <div
            css={css`
              color: #4b5160;
            `}
          >
            452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
          </div>
        </div>
        <div className="footer-contact2">
          <div
            className="flex items-center mb-2"
            css={css`
              color: #4b5160;
            `}
          >
            <img
              alt="phone icon"
              src={image.phoneIcon}
              css={css`
                width: 15px;
                height: 15px;
                margin-right: 10px;
              `}
            />
            080-540-6357
          </div>
          <div
            className="flex items-center"
            css={css`
              color: #4b5160;
            `}
          >
            <img
              alt="email icon"
              src={image.envelopeIcon}
              css={css`
                width: 16.67px;
                height: 13.33px;
                margin-right: 10px;
              `}
            />
            contact@homeservices.co
          </div>
        </div>
      </div>

      <div
        className="footer2"
        css={css`
          width: 100vw;
          height: 42px;
          background: #efeff2;
          display: flex;
          justify-content: space-between;
          padding: 0px 10vw 0px 10vw;
          align-items: center;
        `}
      >
        <p
          css={css`
            font-size: 12px;
            line-height: 150%;
            color: #9aa1b0;
          `}
        >
          copyright © 2021 HomeServices.com All rights reserved
        </p>
        <div
          css={css`
            color: #646c80;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <p
            css={css`
              margin-right: 24px;
            `}
          >
            เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
          </p>
          <p>นโยบายความเป็นส่วนตัว</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
