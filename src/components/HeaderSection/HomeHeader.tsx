import { BaseButton } from "components/button/styled";
import Particles from "react-particles-js";

const HomeHeader = ({}) => {
  return (
    <div className="header-section">
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
      <div className="section-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="information">
                <h1>Arab Network</h1>
                <h3>The Future of Blockchain Technology in the Arab world.</h3>
                <div className="subscribe">
                  <h6>Subscribe to our newsletter</h6>
                  <div className="sub-inner">
                    <input
                      type="email"
                      className="input"
                      placeholder="Enter Your Email Address"
                    />
                    <BaseButton className="btn-primary">Subscribe</BaseButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="image-cover">
                <div className="img-inner">
                  <img src="assets/images/bg/star.svg" alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-bottom">
        <img src="assets/images/vector/header-desert.svg" alt="desert" />
      </div>
    </div>
  );
};

export default HomeHeader;
