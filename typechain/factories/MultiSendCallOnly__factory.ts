/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MultiSendCallOnly,
  MultiSendCallOnlyInterface,
} from "../MultiSendCallOnly";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "transactions",
        type: "bytes",
      },
    ],
    name: "multiSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610243806100206000396000f3fe60806040526004361061001e5760003560e01c80638d80ff0a14610023575b600080fd5b61003d6004803603810190610038919061012d565b61003f565b005b805160205b818110156100c0578083015160f81c6001820184015160601c60158301850151603584018601516055850187016000856000811461008957600181146100995761009e565b6000808585888a5af1915061009e565b600080fd5b5060008114156100ad57600080fd5b8260550187019650505050505050610044565b505050565b60006100d86100d38461019f565b61016e565b9050828152602081018484840111156100f057600080fd5b6100fb8482856101cf565b509392505050565b600082601f83011261011457600080fd5b81356101248482602086016100c5565b91505092915050565b60006020828403121561013f57600080fd5b600082013567ffffffffffffffff81111561015957600080fd5b61016584828501610103565b91505092915050565b6000604051905081810181811067ffffffffffffffff82111715610195576101946101de565b5b8060405250919050565b600067ffffffffffffffff8211156101ba576101b96101de565b5b601f19601f8301169050602081019050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212204ec3d6b05bb6e630df0ea186bcd5ed107bdde3cb6eb6fa9a09cd669e11d2194164736f6c63430008000033";

export class MultiSendCallOnly__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MultiSendCallOnly> {
    return super.deploy(overrides || {}) as Promise<MultiSendCallOnly>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MultiSendCallOnly {
    return super.attach(address) as MultiSendCallOnly;
  }
  connect(signer: Signer): MultiSendCallOnly__factory {
    return super.connect(signer) as MultiSendCallOnly__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSendCallOnlyInterface {
    return new utils.Interface(_abi) as MultiSendCallOnlyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSendCallOnly {
    return new Contract(address, _abi, signerOrProvider) as MultiSendCallOnly;
  }
}