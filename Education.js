import React,{useState} from "react";

function Education(){

  const [school,setSchool] = useState("");
  const [study,setStudy] = useState("");
  const [date,setDate] = useState("");
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
        <h2>Education</h2>

        <p>School: {school}</p>
        <p>Study: {study}</p>
        <p>Date: {date}</p>

        <button onClick={handleEdit}>Edit</button>

      </div>
    )
  }

  return(
    <form onSubmit={handleSubmit}>

      <h2>Education</h2>

      <input
        type="text"
        placeholder="School name"
        value={school}
        onChange={(e)=>setSchool(e.target.value)}
      />

      <input
        type="text"
        placeholder="Title of study"
        value={study}
        onChange={(e)=>setStudy(e.target.value)}
      />

      <input
        type="text"
        placeholder="Date of study"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
      />

      <button type="submit">Submit</button>

    </form>
  )
}

export default Education