/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Module, ModuleInterface } from "../Module";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610340806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063481c6a751461003b5780637de7edef14610085575b600080fd5b6100436100c9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100c76004803603602081101561009b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100ef565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610195576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806102e66026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561021b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806102c26024913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15056fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465644d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d206d616e61676572a265627a7a72315820aba540f389a376c06097bc90bada533f29b30c827e3428df4bd2b470911998d364736f6c63430005110032";

export class Module__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Module> {
    return super.deploy(overrides || {}) as Promise<Module>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Module {
    return super.attach(address) as Module;
  }
  connect(signer: Signer): Module__factory {
    return super.connect(signer) as Module__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleInterface {
    return new utils.Interface(_abi) as ModuleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Module {
    return new Contract(address, _abi, signerOrProvider) as Module;
  }
}
