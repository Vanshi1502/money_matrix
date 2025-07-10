// src/components/AddTransaction.js
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 28px 0 18px 0;
`;

const Input = styled.input`
  padding: 11px;
  border-radius: 6px;
  border: 1.5px solid #e0e0e0;
  font-size: 15px;
  &:focus {
    border-color: #2d2e82;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 11px;
  border-radius: 6px;
  border: 1.5px solid #e0e0e0;
  font-size: 15px;
  &:focus {
    border-color: #2d2e82;
    outline: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #2d2e82 0%, #6c2eb7 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 11px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 6px;
  transition: background 0.18s;
  &:hover {
    background: linear-gradient(90deg, #6c2eb7 0%, #2d2e82 100%);
  }
`;

function AddTransaction({ addTransaction }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    addTransaction({
      id: Date.now(),
      desc,
      amount: Number(amount),
      type,
    });
    setDesc("");
    setAmount("");
    setType("expense");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Select value={type} onChange={e => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </Select>
      <Button type="submit">Add Transaction</Button>
    </Form>
  );
}

export default AddTransaction;

