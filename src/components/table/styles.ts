import styled from "styled-components/macro";

export const TableContainer = styled.div`
  .table {
    font-family: ${({ theme }) => theme.colors.bodyFont2} !important;
    tbody {
      td {
        font-size: 15px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray800};
      }
      tr {
        &:nth-child(odd) {
          td {
            &:first-child {
              border-radius: 8px 0 0 8px;
            }
            &:last-child {
              border-radius: 0 8px 8px 0;
            }
          }
        }
        // &:first-child {
        //     border-radius: 15px 0 0 0;
        // }
      }
    }
    > :not(caption) > * > * {
      padding: 0.8rem;
      border-bottom: none;
    }
    > :not(:first-child) {
      border: none;
    }
  }
`;
