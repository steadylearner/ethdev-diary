// 1. truffle test (If it passes, use 2.)
// 2. truffle migrate --reset
// 3. yarn dev

const Hello = artifacts.require('./Hello.sol')

contract('Hello', (accounts) => {
  before(async () => {
    this.contract = await Hello.new();
  });

  it('deploys successfully', async () => {
    const address = await this.contract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, '');
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it('Test speak.', async () => {
    const hello = await this.contract.speak();
    assert.equal(hello, "Hello");
  });
})
