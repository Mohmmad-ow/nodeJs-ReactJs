import { useEffect, useState } from "react"
import axios from "axios"
// import path from "../main"

export default function View() {
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( () => {
    const getData = async () => {
        setIsLoading(true)
        await axios.get("http://localhost:3000/api/todos/view")
        .then(response => { return response.data})
        .then(Nextdata => {setData(Nextdata); console.log(Nextdata)})
        .catch(err => console.log(err))
        setIsLoading(false)
    }
    getData()
    }, [])

    function handleClickComplete(id) {
        axios.put(`http://localhost:3000/api/todos/view/${id}/update/`, {complete: true})
    }

    return (
        <div >
          {isLoading ? <h1>...loading</h1> : 
          <ul className="grid grid-cols-3 gap-2 p-3">
           {data.map(todo => <li className="rounded-md bg-slate-800 text-lg text-white flex justify-center items-center flex-col gap-2" key={todo.id}>
            <h1>Title: {todo.title}</h1>
            <p>Description: {todo.desc}</p>
            <div className="flex gap-2 pb-2">
                <a href={`/update/${todo.id}`} className="rounded-md bg-white text-black px-2 py-1">edit</a >
                <button onClick={() => handleClickComplete(todo.id)} className="rounded-md bg-white text-black px-2 py-1">Complete</button>
            </div>
           </li>)}
          </ul>
          }
        </div>
    )
}