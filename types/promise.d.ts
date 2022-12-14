/**
 * from [cancellablePromise](https://juejin.cn/post/7043348598595158030)
 * @description Promise with abort function
 */
export interface CancellablePromiseFactory<T = unknown> extends Promise<T> {
    abort?: (reasonToAbort: any) => void;
}
export declare const cancellablePromiseFactory: (executor: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void) => CancellablePromiseFactory<unknown>;
