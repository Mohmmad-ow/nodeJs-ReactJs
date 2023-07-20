import { useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
// import path from "../main"

export default function ToDoUpdate({todo, handleUpdateEditing}) {
    const [data, setData] = useState({
        title: todo.title,
        desc: todo.desc,
        id: todo.id,
    })
    const id = data.id;
    function handleChange(e) {
        setData(data => ({...data, [e.target.name]: e.target.value}))
    }
    async function handleClick(e) {
        
        e.preventDefault();
        axios.put(`http://localhost:3000/api/todos/view/${id}/update/`, data);
        handleUpdateEditing();

    }
    
    return (
        <li className={`rounded-md  bg-yellow-900 text-lg text-black flex py-3 px-4 flex-col gap-2`}>
            <div className="flex justify-center items-start flex-col gap-2">
                <input  className="rounded-md focus:border-solid focus:border-slate-600 focus:border-2 px-1"  value={data.title} onChange={handleChange} type="text" name="title" />
                <input  className="rounded-md focus:border-solid focus:border-slate-600 focus:border-2 px-1" value={data.desc} onChange={handleChange} type="text" name="desc" />
            </div>
            <button className="rounded-md w-[30%] mx-auto bg-white text-black px-2 py-1" onClick={handleClick} type="submit">Update</button>
        </li>
    )
}