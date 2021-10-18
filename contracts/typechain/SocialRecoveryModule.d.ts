/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SocialRecoveryModuleInterface extends ethers.utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "changeMasterCopy(address)": FunctionFragment;
    "confirmTransaction(bytes32)": FunctionFragment;
    "friends(uint256)": FunctionFragment;
    "getDataHash(bytes)": FunctionFragment;
    "isConfirmed(bytes32,address)": FunctionFragment;
    "isConfirmedByRequiredFriends(bytes32)": FunctionFragment;
    "isExecuted(bytes32)": FunctionFragment;
    "isFriend(address)": FunctionFragment;
    "manager()": FunctionFragment;
    "recoverAccess(address,address,address)": FunctionFragment;
    "setup(address[],uint256)": FunctionFragment;
    "threshold()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeMasterCopy",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "friends",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmedByRequiredFriends",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isExecuted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isFriend", values: [string]): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverAccess",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "threshold", values?: undefined): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeMasterCopy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "friends", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmedByRequiredFriends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isExecuted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isFriend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;

  events: {
    "ChangedMasterCopy(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedMasterCopy"): EventFragment;
}

export type ChangedMasterCopyEvent = TypedEvent<
  [string] & { masterCopy: string }
>;

export class SocialRecoveryModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SocialRecoveryModuleInterface;

  functions: {
    NAME(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    confirmTransaction(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    friends(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getDataHash(data: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isConfirmedByRequiredFriends(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    isFriend(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    recoverAccess(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    threshold(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  changeMasterCopy(
    _masterCopy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  confirmTransaction(
    dataHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  friends(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getDataHash(data: BytesLike, overrides?: CallOverrides): Promise<string>;

  isConfirmed(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isConfirmedByRequiredFriends(
    dataHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isFriend(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  manager(overrides?: CallOverrides): Promise<string>;

  recoverAccess(
    prevOwner: string,
    oldOwner: string,
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setup(
    _friends: string[],
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  threshold(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmTransaction(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    friends(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getDataHash(data: BytesLike, overrides?: CallOverrides): Promise<string>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isConfirmedByRequiredFriends(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isFriend(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    manager(overrides?: CallOverrides): Promise<string>;

    recoverAccess(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    threshold(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ChangedMasterCopy(address)"(
      masterCopy?: null
    ): TypedEventFilter<[string], { masterCopy: string }>;

    ChangedMasterCopy(
      masterCopy?: null
    ): TypedEventFilter<[string], { masterCopy: string }>;
  };

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    confirmTransaction(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    friends(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getDataHash(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isConfirmedByRequiredFriends(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExecuted(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isFriend(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    recoverAccess(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    threshold(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    confirmTransaction(
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    friends(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDataHash(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmedByRequiredFriends(
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExecuted(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFriend(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverAccess(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    threshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
