



export default function ToDo({todo, handleEdit}) {



    return (
        
            <li className={`rounded-md  ${todo.complete&&'only:decoration-dashed'} bg-slate-800 text-lg text-white flex justify-center items-center flex-col gap-2`} >
                <h1 className={``}>{todo.title}</h1>
                <p>{todo.desc}</p>
                <div className="flex gap-2 pb-2">
                    <button onClick={() => {handleEdit(todo.id)}} className="rounded-md bg-white text-black px-2 py-1">edit</button >
                    <button onClick={() => {handleClickComplete(todo.id)}} className="rounded-md bg-white text-black px-2 py-1">Complete</button>
                </div>
           </li>
        
    )
}