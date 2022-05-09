import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { IContactRecord } from "../../@types";
import { useSort } from "../../hooks/useSort";
import { EColor, EShadow } from "../../styles";
import { contactsTableHeaders } from "../tables";
import { Table } from "../tables/Table";

interface IProps {
  records: IContactRecord[];
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ records, isOpen, ...props }: IProps) => {
  const { items, requestSort } = useSort<IContactRecord>(records);
  const ref = useRef<HTMLDivElement>(null);

  const onClose = useCallback(
    (e: MouseEvent) => {
      e.target === ref.current && props.onClose();
    },
    [props]
  );

  useEffect(() => {
    window.addEventListener("click", onClose);

    return () => {
      window.removeEventListener("click", onClose);
    };
  }, [onClose]);

  return (
    <Wrapper ref={ref} isOpen={isOpen}>
      <Content>
        <Header>
          <Close onClick={props.onClose}>&times;</Close>
          <h2>Contacts</h2>
        </Header>
        <Body>
          <Table>
            <tbody>
              <tr>
                {contactsTableHeaders.map(({ label, value }) => (
                  <th key={value} onClick={() => requestSort(value)}>
                    {label}
                  </th>
                ))}
              </tr>
              {items.map((record: IContactRecord) => (
                <tr id={record.Id}>
                  <td>{record.Id}</td>
                  <td>{record.Name}</td>
                  <td>{record.Title}</td>
                  <td>{record.Phone}</td>
                  <td>{record.Department}</td>
                  <td>{record.Email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Body>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  overflow: auto;

  z-index: 1;

  padding-top: 100px;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;

  margin: auto;
  padding: 0;

  background-color: ${EColor.Neutral};
  box-shadow: ${EShadow.Light};

  width: 80%;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  animation-name: animatetop;
  animation-duration: 0.4s;
`;

const Header = styled.div`
  padding: 1rem;

  background-color: ${EColor.Primary};
  color: ${EColor.White};
`;

const Body = styled.div`
  padding: 1rem;
`;

const Close = styled.span`
  color: ${EColor.White};
  float: right;
  font-size: 1.75em;
  font-weight: bold;

  &:hover,
  :focus {
    color: ${EColor.Black};
    text-decoration: none;
    cursor: pointer;
  }
`;
