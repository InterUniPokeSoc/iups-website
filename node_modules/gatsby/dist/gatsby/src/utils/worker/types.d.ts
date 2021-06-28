import type Worker from "jest-worker";
declare type WrapReturnOfAFunctionInAPromise<FunctionThatDoesNotReturnAPromise extends (...args: Array<any>) => any> = (...a: Parameters<FunctionThatDoesNotReturnAPromise>) => Promise<ReturnType<FunctionThatDoesNotReturnAPromise>>;
declare type EnsureFunctionReturnsAPromise<MaybeFunction> = MaybeFunction extends (...args: Array<any>) => Promise<any> ? MaybeFunction : MaybeFunction extends (...args: Array<any>) => any ? WrapReturnOfAFunctionInAPromise<MaybeFunction> : never;
export declare type CreateWorkerPoolType<ExposedFunctions> = Worker & {
    [FunctionName in keyof ExposedFunctions]: EnsureFunctionReturnsAPromise<ExposedFunctions[FunctionName]>;
};
export {};
