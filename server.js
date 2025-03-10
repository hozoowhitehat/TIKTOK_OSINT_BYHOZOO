import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

app.get('/tiktok/:username', async (req, res) => {
    const username = req.params.username;
    const url = `https://www.tiktok.com/@${username}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        });

        res.json({ profileLink: url, message: "Success! Add scraping logic here." });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch TikTok profile. TikTok might be blocking the request." });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
