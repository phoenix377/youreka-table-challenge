import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IRecord } from "./@types";
import "./App.css";
import { Input, Modal, SalesTable, salesTableHeader } from "./components";
import { getContactRecords } from "./functions";
import { data } from "./mock";

function App() {
  const [id, setId] = useState<string | undefined>();
  const [search, setSearch] = useState<string>();
  const [records, setRecords] = useState<IRecord[]>([]);

  useEffect(() => {
    if (data.done) {
      const filteredRecords = data.records.filter((record) => {
        return Object.values(record)
          .map((value: number | string | null) =>
            value
              ?.toString()
              .toLocaleLowerCase()
              .includes(search ?? "")
          )
          .some(Boolean);
      });
      setRecords(search ? filteredRecords : data.records);
    }
  }, [search]);

  return (
    <Wrapper>
      <Input onChange={setSearch} />

      <SalesTable
        headers={salesTableHeader}
        records={records}
        onContactsClick={setId}
      />

      {id && (
        <Modal
          records={getContactRecords(data.records, id)}
          isOpen={!!id}
          onClose={() => setId(undefined)}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  overflow-x: auto;

  height: 100%;
  padding: 1rem;
  gap: 1rem;
`;

export default App;
