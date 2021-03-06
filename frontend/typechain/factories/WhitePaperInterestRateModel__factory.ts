/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WhitePaperInterestRateModel,
  WhitePaperInterestRateModelInterface,
} from "../WhitePaperInterestRateModel";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplierPerYear",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "baseRatePerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multiplierPerBlock",
        type: "uint256",
      },
    ],
    name: "NewInterestParams",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "baseRatePerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "blocksPerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "getBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "getSupplyRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isInterestRateModel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "multiplierPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "utilizationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161090c38038061090c8339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505061006862201480836100d860201b6104171790919060201c565b60018190555061008862201480826100d860201b6104171790919060201c565b6000819055507ff35fa19c15e9ba782633a5df62a98b20217151addc68e3ff2cd623a48d37ec27600154600054604051808381526020018281526020019250505060405180910390a150506101ee565b600061012083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061012860201b60201c565b905092915050565b600080831182906101d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561019957808201518184015260208101905061017e565b50505050905090810190601f1680156101c65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816101e057fe5b049050809150509392505050565b61070f806101fd6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638726bb891161005b5780638726bb8914610150578063a385fb961461016e578063b81688161461018c578063f14039de146101ec5761007d565b806315f24053146100825780632191f92a146100d85780636e71e2d8146100fa575b600080fd5b6100c26004803603606081101561009857600080fd5b8101908080359060200190929190803590602001909291908035906020019092919050505061020a565b6040518082815260200191505060405180910390f35b6100e0610267565b604051808215151515815260200191505060405180910390f35b61013a6004803603606081101561011057600080fd5b8101908080359060200190929190803590602001909291908035906020019092919050505061026c565b6040518082815260200191505060405180910390f35b6101586102da565b6040518082815260200191505060405180910390f35b6101766102e0565b6040518082815260200191505060405180910390f35b6101d6600480360360808110156101a257600080fd5b81019080803590602001909291908035906020019092919080359060200190929190803590602001909291905050506102e7565b6040518082815260200191505060405180910390f35b6101f461038b565b6040518082815260200191505060405180910390f35b60008061021885858561026c565b905061025d60015461024f670de0b6b3a76400006102416000548661039190919063ffffffff16565b61041790919063ffffffff16565b61046190919063ffffffff16565b9150509392505050565b600181565b60008083141561027f57600090506102d3565b6102d06102a783610299868861046190919063ffffffff16565b6104e990919063ffffffff16565b6102c2670de0b6b3a76400008661039190919063ffffffff16565b61041790919063ffffffff16565b90505b9392505050565b60005481565b6220148081565b60008061030583670de0b6b3a76400006104e990919063ffffffff16565b9050600061031487878761020a565b90506000610345670de0b6b3a7640000610337858561039190919063ffffffff16565b61041790919063ffffffff16565b905061037e670de0b6b3a7640000610370836103628c8c8c61026c565b61039190919063ffffffff16565b61041790919063ffffffff16565b9350505050949350505050565b60015481565b6000808314156103a45760009050610411565b60008284029050828482816103b557fe5b041461040c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806106ba6021913960400191505060405180910390fd5b809150505b92915050565b600061045983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610533565b905092915050565b6000808284019050838110156104df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061052b83836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f77008152506105f9565b905092915050565b600080831182906105df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156105a4578082015181840152602081019050610589565b50505050905090810190601f1680156105d15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816105eb57fe5b049050809150509392505050565b60008383111582906106a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561066b578082015181840152602081019050610650565b50505050905090810190601f1680156106985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a265627a7a72315820941d358c0eee82d96e2c55fb8e1bf705f53b103c3c07a129b6ef4867645519d964736f6c63430005110032";

export class WhitePaperInterestRateModel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WhitePaperInterestRateModel> {
    return super.deploy(
      baseRatePerYear,
      multiplierPerYear,
      overrides || {}
    ) as Promise<WhitePaperInterestRateModel>;
  }
  getDeployTransaction(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseRatePerYear,
      multiplierPerYear,
      overrides || {}
    );
  }
  attach(address: string): WhitePaperInterestRateModel {
    return super.attach(address) as WhitePaperInterestRateModel;
  }
  connect(signer: Signer): WhitePaperInterestRateModel__factory {
    return super.connect(signer) as WhitePaperInterestRateModel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitePaperInterestRateModelInterface {
    return new utils.Interface(_abi) as WhitePaperInterestRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhitePaperInterestRateModel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WhitePaperInterestRateModel;
  }
}
