import { useEffect, useState } from "react"
import axios from "axios"
// import path from "../main"

export default function Add() {
    const token = localStorage.getItem("token");
    async function getUser() {
        axios.post("http://localhost:3000/api/users/protected", {token: token}).then((result) => {
            console.log(result)
        })
    }
    return (
        <h1 className="bg-green-600"><button onClick={getUser}>is Protected</button></h1>
    )
}