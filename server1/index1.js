const express = require('express');
const app = express();

const pino = require('pino');

const logger = pino(
  {},
  pino.destination('app.log')
);

// middleware pro parsování dat z formuláře
app.use(express.urlencoded({ extended: true }));

// GET – zobrazí formulář
app.get('/', (req, res) => {
  res.send(`
    <body style="background-color: lightgreen;">
    <h1>Stránka pro zadání dotazu</h1>
    <form method="POST" action="/submit">
      <input type="text" name="query" placeholder="Dotaz" />
      <button type="submit">Vyhledej</button>
    </form>
    </body>
  `);
});

// POST – zpracuje data
//app.post('/submit', async (req, res) => {
//  const query = req.body.query;

//  logger.info("Odesláno:" + query );

//  await fetch('http://localhost:4000/data', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({ query })
//  });

//  res.send(`Odesláno: ${query}`);

//});

// spuštění serveru

//app.listen(3000, () => {
//  console.log('Server běží na http://localhost:3000');
app.listen(process.env.PORT || 3000);

//});
