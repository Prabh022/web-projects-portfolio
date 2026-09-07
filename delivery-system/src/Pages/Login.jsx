import React, { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);

    try {
      const q = query(collection(db, "users"), where("username","==",username));
      const snap = await getDocs(q);
      if (snap.empty) { setError("User not found"); setLoading(false); return; }
      const user = snap.docs[0].data();
      if (user.password !== password) { setError("Wrong password"); setLoading(false); return; }
      setLoading(false);
      alert("Login successful!");
      navigate("/Dashboard");
    } catch (err) { setError("Error: " + err.message); setLoading(false); }
  };

  return (
    <div className="card" style={{maxWidth:400, margin:"50px auto"}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
