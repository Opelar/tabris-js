// Type definitions for fetch API
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/whatwg-fetch/whatwg-fetch.d.ts
// Project: https://github.com/github/fetch
// Definitions by: Ryan Graham <https://github.com/ryan-codingintrigue>

declare class Request extends Body {
  constructor(input: string | Request, init?: RequestInit);
  method: string;
  url: string;
  headers: Headers;
  context: RequestContext;
  referrer: string;
  mode: RequestMode;
  credentials: RequestCredentials;
  cache: RequestCache;
}

interface RequestInit {
  method?: string;
  headers?: HeaderInit | { [index: string]: string };
  body?: BodyInit;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
}

type RequestContext =
  "audio" | "beacon" | "cspreport" | "download" | "embed" |
  "eventsource" | "favicon" | "fetch" | "font" | "form" | "frame" |
  "hyperlink" | "iframe" | "image" | "imageset" | "import" |
  "internal" | "location" | "manifest" | "object" | "ping" | "plugin" |
  "prefetch" | "script" | "serviceworker" | "sharedworker" |
  "subresource" | "style" | "track" | "video" | "worker" |
  "xmlhttprequest" | "xslt";
type RequestMode = "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache =
  "default" | "no-store" | "reload" | "no-cache" |
  "force-cache" | "only-if-cached";

declare class Headers {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string;
  getAll(name: string): Array<string>;
  has(name: string): boolean;
  set(name: string, value: string): void;
  forEach(callback: (value: string, name: string) => void): void;
}

declare class Body {
  bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  // TODO: enable when Blob support is added
  // blob(): Promise<Blob>;
  // formData(): Promise<FormData>;
  json(): Promise<any>;
  json<T>(): Promise<T>;
  text(): Promise<string>;
}
declare class Response extends Body {
  constructor(body?: BodyInit, init?: ResponseInit);
  error(): Response;
  redirect(url: string, status: number): Response;
  type: ResponseType;
  url: string;
  status: number;
  ok: boolean;
  statusText: string;
  headers: Headers;
  clone(): Response;
}

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque";

interface ResponseInit {
  status: number;
  statusText?: string;
  headers?: HeaderInit;
}

declare type HeaderInit = Headers | Array<string>;
// TODO: enable when Blob support is added
// declare type BodyInit = Blob | FormData | string;
declare type BodyInit = string;
declare type RequestInfo = Request | string;

declare function fetch(url: string | Request, init?: RequestInit): Promise<Response>;
