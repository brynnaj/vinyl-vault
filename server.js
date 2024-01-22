// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: 'sql5.freesqldatabase.com',
//     user: 'sql5678943',
//     password: 'qxyvTwSRBd',
//     database: 'sql5678943'
// });

// // Route to check if the server is running
// app.get('/', (req, res) => {
//     return res.json("Server is running");
// });

// // Route to fetch all products
// app.get('/products', (req, res) => {
//     const sql = "SELECT id, name, description, price, image_url, artist, genre_id FROM products";
//     db.query(sql, (err, data) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }

//         return res.json(data);
//     });
// });


// app.listen(8000, () => {
//     console.log('Server is listening on port 8000');
// });

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5678943',
    password: 'qxyvTwSRBd',
    database: 'sql5678943'
});

// Route to check if the server is running
app.get('/', (req, res) => {
    return res.json("Server is running");
});

// Route to fetch all products
app.get('/products', (req, res) => {
    const sql = "SELECT id, name, description, price, image_url, artist, genre_id FROM products";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.json(data);
    });
});

const PORT = process.env.PORT || 8000; // Use process.env.PORT if available, otherwise use port 8000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});