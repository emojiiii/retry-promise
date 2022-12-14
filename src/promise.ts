/**
 * from [cancellablePromise](https://juejin.cn/post/7043348598595158030) 
 * @description Promise with abort function
 */

export interface CancellablePromiseFactory<T = unknown> extends Promise<T> {
    abort?: (reasonToAbort: any) => void
}

export const cancellablePromiseFactory = (
    executor: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void
) => {
    let abort
    const originPromise = new Promise(executor)
    const promiseToAbort = new Promise(
        (_, reject) => {
            abort = reject
        }
    )
    const cancellablePromise: CancellablePromiseFactory = Promise.race([originPromise, promiseToAbort])
    cancellablePromise.abort = abort
    return cancellablePromise
}
