// src/components/Button.jsx
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #1e40af;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export default Button;
