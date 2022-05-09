import { IRecord } from "@types";
import React from "react";
import styled from "styled-components";
import { useSort } from "../../hooks";
import { ContactsButton } from "../buttons";
import { Table } from "./Table";

interface IProps<T> {
  headers: { label: string; value: keyof T }[];
  records: IRecord[];
  onContactsClick: (id: string) => void;
}

export const SalesTable = ({
  records,
  headers,
  onContactsClick,
}: IProps<IRecord>) => {
  const { items, requestSort } = useSort<IRecord>(records);

  return (
    <Table>
      <tbody>
        <tr>
          {headers.map(({ label, value }) => (
            <TableHeader key={value} onClick={() => requestSort(value)}>
              {label}
            </TableHeader>
          ))}
        </tr>

        {items.map((record: IRecord) => (
          <tr key={record.Id}>
            <td>{record.Id}</td>
            <td>{record.Name}</td>
            <td>{record.AnnualRevenue ?? "_"}</td>
            <td>
              <a href={record.Website} target="_blank" rel="noreferrer">
                {record.Website}
              </a>
            </td>
            <td>{record.AccountNumber ?? "_"}</td>
            <td>{record.Rating ?? "_"}</td>
            <td>{record.UpsellOpportunity__c ?? "_"}</td>
            <td>
              <ContactsButton
                onClick={() => onContactsClick(record.Id)}
                className="contacts-button"
              >
                View ({record.Contacts.totalSize})
              </ContactsButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const TableHeader = styled.th`
  text-align: left;
`;
