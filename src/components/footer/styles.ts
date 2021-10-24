import styled from "styled-components";
import { darken } from "polished";

export const FooterContainer = styled.div`
  .footer {
    background-color: white;
    position: relative;
    padding-top: 4rem;
    .footer-inner {
      width: 1000px;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
    .logo {
      padding: 1rem 0;
      text-align: center;
      a {
        display: inline-block;
        padding: 1rem 0;
        margin: 0 auto;
        img {
          width: 120px;
        }
      }
      .desc {
        font-family: ${({ theme }) => theme.colors.bodyFont2};
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.textGray};
      }
    }
    .footer-links {
      margin-top: 1.5rem;
      .title {
        font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
        font-size: 18px;
        font-weight: 600;
      }
      .link-list {
        margin-top: 2rem;
        li {
          margin-top: 5px;
          a {
            font-family: ${({ theme }) => theme.colors.bodyFont2};
            display: inline-block;
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.textGray};
            &:hover {
              color: ${({ theme }) => theme.colors.secondary};
            }
          }
        }
      }
      .social-icons-list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 2rem;
        li {
          flex: 0 0 33.33%;
          width: 33.33%;
          margin-bottom: 15px;
          a {
            width: 50px;
            height: 50px;
            background-color: ${({ theme }) => theme.colors.desertGold};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            svg {
              fill: white;
            }
            &:hover {
              background-color: ${({ theme }) =>
                darken(10, theme.colors.desertGold)};
            }
          }
        }
      }
    }
    .copyright {
      text-align: center;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      padding: 10px;
      font-size: 13px;
      font-family: ${({ theme }) => theme.colors.bodyFont2};
    }
  }
  @media (max-width: 1119px) {
    .footer {
      .footer-inner {
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    .footer .footer-links .social-icons-list li {
      flex: 0 0 60px;
      width: 60px;
    }
  }
`;
