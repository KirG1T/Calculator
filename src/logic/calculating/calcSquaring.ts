import { CalcFn } from '../types';

const calcSquaring: CalcFn = ({
    targetContent,
    isEqual,
    curNum,
    prevNum,
    setCurNum,
    setOperator,
    setIsEqual,
    setPrevNum,
    result,
    operator,
    setResult,
}) => {
    if (
        targetContent &&
        isEqual &&
        setCurNum &&
        curNum &&
        setIsEqual &&
        setPrevNum &&
        setOperator &&
        prevNum &&
        result &&
        setResult
    ) {
        setOperator(targetContent);
        setIsEqual(false);
        setPrevNum('');
        setOperator(null);
        setResult('0');
        setCurNum(String(parseFloat(result.replace(',', '.')) ** 2));
    }
    if (setCurNum && curNum && !isEqual) {
        setCurNum(String(parseFloat(curNum.replace(',', '.')) ** 2));
    }

    if (
        setCurNum &&
        prevNum &&
        operator &&
        !isEqual &&
        !curNum &&
        result === '0'
    ) {
        setCurNum(String(parseFloat(prevNum.replace(',', '.')) ** 2));
    }
};

export default calcSquaring;
