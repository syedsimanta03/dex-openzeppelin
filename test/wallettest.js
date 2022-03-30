const Dex = artifacts.require('Dex');
const Link = artifacts.require('Link');
const truffleAssert = require('truffle-assertions')

contract('DEX', accounts => {
  it('should only be possible to add token by the owner', async () => {
    let dex = await Dex.deployed();
    let link = await Link.deployed();
    await truffleAssert.passes(dex.addToken(web3.utils.fromUtf8('LINK'), link.address, {from: accounts[0]}))
  })
  it('should handle deposit correctly', async () => {
    let dex = await Dex.deployed();
    let link = await Link.deployed();
    await link.approve(dex.address, 500);
    await dex.deposit(100, web3.utils.fromUtf8('LINK')) 
    let balance = await dex.balances(accounts[0], web3.utils.fromUtf8('LINK'));
    assert.equal(balance.toNumber(), 100);
  })
  it('should handle withdrawal correctly', async () => {
    let dex = await Dex.deployed();
    let link = await Link.deployed();
    await truffleAssert.reverts(dex.withdraw(500, web3.utils.fromUtf8('LINK')))
  })
})
