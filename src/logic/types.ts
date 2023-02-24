interface Props {
    targetContent?: string;
    prevNum?: string;
    curNum?: string;
    operator?: null | string;
    isEqual?: boolean;
    result?: string;
    accessZero?: boolean;
    setCurNum?: (arg: string | ((prev: string) => string)) => void;
    setPrevNum?: (arg: string) => void;
    setOperator?: (arg: null | string) => void;
    setIsEqual?: (arg: boolean) => void;
    setAccessZero?: (arg: boolean) => void;
    setResult?: (arg: string) => void;
}
export type CalcFn = (args: Props) => void;

export interface SignType extends Record<string, string> {
    '/': string;
    '*': string;
    '-': string;
    '+': string;
    '=': string;
}
