# ts-promisify-callback

![npm](https://img.shields.io/npm/v/ts-promisify-callback)

Turns any function ending with the "popular" `(Error, Result)` callback format into a `Promise`. Type-safe!

## Install

> npm install ts-promisify-callback

## Usage

**IMPORTANT:** This library requires `typescript@^4.0` (currently in beta)!

```ts
import { promisifyCallback } from "ts-promisify-callback";

function helloWithCallback(
  name: string,
  age: number,
  cb: (err: Error | null, result: string) => void
) {
  cb(null, `I'm ${name}, age ${age}`);
}

let helloAsPromise = promisifyCallback(helloWithCallback);
// let helloAsPromise: (name: string, age: number) => Promise<string>

(async () => {
  let greeting = await helloAsPromise("hello", 31);
  alert(greeting);
})();
```

## Contributing

This is a very simple library, but I'm sure there are many ways to improve it to be more flexible...

Pull Requests Welcome!
