import { IGatsbyIterable } from "../types";
export declare class GatsbyIterable<T> implements IGatsbyIterable<T> {
    private source;
    constructor(source: Iterator<T>);
    [Symbol.iterator](): Iterator<T>;
    concat<U>(other: Iterable<U>): GatsbyIterable<T | U>;
    map<U>(fn: (entry: T) => U): GatsbyIterable<U>;
    filter(predicate: (entry: T) => unknown): GatsbyIterable<T>;
    forEach(callback: (entry: T) => unknown): void;
}
