import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

export default function ViewRequests() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db,"requests"), snap => {
      setList(snap.docs.map(d => ({ id:d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  const approve = async (id) => updateDoc(doc(db,"requests",id), { status:"approved" });
  const decline = async (id) => updateDoc(doc(db,"requests",id), { status:"declined" });

  return (
    <div className="card">
      <h2>Requests</h2>
      {list.map(r => (
        <div key={r.id} style={{marginBottom:"15px"}}>
          <b>{r.part}</b> to {r.address} — ({r.priority}) — [{r.status}]
          {r.photo && <div><img src={r.photo} alt="Delivery" style={{width:100}}/></div>}
          <button onClick={()=>approve(r.id)}>Approve</button>
          <button onClick={()=>decline(r.id)}>Decline</button>
        </div>
      ))}
    </div>
  );
}
