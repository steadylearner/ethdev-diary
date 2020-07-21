# Record of eth learning process

I am complete beginner to Ethereum and crypto relevant tech. I will continue until I get a job with this. If I could, you will also able to get a job following this repository.

If you want the similar one for Rust, you can refer to [the Rust Full Stack](https://github.com/steadylearner/Rust-Full-Stack) Repository.

You can support it with Bitcoin.

```console
1ESPcN8eQs8mXYYgbYysg9whzY4k3scSpy	
```

## The current state of this repository

* Update React Parcel Ethereum example
* Code a remote purchase example with React and an image of a real product while you refer to with_ipfs and react parcel ethereum example.
* Write a job board with login and CRUD for freelancers.

## Start

* [Search and read information for Object Oriented Programming.](https://www.google.com/search?&q=what+is+obejct+oriented+programming)
* Code the first section of the [CryptoZombie](https://cryptozombies.io/en/) to learn Solidity and [the official ethereum build page](https://ethereum.org/en/build/)
* Follow [Dapp Tutorial](https://www.dappuniversity.com/articles/the-ultimate-ethereum-dapp-tutorial) to set up development environment with Promise API.(The last process is outdated?, Some Solidity syntax is different from the current version.)
* Code the second section(truffle, ganache) of the [CryptoZombie](https://cryptozombies.io/en/) course.
* [Read the official documenation for Solidty](https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html) and foucs on [contract](https://solidity.readthedocs.io/en/latest/contracts.html#), [units and global variables](https://solidity.readthedocs.io/en/latest/units-and-global-variables.html) and [Solidity by example](https://solidity.readthedocs.io/en/latest/solidity-by-example.html#safe-remote-purchase) part. Then, read [Truffle documenation](https://www.trufflesuite.com/docs/truffle/getting-started/debugging-your-contracts) 
* [You can inherit from the existing contracts.](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts) Read [OpenZepplin Documenation](https://docs.openzeppelin.com/contracts/3.x/) and find more.
* [Ethereum Book](https://github.com/ethereumbook/ethereumbook)
* https://swcregistry.io/
* [Building a fully decentralized User profile app on Ethereum and IPFS](https://medium.com/@sebinatx/building-a-fully-decentralized-user-profile-dapp-on-ethereum-and-ipfs-e55afac35718)
* [Never Use Passwords Again with Ethereum and Metamask](https://hackernoon.com/never-use-passwords-again-with-ethereum-and-metamask-b61c7e409f0d)
* [Solidity Crud](https://medium.com/robhitchens/solidity-crud-part-1-824ffa69509a)
* [Read the source code of Solidity patterns.](https://github.com/fravoll/solidity-patterns)
* [Make a frontend code and tests.](https://github.com/pbrudny/learning-solidity-2018)
* [Find some interesting projects at dappuniversity GitHub](https://github.com/dappuniversity) and other.


## Code

```console
$truffle init or $truffle unbox
$truffle compile
$truffle create contract Contract
```

Make migrations/2_contract.js and write Solidity code for Contract.sol file.

```console
$truffle migrate
$truffle console
```

```js
contract = await Contract.new()
contract
```

```console
$truffle test
// Edit contract if necessary.
$truffle migrate --reset
($yarn dev)
```

* [Hello with a pure function.](https://github.com/steadylearner/ethdev-diary/tree/master/code/hello)
* [Minimal Example with a getter and setter to handle data.](https://github.com/steadylearner/ethdev-diary/tree/master/code/storage)
* [Test modifier imported from another contract.](https://github.com/steadylearner/ethdev-diary/tree/master/code/counter)
* [Remote purchase example with tests](https://github.com/steadylearner/ethdev-diary/tree/master/start/purchase)
* [React Parcel Ethereum example](https://github.com/steadylearner/ethdev-diary/tree/master/start/react-parcel-eth)
* Follow the with-ipfs project and update it with the latest code.
* Make a job board with login and CRUD.

## Security

* [Ethereum Best Practices](https://consensys.github.io/smart-contract-best-practices/known_attacks/#integer-overflow-and-underflow)

## Deployment

* [Infura](https://infura.io/) and [Cryptozombie course for it](https://cryptozombies.io/pt/lesson/10/chapter/2)

## Wallet

* [Metamask](https://www.google.com/search?&q=metamask)
* [truffle](https://github.com/trufflesuite/truffle-hdwallet-provider)

## Invest

* [Earn interest](https://cryptobriefing.com/yield-farming-defi-beginners-guide-earning-interest-crypto/)

## IPFS

* [Why IPFS](https://www.youtube.com/watch?v=zE_WSLbqqvo), [IPFS companion browser extension](https://addons.mozilla.org/en-US/firefox/addon/ipfs-companion/), [Pinata](https://www.google.com/search?&q=pinata+ipfs) or Filecoin(I am not sure this will be worth your time.) to save data
* [Official documenation](https://docs.ipfs.io/), Learn commands with [Decentralized web primer](https://flyingzumwalt.gitbooks.io/decentralized-web-primer/)
* [Tutorials](https://proto.school/#/tutorials)
* [go-ipfs](https://github.com/ipfs/go-ipfs), [js-ipfs](https://github.com/ipfs/js-ipfs)
* [OrbitDB](https://github.com/orbitdb/orbit-db) and [a blog post for it.](https://medium.com/@rossbulat/orbitdb-deploying-the-distributed-ipfs-database-with-react-79afa1a7fabb)
* [pubsub](https://blog.ipfs.io/25-pubsub/)

## Read More 

* [Example of a real world smart contract](https://www.reddit.com/r/ethereum/comments/a4mmum/example_of_a_real_world_smart_contract_i_read/)
* [eth dev reading list](https://github.com/yippee-ki-yay/eth-dev-reading-list)
* [Designing the architecture for your Ethereum application](https://blog.openzeppelin.com/designing-the-architecture-for-your-ethereum-application-9cec086f8317/)
* [How Ethereum Works](https://consensys.net/blog/blockchain-explained/how-ethereum-works-part-2-smart-contracts-gas-and-dapps/)
* [How Bitcoin Works Under the Hood](http://www.imponderablethings.com/2013/07/how-bitcoin-works-under-hood.html)
* [Bitcoin Book](https://github.com/bitcoinbook/bitcoinbook)
