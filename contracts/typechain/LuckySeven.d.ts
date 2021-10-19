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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LuckySevenInterface extends ethers.utils.Interface {
  functions: {
    "getLuckySevenNumber(uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getLuckySevenNumberFromBlockHash(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLuckySevenNumber",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLuckySevenNumberFromBlockHash",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLuckySevenNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLuckySevenNumberFromBlockHash",
    data: BytesLike
  ): Result;

  events: {};
}

export class LuckySeven extends BaseContract {
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

  interface: LuckySevenInterface;

  functions: {
    getLuckySevenNumber(
      b: BigNumberish,
      n: BigNumberish,
      mu: BigNumberish,
      p: BigNumberish,
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLuckySevenNumberFromBlockHash(
      p: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getLuckySevenNumber(
    b: BigNumberish,
    n: BigNumberish,
    mu: BigNumberish,
    p: BigNumberish,
    i: BigNumberish,
    j: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLuckySevenNumberFromBlockHash(
    p: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getLuckySevenNumber(
      b: BigNumberish,
      n: BigNumberish,
      mu: BigNumberish,
      p: BigNumberish,
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLuckySevenNumberFromBlockHash(
      p: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getLuckySevenNumber(
      b: BigNumberish,
      n: BigNumberish,
      mu: BigNumberish,
      p: BigNumberish,
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLuckySevenNumberFromBlockHash(
      p: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLuckySevenNumber(
      b: BigNumberish,
      n: BigNumberish,
      mu: BigNumberish,
      p: BigNumberish,
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLuckySevenNumberFromBlockHash(
      p: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
