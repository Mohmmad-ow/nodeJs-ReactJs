import { useState } from "react"
import axios from "axios"
// import path from "../main"

export default function Add({handleSubmit}) {
    
    const [data, setData] = useState({
        title: "",
        desc: ""
    })
    function handleChange(e) {
        setData(data => ({...data, [e.target.name]: e.target.value}))
    }
    async function handleClick(e) {
        console.log(data)
        e.preventDefault();
        handleSubmit()
        await axios.post("http://localhost:3000/" + `api/todos/create`, data)
    }
    
    return (
        <div className="flex w-[50%] mx-auto bg-slate-900 rounded-md flex-col p-2 gap-4 ">
            <input className="" placeholder="Title" onChange={handleChange} type="text" name="title" />
            <input className="" placeholder="Description" onChange={handleChange} type="text" name="desc" />
            <button onClick={handleClick} className="text-red-500 bg-white w-[25%] mx-auto text-lg rounded-sm" type="submit">Add</button>
        </div>
    )
}