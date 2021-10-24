import { rgba } from "polished";
import styled from "styled-components";

export const HeaderMenuContainer = styled.div`
  .header {
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 900;
    .navbar-inner {
      display: flex;
      align-items: center;
      padding: 10px 0;
    }
    .nav-logo {
      width: 264px;
      a {
        display: block;
        img {
          width: 100%;
        }
      }
    }
    .nav-links {
      margin-left: auto;
      .menu-list {
        display: flex;
        align-items: center;
        font-family: ${({ theme }) => theme.colors.bodyFont2};
      }
      .menu-item {
        margin: 0 10px;
        position: relative;
        .item {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: white;
          padding: 25px 5px;
          position: relative;
          user-select: none;
          cursor: pointer;
          &.toggle {
            margin-right: 10px;
            &::before {
              content: "\F0140";
              position: absolute;
              right: -12px;
              top: 26px;
              font-family: ${({ theme }) => theme.colors.iconFont};
            }
          }
          &:hover {
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
        .sub-menu-list {
          display: none;
          position: absolute;
          left: 0;
          top: 62px;
          background-color: ${({ theme }) => rgba("#fff", 0.8)};
          box-shadow: 0 5px 15px
            rgba($color: ${({ theme }) => theme.colors.gray500}, $alpha: 0.5);
          padding: 10px;
          border-radius: 10px;
          .sub-menu-item {
            .sub-item {
              white-space: nowrap;
              font-size: 15px;
              font-weight: 500;
              color: ${({ theme }) => theme.colors.textDark};
              padding: 5px;
              display: block;
              // background-color: $background;
              border-radius: 5px;
              &:hover {
                color: ${({ theme }) => theme.colors.secondary};
              }
            }
          }
        }
        &:hover {
          .sub-menu-list {
            display: block;
          }
        }
      }
    }
    .nav-buycoin {
      margin-left: 20px;
      .btn {
        padding: 0.5rem 1rem;
      }
    }
    .mobile-drawer-navbar {
      margin-right: 40px;
      display: none;
      .btn-menu-navbar {
        background-color: transparent;
        border: none;
        width: 42px;
        height: 42px;
        padding: 3px;
        font-size: 32px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .drawer-menu {
    position: fixed;
    left: -320px;
    top: 0;
    width: 300px;
    height: 100%;
    z-index: 1010;
    background-color: white;
    box-shadow: 3px 0 20px
      rgba($color: ${({ theme }) => theme.colors.textDark}, $alpha: 0.1);
    transition: all 0.2s ease-in-out;
    &.active {
      left: 0;
    }
    .drawer-header {
      padding: 15px;
      .h-inner {
        display: grid;
        grid-template-columns: auto 50px;
        align-items: center;
        .btn-close-drawer {
          background-color: ${({ theme }) => theme.colors.gray300};
          border: none;
          padding: 0;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          color: ${({ theme }) => theme.colors.primary};
          font-size: 24px;
        }
        h2 {
          text-align: left;
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.textDark};
          margin-bottom: 0;
          font-size: 24px;
        }
      }
    }
    .drawer-body {
      padding: 15px;
      height: calc(100% - 80px);
      overflow-y: auto;
      .b-inner {
        height: 100%;
      }
      .buy-coin {
        padding: 10px 0 20px 0;
        display: none;
        .btn {
          width: 100%;
        }
      }
      .menu-list {
        font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
        .collapse-item {
          .item {
            display: block;
            padding: 10px 0;
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.textDark};
            &:hover {
              color: ${({ theme }) => theme.colors.secondary};
            }
          }
          .btn-link {
            width: 100%;
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.textDark};
            text-decoration: none;
            text-align: left;
            padding: 10px 0;
            position: relative;
            background-color: transparent;
            border: none;
            border-radius: 0;
            .icon {
              position: absolute;
              top: 7px;
              right: 0;
              font-size: 20px;
            }
          }
          .sub-menu-list {
            padding-left: 20px;
            background-color: ${({ theme }) => theme.colors.gray100};
            .menu-item {
              .sub-item {
                display: block;
                padding: 10px 0;
                color: ${({ theme }) => theme.colors.textGray};
                font-size: 16px;
                font-weight: 500;
                &:hover {
                  color: ${({ theme }) => theme.colors.secondary};
                }
              }
            }
          }
        }
      }
    }
  }
  .drawer-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.4);
    z-index: 1000;
    display: none;
    &.active {
      display: block;
    }
  }

  @media (max-width: 1199px) {
    .header {
      .nav-links {
        display: none;
      }
      .nav-buycoin {
        margin-left: auto;
      }
      .mobile-drawer-navbar {
        display: block;
      }
    }
  }
  @media (max-width: 992px) {
    .header .nav-logo {
      width: 215px;
    }
  }
  @media (max-width: 768px) {
    .header {
      .container {
        padding: 0 20px;
        max-width: 100%;
      }
    }
  }
  @media (max-width: 575px) {
    .header {
      .nav-buycoin {
        display: none;
      }
      .nav-logo {
        margin-left: auto;
      }
    }
    .drawer-menu {
      .drawer-body {
        .buy-coin {
          display: block;
        }
      }
    }
  }
`;
