import axios from "axios"




export default function ToDo({todo, handleEdit, handleClickComplete, handleClickDelete}) {
    
    
    

    return (
        
            <li className={`rounded-md px-2 pb-4 bg-slate-800 text-lg text-white flex justify-center items-center flex-col gap-2`} >
                <div className="rounded-full bg-red-600 w-10 h-10  flex justify-center items-center text-2xl mt-2 ml-auto mr-2">{`${todo.complete ? 'X' : 'O'}`}</div>
                <h1 className={`${todo.complete == 1&&'line-through'} text-2xl py-2`}>{todo.title}</h1>
                <p className={`${todo.complete == 1&&'line-through'} pb-2 break-all`}>{todo.desc}</p>

                <div className="flex gap-2 pb-2 ">
                    <button onClick={() => {handleEdit(todo.id)}} className="rounded-md bg-white max-w-2 text-black px-2 py-1">edit</button >
                    <button onClick={() => {handleClickComplete(todo.id, todo.complete)}} className="rounded-md break-words bg-white text-black px-2 py-1">Complete</button>
                    
                </div>
                <button className="w-[50%] bg-red-600 rounded-md mb-2 hover:bg-red-800" onClick={() => {handleClickDelete(todo.id)}}>Delete</button>
           </li>
        
    )
}