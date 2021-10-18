/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BitMathTest, BitMathTestInterface } from "../BitMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getGasCostOfLeastSignificantBit",
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
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getGasCostOfMostSignificantBit",
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
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "leastSignificantBit",
    outputs: [
      {
        internalType: "uint8",
        name: "r",
        type: "uint8",
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
    ],
    name: "mostSignificantBit",
    outputs: [
      {
        internalType: "uint8",
        name: "r",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103f0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004b5760003560e01c806246b777146100505780636b83cf2614610092578063d230d23f146100d4578063e6bcbc6514610119575b600080fd5b61007c6004803603602081101561006657600080fd5b810190808035906020019092919050505061015e565b6040518082815260200191505060405180910390f35b6100be600480360360208110156100a857600080fd5b8101908080359060200190929190505050610179565b6040518082815260200191505060405180910390f35b610100600480360360208110156100ea57600080fd5b8101908080359060200190929190505050610194565b604051808260ff16815260200191505060405180910390f35b6101456004803603602081101561012f57600080fd5b81019080803590602001909291905050506101a6565b604051808260ff16815260200191505060405180910390f35b6000805a905061016d836101b8565b505a8103915050919050565b6000805a905061018883610293565b505a8103915050919050565b600061019f82610293565b9050919050565b60006101b1826101b8565b9050919050565b60008082116101c657600080fd5b70010000000000000000000000000000000082106101ec57608082901c91506080810190505b68010000000000000000821061020a57604082901c91506040810190505b640100000000821061022457602082901c91506020810190505b62010000821061023c57601082901c91506010810190505b610100821061025357600882901c91506008810190505b6010821061026957600482901c91506004810190505b6004821061027f57600282901c91506002810190505b6002821061028e576001810190505b919050565b60008082116102a157600080fd5b60ff905060006fffffffffffffffffffffffffffffffff8016831611156102cd576080810390506102d5565b608082901c91505b600067ffffffffffffffff8016831611156102f5576040810390506102fd565b604082901c91505b600063ffffffff80168316111561031957602081039050610321565b602082901c91505b600061ffff80168316111561033b57601081039050610343565b601082901c91505b600060ff80168316111561035c57600881039050610364565b600882901c91505b6000600f8316111561037b57600481039050610383565b600482901c91505b600060038316111561039a576002810390506103a2565b600282901c91505b60006001831611156103b5576001810390505b91905056fea2646970667358221220c5d393b3f6acdd8b90529178773e1ae6f14aac3bfd296c556a352d53c49a91ec64736f6c63430007060033";

export class BitMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BitMathTest> {
    return super.deploy(overrides || {}) as Promise<BitMathTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BitMathTest {
    return super.attach(address) as BitMathTest;
  }
  connect(signer: Signer): BitMathTest__factory {
    return super.connect(signer) as BitMathTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitMathTestInterface {
    return new utils.Interface(_abi) as BitMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BitMathTest {
    return new Contract(address, _abi, signerOrProvider) as BitMathTest;
  }
}
