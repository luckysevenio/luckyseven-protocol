import { BigNumber } from 'ethers';

export interface Parameters {
  b: number;
  n: number;
  mu: number;
  p: number;
  i: number;
  j: number;
}

export function luckySevenPRNG(parameters: Parameters) {
  const b = BigNumber.from(parameters.b);
  const n = BigNumber.from(parameters.n);
  const mu = BigNumber.from(parameters.mu);
  const p = BigNumber.from(parameters.p);
  const i = BigNumber.from(parameters.i);
  const j = BigNumber.from(parameters.j);
  const L = BigNumber.from(10).pow(p);
  const U = L.mul(b);
  const C = BigNumber.from(10).pow(n);
  const K = C.sub(mu);
  const Y = U.div(K);
  const S = BigNumber.from(10).pow(i.add(j));
  const E = BigNumber.from(10).pow(i);
  const V = Y.mod(S);
  const N = Y.mod(E);
  const I = V.sub(N);
  const O = I.div(E);
  return O;
}
