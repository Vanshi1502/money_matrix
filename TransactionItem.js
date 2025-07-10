// src/components/TransactionItem.js
import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #faf6ff;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 12px 18px;
  box-shadow: 0 1px 4px rgba(44, 62, 80, 0.03);
`;

const Desc = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Amount = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ type }) => (type === "income" ? "#2ecc71" : "#e74c3c")};
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 18px;
  cursor: pointer;
  margin-left: 12px;
  transition: color 0.15s;
  &:hover {
    color: #c0392b;
  }
`;

function TransactionItem({ txn, deleteTransaction }) {
  return (
    <Item>
      <Desc>{txn.desc}</Desc>
      <Amount type={txn.type}>
        {txn.type === "income" ? "+" : "-"}₹{txn.amount}
      </Amount>
      <DeleteBtn onClick={() => deleteTransaction(txn.id)}>🗑️</DeleteBtn>
    </Item>
  );
}

export default TransactionItem;

