import { Router } from "express";
import db from "../server.js";
const router = Router();


// CRUD for todos table



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
    let query;
    let data;
    if (req.body.complete !== undefined) {
      
      data = [req.body.complete, req.params.id]
      query = "UPDATE todos SET complete = ? WHERE id = ?"
    } else {
      query = "UPDATE todos SET title = ?, todos.desc = ? WHERE id= ?";
      data = [
        req.body.title,
        req.body.desc,
        req.params.id
    ]
    }
    db.query(query, data, (err, result) => {
        if (err) {
            res.status(500).send("Error when updating")
        } else {
            res.send("Item has been updated" + result)
        }
    })

})

router.delete("/view/:id/delete", (req, res) => {
  const query = "DELETE FROM todos WHERE id=?";
  db.query(query, req.params.id, (err, result) => {
    if (err) return res.status(500).send(err)
    else {
      res.status(200).send("Item deleted successfully")
    }
  })

})

export default router;
