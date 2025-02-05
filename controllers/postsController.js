import connection from "../data/db.js";

const index = (req, res) => {
  const sql = `SELECT * FROM posts`;

  connection.query(sql, (err, results) => {
    if (err) return res.json({ error: err.message });
    res.json(results);
  })
}

const show = (req, res) => {
  const id = req.params.id;
  res.send(`Post con id ${id}`);
}

const store = (req, res) => {
  res.send(`Aggiungo un nuovo post`);
}

const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifico il post con id: ${id}`);
}

const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifico parzialmente il post con id: ${id}`);
}

const destroy = (req, res) => {
  const id = req.params.id;
  res.send(`Elimino il post con id: ${id}`);
}

export {
  index,
  show,
  store,
  update,
  modify,
  destroy
}