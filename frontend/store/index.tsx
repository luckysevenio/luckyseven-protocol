import React, { ReactNode } from 'react';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../utils/localStorage';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';
import { ethers } from 'ethers';
import { AddressZero } from '@ethersproject/constants';

const initialState = {
  web3: {
    account: '',
    chainId: '0x0',
    networkIdentifier: '',
    provider: null,
  },
  safe: {
    // owners: ['0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0'],
    owners: ['0x25c0E8Fe8bc7a01a66A5C2008E85fA9A01C73113'],
    threshold: 2,
    xmWallet: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    // address: AddressZero,
    address: '0x803bF5BA33Fd8478776dE602e4928825FE0b4901',
    // address: '0xfe658c30d570c8204215C1844b24fbe3Fa671a6A',
  },
};

export type State = typeof initialState;

export enum ActionTypes {
  'SET_ACCOUNT' = 'SET_ACCOUNT',
  'SET_CHAIN_ID' = 'SET_CHAIN_ID',
  'SET_NETWORK_IDENTIFIER' = 'SET_NETWORK_IDENTIFIER',
  'SET_PROVIDER' = 'SET_PROVIDER',
  'SET_SAFE' = 'SET_SAFE',
  'SET_SAFE_ADDRESS' = 'SET_SAFE_ADDRESS',
}

type Action =
  | { type: ActionTypes.SET_ACCOUNT; payload: string }
  | { type: ActionTypes.SET_CHAIN_ID; payload: string }
  | { type: ActionTypes.SET_NETWORK_IDENTIFIER; payload: string }
  | {
      type: ActionTypes.SET_PROVIDER;
      payload: ethers.providers.Web3Provider | null;
    }
  | {
      type: ActionTypes.SET_SAFE;
      payload: { owners: string[]; threshold: number };
    }
  | {
      type: ActionTypes.SET_SAFE_ADDRESS;
      payload: string;
    };

export function reducer(
  state: State = getCurrentState(),
  action: Action
): State {
  switch (action.type) {
    case ActionTypes.SET_ACCOUNT: {
      return {
        ...state,
        web3: {
          ...state.web3,
          account: action.payload,
        },
      };
    }
    case ActionTypes.SET_CHAIN_ID: {
      return {
        ...state,
        web3: {
          ...state.web3,
          chainId: action.payload,
        },
      };
    }
    case ActionTypes.SET_NETWORK_IDENTIFIER: {
      saveState(LOCAL_STORAGE_KEYS.SELECTED_NETWORK, action.payload);
      return {
        ...state,
        web3: {
          ...state.web3,
          networkIdentifier: action.payload,
        },
      };
    }
    case ActionTypes.SET_PROVIDER: {
      return {
        ...state,
        web3: {
          ...state.web3,
          // @ts-ignore
          provider: action.payload,
        },
      };
    }
    case ActionTypes.SET_SAFE: {
      return {
        ...state,
        safe: {
          ...state.safe,
          owners: action.payload.owners,
          threshold: action.payload.threshold,
        },
      };
    }
    case ActionTypes.SET_SAFE_ADDRESS: {
      return {
        ...state,
        safe: {
          ...state.safe,
          address: action.payload,
        },
      };
    }
  }
  saveState('appState', state);
  return state;
}

function getLocalState(): State | undefined {
  const localState = loadState('appState') as State;
  if (!localState) {
    return;
  }

  return localState || initialState;
}

function getCurrentState(): State {
  return initialState;
  // return getLocalState() || initialState;
}
const store = createStore(reducer, getCurrentState(), composeWithDevTools());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function AppProvider(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}
