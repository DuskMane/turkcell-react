import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({name: "Emirhan", surname: "Aykan", gender: "0"})

    function handleChange(event){
        setForm({ ...form, [event.target.name]: event.target.value})
    }
  return (
    <div>
        <div>
            Name: <input placeholder="Name" name="name" value={form.name} onChange={handleChange}/>
            Surname: <input placeholder='Surname' name="surname" value={form.surname} onChange={handleChange}/>
            <select value={form.gender} name="gender" onChange={handleChange}>
                <option value={"0"}>Male</option>
                <option value={"1"}>Female</option>
            </select>
        </div>
        <br />
        <br />
        <div><b>{form.name} {form.surname} {form.gender === "0" ? "Male" : "Female"} </b></div>
    </div>
  )
}

export default Form