/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TickOverflowSafetyEchidnaTest,
  TickOverflowSafetyEchidnaTestInterface,
} from "../TickOverflowSafetyEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseFeeGrowthGlobal0X128",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseFeeGrowthGlobal1X128",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "target",
        type: "int24",
      },
    ],
    name: "moveToTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
    ],
    name: "setPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600160006101000a81548162ffffff021916908360020b62ffffff160217905550600060025560027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8161005657fe5b0460035560027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8161008457fe5b046004556000600555600060065534801561009e57600080fd5b50610dc4806100ae6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b0c061f146100515780633f03e1941461007f578063541bdfb1146100ad578063af759368146100f8575b600080fd5b61007d6004803603602081101561006757600080fd5b8101908080359060200190929190505050610129565b005b6100ab6004803603602081101561009557600080fd5b810190808035906020019092919050505061015e565b005b6100f6600480360360608110156100c357600080fd5b81019080803560020b9060200190929190803560020b90602001909291908035600f0b9060200190929190505050610193565b005b6101276004803603602081101561010e57600080fd5b81019080803560020b9060200190929190505050610489565b005b60055481600554011161013b57600080fd5b806003600082825401925050819055508060056000828254019250508190555050565b60065481600654011161017057600080fd5b806004600082825401925050819055508060066000828254019250508190555050565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff060020b8360020b136101c557600080fd5b601060020b8260020b126101d857600080fd5b8160020b8360020b126101ea57600080fd5b600061024384600160009054906101000a900460020b8460035460045460008042600060206fffffffffffffffffffffffffffffffff80168161022957fe5b0460006106b7909a9998979695949392919063ffffffff16565b9050600061029e84600160009054906101000a900460020b8560035460045460008042600160206fffffffffffffffffffffffffffffffff80168161028457fe5b0460006106b7909a9998979695949392919063ffffffff16565b9050811561037357600083600f0b121561031e5760008060008760020b60020b815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff161461030557fe5b6103198560006109b990919063ffffffff16565b610372565b60008060008760020b60020b815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff161161037157fe5b5b5b801561044657600083600f0b12156103f15760008060008660020b60020b815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16146103d857fe5b6103ec8460006109b990919063ffffffff16565b610445565b60008060008660020b60020b815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff161161044457fe5b5b5b82600f0b6002600082825401925050819055506000600254121561046657fe5b6000600254141561048257600060058190555060006006819055505b5050505050565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff060020b8160020b136104bb57600080fd5b601060020b8160020b126104ce57600080fd5b5b8060020b600160009054906101000a900460020b60020b146106b4578060020b600160009054906101000a900460020b60020b12156105df57600080600060018060009054906101000a900460020b0160020b60020b815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1611156105a15761059f60018060009054906101000a900460020b01600354600454600080426000610a9a909695949392919063ffffffff16565b505b6001600081819054906101000a900460020b8092919060010191906101000a81548162ffffff021916908360020b62ffffff160217905550506106af565b6000806000600160009054906101000a900460020b60020b60020b815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16111561067457610672600160009054906101000a900460020b600354600454600080426000610a9a909695949392919063ffffffff16565b505b6001600081819054906101000a900460020b809291906001900391906101000a81548162ffffff021916908360020b62ffffff160217905550505b6104cf565b50565b6000808c60008d60020b60020b8152602001908152602001600020905060008160000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506000610705828d610bd6565b9050846fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff1611156107a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c4f00000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000826fffffffffffffffffffffffffffffffff161415156000826fffffffffffffffffffffffffffffffff16141515141593506000826fffffffffffffffffffffffffffffffff1614156108c0578c60020b8e60020b136108a2578a8360010181905550898360020181905550888360030160076101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550878360030160006101000a81548166ffffffffffffff021916908360060b66ffffffffffffff1602179055508683600301601b6101000a81548163ffffffff021916908363ffffffff1602179055505b600183600301601f6101000a81548160ff0219169083151502179055505b808360000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550856109375761093261092d8d600f0b8560000160109054906101000a9004600f0b600f0b610d2f90919063ffffffff16565b610d52565b61096a565b6109696109648d600f0b8560000160109054906101000a9004600f0b600f0b610d6b90919063ffffffff16565b610d52565b5b8360000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055505050509b9a5050505050505050505050565b8160008260020b60020b8152602001908152602001600020600080820160006101000a8154906fffffffffffffffffffffffffffffffff02191690556000820160106101000a8154906fffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160006101000a81549066ffffffffffffff02191690556003820160076101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560038201601b6101000a81549063ffffffff021916905560038201601f6101000a81549060ff021916905550505050565b6000808860008960020b60020b815260200190815260200160002090508060010154870381600101819055508060020154860381600201819055508060030160079054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685038160030160076101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060030160009054906101000a900460060b84038160030160006101000a81548166ffffffffffffff021916908360060b66ffffffffffffff16021790555080600301601b9054906101000a900463ffffffff16830381600301601b6101000a81548163ffffffff021916908363ffffffff1602179055508060000160109054906101000a9004600f0b915050979650505050505050565b60008082600f0b1215610c8957826fffffffffffffffffffffffffffffffff168260000384039150816fffffffffffffffffffffffffffffffff1610610c84576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c5300000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610d29565b826fffffffffffffffffffffffffffffffff168284019150816fffffffffffffffffffffffffffffffff161015610d28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260028152602001807f4c4100000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b92915050565b6000808212151515838385019250821215151514610d4c57600080fd5b92915050565b60008182915081600f0b14610d6657600080fd5b919050565b6000808212151515838385039250821315151514610d8857600080fd5b9291505056fea26469706673582212208b20b7d61030e0b7b74ca7a0e4a88e3dc60bfa2a6ae6de0c7471f417aedd3bfc64736f6c63430007060033";

export class TickOverflowSafetyEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickOverflowSafetyEchidnaTest> {
    return super.deploy(
      overrides || {}
    ) as Promise<TickOverflowSafetyEchidnaTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickOverflowSafetyEchidnaTest {
    return super.attach(address) as TickOverflowSafetyEchidnaTest;
  }
  connect(signer: Signer): TickOverflowSafetyEchidnaTest__factory {
    return super.connect(signer) as TickOverflowSafetyEchidnaTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickOverflowSafetyEchidnaTestInterface {
    return new utils.Interface(_abi) as TickOverflowSafetyEchidnaTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickOverflowSafetyEchidnaTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TickOverflowSafetyEchidnaTest;
  }
}