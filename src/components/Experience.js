import React,{useState} from "react";

function Experience(){

  const [company,setCompany] = useState("");
  const [position,setPosition] = useState("");
  const [tasks,setTasks] = useState("");
  const [from,setFrom] = useState("");
  const [to,setTo] = useState("");
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

        <h2>Experience</h2>

        <p>Company: {company}</p>
        <p>Position: {position}</p>
        <p>Responsibilities: {tasks}</p>
        <p>From: {from}</p>
        <p>To: {to}</p>

        <button onClick={handleEdit}>Edit</button>

      </div>
    )
  }

  return(

    <form onSubmit={handleSubmit}>

      <h2>Experience</h2>

      <input
        type="text"
        placeholder="Company name"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Position title"
        value={position}
        onChange={(e)=>setPosition(e.target.value)}
      />

      <input
        type="text"
        placeholder="Main responsibilities"
        value={tasks}
        onChange={(e)=>setTasks(e.target.value)}
      />

      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e)=>setFrom(e.target.value)}
      />

      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e)=>setTo(e.target.value)}
      />

      <button type="submit">Submit</button>

    </form>
  )
}

export default Experience