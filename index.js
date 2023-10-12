const Moralis = require("moralis").default;
const express = require("express");
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3000;

const apiKey = "XQm4vxiIf27aXEZfjFiZz2VlpUnyl9vTvHQPzBkgD7AfJBRGRP7TbLrLmxG9jGc8";

app.get('/get-token-price', async (req, res) => {
  try {
    const address = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
    const chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.token.getTokenPrice({
      address,
      chain,
    });

    res.status(200).json(response.toJSON());
  } catch (error) {
    console.error("Error fetching token price:", error);
    res.status(500).json({ error: "Failed to fetch token price" });
  }
});

const startServer = async () => {
  try {
    await Moralis.start({
      apiKey: apiKey,
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting Moralis:", error);
  }
};

startServer();







//const MORALIS_API_KEY = "XQm4vxiIf27aXEZfjFiZz2VlpUnyl9vTvHQPzBkgD7AfJBRGRP7TbLrLmxG9jGc8";
//const address = "0x5c23322660f25987F6ac203014e44Cad29Ffd315";
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImEzNTAyMmI4LWRjNDYtNGIyOC1iMGJjLTA5NmZmZDFjM2FkZSIsIm9yZ0lkIjoiMzYwMDU4IiwidXNlcklkIjoiMzcwMDQzIiwidHlwZUlkIjoiYWZhMjE2MWEtMTAyNC00YTY3LWE4YzYtZjc5ZjdmODE1OTU5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTY1NzQwNTUsImV4cCI6NDg1MjMzNDA1NX0.sFDZozSFkTHCKf_-7vnxSwJQHm7G4TwAzYPEEWRIQ5M