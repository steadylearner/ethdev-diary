// 1. truffle test (If it passes, use 2.)
// 2. truffle migrate --reset
// 3. yarn dev

const TodoList = artifacts.require('./TodoList.sol')

contract('TodoList', (accounts) => {
  // https://stackoverflow.com/questions/32660241/mocha-beforeeach-vs-before-execution/32682451
  before(async () => {
    this.todoList = await TodoList.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.todoList.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists tasks', async () => {
    const taskCount = await this.todoList.taskCount()
    const task = await this.todoList.tasks(taskCount)
    assert.equal(task.id.toNumber(), taskCount.toNumber())
    assert.equal(task.content, 'Make a counter app on your own.')
    assert.equal(task.completed, false)
    assert.equal(taskCount.toNumber(), 1)
  })

  it('creates tasks', async () => {
    const result = await this.todoList.createTask('A new task')
    const taskCount = await this.todoList.taskCount()
    assert.equal(taskCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'A new task')
    assert.equal(event.completed, false)
  })

  it('toggles task completion', async () => {
    const result = await this.todoList.toggleCompleted(1)
    const task = await this.todoList.tasks(1)
    assert.equal(task.completed, true)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 1)
    assert.equal(event.completed, true)
  })

})

// You can use new() instead of deployed()
// You can skipt tests with x prefix.
// Refer to https://cryptozombies.io/pt/lessoazn/11/chapter/5
// npm -g install chai

// const CryptoZombies = artifacts.require("CryptoZombies");
// const utils = require("./helpers/utils");
// const time = require("./helpers/time");
// var expect = require('chai').expect;

// const zombieNames = ["Zombie 1", "Zombie 2"];
// contract("CryptoZombies", (accounts) => {
//     let [alice, bob] = accounts;
//     let contractInstance;
//     beforeEach(async () => {
//         contractInstance = await CryptoZombies.new();
//     });
//     it("should be able to create a new zombie", async () => {
//         const result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
//         expect(result.receipt.status).to.equal(true);
//         expect(result.logs[0].args.name).to.equal(zombieNames[0]);
//     })
//     it("should not allow two zombies", async () => {
//         await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
//         await utils.shouldThrow(contractInstance.createRandomZombie(zombieNames[1], {from: alice}));
//     })
//     context("with the single-step transfer scenario", async () => {
//         it("should transfer a zombie", async () => {
//             const result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
//             const zombieId = result.logs[0].args.zombieId.toNumber();
//             await contractInstance.transferFrom(alice, bob, zombieId, {from: alice});
//             const newOwner = await contractInstance.ownerOf(zombieId);
//             expect(newOwner).to.equal(bob);
//         })
//     })
//     context("with the two-step transfer scenario", async () => {
//         it("should approve and then transfer a zombie when the approved address calls transferForm", async () => {
//             const result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
//             const zombieId = result.logs[0].args.zombieId.toNumber();
//             await contractInstance.approve(bob, zombieId, {from: alice});
//             await contractInstance.transferFrom(alice, bob, zombieId, {from: bob});
//             const newOwner = await contractInstance.ownerOf(zombieId);
//             expect(newOwner).to.equal(bob);
//         })
//         it("should approve and then transfer a zombie when the owner calls transferForm", async () => {
//             const result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
//             const zombieId = result.logs[0].args.zombieId.toNumber();
//             await contractInstance.approve(bob, zombieId, {from: alice});
//             await contractInstance.transferFrom(alice, bob, zombieId, {from: alice});
//             const newOwner = await contractInstance.ownerOf(zombieId);
//             expect(newOwner).to.equal(bob);
//          })
//     })
//     it("zombies should be able to attack another zombie", async () => {
//         let result;
//         result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
//         const firstZombieId = result.logs[0].args.zombieId.toNumber();
//         result = await contractInstance.createRandomZombie(zombieNames[1], {from: bob});
//         const secondZombieId = result.logs[0].args.zombieId.toNumber();
//         await time.increase(time.duration.days(1));
//         await contractInstance.attack(firstZombieId, secondZombieId, {from: alice});
//         expect(result.receipt.status).to.equal(true);
//     })
// })

// https://solidity.readthedocs.io/en/v0.4.21/introduction-to-smart-contracts.html#self-destruct

// util.js
// async function shouldThrow(promise) {
//   try {
//     await promise;
//     assert(true);
//   }
//   catch (err) {
//     return;
//   }
//   assert(false, "The contract did not throw.");

// }

// module.exports = {
//   shouldThrow,
// };

// time.js
// async function increase(duration) {

//     //first, let's increase time
//     await web3.currentProvider.sendAsync({
//         jsonrpc: "2.0",
//         method: "evm_increaseTime",
//         params: [duration], // there are 86400 seconds in a day
//         id: new Date().getTime()
//     }, () => {});

//     //next, let's mine a new block
//     web3.currentProvider.send({
//         jsonrpc: '2.0',
//         method: 'evm_mine',
//         params: [],
//         id: new Date().getTime()
//     })

// }

// const duration = {

//     seconds: function (val) {
//         return val;
//     },
//     minutes: function (val) {
//         return val * this.seconds(60);
//     },
//     hours: function (val) {
//         return val * this.minutes(60);
//     },
//     days: function (val) {
//         return val * this.hours(24);
//     },
// }

// module.exports = {
//     increase,
//     duration,
// };