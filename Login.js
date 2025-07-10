import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Fade-in animation for the card
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-30px);}
  to { opacity: 1; transform: translateY(0);}
`;

const LoginBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const LoginCard = styled.div`
  background: #fff;
  padding: 48px 36px 36px 36px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.13);
  min-width: 340px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.7s;
`;

const Title = styled.h2`
  color: #2d2e82;
  margin-bottom: 28px;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 6px;
  border: 1.5px solid #e0e0e0;
  font-size: 16px;
  transition: border 0.2s;
  &:focus {
    border-color: #2d2e82;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 13px;
  background: linear-gradient(90deg, #2d2e82 0%, #6c2eb7 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #6c2eb7 0%, #2d2e82 100%);
  }
`;

const ErrorMsg = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;

const AppLogo = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #6c2eb7;
  margin-bottom: 8px;
  letter-spacing: 0.07em;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    onLogin(email);
  };

  return (
    <LoginBackground>
      <LoginCard>
        <AppLogo>EXPENSE TRACKER</AppLogo>
        <Title>Sign in to your account</Title>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </LoginCard>
    </LoginBackground>
  );
}

export default Login;


