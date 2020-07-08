const Purchase = artifacts.require('./Purchase.sol')
// const BigNumber = require('bignumber.js'); // https://github.com/MikeMcl/bignumber.js/

contract('Purchase', (accounts) => {
    let seller = accounts[0]
    let onlySeller = "Only seller can call this.";

    let buyer = accounts[1];
    let onlyBuyer = "Only buyer can call this.";

    const amount = "2";
    const price = web3.utils.toWei(amount, "ether"); // willing to send 2 ethers, convert to wei value
    const stake = web3.utils.toWei("4", "ether");
    const total = web3.utils.toWei("8", "ether");

    // It doesn't work.
    // const amount = 2;
    // const price = web3.utils.toWei(new BigNumber(amount), "ether"); // willing to send 2 ethers, convert to wei value
    // const stake = web3.utils.toWei(new BigNumber(amount * 2), "ether");
    // const total = web3.utils.toWei(new BigNumber(amount * 2 * 2), "ether");

    // const price = 1000000000000000000;
    // const stake = 2 * price;
    // const total = 2 * stake;

    beforeEach(async () => {
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

    // Group?
    it('Abort the contract with the seller.', async () => {
        await this.contract.abort({ from: seller });
    });

    it('Abort the contract with a buyer.', async () => {
        try {
            await this.contract.abort({ from: buyer });
        } catch (e) {
            assert.equal(e.reason, onlySeller);
        }
    });

    // Group?
    it('Confirm the purchase with a buyer.', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });
        const contractBuyer = await this.contract.buyer();

        // https://ethereum.stackexchange.com/questions/29344/truffle-testing-enum-values
        //Is this still not available?
        // const state = await this.contract.state();

        assert.equal(buyer, contractBuyer);
        // assert.equal(state, "");
    });

    // Group?
    it('Confirm received with a buyer after the purchase.', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });
        await this.contract.confirmReceived({ from: buyer });
    });

    it('Confirm received with the seller after the purchase.', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });

        try {
            await this.contract.confirmReceived({ from: seller });
        } catch (e) {
            assert.equal(e.reason, onlyBuyer);
        }
    });

    // Group?
    it('Test refundSeller with the seller.', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });

        const address = await this.contract.address;
        let balance = await web3.eth.getBalance(address)

        // The contract balance should be 4 * price.
        assert.equal(balance, total);

        await this.contract.confirmReceived({ from: buyer });
        await this.contract.refundSeller({ from: seller });

        balance = await web3.eth.getBalance(address)
        // The contract balance shoud be 0.
        assert.equal(balance, 0);

        // const contractSeller = await this.contract.seller();
        // const contractBuyer = await this.contract.buyer();

        // console.log(contractSeller);
        // console.log(contractBuyer);
    });

    it('Test refundSeller with a buyer.', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });
        await this.contract.confirmReceived({ from: buyer });

        try {
            await this.contract.refundSeller({ from: buyer });
        } catch (e) {
            assert.equal(e.reason, onlySeller);
        }
    });

    it('Test confirmReceived twice', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });
        await this.contract.confirmReceived({ from: buyer });

        try {
            await this.contract.confirmReceived({ from: buyer });
        } catch (e) {
            console.log(e);
        }
    });

    it('Test confirmReceived twice', async () => {
        await this.contract.confirmPurchase({ from: buyer, value: stake });
        await this.contract.confirmReceived({ from: buyer });

        try {
            await this.contract.refundSeller({ from: seller });
            await this.contract.refundSeller({ from: seller });
        } catch (e) {
            console.log(e);
        }
    });
})