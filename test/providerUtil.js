const TestRPC = require('ethereumjs-testrpc')

let web3Provider, ipfsProvider

module.exports = (cb) => {
  if (!web3Provider) {
    web3Provider = TestRPC.provider()
    cb(null, {web3Provider: web3Provider})
  }
}
