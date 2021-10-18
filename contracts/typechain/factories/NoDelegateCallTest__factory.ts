/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NoDelegateCallTest,
  NoDelegateCallTestInterface,
} from "../NoDelegateCallTest";

const _abi = [
  {
    inputs: [],
    name: "callsIntoNoDelegateCallFunction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "canBeDelegateCalled",
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
    inputs: [],
    name: "cannotBeDelegateCalled",
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
    inputs: [],
    name: "getGasCostOfCanBeDelegateCalled",
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
    inputs: [],
    name: "getGasCostOfCannotBeDelegateCalled",
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
  "0x60a060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c6101de6100656000398061014652506101de6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633045a6e01461005c5780633c7c8dd01461007a578063423ecb051461009857806364270164146100b6578063f45f416e146100c0575b600080fd5b6100646100de565b6040518082815260200191505060405180910390f35b6100826100f6565b6040518082815260200191505060405180910390f35b6100a061010e565b6040518082815260200191505060405180910390f35b6100be610128565b005b6100c8610132565b6040518082815260200191505060405180910390f35b6000805a90506100ec610132565b505a810391505090565b6000805a905061010461010e565b505a810391505090565b6000610118610144565b6005428161012257fe5b04905090565b61013061019e565b565b60006005428161013e57fe5b04905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461019c57600080fd5b565b6101a6610144565b56fea2646970667358221220ca22c5f896dd2512ab5055e63025177a9dc85d3e9a3e60cb39583a44ef27505e64736f6c63430007060033";

export class NoDelegateCallTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NoDelegateCallTest> {
    return super.deploy(overrides || {}) as Promise<NoDelegateCallTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NoDelegateCallTest {
    return super.attach(address) as NoDelegateCallTest;
  }
  connect(signer: Signer): NoDelegateCallTest__factory {
    return super.connect(signer) as NoDelegateCallTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NoDelegateCallTestInterface {
    return new utils.Interface(_abi) as NoDelegateCallTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NoDelegateCallTest {
    return new Contract(address, _abi, signerOrProvider) as NoDelegateCallTest;
  }
}