import { BaseButton } from "components/button/styled";
import { FC } from "react";
import Particles from "react-particles-js";
import { PageHeaderProps } from "./types";

const PageHeader: FC<PageHeaderProps> = ({
  pageTitle,
  subTitlePage,
  showSubcribeBox,
}) => {
  return (
    <div className="page-header-section">
      <div className="section-inner">
        <Particles
          params={{
            particles: {
              number: {
                value: 1000,
                density: {
                  enable: true,
                  value_area: 5000,
                },
              },
            },
          }}
        />
        <div className="container">
          <div className="page-title">
            <h1>{pageTitle}</h1>
            <h4>{subTitlePage}</h4>
            {showSubcribeBox && (
              <div className="subscribe">
                <div className="sub-inner">
                  <input
                    type="email"
                    className="input"
                    placeholder="Search By Block, Transaction, or Account"
                  />
                  <BaseButton className="btn-primary">Subscribe</BaseButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-image">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 117"
          xmlSpace="preserve"
        >
          <polyline
            className="st0"
            points="1920,33.5 1920,0 0,0 0,33.5 "
            fill="none"
          />
          <path
            className="st1"
            fill="#022640"
            d="M1920,0v33.5c0,0-480.6,83.5-960.6,83.5S0,33.5,0,33.5V0H1920z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;
