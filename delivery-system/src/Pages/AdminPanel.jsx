import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AdminPanel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("technician");

  const createUser = async () => {
    await addDoc(collection(db,"users"), { username, password, role });
    alert("User added");
    setUsername(""); setPassword(""); setRole("technician");
  };

  return (
    <div className="card">
      <h2>Admin Panel</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
      <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <select value={role} onChange={e=>setRole(e.target.value)}>
        <option value="technician">Technician</option>
        <option value="manager">Manager</option>
        <option value="workload">Workload</option>
        <option value="driver">Driver</option>
      </select>
      <button onClick={createUser}>Create User</button>
    </div>
  );
}
