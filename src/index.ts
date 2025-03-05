export const useLess = <T>(value: T): T => value;

export const useNumber = (x: number): number => useLess(Number(x));

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

export const usePlus = (a: number, b: number): number => useLess(useNumber(useNumber(a) + useNumber(b)));

export const useMinus = (a: number, b: number): number => useLess(useNumber(useNumber(a) - useNumber(b)));

export const useTimes = (a: number, b: number): number => useLess(useNumber(useNumber(a) * useNumber(b)));

export const useDivide = (a: number, b: number): number => useLess(useNumber(useNumber(a) / useNumber(b)));

export const useModulus = (a: number, b: number): number => useLess(useNumber(useNumber(a) % useNumber(b)));

export const usePower = (a: number, b: number): number => useLess(useNumber(Math.pow(useNumber(a), useNumber(b))));

export const usePowerOfTwo = (n: number): number => useLess(useNumber(Math.pow(useNumber(use2()), useNumber(n))));

export const useFloor = (x: number): number => useLess(useNumber(Math.floor(useNumber(x))));

export const useCeil = (x: number): number => useLess(useNumber(Math.ceil(useNumber(x))));

export const useRound = (x: number): number => useLess(useNumber(Math.round(useNumber(x))));

export const useMax = (a: number, b: number): number => useLess(useNumber(Math.max(useNumber(a), useNumber(b))));

export const useMin = (a: number, b: number): number => useLess(useNumber(Math.min(useNumber(a), useNumber(b))));

export const useRandom = (): number => useLess(useNumber(Math.random()));

export const useBoolean = (b: boolean): boolean => useLess(Boolean(b));

export const useTrue = (): boolean | true => useLess(useBoolean(true));

export const useFalse = (): boolean | false => useLess(useBoolean(false));

export const useCondition = <T extends boolean>(value: T): T | boolean => useLess(useBoolean(value));

export const useEqual = <T>(a: T, b: T): boolean => useLess(useCondition(a == b));

export const useStrictEqual = <T>(a: T, b: T): boolean => useLess(useCondition(a === b));

export const useNotEqual = <T>(a: T, b: T): boolean => useLess(useCondition(a != b));

export const useStrictNotEqual = <T>(a: T, b: T): boolean => useLess(useCondition(a !== b));

export const useGreaterThan = (a: number, b: number): boolean => useLess(useCondition(a > b));

export const useGreaterThanOrEqual = (a: number, b: number): boolean => useLess(useCondition(a >= b));

export const useLessThan = (a: number, b: number): boolean => useLess(useCondition(a < b));

export const useLessThanOrEqual = (a: number, b: number): boolean => useLess(useCondition(a <= b));

export const useNot = (b: boolean): boolean => useLess(useCondition(!b));

export const useAnd = (a: boolean, b: boolean): boolean => useLess(useCondition(a && b));

export const useNAnd = (a: boolean, b: boolean): boolean => useLess(useCondition(useNot(useAnd(a, b))));

export const useOr = (a: boolean, b: boolean): boolean => useLess(useCondition(a || b));

export const useNOr = (a: boolean, b: boolean): boolean => useLess(useCondition(useNot(useOr(a, b))));

export const useXOr = (a: boolean, b: boolean): boolean => useLess(useCondition(useOr(useAnd(a, useNot(b)), useAnd(b, useNot(a)))));

export const useNXOr = (a: boolean, b: boolean): boolean => useLess(useCondition(useNot(useXOr(a, b))));

export const useTernary = <T>(condition: boolean, valueIf: T, valueElse: T): T => useLess(useCondition(condition) ? valueIf : valueElse);

export const useUndefined = (): undefined => useLess(undefined);

export const useNull = (): null => useLess(null);

export const useString = (s: string): string => useLess(String(s));

export const useConcat = (s1: string, s2: string): string => useLess(useString(s1) + useString(s2));

export const useStringLength = (s: string): number => useLess(useString(s).length);

export const useTrim = (s: string): string => useLess(useString(s).trim());

export const useToLowerCase = (s: string): string => useLess(useString(s).toLowerCase());

export const useToUpperCase = (s: string): string => useLess(useString(s).toUpperCase());

export const useObject = <T extends object>(obj: T): T => useLess(Object(obj));

export const useObjectProperty = <T extends object, K extends keyof T>(obj: T, key: K): T[K] => useLess(useObject(obj)[key]);

export const useArray = <T>(arr: T[]): T[] => useLess(Array.prototype.slice.call(arr));

export const useArrayItem = <T>(arr: T[], key: number): T => useLess(useArray(arr)[key]);

export const useMap = <T, U>(arr: T[], fn: (t: T) => U): U[] => useLess(useArray(arr).map(fn));

export const useFilter = <T>(arr: T[], fn: (t: T) => boolean): T[] => useLess(useArray(arr).filter(fn));

export const useReduce = <T, V>(arr: T[], fn: (o: V, t: T) => V, init: V): V => useLess(useArray(arr).reduce(fn, init));

export const useIncludes = <T>(arr: T[], value: T): boolean => useLess(useArray(arr).includes(value));

export const useFind = <T>(arr: T[], fn: (t: T) => boolean): T | undefined => useLess(useArray(arr).find(fn));

export const useSome = <T>(arr: T[], fn: (t: T) => boolean): boolean => useLess(useArray(arr).some(fn));

export const useEvery = <T>(arr: T[], fn: (t: T) => boolean): boolean => useLess(useArray(arr).every(fn));

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
  useModulus,
  usePower,
  usePowerOfTwo,
  useFloor,
  useCeil,
  useRound,
  useMax,
  useMin,
  useRandom,
  useBoolean,
  useTrue,
  useFalse,
  useCondition,
  useEqual,
  useStrictEqual,
  useNotEqual,
  useStrictNotEqual,
  useGreaterThan,
  useGreaterThanOrEqual,
  useLessThan,
  useLessThanOrEqual,
  useNot,
  useAnd,
  useNAnd,
  useOr,
  useNOr,
  useXOr,
  useNXOr,
  useTernary,
  useUndefined,
  useNull,
  useString,
  useConcat,
  useStringLength,
  useTrim,
  useToLowerCase,
  useToUpperCase,
  useObject,
  useObjectProperty,
  useArray,
  useArrayItem,
  useMap,
  useFilter,
  useReduce,
  useIncludes,
  useFind,
  useSome,
  useEvery,
};
