var tokens = {
    'USDT': '0x382bB369d343125BfB2117af9c149795C6C65C50',
    'CHE': '0x8179D97Eb6488860d816e3EcAFE694a4153F216c',
    'BTCK': '0x54e4622DC504176b3BB432dCCAf504569699a7fF',
    'ETHK': '0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C',
    '0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C': 'ETHK',
    '0x54e4622DC504176b3BB432dCCAf504569699a7fF': 'BTCK',
    '0x8179D97Eb6488860d816e3EcAFE694a4153F216c': 'CHE',
    '0x382bB369d343125BfB2117af9c149795C6C65C50': 'USDT'
}

var abis = {
    token: [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "spender", "type": "address"}, {"name": "value", "type": "uint256"}],
            "name": "approve",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
                "name": "value",
                "type": "uint256"
            }],
            "name": "transferFrom",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{"name": "", "type": "uint8"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "spender", "type": "address"}, {"name": "addedValue", "type": "uint256"}],
            "name": "increaseAllowance",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "owner", "type": "address"}],
            "name": "balanceOf",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "spender", "type": "address"}, {"name": "subtractedValue", "type": "uint256"}],
            "name": "decreaseAllowance",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "to", "type": "address"}, {"name": "value", "type": "uint256"}],
            "name": "transfer",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "owner", "type": "address"}, {"name": "spender", "type": "address"}],
            "name": "allowance",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "inputs": [{"name": "name", "type": "string"}, {"name": "symbol", "type": "string"}, {
                "name": "decimals",
                "type": "uint8"
            }, {"name": "totalSupply", "type": "uint256"}, {
                "name": "feeReceiver",
                "type": "address"
            }, {"name": "tokenOwnerAddress", "type": "address"}],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {"indexed": false, "name": "value", "type": "uint256"}],
            "name": "Transfer",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
                "indexed": true,
                "name": "spender",
                "type": "address"
            }, {"indexed": false, "name": "value", "type": "uint256"}],
            "name": "Approval",
            "type": "event"
        }
    ],
    factory: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EmergencyWithdraw",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                }
            ],
            "name": "emergencyWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                }
            ],
            "name": "withdrawAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                }
            ],
            "name": "poolInfo",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "rewardToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "pool",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "rewardPath",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRewardBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalDeposit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pendingReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "accPerShare",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "poolLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                }
            ],
            "name": "statistics",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "share",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "userInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pendingReward",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardDebt",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
}

var providers = {
    Metamask: null,
    Walletconnect: null
}

var pools_id = [0, 1, 2, 3];

var pool_info = {
    '0': {
        token: '0x8179D97Eb6488860d816e3EcAFE694a4153F216c',
        'totalDeposit':'',
        'pendingReward':'',
    },
    '1': {
        token: '0x382bB369d343125BfB2117af9c149795C6C65C50',
        'totalDeposit':'',
        'pendingReward':'',
    },
    '2': {
        token: '0x54e4622DC504176b3BB432dCCAf504569699a7fF',
        'totalDeposit':'',
        'pendingReward':'',
    },
    '3': {
        token: '0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C',
        'totalDeposit':'',
        'pendingReward':'',
    }
};