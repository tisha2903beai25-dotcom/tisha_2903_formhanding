import React, { useState } from 'react'
import "./App.css"
function App() {
  const[form, setForm]=useState({
    name:"",
    email:"",
    course:"BTech",
    terms:false
  })

  const[error, setError]=useState("")
  function handleChange(e){
    const{name,value,type,checked}=e.target;
    setForm({...form, [name]: type === "checkbox" ? checked : value})
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.terms){
      setError("Please fill all the detail!!!")
      return
    }

   // Api Calling
   console.log(form)
   setForm({
    name: "",
    email: "",
    course: "BTech",
    terms: false
  });

  }
  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <h2>Student Registration Form</h2>
      <input type="text" name="name" placeholder="Enter Your name" value={form.name} onChange={handleChange}/>
      <input type="email" name="email" placeholder="Enter Your email" value={form.email} onChange={handleChange} />
      <select name="course" value={form.course} onChange={handleChange}>
        <option value="BTech">BTech</option>
        <option value="MTech">MTech</option>
        <option value="PHD">PHD</option>
      </select>
      <label>
        <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange}/>
        I accept the terms and conditions
      </label>

      {error && <p className="error">{error}</p>}
      <button type="submit">Register</button>
      </form>

    </main>
  )
}

export default App