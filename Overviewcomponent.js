// src/components/OverviewComponent.js
import React from "react";
import styled from "styled-components";

const OverviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 18px 22px;
  background: #f8f2ff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.06);
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  font-size: 13px;
  color: #888;
`;

const Value = styled.span`
  font-size: 19px;
  font-weight: 600;
  color: #2d2e82;
`;

function OverviewComponent({ transactions }) {
  const income = transactions
    .filter(txn => txn.type === "income")
    .reduce((acc, txn) => acc + txn.amount, 0);
  const expense = transactions
    .filter(txn => txn.type === "expense")
    .reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <OverviewBox>
      <Stat>
        <Label>Balance</Label>
        <Value>₹{income - expense}</Value>
      </Stat>
      <Stat>
        <Label>Income</Label>
        <Value style={{ color: "#2ecc71" }}>+₹{income}</Value>
      </Stat>
      <Stat>
        <Label>Expense</Label>
        <Value style={{ color: "#e74c3c" }}>-₹{expense}</Value>
      </Stat>
    </OverviewBox>
  );
}

export default OverviewComponent;

