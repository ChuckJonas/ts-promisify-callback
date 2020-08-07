type CallbackErr = Error | string | null;
type Callback<R> = (err: CallbackErr, result: R) => any

type FunctionWithCallback<T extends any[], R> = (...args: [...T, Callback<R>]) => any;

export const promisifyCallback = <I extends any[], R>(func: FunctionWithCallback<I, R>) => (...args: I): Promise<R> => {
  return new Promise((resolve, reject) => {
    func(...args, (err: CallbackErr, result: R) => {
      return err ? reject(err) : resolve(result);
    })
  });
}
