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


// Route to fetch all products
app.get('/', (req, res) => {
    const sql = "SELECT id, name, description, price, image_url, artist, genre_id FROM products";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        return res.json(data);
    });
});


app.listen(7000, () => {
    console.log('Server is listening on port 7000');
});

