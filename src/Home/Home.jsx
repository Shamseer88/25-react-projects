import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/accordion")}>Acccordion</button>
    </div>
  );
}
