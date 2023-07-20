import { useEffect, useState } from "react"
import axios from "axios"
import ToDo from "./ToDo"
import ToDoUpdate from "./update"
export default function View() {
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [editing, setEditing] = useState(null)
    
    useEffect( () => {
    const getData = async () => {
        setIsLoading(true)
        await axios.get("http://localhost:3000/api/todos/view")
        .then(response => { return response.data})
        .then(Nextdata => {setData(Nextdata)})
        .catch(err => console.log(err))
        setIsLoading(false)
    }
    if (editing == null)
    getData()
    }, [editing])

    function handleClickComplete(id) {
        axios.put(`http://localhost:3000/api/todos/view/${id}/update/`, {complete: true})
    }
    function handleEdit(id) {
        setEditing(id);
    }

    function handleUpdateEditing() {
        setEditing(null)
    }

    return (
        <div >
          {isLoading ? <h1>...loading</h1> : 
          <ul className="grid grid-cols-3 gap-2 p-3">
           {data.map(todo => (
            editing == todo.id ? <ToDoUpdate todo={todo} handleUpdateEditing={handleUpdateEditing} key={todo.id} />: <ToDo key={todo.id} todo={todo} handleEdit={() => {handleEdit(todo.id)}} />
           ))}
          </ul>
          }
        </div>
    )
}