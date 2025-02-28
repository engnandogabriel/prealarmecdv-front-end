import React from "react";
import { FaBolt } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="loading-container">
      <FaBolt className="loading-icon" />
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
