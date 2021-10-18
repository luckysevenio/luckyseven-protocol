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

interface GnosisSafeProxyFactoryInterface extends ethers.utils.Interface {
  functions: {
    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)": FunctionFragment;
    "createProxy(address,bytes)": FunctionFragment;
    "createProxyWithCallback(address,bytes,uint256,address)": FunctionFragment;
    "createProxyWithNonce(address,bytes,uint256)": FunctionFragment;
    "proxyCreationCode()": FunctionFragment;
    "proxyRuntimeCode()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateCreateProxyWithNonceAddress",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxy",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyWithCallback",
    values: [string, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyWithNonce",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyCreationCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxyRuntimeCode",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateCreateProxyWithNonceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyWithCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyWithNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyCreationCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyRuntimeCode",
    data: BytesLike
  ): Result;

  events: {
    "ProxyCreation(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
}

export type ProxyCreationEvent = TypedEvent<[string] & { proxy: string }>;

export class GnosisSafeProxyFactory extends BaseContract {
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

  interface: GnosisSafeProxyFactoryInterface;

  functions: {
    calculateCreateProxyWithNonceAddress(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createProxy(
      masterCopy: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createProxyWithCallback(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createProxyWithNonce(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxyCreationCode(overrides?: CallOverrides): Promise<[string]>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<[string]>;
  };

  calculateCreateProxyWithNonceAddress(
    _mastercopy: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createProxy(
    masterCopy: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createProxyWithCallback(
    _mastercopy: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    callback: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createProxyWithNonce(
    _mastercopy: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxyCreationCode(overrides?: CallOverrides): Promise<string>;

  proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    calculateCreateProxyWithNonceAddress(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createProxy(
      masterCopy: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    createProxyWithCallback(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createProxyWithNonce(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    proxyCreationCode(overrides?: CallOverrides): Promise<string>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ProxyCreation(address)"(
      proxy?: null
    ): TypedEventFilter<[string], { proxy: string }>;

    ProxyCreation(proxy?: null): TypedEventFilter<[string], { proxy: string }>;
  };

  estimateGas: {
    calculateCreateProxyWithNonceAddress(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createProxy(
      masterCopy: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createProxyWithCallback(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createProxyWithNonce(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxyCreationCode(overrides?: CallOverrides): Promise<BigNumber>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateCreateProxyWithNonceAddress(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createProxy(
      masterCopy: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createProxyWithCallback(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createProxyWithNonce(
      _mastercopy: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxyCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyRuntimeCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
