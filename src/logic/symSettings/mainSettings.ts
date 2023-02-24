import { CalcFn } from '../types';

const mainSettings: CalcFn = ({
    targetContent,
    accessZero,
    isEqual,
    operator,
    result,
    curNum,
    prevNum,
    setCurNum,
    setPrevNum,
    setIsEqual,
    setOperator,
    setAccessZero,
    setResult,
}) => {
    if (
        setResult &&
        setIsEqual &&
        setOperator &&
        setPrevNum &&
        setCurNum &&
        curNum === 'Invalid input' &&
        targetContent
    ) {
        setCurNum(targetContent);
        setPrevNum('');
        setOperator(null);
        setIsEqual(false);
        setResult('0');
    } else {
        if (operator === '%' || operator === 'x2' || operator === 'x^') {
            if (setCurNum && setOperator) {
                setCurNum('');
                setOperator(null);
            }
        }

        if (isEqual === true && operator) {
            if (setOperator) {
                setOperator(null);
            }
        }

        // Zero settings
        if (targetContent === '0' && accessZero === false) {
            return;
        }

        if (targetContent !== '0') {
            if (setAccessZero) {
                setAccessZero(true);
            }
        }

        // Comma settings
        if (targetContent === ',' && setIsEqual) {
            if (curNum?.includes(',')) {
                return;
            }

            if (curNum === '0' || curNum === '') {
                if (setCurNum) {
                    setCurNum('0');
                    setIsEqual(false);
                }
            }
        }

        // Plus/minus settings
        if (
            targetContent === '+/-' &&
            setCurNum &&
            setPrevNum &&
            setOperator &&
            setResult &&
            setAccessZero
        ) {
            if (result === 'Cannot divide by zero') {
                return;
            }

            if (
                (!prevNum && !curNum && operator === null && !isEqual) ||
                (prevNum && curNum === '0') ||
                curNum === 'Cannot divide by zero'
            ) {
                setAccessZero(false);
                return;
            }

            if (
                !prevNum &&
                !curNum?.includes('-') &&
                operator === null &&
                (!isEqual || isEqual)
            ) {
                setCurNum(`-${curNum}`);
            } else if (
                !prevNum &&
                curNum?.includes('-') &&
                operator === null &&
                (!isEqual || isEqual)
            ) {
                setCurNum(curNum.slice(1));
            }

            if (prevNum && !curNum?.includes('-') && operator && !isEqual) {
                setCurNum(`-${curNum}`);
            } else if (
                prevNum &&
                curNum?.includes('-') &&
                operator &&
                !isEqual
            ) {
                setCurNum(curNum.slice(1));
            }

            if (prevNum && operator && isEqual && result) {
                if (!curNum?.includes('-')) {
                    setPrevNum('');
                    setCurNum(`-${prevNum}`);
                    setOperator(null);
                    setResult('0');
                }

                if (result?.includes('-')) {
                    setPrevNum('');
                    setCurNum(result.slice(1));
                    setOperator(null);
                    setResult('0');
                }
            }

            if (prevNum && operator && !isEqual && !curNum) {
                setCurNum(`-${prevNum}`);
            }

            if (operator === 'x2' || operator === '%') {
                if (!curNum?.includes('-')) {
                    setCurNum(`-${curNum}`);
                } else {
                    setCurNum(curNum.slice(1));
                }
            }
        }

        if (isEqual) {
            if (
                setCurNum &&
                setPrevNum &&
                setIsEqual &&
                setResult &&
                targetContent !== ',' &&
                targetContent !== '+/-'
            ) {
                setCurNum('');
                setPrevNum('');
                setResult('0');
                setIsEqual(false);
            }
        }

        if (curNum !== '0') {
            if (targetContent !== '+/-' && setCurNum) {
                setCurNum((prevСurNum) => prevСurNum + targetContent);
            }
        } else if (targetContent && setCurNum) {
            setCurNum(
                targetContent !== ',' && curNum === '0' ? targetContent : '0,'
            );
        }
    }
};

export default mainSettings;
