const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const INFURA_KEY = "3d5946dc2c004e5ebf0d61ca28a8930d";
const privateKeys = "bdee6de0ecf95c1b9f02aa0843c84bdf7fb4840e1f6dd04dff0e57b30b27d1cf";

module.exports = {
    
    contracts_build_directory: path.join(__dirname, "app/src/contracts"),

    networks: {
        development: {host: "127.0.0.1", port: 7545, network_id: "5777"},
        fork: {host: "127.0.0.1", port: 8545, network_id: "5777"}, // fork from testnet
        local: {host: "127.0.0.1", port: 8545, network_id: "44"},
        rinkeby : {
            provider: function() {
                return new HDWalletProvider(privateKeys, `https://rinkeby.infura.io/v3/${INFURA_KEY}`, 0);
            },
            network_id: "4",
            skipDryRun: true,
        },
        kovan : {
            provider: function() {
                return new HDWalletProvider(privateKeys, `https://kovan.infura.io/v3/${INFURA_KEY}`, 0);
            },
            network_id: "42",
            skipDryRun: true,
        }

    },
    plugins: [
        "truffle-plugin-verify"
    ],
    api_keys: {
        etherscan: "1W4S...YJXQ"
    }
};
