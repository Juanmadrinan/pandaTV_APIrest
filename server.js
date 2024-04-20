const express = require('express');
require('./db/db-connection-mongo');
require('dotenv').config();
const cors = require('cors');
const tipoRoutes = require('./routes/tipoRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const genreRoutes = require('./routes/genreRoutes');
const directorRoutes = require('./routes/directorRoutes');

const app = express();
app.use(express.json());


async function main() {
  await app.listen(process.env.PORT);
  console.log(`Server on port ${process.env.PORT}, Congratulations`);
}

app.get('/', (req, res) => {
  res.send('Hola mundo!!!!!');
})

app.use(cors(
  origin = 'https://main--classy-pothos-d58372.netlify.app',
));
app.use('/api/tipo', tipoRoutes);
app.use('/api/productora', productoraRoutes);
app.use('/api/genre', genreRoutes);
app.use('/api/director', directorRoutes);
app.use('/api/media', mediaRoutes);

main();
