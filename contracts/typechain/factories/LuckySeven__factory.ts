/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LuckySeven, LuckySevenInterface } from "../LuckySeven";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mu",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
    ],
    name: "getLuckySevenNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "p",
        type: "uint256",
      },
    ],
    name: "getLuckySevenNumberFromBlockHash",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610271806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806339d1cd121461003b578063da6806a6146100af575b600080fd5b610099600480360360c081101561005157600080fd5b810190808035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291905050506100f1565b6040518082815260200191505060405180910390f35b6100db600480360360208110156100c557600080fd5b810190808035906020019092919050505061022a565b6040518082815260200191505060405180910390f35b600083604c81111561016b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f7020746f6f20626967000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b73__$683356875e8e0b69cfe3ead86058a70f00$__634c538bb68989898989896040518763ffffffff1660e01b815260040180878152602001868152602001858152602001848152602001838152602001828152602001965050505050505060206040518083038186803b1580156101e257600080fd5b505af41580156101f6573d6000803e3d6000fd5b505050506040513d602081101561020c57600080fd5b81019080805190602001909291905050509150509695505050505050565b6000600143034060001c905091905056fea26469706673582212203181681bffaa3e16b6c4dc6ffece176ab932714023e6ca5dc57a4639897e8d5d64736f6c63430007000033";

export class LuckySeven__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: LuckySevenLibraryAddresses,
    signer?: Signer
  ) {
    super(_abi, LuckySeven__factory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(
    linkLibraryAddresses: LuckySevenLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$683356875e8e0b69cfe3ead86058a70f00\\$__", "g"),
      linkLibraryAddresses["contracts/LuckySevenPRNG.sol:LuckySevenPRNG"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LuckySeven> {
    return super.deploy(overrides || {}) as Promise<LuckySeven>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LuckySeven {
    return super.attach(address) as LuckySeven;
  }
  connect(signer: Signer): LuckySeven__factory {
    return super.connect(signer) as LuckySeven__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LuckySevenInterface {
    return new utils.Interface(_abi) as LuckySevenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LuckySeven {
    return new Contract(address, _abi, signerOrProvider) as LuckySeven;
  }
}

export interface LuckySevenLibraryAddresses {
  ["contracts/LuckySevenPRNG.sol:LuckySevenPRNG"]: string;
}
