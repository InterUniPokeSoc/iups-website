import type { CreateWorkerPoolType } from "./types";
export declare type GatsbyWorkerPool = CreateWorkerPoolType<typeof import("./child")>;
export declare const create: () => GatsbyWorkerPool;
