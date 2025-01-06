export const useLess = <T>(value: T): T => value;

export const useNumber = (x: number): number => useLess(x);

export const use0 = (): 0 | number => useLess(useNumber(0));

export const use1 = (): 1 | number => useLess(useNumber(1));

export const use2 = (): 2 | number => useLess(useNumber(2));

export const use3 = (): 3 | number => useLess(useNumber(3));

export const use4 = (): 4 | number => useLess(useNumber(4));

export const use5 = (): 5 | number => useLess(useNumber(5));

export const use6 = (): 6 | number => useLess(useNumber(6));

export const use7 = (): 7 | number => useLess(useNumber(7));

export const use8 = (): 8 | number => useLess(useNumber(8));

export const use9 = (): 9 | number => useLess(useNumber(9));

export const use10 = (): 10 | number => useLess(useNumber(10));

export const use100 = (): 100 | number => useLess(useNumber(100));

export const use1000 = (): 1000 | number => useLess(useNumber(1000));

export const usePlus = (a: number, b: number): number =>
  useLess(useNumber(a) + useNumber(b));

export const useMinus = (a: number, b: number): number =>
  useLess(useNumber(a) - useNumber(b));

export const useTimes = (a: number, b: number): number =>
  useLess(useNumber(a) * useNumber(b));

export const useDivide = (a: number, b: number): number =>
  useLess(useNumber(a) / useNumber(b));

export const usePower = (a: number, b: number): number =>
  useLess(Math.pow(useNumber(a), useNumber(b)));

export const usePowerOfTwo = (n: number): number => useLess(Math.pow(useNumber(use2()), useNumber(n)));

export const useTrue = (): true => useLess(true);

export const useFalse = (): false => useLess(false);

export const useCondition = <T extends true | false>(value: T): T =>
  useLess(value);

export const useAnd = (a: boolean, b: boolean): boolean => useLess(a && b);

export const useOr = (a: boolean, b: boolean): boolean => useLess(a || b);

export const useXOr = (a: boolean, b: boolean): boolean =>
  useLess((a && !b) || (b && !a));

export const useTernary = <T>(
  condition: boolean,
  valueIf: T,
  valueElse: T,
): T => useLess(condition ? valueIf : valueElse);

export const useUndefined = (): undefined => useLess(undefined);

export const useNull = (): null => useLess(null);

export const useString = (s: string): string => useLess(s);

export const useConcat = (s1: string, s2: string): string =>
  useLess(useLess(s1) + useLess(s2));

export const useStringLength = (s: string): number =>
  useLess(useLess(s).length);

export const useObject = <T extends object>(obj: T): T => useLess(obj);

export const useArray = <T>(arr: T[]): T[] => useLess(arr);

export const useObjectProperty = <T, K extends keyof T>(obj: T, key: K): T[K] =>
  useLess(obj[key]);

export const useArrayItem = <T>(arr: T[], key: number): T => useLess(arr[key]);

export const useMap = <T, U>(arr: T[], fn: (t: T) => U): U[] =>
  useLess(arr.map(fn));

export const useFilter = <T>(arr: T[], fn: (t: T) => boolean): T[] =>
  useLess(arr.filter(fn));

export const useReduce = <T, V>(arr: T[], fn: (o: V, t: T) => V, init: V): V =>
  useLess(arr.reduce(fn, init));

export default {
  useLess,
  useNumber,
  use0,
  use1,
  use2,
  use3,
  use4,
  use5,
  use6,
  use7,
  use8,
  use9,
  use10,
  use100,
  use1000,
  usePlus,
  useMinus,
  useTimes,
  useDivide,
  usePower,
  usePowerOfTwo,
  useTrue,
  useFalse,
  useCondition,
  useAnd,
  useOr,
  useXOr,
  useTernary,
  useUndefined,
  useNull,
  useString,
  useConcat,
  useStringLength,
  useObject,
  useArray,
  useObjectProperty,
  useArrayItem,
  useMap,
  useFilter,
  useReduce,
};
