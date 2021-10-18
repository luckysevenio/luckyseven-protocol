/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FullMathTest, FullMathTestInterface } from "../FullMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    name: "mulDiv",
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
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    name: "mulDivRoundingUp",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610281806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630af8b27f1461003b578063aa9a091214610091575b600080fd5b61007b6004803603606081101561005157600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506100e7565b6040518082815260200191505060405180910390f35b6100d1600480360360608110156100a757600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506100fd565b6040518082815260200191505060405180910390f35b60006100f4848484610113565b90509392505050565b600061010a848484610171565b90509392505050565b6000610120848484610171565b90506000828061012c57fe5b848609111561016a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811061016157600080fd5b80806001019150505b9392505050565b6000806000801985870985870292508281108382030391505060008114156101ac57600084116101a057600080fd5b83820492505050610244565b8084116101b857600080fd5b600084868809905082811182039150808303925060008586600003169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b939250505056fea2646970667358221220652ac6e05ab6d0fd6980dd3147974ff596dc83c6d7e5b8d9f8b577fa3fe9c09f64736f6c63430007060033";

export class FullMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FullMathTest> {
    return super.deploy(overrides || {}) as Promise<FullMathTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FullMathTest {
    return super.attach(address) as FullMathTest;
  }
  connect(signer: Signer): FullMathTest__factory {
    return super.connect(signer) as FullMathTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FullMathTestInterface {
    return new utils.Interface(_abi) as FullMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FullMathTest {
    return new Contract(address, _abi, signerOrProvider) as FullMathTest;
  }
}