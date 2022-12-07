export interface CancellablePromiseFactory<T = unknown> extends Promise<T> {
    abort?: (reasonToAbort: any) => void;
}
export declare const cancellablePromiseFactory: (executor: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void) => CancellablePromiseFactory<unknown>;
