// truffle init
// Connect to ganache local blockchain.

// https://cryptozombies.io/pt/lesson/10/chapter/5
// truffle migrate --network rinkeby 
// truffle migrate --network mainnet

// https://cryptozombies.io/pt/lesson/10/chapter/7
// https://cryptozombies.io/pt/lesson/10/chapter/10

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
