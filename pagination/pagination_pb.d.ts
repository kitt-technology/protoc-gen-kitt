// package: pagination
// file: pagination.proto

import * as jspb from "google-protobuf";

export class PaginationOptions extends jspb.Message {
  getBefore(): string;
  setBefore(value: string): void;

  getAfter(): string;
  setAfter(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationOptions): PaginationOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaginationOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationOptions;
  static deserializeBinaryFromReader(message: PaginationOptions, reader: jspb.BinaryReader): PaginationOptions;
}

export namespace PaginationOptions {
  export type AsObject = {
    before: string,
    after: string,
    limit: number,
  }
}

export class Connection extends jspb.Message {
  getTotalcount(): number;
  setTotalcount(value: number): void;

  hasPageinfo(): boolean;
  clearPageinfo(): void;
  getPageinfo(): PageInfo | undefined;
  setPageinfo(value?: PageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    totalcount: number,
    pageinfo?: PageInfo.AsObject,
  }
}

export class PageInfo extends jspb.Message {
  getEndcursor(): string;
  setEndcursor(value: string): void;

  getHasnextpage(): boolean;
  setHasnextpage(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PageInfo): PageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageInfo;
  static deserializeBinaryFromReader(message: PageInfo, reader: jspb.BinaryReader): PageInfo;
}

export namespace PageInfo {
  export type AsObject = {
    endcursor: string,
    hasnextpage: boolean,
  }
}

