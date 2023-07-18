import express from "express";
import dotenv from "dotenv"
import Router from "./router/index.js";
import mySql from "mysql";
import cors from "cors"


dotenv.config();





const app = express();

app.use(cors())
app.use(express.json())
app.use( "/api/todos",Router)
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