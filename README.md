# multi-network-balance-api

This repository contains NodeJS with a single endpoint which when called with parameters of address and network, returns native chain token balances of the given address.

It supports the following networks

 mainnet
 rinkeby //boba network https://blockexplorer.rinkeby.boba.network/address/0x498968C2B945Ac37b78414f66167b0786E522636/transactions
 goerli
 kovan
 optimism-mainnet // https://optimistic.etherscan.io/
 optimism-kovan  // https://kovan-optimistic.etherscan.io/
 arbitrum-mainnet
 arbitrum-rinkeby
 polygon-mainnet  //https://polygonscan.com/
 polygon-mumbai
 gnosis


## Testing the API in a local environment

1. clone the project and run the following command
   ```
   node index.js
   ```

   ```
2. from a browser
   ```
   http://localhost:3001/api/balance/<network>/<address>
   http://localhost:3001/api/balance/polygon-mainnet/0x67B94473D81D0cd00849D563C94d0432Ac988B49
   ```

   ```


