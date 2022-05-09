import styled from "styled-components";
import { EColor } from "../../styles";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & > tbody {
    width: 100%;
  }

  th,
  td {
    padding: 1rem;
  }

  th {
    background-color: ${EColor.Primary};
    color: ${EColor.White};
    cursor: pointer;

    &:hover {
      background-color: ${EColor.PrimaryDark};
    }
  }

  tr {
    &:nth-child(even) {
      background-color: ${EColor.Neutral};
    }
    &:hover {
      background-color: ${EColor.Gray};
    }
  }
`;
