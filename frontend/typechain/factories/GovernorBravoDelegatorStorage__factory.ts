/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernorBravoDelegatorStorage,
  GovernorBravoDelegatorStorageInterface,
} from "../GovernorBravoDelegatorStorage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
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
  "0x608060405234801561001057600080fd5b506101b0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806326782247146100465780635c60da1b14610064578063f851a44014610082575b600080fd5b61004e6100a0565b60405161005b9190610120565b60405180910390f35b61006c6100c6565b6040516100799190610120565b60405180910390f35b61008a6100ec565b6040516100979190610120565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61011a8161013b565b82525050565b60006020820190506101356000830184610111565b92915050565b60006101468261014d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff8216905091905056fea365627a7a7231582056dd540b21c8a63e1d6709a7623bb7e12f207317379e3305b4a7491e9a3976056c6578706572696d656e74616cf564736f6c63430005110040";

export class GovernorBravoDelegatorStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernorBravoDelegatorStorage> {
    return super.deploy(
      overrides || {}
    ) as Promise<GovernorBravoDelegatorStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernorBravoDelegatorStorage {
    return super.attach(address) as GovernorBravoDelegatorStorage;
  }
  connect(signer: Signer): GovernorBravoDelegatorStorage__factory {
    return super.connect(signer) as GovernorBravoDelegatorStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorBravoDelegatorStorageInterface {
    return new utils.Interface(_abi) as GovernorBravoDelegatorStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorBravoDelegatorStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorBravoDelegatorStorage;
  }
}
