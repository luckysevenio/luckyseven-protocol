/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestUniswapV3ReentrantCallee,
  TestUniswapV3ReentrantCalleeInterface,
} from "../TestUniswapV3ReentrantCallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "swapToReenter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113bc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c22a2bfe1461003b578063fa461e331461007f575b600080fd5b61007d6004803603602081101561005157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061010c565b005b61010a6004803603606081101561009557600080fd5b810190808035906020019092919080359060200190929190803590602001906401000000008111156100c657600080fd5b8201836020820111156100d857600080fd5b803590602001918460018302840111640100000000831117156100fa57600080fd5b90919293919293905050506102be565b005b8073ffffffffffffffffffffffffffffffffffffffff1663128acb0860008060018073fffd8963efd1fc6a506488495d951d5263988d2603600067ffffffffffffffff8111801561015c57600080fd5b506040519080825280601f01601f19166020018201604052801561018f5781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561022557808201518184015260208101905061020a565b50505050905090810190601f1680156102525780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561027457600080fd5b505af1158015610288573d6000803e3d6000fd5b505050506040513d604081101561029e57600080fd5b810190808051906020019092919080519060200190929190505050505050565b3373ffffffffffffffffffffffffffffffffffffffff1663128acb08600080600160008067ffffffffffffffff811180156102f857600080fd5b506040519080825280601f01601f19166020018201604052801561032b5781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001851515815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103ab578082015181840152602081019050610390565b50505050905090810190601f1680156103d85780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b1580156103fa57600080fd5b505af192505050801561043857506040513d604081101561041a57600080fd5b81019080805190602001909291908051906020019092919050505060015b6105bb576104446112d0565b8061044f57506105ac565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152506040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156104c85780820151818401526020810190506104ad565b50505050905090810190601f1680156104f55780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610554578082015181840152602081019050610539565b50505050905090810190601f1680156105815780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120146105a657600080fd5b506105b6565b3d6000803e3d6000fd5b6105be565b50505b3373ffffffffffffffffffffffffffffffffffffffff16633c8a7d8d600080600080600067ffffffffffffffff811180156105f857600080fd5b506040519080825280601f01601f19166020018201604052801561062b5781602001600182028036833780820191505090505b506040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156106a957808201518184015260208101905061068e565b50505050905090810190601f1680156106d65780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b1580156106f857600080fd5b505af192505050801561073657506040513d604081101561071857600080fd5b81019080805190602001909291908051906020019092919050505060015b6108b9576107426112d0565b8061074d57506108aa565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152506040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156107c65780820151818401526020810190506107ab565b50505050905090810190601f1680156107f35780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610852578082015181840152602081019050610837565b50505050905090810190601f16801561087f5780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120146108a457600080fd5b506108b4565b3d6000803e3d6000fd5b6108bc565b50505b3373ffffffffffffffffffffffffffffffffffffffff16634f1eb3d860008060008060006040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001828152602001955050505050506040805180830381600087803b15801561094757600080fd5b505af192505050801561098557506040513d604081101561096757600080fd5b81019080805190602001909291908051906020019092919050505060015b610b08576109916112d0565b8061099c5750610af9565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610a155780820151818401526020810190506109fa565b50505050905090810190601f168015610a425780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610aa1578082015181840152602081019050610a86565b50505050905090810190601f168015610ace5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012014610af357600080fd5b50610b03565b3d6000803e3d6000fd5b610b0b565b50505b3373ffffffffffffffffffffffffffffffffffffffff1663a34123a760008060006040518463ffffffff1660e01b81526004018084815260200183815260200182815260200193505050506040805180830381600087803b158015610b6f57600080fd5b505af1925050508015610bad57506040513d6040811015610b8f57600080fd5b81019080805190602001909291908051906020019092919050505060015b610d3057610bb96112d0565b80610bc45750610d21565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610c3d578082015181840152602081019050610c22565b50505050905090810190601f168015610c6a5780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610cc9578082015181840152602081019050610cae565b50505050905090810190601f168015610cf65780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012014610d1b57600080fd5b50610d2b565b3d6000803e3d6000fd5b610d33565b50505b3373ffffffffffffffffffffffffffffffffffffffff1663490e6cbc60008060008067ffffffffffffffff81118015610d6b57600080fd5b506040519080825280601f01601f191660200182016040528015610d9e5781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e16578082015181840152602081019050610dfb565b50505050905090810190601f168015610e435780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610e6557600080fd5b505af1925050508015610e76575060015b610ff957610e826112d0565b80610e8d5750610fea565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610f06578082015181840152602081019050610eeb565b50505050905090810190601f168015610f335780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120816040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015610f92578082015181840152602081019050610f77565b50505050905090810190601f168015610fbf5780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040528051906020012014610fe457600080fd5b50610ff4565b3d6000803e3d6000fd5b610ffa565b5b3373ffffffffffffffffffffffffffffffffffffffff166385b6672960008060006040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040805180830381600087803b15801561107457600080fd5b505af19250505080156110b257506040513d604081101561109457600080fd5b81019080805190602001909291908051906020019092919050505060015b611235576110be6112d0565b806110c95750611226565b6040518060400160405280600381526020017f4c4f4b00000000000000000000000000000000000000000000000000000000008152506040516020018080602001828103825283818151815260200191508051906020019080838360005b83811015611142578082015181840152602081019050611127565b50505050905090810190601f16801561116f5780820380516001836020036101000a031916815260200191505b509250505060405160208183030381529060405280519060200120816040516020018080602001828103825283818151815260200191508051906020019080838360005b838110156111ce5780820151818401526020810190506111b3565b50505050905090810190601f1680156111fb5780820380516001836020036101000a031916815260200191505b5092505050604051602081830303815290604052805190602001201461122057600080fd5b50611230565b3d6000803e3d6000fd5b611238565b50505b60006112ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e61626c6520746f207265656e74657200000000000000000000000000000081525060200191505060405180910390fd5b50505050565b6000601f19601f8301169050919050565b60008160e01c9050919050565b600060443d10156112e057611383565b60046000803e6112f16000516112c3565b6308c379a081146113025750611383565b60405160043d036004823e80513d602482011167ffffffffffffffff8211171561132e57505050611383565b808201805167ffffffffffffffff81111561134d575050505050611383565b8060208301013d850181111561136857505050505050611383565b611371826112b2565b60208401016040528296505050505050505b9056fea264697066735822122090620f379435ce3ea695a679f4713159c85cfd6ceaee364ffe13c22aa2cd159b64736f6c63430007060033";

export class TestUniswapV3ReentrantCallee__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUniswapV3ReentrantCallee> {
    return super.deploy(
      overrides || {}
    ) as Promise<TestUniswapV3ReentrantCallee>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestUniswapV3ReentrantCallee {
    return super.attach(address) as TestUniswapV3ReentrantCallee;
  }
  connect(signer: Signer): TestUniswapV3ReentrantCallee__factory {
    return super.connect(signer) as TestUniswapV3ReentrantCallee__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapV3ReentrantCalleeInterface {
    return new utils.Interface(_abi) as TestUniswapV3ReentrantCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3ReentrantCallee {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestUniswapV3ReentrantCallee;
  }
}
