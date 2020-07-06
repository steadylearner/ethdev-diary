const Purchase = artifacts.require('./Purchase.sol')

contract('Purchase', (accounts) => {
    let seller = accounts[0];
    let buyer = accounts[1];

    const price = 1000000;
    const stake = 2 * price;

    before(async () => {
        // Find how to send values.
        this.contract = await Purchase.new({ value: stake });
    });

    it('Deploys successfully', async () => {
        const address = await this.contract.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    });

    it('Verify the value of the contract is equal to the price set by the seller.', async () => {
        const result = await this.contract.value();
        assert.equal(result, price);
    });
})

    // it('Test onlyOwner modifer with owner.', async () => {
    //     await this.contract.up();
    //     await this.contract.up();

    //     await this.contract.reset({ from: owner });
    //     const number = await this.contract.retrieve();
    //     assert.equal(number, 0);
    // });

    // it('Test onlyOwner modifer with notOwner.', async () => {
    //     await this.contract.up();
    //     await this.contract.up();

    //     try {
    //         await this.contract.reset({ from: notOwner });
    //         const number = await this.contract.retrieve();
    //         assert.equal(number, 0);
    //     } catch (e) {
    //         // console.log(e);
    //         assert.equal(e.reason, "Only the owner of the contract can use this.");
    //         console.log(`${notOwner} doesn't have permission for this.`);
    //     }
    // }
// }
