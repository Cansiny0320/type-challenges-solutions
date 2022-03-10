/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple
  
  ### Question
  
  Implement the type version of ```Array.reverse```
  
  For example:
  
  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```
  
  > View on GitHub: https://tsch.js.org/3192
*/

/* _____________ Your Code Here _____________ */

type Reverse<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : Arr

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3192/answer
  > View solutions: https://tsch.js.org/3192/solutions
  > More Challenges: https://tsch.js.org
*/
