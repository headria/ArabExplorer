import styled from "styled-components/macro";
import { rgba } from "polished";
export const CardWalletContainer = styled.div`
  .card-wallet {
    margin-bottom: 1rem;
    .card-inner {
      overflow: hidden;
      background-color: white;
      position: relative;
      border-radius: 15px;
      padding: 20px;
      font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
      box-shadow: 0 3px 25px ${({ theme }) => rgba(theme.colors.gray700, 0.1)};
    }
    .title {
      font-size: 20px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
      position: relative;
      z-index: 20;
      color: ${({ theme }) => theme.colors.gray600};
    }
    .info {
      margin-top: 20px;
      position: relative;
      z-index: 20;
      height: 60px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      flex-direction: column;
      .number {
        font-size: 24px;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.gray800};
      }
      .arb {
        font-size: 13px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray600};
        text-transform: uppercase;
      }
    }
    .icon {
      position: absolute;
      top: -10px;
      right: -10px;
      z-index: 1;
      width: 80px !important;
      height: 80px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        height: 100%;
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin-bottom: 2rem;
  .table-title {
    font-size: 18px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
    color: ${({ theme }) => theme.colors.gray700};
    margin-bottom: 1rem;
  }
  .table-inner {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
  }

  .table-footer {
    background-color: white;
    border-radius: 0 0 15px 15px;
    padding: 15px;
    text-align: center;
    position: relative;
    top: -10px;
  }
`;
