// Middlewares
import notFound from './middlewares/notFound.js';
import serverError from './middlewares/serverError.js';
// Express
import express from 'express';
const app = express();
const port = 3000;
// Router
import postsRouter from './routes/posts.js';

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del blog');
})
// Posts router
app.use('/posts', postsRouter);

// Error handling middlewares
app.use(notFound);
app.use(serverError);

app.listen(port, () => {
  console.log(`Express in ascolto sulla porta ${port}`);
})