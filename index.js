import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';

const app = express();

app.use(express.static('src/views'));
app.use(express.static('public'))
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));


app.get('/', (req, res) => {
  res.render('landing');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});