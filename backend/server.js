import express from "express";
import dotenv from "dotenv"
import toDoRouter from "./router/todoRoutes.js";
import usersRouter from "./router/userRoutes.js"
import mySql from "mysql";
import cors from "cors"


dotenv.config();





const app = express();

app.use(express.json())
app.use(cors())


app.use( "/api/todos",toDoRouter)
app.use("/api/users/", usersRouter)


 const db =  mySql.createConnection({
                user: "root",
                database: "todoList",
                password: "Moemessi10qw",
                host: "localhost"
                })

export default db

app.listen(3000, () => {
    console.log("connected to Backend.")
    
})