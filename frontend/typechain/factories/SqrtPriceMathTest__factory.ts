/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SqrtPriceMathTest,
  SqrtPriceMathTestInterface,
} from "../SqrtPriceMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount0Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount1Delta",
    outputs: [
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetAmount0Delta",
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
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetAmount1Delta",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNextSqrtPriceFromInput",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getGasCostOfGetNextSqrtPriceFromOutput",
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
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromInput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromOutput",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610dfc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063af955e3b1161005b578063af955e3b146102f7578063d7cdaf7114610397578063e20f7ac014610437578063fedf2b5f146104c157610088565b8063034d21e41461008d5780632c32d4b61461011757806348a0c5bd146101b7578063aa58276a14610257575b600080fd5b610101600480360360808110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190505050610561565b6040518082815260200191505060405180910390f35b6101a16004803603608081101561012d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610582565b6040518082815260200191505060405180910390f35b610241600480360360808110156101cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061059a565b6040518082815260200191505060405180910390f35b6102cb6004803603608081101561026d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035151590602001909291905050506105b2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103816004803603608081101561030d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506105ca565b6040518082815260200191505060405180910390f35b610421600480360360808110156103ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506105eb565b6040518082815260200191505060405180910390f35b6104ab6004803603608081101561044d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080351515906020019092919050505061060c565b6040518082815260200191505060405180910390f35b610535600480360360808110156104d757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356fffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080351515906020019092919050505061062d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000805a905061057386868686610645565b505a8103915050949350505050565b6000610590858585856106b7565b9050949350505050565b60006105a8858585856107ed565b9050949350505050565b60006105c085858585610645565b9050949350505050565b6000805a90506105dc868686866107ed565b505a8103915050949350505050565b6000805a90506105fd868686866106b7565b505a8103915050949350505050565b6000805a905061061e868686866108c7565b505a8103915050949350505050565b600061063b858585856108c7565b9050949350505050565b6000808573ffffffffffffffffffffffffffffffffffffffff161161066957600080fd5b6000846fffffffffffffffffffffffffffffffff161161068857600080fd5b8161069f5761069a8585856001610939565b6106ad565b6106ac8585856001610aab565b5b9050949350505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1611156106f857838580955081965050505b6000606060ff16846fffffffffffffffffffffffffffffffff16901b9050600086860373ffffffffffffffffffffffffffffffffffffffff16905060008773ffffffffffffffffffffffffffffffffffffffff161161075657600080fd5b836107a0578673ffffffffffffffffffffffffffffffffffffffff1661079383838973ffffffffffffffffffffffffffffffffffffffff16610c35565b8161079a57fe5b046107e1565b6107e06107c483838973ffffffffffffffffffffffffffffffffffffffff16610d0f565b8873ffffffffffffffffffffffffffffffffffffffff16610d6d565b5b92505050949350505050565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16111561082e57838580955081965050505b8161087a57610875836fffffffffffffffffffffffffffffffff1686860373ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000610c35565b6108bd565b6108bc836fffffffffffffffffffffffffffffffff1686860373ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000610d0f565b5b9050949350505050565b6000808573ffffffffffffffffffffffffffffffffffffffff16116108eb57600080fd5b6000846fffffffffffffffffffffffffffffffff161161090a57600080fd5b816109215761091c8585856000610aab565b61092f565b61092e8585856000610939565b5b9050949350505050565b600081156109ef57600073ffffffffffffffffffffffffffffffffffffffff80168411156109905761098b846c01000000000000000000000000876fffffffffffffffffffffffffffffffff16610c35565b6109b4565b846fffffffffffffffffffffffffffffffff16606060ff1685901b816109b257fe5b045b90506109e76109e2828873ffffffffffffffffffffffffffffffffffffffff16610d8090919063ffffffff16565b610d9a565b915050610aa3565b600073ffffffffffffffffffffffffffffffffffffffff8016841115610a3e57610a39846c01000000000000000000000000876fffffffffffffffffffffffffffffffff16610d0f565b610a62565b610a61606060ff1685901b866fffffffffffffffffffffffffffffffff16610d6d565b5b9050808673ffffffffffffffffffffffffffffffffffffffff1611610a8657600080fd5b808673ffffffffffffffffffffffffffffffffffffffff16039150505b949350505050565b600080831415610abd57849050610c2d565b6000606060ff16856fffffffffffffffffffffffffffffffff16901b90508215610ba45760008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff16870292508281610b1e57fe5b041415610b605760008183019050828110610b5e57610b54838973ffffffffffffffffffffffffffffffffffffffff1683610d0f565b9350505050610c2d565b505b610b9b82610b96878a73ffffffffffffffffffffffffffffffffffffffff168681610b8757fe5b04610d8090919063ffffffff16565b610d6d565b92505050610c2d565b60008673ffffffffffffffffffffffffffffffffffffffff16858873ffffffffffffffffffffffffffffffffffffffff16870292508281610be157fe5b04148015610bee57508082115b610bf757600080fd5b60008183039050610c27610c22848a73ffffffffffffffffffffffffffffffffffffffff1684610d0f565b610d9a565b93505050505b949350505050565b600080600080198587098587029250828110838203039150506000811415610c705760008411610c6457600080fd5b83820492505050610d08565b808411610c7c57600080fd5b600084868809905082811182039150808303925060008586600003169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b6000610d1c848484610c35565b905060008280610d2857fe5b8486091115610d66577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110610d5d57600080fd5b80806001019150505b9392505050565b6000808284061182840401905092915050565b6000828284019150811015610d9457600080fd5b92915050565b6000818291508173ffffffffffffffffffffffffffffffffffffffff1614610dc157600080fd5b91905056fea26469706673582212203511957c0870be2c6272ae09663ecc6aa8abd14734699fb77543ea2489abb45c64736f6c63430007060033";

export class SqrtPriceMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SqrtPriceMathTest> {
    return super.deploy(overrides || {}) as Promise<SqrtPriceMathTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SqrtPriceMathTest {
    return super.attach(address) as SqrtPriceMathTest;
  }
  connect(signer: Signer): SqrtPriceMathTest__factory {
    return super.connect(signer) as SqrtPriceMathTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SqrtPriceMathTestInterface {
    return new utils.Interface(_abi) as SqrtPriceMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SqrtPriceMathTest {
    return new Contract(address, _abi, signerOrProvider) as SqrtPriceMathTest;
  }
}