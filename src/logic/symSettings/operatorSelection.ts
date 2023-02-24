import getRes from '../calculating/getRes';
import { CalcFn } from '../types';

const operatorSelection: CalcFn = ({
    targetContent,
    prevNum,
    isEqual,
    curNum,
    accessZero,
    operator,
    setCurNum,
    setPrevNum,
    setIsEqual,
    setOperator,
}) => {
    if (setCurNum && setPrevNum && setOperator && setIsEqual) {
        if (accessZero === false) {
            return;
        }
        if (
            (operator === null ||
                operator === 'x2' ||
                operator === '%' ||
                operator === 'x^') &&
            prevNum === '' &&
            curNum &&
            targetContent
        ) {
            setCurNum('');
            setPrevNum(curNum);
            setOperator(targetContent);
            setIsEqual(false);
        } else if (curNum === '' && operator && targetContent) {
            setOperator(targetContent);
        }

        if (
            (isEqual && targetContent && curNum) ||
            (!isEqual && prevNum === '0,')
        ) {
            if (curNum && targetContent) {
                setCurNum('');
                setPrevNum(curNum);
                setOperator(targetContent);
                setIsEqual(false);
            }
        }

        if ((curNum === '0,' || curNum === '-0,') && targetContent) {
            setCurNum('0');
        }

        if (!isEqual && targetContent && curNum && prevNum && operator) {
            const res = getRes(operator, prevNum, curNum);
            setCurNum('');
            setPrevNum(res);
            setOperator(targetContent);
        } else if (isEqual && targetContent && curNum && prevNum && operator) {
            setPrevNum(prevNum);
        }
    }
};

export default operatorSelection;
