/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import image from "../../HomePagePhoto/imageIndex";

function ServicesList(props) {
  const { service } = props;

  return (
    <div
      className="our-services"
      css={css`
        width: 100vw;
        height: 1384px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {/* <div
        className="service-box"
        css={css`
          width: 1121px;
          height: 1203px;
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;
          grid-template-rows: 2fr 2fr 1fr;
        `}
      >
        {service.map((data, index) => {
          return (
            <div
              className="service-card"
              css={css`
                width: 349px;
                height: 369px;
                background-color: #ffff;
                border: 1px solid #ccd0d7;
                border-radius: 8px;
              `}
            >content jaa</div>
          );
        })}
      </div> */}
    </div>
  );
}
export default ServicesList;
