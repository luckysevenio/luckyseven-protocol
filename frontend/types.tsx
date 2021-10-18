export type Network = {
  name: string;
  provider: string;
  ticker: string;
};

export type IPFSDataField = {
  name: string;
  type: string;
  description: string;
  values?: Array<string>;
};

export enum IPFSDataTypes {
  STRING = 'string',
  NUMBER = 'number',
}
