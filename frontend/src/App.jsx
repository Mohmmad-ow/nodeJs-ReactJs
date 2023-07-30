import { useEffect, useState } from "react"
import axios from "axios"
// import path from "../main"

export default function Add() {
    const [user, setUser] = useState(null)
    const token = localStorage.getItem("token");
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    async function getUser() {
        try {

            const response = await axios.get('http://localhost:3000/api/users/protected', { headers });
            setUser(...response.data.user)
            console.log(response.data.user)
        } catch(err) {
        }
    } 
    return (
        <div>
            <h1 className="bg-green-600"><button onClick={getUser}>is Protected</button></h1>
            <h1>{user&&user.username}</h1>
        </div>

    )
}