import { useEffect, useState } from "react"
import axios from "axios"
import ToDo from "./ToDo"
import ToDoUpdate from "./update"
import Add from "./add"
export default function View() {
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [editing, setEditing] = useState(null)
    const [isAdding, setIsAdding] = useState(false)
    
    useEffect( () => {
    const getData = async () => {
        setIsLoading(true)
        await axios.get("http://localhost:3000/api/todos/view")
        .then(response => { return response.data})
        .then(Nextdata => {setData(Nextdata)})
        .catch(err => console.log(err))
        setIsLoading(false)
        setEditing(null)
    }

    if (editing == null || editing == "Complete" || editing == "Deleting" || editing == "Adding")
    getData()
    }, [editing])


    function handleEdit(id) {
        setEditing(id);
    }

    function handleUpdateEditing() {
        setEditing(null)
    }

    async function handleClickComplete(id, complete) {
        await axios.put(`http://localhost:3000/api/todos/view/${id}/update/`, {complete: !complete})
        setEditing("Complete")
     }

    async function handleClickDelete(id) {
        await axios.delete(`http://localhost:3000/api/todos/view/${id}/delete/`)
        setEditing("Deleting")
    }

    return (
        <div >
          {isLoading ? <h1>...loading</h1> : 
          <ul className="grid grid-cols-4 gap-2 p-3">
           {data.map(todo => (
            editing == todo.id ? <ToDoUpdate todo={todo} handleUpdateEditing={handleUpdateEditing} key={todo.id} />:
                                 <ToDo handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} key={todo.id} todo={todo} handleEdit={handleEdit} />
           ))}
          </ul>
          }
          <h1 className="text-center pb-2">Add a new item</h1>
          <div className="flex justify-center">
            {isAdding ? <Add handleSubmit={() => {setEditing("Adding"); setIsAdding(false)}} /> : <button className="rounded-full text-3xl bg-white text-red-500" onClick={() => {setIsAdding(true)}}>+</button>}


          </div>
        </div>
    )
}