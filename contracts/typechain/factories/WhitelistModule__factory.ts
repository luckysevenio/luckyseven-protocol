/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WhitelistModule,
  WhitelistModuleInterface,
} from "../WhitelistModule";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "masterCopy",
        type: "address",
      },
    ],
    name: "ChangedMasterCopy",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_masterCopy",
        type: "address",
      },
    ],
    name: "changeMasterCopy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "contract ModuleManager",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "setup",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061122f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638ab1d681116100665780638ab1d6811461027f578063a3f4df7e146102c3578063bd5b853b14610346578063e43252d7146103fe578063ffa1ad741461044257610093565b80632f2f3be1146100985780633af32abf14610195578063481c6a75146101f15780637de7edef1461023b575b600080fd5b61017b600480360360608110156100ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100f557600080fd5b82018360208201111561010757600080fd5b8035906020019184600183028401116401000000008311171561012957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506104c5565b604051808215151515815260200191505060405180910390f35b6101d7600480360360208110156101ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610879565b604051808215151515815260200191505060405180910390f35b6101f9610899565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027d6004803603602081101561025157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108bf565b005b6102c16004803603602081101561029557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a91565b005b6102cb610c51565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561030b5780820151818401526020810190506102f0565b50505050905090810190601f1680156103385780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103fc6004803603602081101561035c57600080fd5b810190808035906020019064010000000081111561037957600080fd5b82018360208201111561038b57600080fd5b803590602001918460208302840111640100000000831117156103ad57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610c8a565b005b6104406004803603602081101561041457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dc6565b005b61044a61102a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048a57808201518184015260208101905061046f565b50505050905090810190601f1680156104b75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561056657600080fd5b505afa15801561057a573d6000803e3d6000fd5b505050506040513d602081101561059057600080fd5b81019080805190602001909291905050506105f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061118f6025913960400191505060405180910390fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610698576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806111b46021913960400191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663468721a785858560006040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200183600181111561073657fe5b60ff168152602001828103825284818151815260200191508051906020019080838360005b8381101561077657808201518184015260208101905061075b565b50505050905090810190601f1680156107a35780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156107c557600080fd5b505af11580156107d9573d6000803e3d6000fd5b505050506040513d60208110156107ef57600080fd5b8101908080519060200190929190505050610872576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f436f756c64206e6f742065786563757465207472616e73616374696f6e00000081525060200191505060405180910390fd5b9392505050565b60026020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610965576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806111d56026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061116b6024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b37576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806111d56026913960400191505060405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610bf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4163636f756e74206973206e6f742077686974656c697374656400000000000081525060200191505060405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6040518060400160405280601081526020017f57686974656c697374204d6f64756c650000000000000000000000000000000081525081565b610c92611063565b60008090505b8151811015610dc2576000828281518110610caf57fe5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d5c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f496e76616c6964206163636f756e742070726f7669646564000000000000000081525060200191505060405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550508080600101915050610c98565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e6c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806111d56026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f496e76616c6964206163636f756e742070726f7669646564000000000000000081525060200191505060405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610fcf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4163636f756e7420697320616c72656164792077686974656c6973746564000081525060200191505060405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6040518060400160405280600581526020017f302e312e3000000000000000000000000000000000000000000000000000000081525081565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4d616e616765722068617320616c7265616479206265656e207365740000000081525060200191505060405180910390fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555056fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465644d6574686f642063616e206f6e6c792062652063616c6c656420627920616e206f776e6572546172676574206163636f756e74206973206e6f742077686974656c69737465644d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d206d616e61676572a265627a7a7231582089c6bb2ccce0871fedd2324bb633926d70af178c43f88368ead6b0a270ad08a664736f6c63430005110032";

export class WhitelistModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WhitelistModule> {
    return super.deploy(overrides || {}) as Promise<WhitelistModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WhitelistModule {
    return super.attach(address) as WhitelistModule;
  }
  connect(signer: Signer): WhitelistModule__factory {
    return super.connect(signer) as WhitelistModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistModuleInterface {
    return new utils.Interface(_abi) as WhitelistModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhitelistModule {
    return new Contract(address, _abi, signerOrProvider) as WhitelistModule;
  }
}
