require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note pitch home gesture battle flower gauge'; 
let testAccounts = [
"0x64ea3cdf2094231f9013be59e301d53b48bf0ce73410f7b7b3cefe380a20f57a",
"0x90e858aeed471299525a61f5b3214a8681bd251505b4205cdaab7450196391a9",
"0x628678919ae648c6bc7d5aa43e893ae84da7dbeeea91b71270e1d2031cdad3e9",
"0x6dfeed32bd61b50e76567f033b7c7fb19f63c64e1c0b156fc14ad758f6e1d373",
"0xb4a3b30af6e3af9234d54045f3a3d5cb92de3c53171692cfdfee2ad81bd6d61a",
"0x0147dbb0d11985e0611fc86d2adb725122748f1f578497a1b21fcba1f397891e",
"0xa9e3037fa826696625ee7f1b1a09ffdd39449ce030daf63df5fc6b936e78fa98",
"0x2e597c9fd7f469739ad0cfe752f01fd534796563cb7c15812a6e09a2dabae272",
"0xf6eed8d5dee36977267a6c327a6d688ee4061751da4b0c77bafe8a7b1b6f7f33",
"0x1c0d0d8eeed387a72119b0c4d61f58dc8af1da25799905ba450ec234a18f2728"
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

