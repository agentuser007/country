const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/country/:countryName', async (req, res) => {
    try {
        if (!req.params.countryName) {
            return res.status(400).json({ message: 'Please enter a country name' });
        }
        const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.countryName}`);

        if (response.status === 200) {
            return res.json(response.data);
        } else {
            // If the request failed
            return res.status(500).json({
                message: 'Something went wrong. Please try again later.'
            })
        }
     
    }
    catch (error) {
        if (error.response.status === 404) {
            return res.status(404).json({
                message: 'Country not found.'
            })
        }else {
            console.log(error);
            return res.status(500).json({
            message: 'Backend server error'
                })
            }    
        }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});