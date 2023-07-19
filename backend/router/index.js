import { Router } from "express";
import db from "../server.js";
const router = Router();


// CRUD for todos table

router.get("/view", (req, res) => {
  const query = "SELECT * FROM todolist.todos";
  db.query(query, (err, data) => {
    if (err) {
        res.status(500).send(err)
    }
    else  {
        res.send(data)
    }
  })
});

router.put("/view/:id/update", (req, res) => {
    console.log("I'm hwew")
    const query = "UPDATE todos SET title = ?, todos.desc = ? WHERE id=?";
    const data = [
        req.body.title,
        req.body.desc,
        req.params.id
    ]
    db.query(query, data, (err, result) => {
        if (err) {
            res.status(500).send("Error when updating")
        } else {
            res.send("Item has been updated" + result)
        }
    })

})

router.post("/create", (req, res) => {
  console.log(req.body);
  const values = [req.body.title, req.body.desc];
  const query = "INSERT INTO `todolist`.`todos` (`title`, `desc`) VALUES (?)";
  db.query(query, [values], (err, result) => {
    if (err) {
      return res.status(500).send(err); // Handle the error properly and return an error response
    } else {
      res.send("Item has been added: " + result);
    }
  });
});

export default router;
