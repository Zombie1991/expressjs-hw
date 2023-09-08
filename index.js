const express = require('express');
// listen to port 3000
const bodyParser = require('body-parser');
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send(
      `<html>
      <body>
        <p>Response to the signal from distant space</p>
      </body>
      </html>`
    );
    res.send({ some: 'json' })
  });

  app.get('/', (req, res) => {
    res.status(404);
    res.send('<h1>Page not found</h1>');
  });

  
  app.get('/users/:id/albums/:album/:photo', (req, res) => {
    const { id, album, photo } = req.params;

  res.send(`We're on a user's page with the id of ${id}, looking through album #${album}, photo #${photo}`); 
  });


  // מוסיף middleware לעיבוד JSON ו-Query String
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// טיפול בבקשת GET לכתובת /search
app.get('/search', (req, res) => {
    // קריאה לפרמטרים מ-Query String
    const { keyword, limit } = req.query;

    // בניית תשובה בפורמט JSON
    const response = {
        keyword: keyword,
        limit: limit
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

  