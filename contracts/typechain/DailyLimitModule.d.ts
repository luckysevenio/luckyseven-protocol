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

interface DailyLimitModuleInterface extends ethers.utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "changeDailyLimit(address,uint256)": FunctionFragment;
    "changeMasterCopy(address)": FunctionFragment;
    "dailyLimits(address)": FunctionFragment;
    "executeDailyLimit(address,address,uint256)": FunctionFragment;
    "manager()": FunctionFragment;
    "setup(address[],uint256[])": FunctionFragment;
    "today()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeDailyLimit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeMasterCopy",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "dailyLimits", values: [string]): string;
  encodeFunctionData(
    functionFragment: "executeDailyLimit",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "today", values?: undefined): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeDailyLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMasterCopy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dailyLimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDailyLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "today", data: BytesLike): Result;

  events: {
    "ChangedMasterCopy(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedMasterCopy"): EventFragment;
}

export type ChangedMasterCopyEvent = TypedEvent<
  [string] & { masterCopy: string }
>;

export class DailyLimitModule extends BaseContract {
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

  interface: DailyLimitModuleInterface;

  functions: {
    NAME(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    changeDailyLimit(
      token: string,
      dailyLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dailyLimits(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dailyLimit: BigNumber;
        spentToday: BigNumber;
        lastDay: BigNumber;
      }
    >;

    executeDailyLimit(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    setup(
      tokens: string[],
      _dailyLimits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    today(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  changeDailyLimit(
    token: string,
    dailyLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeMasterCopy(
    _masterCopy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dailyLimits(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      dailyLimit: BigNumber;
      spentToday: BigNumber;
      lastDay: BigNumber;
    }
  >;

  executeDailyLimit(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  manager(overrides?: CallOverrides): Promise<string>;

  setup(
    tokens: string[],
    _dailyLimits: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  today(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    changeDailyLimit(
      token: string,
      dailyLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    dailyLimits(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        dailyLimit: BigNumber;
        spentToday: BigNumber;
        lastDay: BigNumber;
      }
    >;

    executeDailyLimit(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    manager(overrides?: CallOverrides): Promise<string>;

    setup(
      tokens: string[],
      _dailyLimits: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    today(overrides?: CallOverrides): Promise<BigNumber>;
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

    changeDailyLimit(
      token: string,
      dailyLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dailyLimits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    executeDailyLimit(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    setup(
      tokens: string[],
      _dailyLimits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    today(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeDailyLimit(
      token: string,
      dailyLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dailyLimits(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeDailyLimit(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setup(
      tokens: string[],
      _dailyLimits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    today(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
