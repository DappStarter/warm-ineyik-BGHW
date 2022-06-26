require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food notice crawl toss coin coral light army gasp'; 
let testAccounts = [
"0x9fea013acdc5645d09898319d888a8ecb3ff826fc97e73d21f418e99e3c7a8aa",
"0x759a676977a25f8b338b729a1d372dd9643cadcf1920249a10dae182009cb731",
"0x950acf4c4f8dc450565c5cd85c44ef45183e3a51bc41fbb2d511fed8e84ed2ec",
"0x8d16ebf2b7915dee07c5490c4bb6670a3ddd5eb79cf0f193e7f3b0aa7d294ea4",
"0x5c233d50dc88e8e6364d71ae3914823629387c0b1f9209242e1abbe1df644155",
"0x7efbe5cc3cc7d7117afda124b252b343395fb816f48c71979aaf8be6dc7f2526",
"0x78fc2e4929c84b7eec26a58c86b6637002d026ba8c1e69079ed26137c9fcb2e2",
"0x6b75173af83d076d18a3fd90fe435d771cb064e553c1a3eca753fe075a591d0a",
"0xd39476ed29fb2a028fcd410e3ea751e524eba156a748f458e44bad28aa9859fb",
"0x4950173b06dd941d646640744d5b65c8fd3f750290da88c888f337d2171d3f90"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

