/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migration, MigrationInterface } from "../Migration";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "targetSingleton",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "singleton",
        type: "address",
      },
    ],
    name: "ChangedMasterCopy",
    type: "event",
  },
  {
    inputs: [],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrationSingleton",
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
    inputs: [],
    name: "safe120Singleton",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516106763803806106768339818101604052810190610032919061012b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610099906101ba565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050610234565b6000815190506101258161021d565b92915050565b60006020828403121561013d57600080fd5b600061014b84828501610116565b91505092915050565b60006101616022836101da565b91507f496e76616c69642073696e676c65746f6e20616464726573732070726f76696460008301527f65640000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600060208201905081810360008301526101d381610154565b9050919050565b600082825260208201905092915050565b60006101f6826101fd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610226816101eb565b811461023157600080fd5b50565b60805160601c60a05160601c61040c61026a6000396000818160b20152610165015260008181608e015260d6015261040c6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e7731851461004657806389f54308146100645780638fd3ab8014610082575b600080fd5b61004e61008c565b60405161005b9190610301565b60405180910390f35b61006c6100b0565b6040516100799190610301565b60405180910390f35b61008a6100d4565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a90610345565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d474960001b306040516020016101f992919061031c565b604051602081830303815290604052805190602001206006819055507f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b860008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516102649190610301565b60405180910390a1565b61027781610376565b82525050565b61028681610388565b82525050565b610295816103b2565b82525050565b60006102a8603083610365565b91507f4d6967726174696f6e2073686f756c64206f6e6c792062652063616c6c65642060008301527f7669612064656c656761746563616c6c000000000000000000000000000000006020830152604082019050919050565b6000602082019050610316600083018461026e565b92915050565b6000604082019050610331600083018561027d565b61033e602083018461028c565b9392505050565b6000602082019050818103600083015261035e8161029b565b9050919050565b600082825260208201905092915050565b600061038182610392565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103bd826103c4565b9050919050565b60006103cf82610392565b905091905056fea2646970667358221220bd7a627d5c47040a922d9a94da2496db651ebee03ba11128310b10054e320a4c64736f6c63430008000033";

export class Migration__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    targetSingleton: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Migration> {
    return super.deploy(targetSingleton, overrides || {}) as Promise<Migration>;
  }
  getDeployTransaction(
    targetSingleton: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(targetSingleton, overrides || {});
  }
  attach(address: string): Migration {
    return super.attach(address) as Migration;
  }
  connect(signer: Signer): Migration__factory {
    return super.connect(signer) as Migration__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigrationInterface {
    return new utils.Interface(_abi) as MigrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migration {
    return new Contract(address, _abi, signerOrProvider) as Migration;
  }
}
