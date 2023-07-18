import { useState } from "react"
import axios from "axios"
// import path from "../main"

export default function Add() {
    
    const [data, setData] = useState({
        title: "",
        desc: ""
    })
    function handleChange(e) {
        console.log(e.target.name +  ": " + e.target.value)
        setData(data => ({...data, [e.target.name]: e.target.value}))
    }
    async function handleClick(e) {
        console.log(data)
        e.preventDefault();
        await axios.post("http://localhost:3000/" + `api/todos/create`, data)

    }
    
    return (
        <div>
            <input onChange={handleChange} type="text" name="title" />
            <input onChange={handleChange} type="text" name="desc" />
            <button onClick={handleClick} type="submit">Add</button>
        </div>
    )
}