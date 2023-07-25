import { Router } from "express";
import db from "../server.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import verifyToken from "../auth/verifyToken.js";
const router = Router();

router.post("/register", (req, res) => {
    console.log(req.body)
    const user = [req.body.email,bcrypt.hashSync(req.body.password, 10),req.body.Username ]
    const query = "INSERT INTO `todolist`.`users` (`email`, `password`, `username`) VALUES (?, ?, ?)";
    db.query(query, user, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result)
            res.json(result)
        }
    })
    
});

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    const query = "SELECT * FROM users WHERE email = ?"
    db.query(query, [email], (err, result) => {
        if (err) res.status(500).json({message: "Error when logging in"})
        else if (result.length === 0) {
            console.log(result + "I'm here")
            res.status(400).json({message: "User not found"})
        } else {
            const user = result[0];
            const passMatch = bcrypt.compare(password, user.password)
            if (!passMatch) {
                res.status(401).json({message: "Password is Invalid"})
            } else {
                const token = jwt.sign({id: user.id}, "SecretKey", {
                    expiresIn: "1h"
                });
                
                res.json({token: token})
            }
        }
    })
});

router.post("/protected", verifyToken, (req, res) => {
    res.json({ message: "Protected route accessed" });
  });


export default router;

