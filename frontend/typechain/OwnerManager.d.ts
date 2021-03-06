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

interface OwnerManagerInterface extends ethers.utils.Interface {
  functions: {
    "addOwnerWithThreshold(address,uint256)": FunctionFragment;
    "changeThreshold(uint256)": FunctionFragment;
    "getOwners()": FunctionFragment;
    "getThreshold()": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "removeOwner(address,address,uint256)": FunctionFragment;
    "swapOwner(address,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addOwnerWithThreshold",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeOwner",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapOwner",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addOwnerWithThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;

  events: {
    "AddedOwner(address)": EventFragment;
    "ChangedThreshold(uint256)": EventFragment;
    "RemovedOwner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedThreshold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedOwner"): EventFragment;
}

export type AddedOwnerEvent = TypedEvent<[string] & { owner: string }>;

export type ChangedThresholdEvent = TypedEvent<
  [BigNumber] & { threshold: BigNumber }
>;

export type RemovedOwnerEvent = TypedEvent<[string] & { owner: string }>;

export class OwnerManager extends BaseContract {
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

  interface: OwnerManagerInterface;

  functions: {
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOwners(overrides?: CallOverrides): Promise<[string[]]>;

    getThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOwner(owner: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addOwnerWithThreshold(
    owner: string,
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeThreshold(
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOwners(overrides?: CallOverrides): Promise<string[]>;

  getThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  isOwner(owner: string, overrides?: CallOverrides): Promise<boolean>;

  removeOwner(
    prevOwner: string,
    owner: string,
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapOwner(
    prevOwner: string,
    oldOwner: string,
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeThreshold(
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwners(overrides?: CallOverrides): Promise<string[]>;

    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(owner: string, overrides?: CallOverrides): Promise<boolean>;

    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddedOwner(address)"(
      owner?: null
    ): TypedEventFilter<[string], { owner: string }>;

    AddedOwner(owner?: null): TypedEventFilter<[string], { owner: string }>;

    "ChangedThreshold(uint256)"(
      threshold?: null
    ): TypedEventFilter<[BigNumber], { threshold: BigNumber }>;

    ChangedThreshold(
      threshold?: null
    ): TypedEventFilter<[BigNumber], { threshold: BigNumber }>;

    "RemovedOwner(address)"(
      owner?: null
    ): TypedEventFilter<[string], { owner: string }>;

    RemovedOwner(owner?: null): TypedEventFilter<[string], { owner: string }>;
  };

  estimateGas: {
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOwners(overrides?: CallOverrides): Promise<BigNumber>;

    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
