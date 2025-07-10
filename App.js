// src/App.js
import React, { useState } from "react";
import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";
import Login from "./components/Login";

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: transparent;
`;

const LogoutButton = styled.button`
  position: fixed;
  top: 28px;
  right: 36px;
  background: #f44336;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.08);
  transition: background 0.18s;
  &:hover {
    background: #c62828;
  }
`;

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Main>
        {!user ? (
          <Login onLogin={setUser} />
        ) : (
          <>
            <Tracker />
            <LogoutButton onClick={() => setUser(null)}>
              Logout
            </LogoutButton>
          </>
        )}
      </Main>
    </>
  );
}

export default App;



