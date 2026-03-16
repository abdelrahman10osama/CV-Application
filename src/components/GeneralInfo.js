import React, { useState } from "react";

function GeneralInfo() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmitted(true);
  }

  const handleEdit = ()=>{
    setSubmitted(false);
  }

  if(submitted){
    return(
      <div>
        <h2>General Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <button onClick={handleEdit}>Edit</button>
      </div>
    )
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>General Information</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

      <button type="submit">Submit</button>

    </form>
  )
}

export default GeneralInfo