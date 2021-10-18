/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PresetMinterPauser,
  ERC20PresetMinterPauserInterface,
} from "../ERC20PresetMinterPauser";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bbf38038062002bbf833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b5060405250505081818160049080519060200190620001cf92919062000466565b508060059080519060200190620001e892919062000466565b506012600660006101000a81548160ff021916908360ff16021790555050506000600660016101000a81548160ff021916908315150217905550620002466000801b6200023a620002d060201b60201c565b620002d860201b60201c565b620002877f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66200027b620002d060201b60201c565b620002d860201b60201c565b620002c87f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a620002bc620002d060201b60201c565b620002d860201b60201c565b50506200051c565b600033905090565b620002ea8282620002ee60201b60201c565b5050565b6200031c816000808581526020019081526020016000206000016200039160201b6200130f1790919060201c565b156200038d5762000332620002d060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000620003c1836000018373ffffffffffffffffffffffffffffffffffffffff1660001b620003c960201b60201c565b905092915050565b6000620003dd83836200044360201b60201c565b620004385782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506200043d565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200049e5760008555620004ea565b82601f10620004b957805160ff1916838001178555620004ea565b82800160010185558215620004ea579182015b82811115620004e9578251825591602001919060010190620004cc565b5b509050620004f99190620004fd565b5090565b5b8082111562000518576000816000905550600101620004fe565b5090565b612693806200052c6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d539139314610861578063d547741f1461087f578063dd62ed3e146108cd578063e63ab1e914610945576101a9565b8063a457c2d714610757578063a9059cbb146107bb578063ca15c8731461081f576101a9565b80639010d07c116100d35780639010d07c146105f057806391d148541461065257806395d89b41146106b6578063a217fddf14610739576101a9565b806370a082311461054057806379cc6790146105985780638456cb59146105e6576101a9565b8063313ce567116101665780633f4ba83a116101405780633f4ba83a1461049a57806340c10f19146104a457806342966c68146104f25780635c975abb14610520576101a9565b8063313ce567146103c757806336568abe146103e85780633950935114610436576101a9565b806306fdde03146101ae578063095ea7b31461023157806318160ddd1461029557806323b872dd146102b3578063248a9ca3146103375780632f2ff15d14610379575b600080fd5b6101b6610963565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101f65780820151818401526020810190506101db565b50505050905090810190601f1680156102235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027d6004803603604081101561024757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a05565b60405180821515815260200191505060405180910390f35b61029d610a23565b6040518082815260200191505060405180910390f35b61031f600480360360608110156102c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a2d565b60405180821515815260200191505060405180910390f35b6103636004803603602081101561034d57600080fd5b8101908080359060200190929190505050610b06565b6040518082815260200191505060405180910390f35b6103c56004803603604081101561038f57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b25565b005b6103cf610bae565b604051808260ff16815260200191505060405180910390f35b610434600480360360408110156103fe57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bc5565b005b6104826004803603604081101561044c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c5e565b60405180821515815260200191505060405180910390f35b6104a2610d11565b005b6104f0600480360360408110156104ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610da1565b005b61051e6004803603602081101561050857600080fd5b8101908080359060200190929190505050610e35565b005b610528610e49565b60405180821515815260200191505060405180910390f35b6105826004803603602081101561055657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e60565b6040518082815260200191505060405180910390f35b6105e4600480360360408110156105ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ea9565b005b6105ee610f0b565b005b6106266004803603604081101561060657600080fd5b810190808035906020019092919080359060200190929190505050610f9b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61069e6004803603604081101561066857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcc565b60405180821515815260200191505060405180910390f35b6106be610ffd565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61074161109f565b6040518082815260200191505060405180910390f35b6107a36004803603604081101561076d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110a6565b60405180821515815260200191505060405180910390f35b610807600480360360408110156107d157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611173565b60405180821515815260200191505060405180910390f35b61084b6004803603602081101561083557600080fd5b8101908080359060200190929190505050611191565b6040518082815260200191505060405180910390f35b6108696111b7565b6040518082815260200191505060405180910390f35b6108cb6004803603604081101561089557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111db565b005b61092f600480360360408110156108e357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611264565b6040518082815260200191505060405180910390f35b61094d6112eb565b6040518082815260200191505060405180910390f35b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109fb5780601f106109d0576101008083540402835291602001916109fb565b820191906000526020600020905b8154815290600101906020018083116109de57829003601f168201915b5050505050905090565b6000610a19610a1261133f565b8484611347565b6001905092915050565b6000600354905090565b6000610a3a84848461153e565b610afb84610a4661133f565b610af6856040518060600160405280602881526020016124bd60289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610aac61133f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118039092919063ffffffff16565b611347565b600190509392505050565b6000806000838152602001908152602001600020600201549050919050565b610b4b60008084815260200190815260200160002060020154610b4661133f565b610fcc565b610ba0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806123bb602f913960400191505060405180910390fd5b610baa82826118bd565b5050565b6000600660009054906101000a900460ff16905090565b610bcd61133f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612605602f913960400191505060405180910390fd5b610c5a8282611950565b5050565b6000610d07610c6b61133f565b84610d028560026000610c7c61133f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e390919063ffffffff16565b611347565b6001905092915050565b610d427f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610d3d61133f565b610fcc565b610d97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061240c6039913960400191505060405180910390fd5b610d9f611a6b565b565b610dd27f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610dcd61133f565b610fcc565b610e27576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806124e56036913960400191505060405180910390fd5b610e318282611b56565b5050565b610e46610e4061133f565b82611d1f565b50565b6000600660019054906101000a900460ff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610ee88260405180606001604052806024815260200161251b60249139610ed986610ed461133f565b611264565b6118039092919063ffffffff16565b9050610efc83610ef661133f565b83611347565b610f068383611d1f565b505050565b610f3c7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610f3761133f565b610fcc565b610f91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806125a96037913960400191505060405180910390fd5b610f99611ee5565b565b6000610fc482600080868152602001908152602001600020600001611fd190919063ffffffff16565b905092915050565b6000610ff582600080868152602001908152602001600020600001611feb90919063ffffffff16565b905092915050565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110955780601f1061106a57610100808354040283529160200191611095565b820191906000526020600020905b81548152906001019060200180831161107857829003601f168201915b5050505050905090565b6000801b81565b60006111696110b361133f565b84611164856040518060600160405280602581526020016125e060259139600260006110dd61133f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118039092919063ffffffff16565b611347565b6001905092915050565b600061118761118061133f565b848461153e565b6001905092915050565b60006111b060008084815260200190815260200160002060000161201b565b9050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b611201600080848152602001908152602001600020600201546111fc61133f565b610fcc565b611256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061248d6030913960400191505060405180910390fd5b6112608282611950565b5050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6000611337836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612030565b905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806125856024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611453576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124456022913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156115c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806125606025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561164a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806123986023913960400191505060405180910390fd5b6116558383836120a0565b6116c18160405180606001604052806026815260200161246760269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118039092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061175681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e390919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008383111582906118b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561187557808201518184015260208101905061185a565b50505050905090810190601f1680156118a25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b6118e48160008085815260200190815260200160002060000161130f90919063ffffffff16565b1561194c576118f161133f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b611977816000808581526020019081526020016000206000016120b090919063ffffffff16565b156119df5761198461133f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080828401905083811015611a61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b611a73610e49565b611ae5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600660016101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611b2961133f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611bf9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611c05600083836120a0565b611c1a816003546119e390919063ffffffff16565b600381905550611c7281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e390919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611da5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061253f6021913960400191505060405180910390fd5b611db1826000836120a0565b611e1d816040518060600160405280602281526020016123ea60229139600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118039092919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611e75816003546120e090919063ffffffff16565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611eed610e49565b15611f60576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600660016101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611fa461133f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000611fe08360000183612163565b60001c905092915050565b6000612013836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6121e6565b905092915050565b600061202982600001612209565b9050919050565b600061203c83836121e6565b61209557826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061209a565b600090505b92915050565b6120ab83838361221a565b505050565b60006120d8836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612288565b905092915050565b600082821115612158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b6000818360000180549050116121c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123766022913960400191505060405180910390fd5b8260000182815481106121d357fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b612225838383612370565b61222d610e49565b15612283576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612634602a913960400191505060405180910390fd5b505050565b6000808360010160008481526020019081526020016000205490506000811461236457600060018203905060006001866000018054905003905060008660000182815481106122d357fe5b90600052602060002001549050808760000184815481106122f057fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061232857fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061236a565b60009150505b92915050565b50505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647345524332303a207472616e7366657220746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e706175736545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e7445524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20706175736545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c6645524332305061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564a26469706673582212201241ce317bdea4012f2cb690bda2ee3cb09f9cd7fe13d55ee2c9471019a313a864736f6c63430007060033";

export class ERC20PresetMinterPauser__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20PresetMinterPauser> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20PresetMinterPauser>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20PresetMinterPauser {
    return super.attach(address) as ERC20PresetMinterPauser;
  }
  connect(signer: Signer): ERC20PresetMinterPauser__factory {
    return super.connect(signer) as ERC20PresetMinterPauser__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetMinterPauserInterface {
    return new utils.Interface(_abi) as ERC20PresetMinterPauserInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetMinterPauser {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetMinterPauser;
  }
}
