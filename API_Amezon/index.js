const express = require("express");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const options = {
  method: "GET",
  url: "https://real-time-amazon-data.p.rapidapi.com/search",
  params: {
    query: "Phone",
    page: "1",
    country: "US",
    sort_by: "RELEVANCE",
    product_condition: "ALL",
    is_prime: "false",
    deals_and_discounts: "NONE",
  },
  headers: {
    "x-rapidapi-key": process.env.API,
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

app.get("/", async (req, res) => {
  try {
    const data = await fetchData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
