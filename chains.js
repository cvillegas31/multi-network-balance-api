const ChainId = {
    MAINNET: 1,
    RINKEBY: 4,
    GÖRLI: 5,
    KOVAN: 42,
    OPTIMISM: 10,
    OPTIMISTIC_KOVAN: 69,
    ARBITRUM_ONE: 42161,
    ARBITRUM_RINKEBY: 421611,
    POLYGON: 137,
    POLYGON_MUMBAI: 80001,
    GNOSIS: 100
};
Object.freeze(ChainId);


const ChainName = {
    // ChainNames match infura network strings
    MAINNET: 'mainnet',
    RINKEBY: 'rinkeby', //boba network https://blockexplorer.rinkeby.boba.network/address/0x498968C2B945Ac37b78414f66167b0786E522636/transactions
    GÖRLI: 'goerli',
    KOVAN: 'kovan',
    OPTIMISM: 'optimism-mainnet', // https://optimistic.etherscan.io/
    OPTIMISTIC_KOVAN: 'optimism-kovan',  // https://kovan-optimistic.etherscan.io/
    ARBITRUM_ONE: 'arbitrum-mainnet',
    ARBITRUM_RINKEBY: 'arbitrum-rinkeby',
    POLYGON: 'polygon-mainnet',  //https://polygonscan.com/
    POLYGON_MUMBAI: 'polygon-mumbai',
    GNOSIS: 'gnosis'
};

Object.freeze(ChainName);

const NativeCurrencyName = {
    // Strings match input for CLI
    ETHER: 'ETH',
    MATIC: 'MATIC',
    XDAI: 'XDAI'
};

Object.freeze(NativeCurrencyName);

const NATIVE_CURRENCY = {
    [ChainId.MAINNET]: NativeCurrencyName.ETHER,
    [ChainId.RINKEBY]: NativeCurrencyName.ETHER,
    [ChainId.GÖRLI]: NativeCurrencyName.ETHER,
    [ChainId.KOVAN]: NativeCurrencyName.ETHER,
    [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
    [ChainId.OPTIMISTIC_KOVAN]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_RINKEBY]: NativeCurrencyName.ETHER,
    [ChainId.POLYGON]: NativeCurrencyName.MATIC,
    [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
    [ChainId.GNOSIS]: NativeCurrencyName.XDAI,
};

function getNetworkId(name) {
    switch (name) {
        case ChainName.MAINNET:
            return ChainId.MAINNET;
        case ChainName.RINKEBY:
            return ChainId.RINKEBY;
        case ChainName.GÖRLI:
            return ChainId.GÖRLI;
        case ChainName.KOVAN:
            return ChainId.KOVAN;
        case ChainName.OPTIMISM:
            return ChainId.OPTIMISM;
        case ChainName.OPTIMISTIC_KOVAN:
            return ChainId.OPTIMISTIC_KOVAN;
        case ChainName.ARBITRUM_ONE:
            return ChainId.ARBITRUM_ONE;
        case ChainName.ARBITRUM_RINKEBY:
            return ChainId.ARBITRUM_RINKEBY;
        case ChainName.POLYGON:
            return ChainId.POLYGON;
        case ChainName.POLYGON_MUMBAI:
            return ChainId.POLYGON_MUMBAI;
        case ChainName.GNOSIS:
            return ChainId.GNOSIS;
        default:
            throw new Error(`Unknown chain id: ${id}`);
    }
};

const CHAIN_IDS_LIST = Object.values(ChainId).map((c) => c.toString());

function getProvider(id) {
    switch (id) {
        case ChainId.MAINNET:
            return process.env.JSON_RPC_PROVIDER;
        case ChainId.RINKEBY:
            return process.env.JSON_RPC_PROVIDER_RINKEBY;
        case ChainId.GÖRLI:
            return process.env.JSON_RPC_PROVIDER_GORLI;
        case ChainId.KOVAN:
            return process.env.JSON_RPC_PROVIDER_KOVAN;
        case ChainId.OPTIMISM:
            return process.env.JSON_RPC_PROVIDER_OPTIMISM;
        case ChainId.OPTIMISTIC_KOVAN:
            return process.env.JSON_RPC_PROVIDER_OPTIMISTIC_KOVAN;
        case ChainId.ARBITRUM_ONE:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE;
        case ChainId.ARBITRUM_RINKEBY:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_RINKEBY;
        case ChainId.POLYGON:
            return process.env.JSON_RPC_PROVIDER_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI;
        case ChainId.GNOSIS:
            return process.env.JSON_RPC_PROVIDER_GNOSIS;
        default:
            throw new Error(`Chain id: ${id} not supported`);
    }
};

function getNativeCurrency(id) {
    return NATIVE_CURRENCY[id];

}

module.exports = { getNetworkId, getProvider, getNativeCurrency }



