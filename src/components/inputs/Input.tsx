import React from "react";
import styled from "styled-components";
import { EColor } from "../../styles";

interface IProps {
  onChange: (value: string) => void;
}

export const Input = ({ onChange }: IProps) => (
  <SInput placeholder="Search" onChange={(e) => onChange(e.target.value)} />
);

const SInput = styled.input`
  border-radius: 0.25rem;
  padding: 1rem;

  background: ${EColor.Gray};
`;
