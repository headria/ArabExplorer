import styled from "styled-components";

export const HeaderContainer = styled.div`
  .header-section {
    position: relative;
    margin-bottom: 7rem;
    .section-inner {
      background-color: ${({ theme }) => theme.colors.primary};
      padding-top: 200px;
    }
    .information {
      position: relative;
      z-index: 50;
      h1 {
        color: white;
        font-size: 60px;
        margin-bottom: 2rem;
        font-family: ${({ theme }) => theme.colors.bodyFont1};
      }
      h3 {
        color: white;
        opacity: 0.8;
        font-weight: 500;
        font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
      }
    }
    .subscribe {
      margin-top: 2rem;
      h6 {
        font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
        font-weight: 400;
        color: white;
        margin-bottom: 15px;
      }
      .sub-inner {
        position: relative;
        width: 400px;
        .input {
          width: 100%;
          height: 48px;
          border-radius: 50px;
          padding: 5px 50px 5px 15px;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.textDark};
          border: none;
        }
        .btn {
          position: absolute;
          right: 2px;
          top: 2px;
          height: 44px;
        }
      }
    }
    .image-cover {
      position: relative;
      z-index: 50;
      .img-inner {
        width: 520px;
        position: absolute;
        top: 0;
        right: 0;
        img {
          width: 100%;
        }
      }
    }
    .img-bottom {
      position: relative;
      top: -2px;
      z-index: 1;
      img {
        width: 100%;
      }
    }
  }
  canvas {
    display: block;
    vertical-align: bottom;
  }

  .page-header-section {
    position: relative;
    .section-inner {
      background-color: ${({ theme }) => theme.colors.primary};
      position: relative;
      #tsparticles {
        height: 100%;
      }
      .page-title {
        position: relative;
        z-index: 300;
        padding: 200px 0 50px 0;
        text-align: center;
        h1 {
          font-size: 50px;
          color: white;
          margin-bottom: 1.5rem;
        }
        h4 {
          color: white;
          opacity: 0.8;
          font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
          font-weight: 400;
        }
      }
    }
    .subscribe {
      margin-top: 2rem;
      h6 {
        font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
        font-weight: 400;
        color: white;
        margin-bottom: 15px;
      }
      .sub-inner {
        position: relative;
        width: 400px;
        margin: 0 auto;
        .input {
          width: 100%;
          height: 48px;
          border-radius: 50px;
          padding: 5px 50px 5px 15px;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.textDark};
          border: none;
        }
        .btn {
          position: absolute;
          right: 2px;
          top: 2px;
          height: 44px;
        }
      }
    }
    .bottom-image {
      position: relative;
      top: -5px;
      z-index: 1;
      svg {
        width: 100%;
      }
    }
  }

  #tsparticles {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 70%;
    background-color: #022640;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  @media (max-width: 1199px) {
    .header-section .image-cover .img-inner {
      width: 450px;
    }
  }
  @media (max-width: 992px) {
    .header-section {
      .section-inner {
        padding-top: 130px;
      }
      .information {
        padding-bottom: 150px;
      }
      .image-cover {
        .img-inner {
          position: absolute;
          width: 300px;
          right: 50%;
          top: -100px;
          transform: translateX(50%);
        }
      }
    }
    .page-header-section {
      .section-inner {
        padding-bottom: 40px;
      }
    }
  }
  @media (max-width: 575px) {
    .header-section {
      .subscribe .sub-inner {
        width: 100%;
      }
      .image-cover {
        .img-inner {
          position: absolute;
          width: 200px;
          right: 50%;
          top: -100px;
          transform: translateX(50%);
        }
      }
    }
  }
`;
