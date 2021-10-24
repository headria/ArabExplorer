import styled from "styled-components/macro";

export const BaseButton = styled.button`
  font-family: ${({ theme }) => theme.colors.bodyFont2};
  border-radius: 40px;
  padding: 0.7rem 1.2rem;
  font-weight: 500;
  .btn-circle {
    width: 50px;
    height: 50px;
    padding: 5px;
    background-color: white;
    border-radius: 50%;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.textGray};
    border: none;
    display: inline-block;
    .mdi {
      position: relative;
      top: -3px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.desertLight};
    }
  }
`;
