import { useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
// import path from "../main"

export default function Update() {
    const id = useLocation().pathname.split("/")[2]
    const [data, setData] = useState({
        title: "",
        desc: "",
        id: id
    })
    function handleChange(e) {
        console.log(e.target.name +  ": " + e.target.value)
        setData(data => ({...data, [e.target.name]: e.target.value}))
    }
    async function handleClick(e) {
        
        e.preventDefault();
        axios.put(`http://localhost:3000/api/todos/view/${id}/update/`, data)

    }
    
    return (
        <div>
            <input onChange={handleChange} type="text" name="title" />
            <input onChange={handleChange} type="text" name="desc" />
            <button onClick={handleClick} type="submit">Add</button>
        </div>
    )
}