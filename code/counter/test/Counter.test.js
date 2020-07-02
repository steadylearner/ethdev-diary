const Counter = artifacts.require('./Counter.sol')

// https://ethereum.stackexchange.com/questions/38756/how-to-test-contract-functions-with-onlyowner-modifier

contract('Counter', (accounts) => {
    let owner = accounts[0];
    let notOwner = accounts[1];

    before(async () => {
        this.contract = await Counter.new();
    });

    it('deploys successfully', async () => {
        const address = await this.contract.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    });

    it('Test up.', async () => {
        const result = await this.contract.up();
        const event = result.logs[0].args;
        // console.log(event);
        assert.equal(event.newNumber, 1);
    });

    it('Test down.', async () => {
        const result = await this.contract.down();
        const event = result.logs[0].args;
        assert.equal(event.newNumber, 0);
    });

    it('Test onlyOwner modifer with owner.', async () => {
        await this.contract.up();
        await this.contract.up();

        await this.contract.reset({ from: owner });
        const number = await this.contract.retrieve();
        assert.equal(number, 0);
    });

    it('Test onlyOwner modifer with notOwner.', async () => {
        await this.contract.up();
        await this.contract.up();

        try {
            await this.contract.reset({ from: notOwner });
            const number = await this.contract.retrieve();
            assert.equal(number, 0);
        } catch (e) {
            // console.log(e);
            assert.equal(e.reason, "Only the owner of the contract can use this.");
            console.log(`${notOwner} doesn't have permission for this.`);
        }
    });
})