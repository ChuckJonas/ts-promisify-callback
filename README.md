# ts-promisify-callback

Turns any function ending with the standard `(Error, Result)` callback format into a promise.

## Usage

**Requires `typescript@^4.0`**

```ts
import { promisifyCallback } from "ts-promisify-callback";

function helloCallback(
  name: string,
  age: number,
  callback: (err: Error | null, result: string) => void
) {
  callback(null, `I'm ${name}, age ${age}`);
}

let fooPromise = promisifyCallback(helloCallback);

(async () => {
  let greeting = await fooPromise("hello", 31);
  alert(greeting);
})();
```
