export interface IRetryOptions {
    /**
     * The number of times to retry the operation. Default is 3.
     */
    maxRetries?: number;
    /**
     * The base amount of time to use in the exponential backoff formula.
     * Default is 1000 (1 second) (maxRetries * baseBackoffMs must be
     * less than 30 seconds).
     */
    retryDelayType?: 'fixed' | 'exponential';
    /**
     * The base number of milliseconds to use in the exponential backoff
     * for operation retries. Default is 1000 (1 second).
     * @default 1000
     * @example
     * // The default value of `1000` will result in the following delays
     * // between retries: 1s, 2s, 4s.
     * // To disable exponential backoff, set `baseDelay` to `0`.
     * @example
     * // To set a custom delay sequence, set `baseDelay` to an appropriate
     * // value. The following will result in delays of 1s, 6s, 11s.
     * baseDelay: 1000,
     * maxRetries: 3
     */
    retryDelay?: number;
    /**
     * maxDelay: The maximum number of milliseconds to use in the exponential backoff
     * for operation retries. Default is 60,000 (1 minute).
     * @default 60000
     * @example
     * // The default value of `60000` will cap exponential backoff delays at 1 minute.
     * // To disable the maximum delay, set `maxDelay` to `Infinity`.
     */
    maxRetryDelay?: number;
}
export interface IRetryOperator<T> {
    (...args: any[]): Promise<T>;
    /**
     *
     * @param reason The reason for aborting the operation.
     * @returns
     *
     * @example
     * let counter = 0
     * let promise = retryPromiseFactory(() => {
     *      counter += 1;
     *      if (counter === 3) {
     *          return Promise.resolve();
     *      }
     * })
     * promise().then(() => {
     *   console.log('Operation succeeded!')
     * }).catch((err) => {
     *    console.log('err: ', err)
     * })
     * setTimeout(() => {
     *  promise.abort?.('abort')
     * }, 1000)
     */
    abort?(reason?: any): void;
}
/**
 *  Retry an operation with exponential backoff.
 * @param ms  The number of milliseconds to delay.
 * @returns
 */
export declare const delay: (ms: number) => Promise<void>;
/**
 *  Retry an operation with exponential backoff.
 * @param {IRetryOperator} operation - The operation to retry.
 * @param {IRetryOptions} [options] - The retry settings.
 * @returns {Promise} A promise that resolves when the operation succeeds.
 * let counter = 0
 * let promise = retryPromiseFactory(() => {
 *      counter += 1;
 *      if (counter === 3) {
 *          return Promise.resolve();
 *      }
 * })
 * promise().then(() => {
 *   console.log('Operation succeeded!')
 * }).catch((err) => {
 *    console.log('err: ', err)
 * })
 */
export declare const retryPromiseFactory: <T>(fn: IRetryOperator<T>, options?: IRetryOptions) => IRetryOperator<T>;
