##Truffle Console to Play with this contract

wallet.addToken(web3.utils.fromUtf8('Link'), link.address)

wallet.tokenList(0)

wallet.addToken(web3.utils.fromUtf8('LINK'), link.address)

wallet.tokenMapping(web3.utils.fromUtf8('LINK'))

wallet.balances(accounts[0],web3.utils.fromUtf8('LINK'))
