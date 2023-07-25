import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [credentials, setCredentials] = useState({ password: "", email: ""});

    async function handleLogin() {
        await axios.post("http://localhost:3000/api/users/login", credentials).then((result) => {
            console.log(result.data.token)
            localStorage.setItem("token", result.data.token)
        })
    }
    function handleInputChange(e) {
        setCredentials(credentials => ({...credentials, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <div>  
                <label htmlFor="email">Email</label>
                <input onChange={handleInputChange} type="email" name="email" id="email" placeholder="Enter your email" />
            </div>
            <div>  
                <label htmlFor="password">Password</label>
                <input onChange={handleInputChange} type="password" name="password" id="password" placeholder="Enter your Password" />
            </div>
            <button onClick={handleLogin} type="submit">Login</button>
        
        </div>
    )
}