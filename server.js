const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/tiktok/:username', async (req, res) => {
    const username = req.params.username;
    const url = `https://www.tiktok.com/@${username}`;

    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        if (!response.ok) throw new Error('Profile not found');

        res.json({ profileLink: url, message: "Success! Add scraping logic here." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
