/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ViewStorageAccessible,
  ViewStorageAccessibleInterface,
} from "../ViewStorageAccessible";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulate",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class ViewStorageAccessible__factory {
  static readonly abi = _abi;
  static createInterface(): ViewStorageAccessibleInterface {
    return new utils.Interface(_abi) as ViewStorageAccessibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ViewStorageAccessible {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ViewStorageAccessible;
  }
}
