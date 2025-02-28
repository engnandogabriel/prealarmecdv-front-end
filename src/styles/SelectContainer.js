import styled from "styled-components";

export const SelectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background-color: #f8f9fa;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-top: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 50px;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 1000px) {
    gap: 10px;
    padding: 12px;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
  }
`;

export const SelectWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 200px;
`;

export const SelectStyled = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #0056b3;
    box-shadow: 0px 0px 4px rgba(0, 91, 187, 0.5);
  }
`;

export const DateFilterContainer = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    display: flow-root;
    gap: 8px;
    padding: 8px;
  }
`;

export const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  outline: none;
  cursor: pointer;
  margin: 8px 0;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #0056b3;
    box-shadow: 0px 0px 4px rgba(0, 91, 187, 0.5);
  }
`;
