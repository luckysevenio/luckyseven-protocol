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
  GovernorBravoDelegator,
  GovernorBravoDelegatorInterface,
} from "../GovernorBravoDelegator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
      {
        internalType: "address",
        name: "comp_",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "votingPeriod_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votingDelay_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalThreshold_",
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
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "NewImplementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ProposalQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldProposalThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newProposalThreshold",
        type: "uint256",
      },
    ],
    name: "ProposalThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingDelay",
        type: "uint256",
      },
    ],
    name: "VotingDelaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingPeriod",
        type: "uint256",
      },
    ],
    name: "VotingPeriodSet",
    type: "event",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    name: "_setImplementation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162000e4638038062000e46833981810160405262000037919081019062000403565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001208488888686866040516024016200009795949392919062000645565b6040516020818303038152906040527fd13f90b4000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200017e60201b60201c565b62000131846200020760201b60201c565b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050620007b5565b600060608373ffffffffffffffffffffffffffffffffffffffff1683604051620001a99190620005ff565b600060405180830381855af49150503d8060008114620001e6576040519150601f19603f3d011682016040523d82523d6000602084013e620001eb565b606091505b5091509150600082141562000201573d60208201fd5b50505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462000299576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200029090620006c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200030c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200030390620006a2565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051620003c992919062000618565b60405180910390a15050565b600081519050620003e68162000781565b92915050565b600081519050620003fd816200079b565b92915050565b600080600080600080600060e0888a0312156200041f57600080fd5b60006200042f8a828b01620003d5565b9750506020620004428a828b01620003d5565b9650506040620004558a828b01620003d5565b9550506060620004688a828b01620003d5565b94505060806200047b8a828b01620003ec565b93505060a06200048e8a828b01620003ec565b92505060c0620004a18a828b01620003ec565b91505092959891949750929550565b620004bb816200070d565b82525050565b6000620004ce82620006e6565b620004da8185620006f1565b9350620004ec8185602086016200074b565b80840191505092915050565b600062000507604a83620006fc565b91507f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c60008301527f656d656e746174696f6e3a20696e76616c696420696d706c656d656e7461746960208301527f6f6e2061646472657373000000000000000000000000000000000000000000006040830152606082019050919050565b600062000595603683620006fc565b91507f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c60008301527f656d656e746174696f6e3a2061646d696e206f6e6c79000000000000000000006020830152604082019050919050565b620005f98162000741565b82525050565b60006200060d8284620004c1565b915081905092915050565b60006040820190506200062f6000830185620004b0565b6200063e6020830184620004b0565b9392505050565b600060a0820190506200065c6000830188620004b0565b6200066b6020830187620004b0565b6200067a6040830186620005ee565b620006896060830185620005ee565b620006986080830184620005ee565b9695505050505050565b60006020820190508181036000830152620006bd81620004f8565b9050919050565b60006020820190508181036000830152620006df8162000586565b9050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006200071a8262000721565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200076b5780820151818401526020810190506200074e565b838111156200077b576000848401525b50505050565b6200078c816200070d565b81146200079857600080fd5b50565b620007a68162000741565b8114620007b257600080fd5b50565b61068180620007c56000396000f3fe60806040526004361061003f5760003560e01c806326782247146100e85780635c60da1b14610113578063bb913f411461013e578063f851a44014610167575b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003660405161008b92919061052d565b600060405180830381855af49150503d80600081146100c6576040519150601f19603f3d011682016040523d82523d6000602084013e6100cb565b606091505b505090506040513d6000823e81600081146100e4573d82f35b3d82fd5b3480156100f457600080fd5b506100fd610192565b60405161010a9190610546565b60405180910390f35b34801561011f57600080fd5b506101286101b8565b6040516101359190610546565b60405180910390f35b34801561014a57600080fd5b50610165600480360361016091908101906103de565b6101de565b005b34801561017357600080fd5b5061017c6103a4565b6040516101899190610546565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461026d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610264906105aa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d49061058a565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610398929190610561565b60405180910390a15050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506103d881610627565b92915050565b6000602082840312156103f057600080fd5b60006103fe848285016103c9565b91505092915050565b610410816105e6565b82525050565b600061042283856105ca565b935061042f838584610618565b82840190509392505050565b6000610448604a836105d5565b91507f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c60008301527f656d656e746174696f6e3a20696e76616c696420696d706c656d656e7461746960208301527f6f6e2061646472657373000000000000000000000000000000000000000000006040830152606082019050919050565b60006104d46036836105d5565b91507f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c60008301527f656d656e746174696f6e3a2061646d696e206f6e6c79000000000000000000006020830152604082019050919050565b600061053a828486610416565b91508190509392505050565b600060208201905061055b6000830184610407565b92915050565b60006040820190506105766000830185610407565b6105836020830184610407565b9392505050565b600060208201905081810360008301526105a38161043b565b9050919050565b600060208201905081810360008301526105c3816104c7565b9050919050565b600081905092915050565b600082825260208201905092915050565b60006105f1826105f8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b610630816105e6565b811461063b57600080fd5b5056fea365627a7a723158205264316b0557d3efdf86fd8729aa3e41b05fd15f23c1d0235228f9618bed71a76c6578706572696d656e74616cf564736f6c63430005110040";

export class GovernorBravoDelegator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    timelock_: string,
    comp_: string,
    admin_: string,
    implementation_: string,
    votingPeriod_: BigNumberish,
    votingDelay_: BigNumberish,
    proposalThreshold_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernorBravoDelegator> {
    return super.deploy(
      timelock_,
      comp_,
      admin_,
      implementation_,
      votingPeriod_,
      votingDelay_,
      proposalThreshold_,
      overrides || {}
    ) as Promise<GovernorBravoDelegator>;
  }
  getDeployTransaction(
    timelock_: string,
    comp_: string,
    admin_: string,
    implementation_: string,
    votingPeriod_: BigNumberish,
    votingDelay_: BigNumberish,
    proposalThreshold_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      timelock_,
      comp_,
      admin_,
      implementation_,
      votingPeriod_,
      votingDelay_,
      proposalThreshold_,
      overrides || {}
    );
  }
  attach(address: string): GovernorBravoDelegator {
    return super.attach(address) as GovernorBravoDelegator;
  }
  connect(signer: Signer): GovernorBravoDelegator__factory {
    return super.connect(signer) as GovernorBravoDelegator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorBravoDelegatorInterface {
    return new utils.Interface(_abi) as GovernorBravoDelegatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorBravoDelegator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorBravoDelegator;
  }
}
