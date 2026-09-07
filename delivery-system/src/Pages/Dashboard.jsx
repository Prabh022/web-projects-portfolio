import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h1>Dashboard</h1>
      <button onClick={()=>navigate("/CreateRequest")}>Create Request</button>
      <button onClick={()=>navigate("/ViewRequests")}>View Requests</button>
      <button onClick={()=>navigate("/Inventory")}>Inventory</button>
      <button onClick={()=>navigate("/AdminPanel")}>Admin Panel</button>
    </div>
  );
}
