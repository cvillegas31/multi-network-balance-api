const Web3 = require("web3");
const express = require('express');
const chains = require('./chains');
require('dotenv').config();



async function getBalance(network, address) {

    try {
        //Get id of the network. The network name matches infura network strings
        const networkId = chains.getNetworkId(network);
        const nativeCurrency = chains.getNativeCurrency(networkId);
        //The network id matches chainlist network ids
        const provider = chains.getProvider(Number(networkId));
        const web3Client = new Web3(new Web3.providers.HttpProvider(provider));
        const balance = await web3Client.eth.getBalance(address);

        if (nativeCurrency === 'ETH') {
            balance = web3Client.utils.fromWei(balance);
        }


        return balance;

    } catch (error) {
        return error;
    }
}

const app = express();

app.get('/api/balance/:network/:address', async (req, res) => {
    try {
        const balance = await getBalance(req.params.network, req.params.address);
        return res.status(200).json({
            balance: balance,
        })
    } catch (error) {
        return res.status(500).json({
            err: error.toString(),
        })

    }
})


app.listen(3001, () => {
    console.log("running on port 3001")
})