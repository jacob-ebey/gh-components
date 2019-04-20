import { TemplateResult } from "lit-html";
export * from "lit-html";

export type State<T> = [T, (newValue: T) => void];
export type UseStateFunc = <T = any>(initialValue: T) => State<T>;

export type EffectFunc = () => void | (() => void);
export type UseEffectFunc = (effect: EffectFunc, deps?: any[]) => void;

export type MemoFunc<T> = () => T;
export type UseMemoFunc = <T = any>(memo: MemoFunc<T>, deps?: any[]) => T;

export type CallbackFunc = (...params: any[]) => void;
export type UseCallbackFunc = (callback: CallbackFunc, deps?: any[]) => CallbackFunc;

export interface ComponentHooks {
  useState: UseStateFunc;
  useEffect: UseEffectFunc;
  useMemo: UseMemoFunc;
  useCallback: UseCallbackFunc;
}

export type Component<TProps = any> = (() => TemplateResult) | ((props: TProps, utils?: ComponentHooks) => TemplateResult);

export interface PropertyDeclaration {
  attributeName?: string;
  type?: (value: string | undefined) => any;
}

export type PropertyDeclarations<TProps = any> = {
  [key in keyof TProps]: PropertyDeclaration;
}
