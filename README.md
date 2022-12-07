# retry-promise

Retrying failed promises and break promises at any time

# Installation

```bash
npm instal --save-dev @emojiiii/retry-promise
```

```bash
yarn add @emojiiii/retry-promise
```

```bash
pnpm add @emojiiii/retry-promise
```

# Example

## Base Usage

```typescript
import {retryPromiseFactory} from '@emojiiii/retry-promise'

let counter = 0
let promise = retryPromiseFactory(() => {
      counter += 1;
      if (counter === 3) {
          return Promise.resolve('success');
     } else {
        return Promise.reject('fail')
     }
})

promise().then(() => {
  console.log('Operation succeeded!')
}).catch((err) => {
   console.log('err: ', err)
})

```

## MaxRetries

```typescript
import {retryPromiseFactory} from '@emojiiii/retry-promise'

let counter = 0
let promise = retryPromiseFactory(() => {
      counter += 1;
      if (counter === 3) {
          return Promise.resolve('success');
     } else {
        return Promise.reject('fail')
     }
}, {
  maxRetries: 5,
  retryDelayType: 'exponential',
  maxRetryDelay: 60000
})

promise().then(() => {
  console.log('Operation succeeded!')
}).catch((err) => {
   console.log('err: ', err)
})

```

## retryDelayType

```typescript
import {retryPromiseFactory} from '@emojiiii/retry-promise'

let counter = 0
let promise = retryPromiseFactory(() => {
      counter += 1;
      if (counter === 3) {
          return Promise.resolve('success');
     } else {
        return Promise.reject('fail')
     }
}, {
  maxRetries: 5,
  retryDelayType: 'fixed',
  retryDelay: 1000
})

promise().then(() => {
  console.log('Operation succeeded!')
}).catch((err) => {
   console.log('err: ', err)
})

```

## Abort promise

```typescript
import {retryPromiseFactory} from '@emojiiii/retry-promise'

let counter = 0
let promise = retryPromiseFactory(() => {
      counter += 1;
      if (counter === 3) {
          return Promise.resolve('success');
     } else {
        return Promise.reject('fail')
     }
})

promise().then(() => {
  console.log('Operation succeeded!')
}).catch((err) => {
   console.log('err: ', err)
})

promise.abort('abort')

```

# License

retry-promise is open source software licensed as [MIT](https://github.com/emojiiii/retry-promise/blob/main/LICENSE)
