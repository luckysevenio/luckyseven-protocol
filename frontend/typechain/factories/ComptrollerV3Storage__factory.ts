/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV3Storage,
  ComptrollerV3StorageInterface,
} from "../ComptrollerV3Storage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "_borrowGuardianPaused",
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
    name: "_mintGuardianPaused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountAssets",
    outputs: [
      {
        internalType: "contract CToken",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allMarkets",
    outputs: [
      {
        internalType: "contract CToken",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "borrowGuardianPaused",
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
    name: "closeFactorMantissa",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compAccrued",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowerIndex",
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
    name: "compRate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSpeeds",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplierIndex",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplyState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
    name: "liquidationIncentiveMantissa",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "bool",
        name: "isListed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "collateralFactorMantissa",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isComped",
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
    name: "maxAssets",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintGuardianPaused",
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
    name: "oracle",
    outputs: [
      {
        internalType: "contract PriceOracle",
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
    name: "pauseGuardian",
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
  {
    constant: true,
    inputs: [],
    name: "seizeGuardianPaused",
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
    name: "transferGuardianPaused",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cfd806100206000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638e8f294b116100de578063ca0af04311610097578063dcfbc0c711610071578063dcfbc0c714610870578063e6653f3d146108ba578063e8755446146108dc578063f851a440146108fa57610173565b8063ca0af04314610712578063cc7ebdc41461078a578063dce15449146107e257610173565b80638e8f294b1461058457806394b2294b146105f2578063aa90075414610610578063ac0b0bb71461062e578063b21be7fd14610650578063bb82aa5e146106c857610173565b80636b79c38d116101305780636b79c38d146103125780636d154ea5146103b9578063731f0c2b146104155780637dc0d1d01461047157806387f76303146104bb5780638c57804e146104dd57610173565b80631d7b33d71461017857806324a3d622146101d0578063267822471461021a5780633c94786f146102645780634ada90af1461028657806352d84d1e146102a4575b600080fd5b6101ba6004803603602081101561018e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610944565b6040518082815260200191505060405180910390f35b6101d861095c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610222610982565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61026c6109a8565b604051808215151515815260200191505060405180910390f35b61028e6109bb565b6040518082815260200191505060405180910390f35b6102d0600480360360208110156102ba57600080fd5b81019080803590602001909291905050506109c1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103546004803603602081101561032857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109fd565b60405180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681526020018263ffffffff1663ffffffff1681526020019250505060405180910390f35b6103fb600480360360208110156103cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a59565b604051808215151515815260200191505060405180910390f35b6104576004803603602081101561042b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a79565b604051808215151515815260200191505060405180910390f35b610479610a99565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104c3610abf565b604051808215151515815260200191505060405180910390f35b61051f600480360360208110156104f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ad2565b60405180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681526020018263ffffffff1663ffffffff1681526020019250505060405180910390f35b6105c66004803603602081101561059a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b2e565b604051808415151515815260200183815260200182151515158152602001935050505060405180910390f35b6105fa610b72565b6040518082815260200191505060405180910390f35b610618610b78565b6040518082815260200191505060405180910390f35b610636610b7e565b604051808215151515815260200191505060405180910390f35b6106b26004803603604081101561066657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b91565b6040518082815260200191505060405180910390f35b6106d0610bb6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107746004803603604081101561072857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bdc565b6040518082815260200191505060405180910390f35b6107cc600480360360208110156107a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c01565b6040518082815260200191505060405180910390f35b61082e600480360360408110156107f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c19565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610878610c64565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108c2610c8a565b604051808215151515815260200191505060405180910390f35b6108e4610c9d565b6040518082815260200191505060405180910390f35b610902610ca3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600f6020528060005260406000206000915090505481565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60149054906101000a900460ff1681565b60065481565b600d81815481106109ce57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60106020528060005260406000206000915090508060000160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169080600001601c9054906101000a900463ffffffff16905082565b600c6020528060005260406000206000915054906101000a900460ff1681565b600b6020528060005260406000206000915054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60169054906101000a900460ff1681565b60116020528060005260406000206000915090508060000160009054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169080600001601c9054906101000a900463ffffffff16905082565b60096020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060030160009054906101000a900460ff16905083565b60075481565b600e5481565b600a60179054906101000a900460ff1681565b6012602052816000526040600020602052806000526040600020600091509150505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6013602052816000526040600020602052806000526040600020600091509150505481565b60146020528060005260406000206000915090505481565b60086020528160005260406000208181548110610c3257fe5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60159054906101000a900460ff1681565b60055481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a7231582051647b5f6aae9450a5717ff6a67e3675ec0ca26e13783cb9fe6793e2063adf8e64736f6c63430005110032";

export class ComptrollerV3Storage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ComptrollerV3Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV3Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ComptrollerV3Storage {
    return super.attach(address) as ComptrollerV3Storage;
  }
  connect(signer: Signer): ComptrollerV3Storage__factory {
    return super.connect(signer) as ComptrollerV3Storage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV3StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV3StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV3Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV3Storage;
  }
}
