import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [credentials, setCredentials] = useState({username: "", password: "", email: ""});

    async function handleRegister() {
        await axios.post("http://localhost:3000/api/users/register", credentials)
    }
    function handleInputChange(e) {
        console.log(e.target.name, e.target.value)
        setCredentials(credentials => ({...credentials, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <div>  
                <label htmlFor="email">Username</label>
                <input onChange={handleInputChange} type="text" name="username" id="username" placeholder="Enter your Username" />
            </div>
            <div>  
                <label htmlFor="email">Email</label>
                <input onChange={handleInputChange} type="email" name="email" id="email" placeholder="Enter your email" />
            </div>
            <div>  
                <label htmlFor="password">Password</label>
                <input onChange={handleInputChange} type="password" name="Password" id="Password" placeholder="Enter your Password" />
            </div>
            <button onClick={handleRegister} type="submit">Register</button>
        
        </div>
    )
}