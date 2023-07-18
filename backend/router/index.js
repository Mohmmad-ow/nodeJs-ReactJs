import {Router} from "express";
import db from "../server.js";
const router = Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM todolist.todos WHERE id = ${id}`, (err, data) => {
        if (err) return err
        else res.send(data)
    })
    

})
router.post("/create", (req, res) => {
    console.log(req.body)
    const values = [req.body.title, req.body.desc]
    const query = "INSERT INTO `todolist`.`todos` (`title`, `desc`) VALUES (?)";
    db.query(query, [values], (err, result) => {
        if (err) return err
        else {
            res.send("Item has been added: " + result)
        }
    })
    
})


export default router