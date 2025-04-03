import styled from "styled-components";

export const AnomaliaContainner = styled.div`
  max-width: 1280px;
  margin: 24px auto;
  background-color: #ffffff;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 16px;
  border-top: 4px solid #007bff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

export const AnomaliaCard = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 340px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin-bottom: 12px;
    color: #007bff;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const LeituraContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const AnomaliaItem = styled.div`
  background: #ffffff;
  border-left: 4px solid #007bff;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;

  p {
    color: #333;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  .anomalia-item-div {
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 200px;
  }
`;
