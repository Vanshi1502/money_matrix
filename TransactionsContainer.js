// src/components/TransactionsContainer.js
import React, { useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  margin-top: 18px;
`;

const Search = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 6px;
  border: 1.5px solid #e0e0e0;
  font-size: 14px;
  &:focus {
    border-color: #2d2e82;
    outline: none;
  }
`;

function TransactionsContainer({ transactions, deleteTransaction }) {
  const [search, setSearch] = useState("");
  const filtered = transactions.filter(txn =>
    txn.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Search
        placeholder="Search transactions..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.map(txn => (
        <TransactionItem
          key={txn.id}
          txn={txn}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </Container>
  );
}

export default TransactionsContainer;

