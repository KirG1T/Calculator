import { CalcFn } from '../types';

const reset: CalcFn = ({
    setPrevNum,
    setCurNum,
    setOperator,
    setIsEqual,
    setAccessZero,
    setResult,
}) => {
    if (
        setPrevNum &&
        setCurNum &&
        setOperator &&
        setIsEqual &&
        setAccessZero &&
        setResult
    ) {
        setPrevNum('');
        setCurNum('');
        setOperator(null);
        setIsEqual(false);
        setAccessZero(false);
        setResult('0');
    }
};

export default reset;
