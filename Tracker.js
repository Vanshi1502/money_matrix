import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./Overviewcomponent";
import TransactionsContainer from "./TransactionsContainer";

const TrackerWrapper = styled.div`
  background: #fff;
  margin-top: 60px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.10);
  padding: 36px 40px 32px 40px;
  min-width: 370px;
  max-width: 900px;
  width: 100%;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
    padding: 40px 60px 40px 60px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 320px;
`;

const RightColumn = styled.div`
  flex: 1.5;
  min-width: 320px;
`;

const Title = styled.h1`
  text-align: center;
  color: #2d2e82;
  font-size: 2.2rem;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
  font-weight: 700;
`;

function Tracker() {
  // 1. Initialize from local storage
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Update local storage when transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Add a new transaction
  const addTransaction = (txn) => {
    setTransactions([txn, ...transactions]);
  };

  // Delete a transaction by id
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(txn => txn.id !== id));
  };

  return (
    <TrackerWrapper>
      <LeftColumn>
        <Title>Expense Tracker</Title>
        <OverviewComponent transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} />
      </LeftColumn>
      <RightColumn>
        <TransactionsContainer
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </RightColumn>
    </TrackerWrapper>
  );
}

export default Tracker;


