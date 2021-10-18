/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimulateTxAccessor,
  SimulateTxAccessorInterface,
} from "../SimulateTxAccessor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "simulate",
    outputs: [
      {
        internalType: "uint256",
        name: "estimate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c6105dd6100656000396000606901526105dd6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631c5fb21114610030575b600080fd5b61004a600480360381019061004591906102b2565b610062565b6040516100599392919061040f565b60405180910390f35b60008060607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614156100f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ed906103ef565b60405180910390fd5b60005a905061014c898989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050885a610183565b92505a8161015a919061047a565b935060405160203d0181016040523d81523d6000602083013e8092505050955095509592505050565b60006001808111156101be577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8360018111156101f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610210576000808551602087018986f49050610220565b600080855160208701888a87f190505b95945050505050565b60008135905061023881610569565b92915050565b60008083601f84011261025057600080fd5b8235905067ffffffffffffffff81111561026957600080fd5b60208301915083600182028301111561028157600080fd5b9250929050565b60008135905061029781610580565b92915050565b6000813590506102ac81610590565b92915050565b6000806000806000608086880312156102ca57600080fd5b60006102d888828901610229565b95505060206102e98882890161029d565b945050604086013567ffffffffffffffff81111561030657600080fd5b6103128882890161023e565b9350935050606061032588828901610288565b9150509295509295909350565b61033b816104c0565b82525050565b600061034c8261044d565b6103568185610458565b93506103668185602086016104f6565b61036f81610558565b840191505092915050565b6000610387603983610469565b91507f53696d756c61746554784163636573736f722073686f756c64206f6e6c79206260008301527f652063616c6c6564207669612064656c656761746563616c6c000000000000006020830152604082019050919050565b6103e9816104ec565b82525050565b600060208201905081810360008301526104088161037a565b9050919050565b600060608201905061042460008301866103e0565b6104316020830185610332565b81810360408301526104438184610341565b9050949350505050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610485826104ec565b9150610490836104ec565b9250828210156104a3576104a2610529565b5b828203905092915050565b60006104b9826104cc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156105145780820151818401526020810190506104f9565b83811115610523576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610572816104ae565b811461057d57600080fd5b50565b6002811061058d57600080fd5b50565b610599816104ec565b81146105a457600080fd5b5056fea2646970667358221220976134550105738dd034e3fc9491face4c4718ad1ff9356d4770e9aff39cc5e464736f6c63430008000033";

export class SimulateTxAccessor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimulateTxAccessor> {
    return super.deploy(overrides || {}) as Promise<SimulateTxAccessor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimulateTxAccessor {
    return super.attach(address) as SimulateTxAccessor;
  }
  connect(signer: Signer): SimulateTxAccessor__factory {
    return super.connect(signer) as SimulateTxAccessor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimulateTxAccessorInterface {
    return new utils.Interface(_abi) as SimulateTxAccessorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimulateTxAccessor {
    return new Contract(address, _abi, signerOrProvider) as SimulateTxAccessor;
  }
}