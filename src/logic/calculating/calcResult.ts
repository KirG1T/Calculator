import { CalcFn } from '../types';
import getRes from './getRes';

const calcResult: CalcFn = ({
    curNum,
    operator,
    prevNum,
    setIsEqual,
    setPrevNum,
    setCurNum,
    setResult,
    result,
}) => {
    if (result === 'Cannot divide by zero' || curNum === 'Invalid input') {
        return;
    }

    let res;
    if (
        setIsEqual &&
        prevNum &&
        operator &&
        curNum &&
        setPrevNum &&
        setCurNum
    ) {
        if (getRes(operator, prevNum, curNum) === 'Cannot divide by zero') {
            setIsEqual(true);
            setPrevNum('');
            setCurNum('');
        }
        res = getRes(operator, prevNum, curNum);
        setIsEqual(true);
    }

    if (prevNum && !curNum && operator && setIsEqual && setCurNum) {
        setIsEqual(true);
        setCurNum(prevNum);
    } else if (setResult && setPrevNum && res) {
        setResult(res);
        setPrevNum(res);
    }
};

export default calcResult;
