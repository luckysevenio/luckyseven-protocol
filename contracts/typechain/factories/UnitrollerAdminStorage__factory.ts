/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnitrollerAdminStorage,
  UnitrollerAdminStorageInterface,
} from "../UnitrollerAdminStorage";

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
    name: "comptrollerImplementation",
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
  {
    constant: true,
    inputs: [],
    name: "pendingComptrollerImplementation",
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
  "0x608060405234801561001057600080fd5b50610245806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632678224714610051578063bb82aa5e1461009b578063dcfbc0c7146100e5578063f851a4401461012f575b600080fd5b610059610179565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100a361019f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100ed6101c5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101376101eb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a72315820e069ff0355df5ccb901582d4625593d6e84f4b99029d39dd22c8ac6671a211a064736f6c63430005110032";

export class UnitrollerAdminStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnitrollerAdminStorage> {
    return super.deploy(overrides || {}) as Promise<UnitrollerAdminStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UnitrollerAdminStorage {
    return super.attach(address) as UnitrollerAdminStorage;
  }
  connect(signer: Signer): UnitrollerAdminStorage__factory {
    return super.connect(signer) as UnitrollerAdminStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitrollerAdminStorageInterface {
    return new utils.Interface(_abi) as UnitrollerAdminStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnitrollerAdminStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UnitrollerAdminStorage;
  }
}