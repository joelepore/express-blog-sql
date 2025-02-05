import connection from "../data/db.js";

const index = (req, res) => {
  const sql = `SELECT * FROM posts`;

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  })
}

const show = (req, res) => {
  const id = req.params.id;
  const sqlPosts = `SELECT * FROM posts WHERE id = ?`;
  const sqlTags = `
    SELECT T.* 
    FROM tags AS T
    JOIN post_tag AS PT ON PT.tag_id = T.id
    WHERE PT.post_id = ?
    `

  connection.query(sqlPosts, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Risorsa non trovata' });

    const post = results[0];

    connection.query(sqlTags, [id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ error: 'Risorsa non trovata' });

      post.tags = results;
      res.json(post);
    })

  })
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
  const sql = `DELETE FROM posts WHERE id = ?`;

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  })
}

export {
  index,
  show,
  store,
  update,
  modify,
  destroy
}