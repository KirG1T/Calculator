import { CalcFn } from '../types';

const calcSquareRoot: CalcFn = ({
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
        setCurNum(
            String(
                Math.sqrt(parseFloat(result.replace(',', '.').replace('-', '')))
            )
        );
    }

    if (setCurNum && curNum && !isEqual) {
        if (curNum?.includes('-')) {
            setCurNum('Invalid input');
        } else {
            setCurNum(
                String(
                    Math.sqrt(
                        parseFloat(curNum.replace(',', '.').replace('-', ''))
                    )
                )
            );
        }
    }

    if (
        setCurNum &&
        prevNum &&
        operator &&
        !isEqual &&
        !curNum &&
        result === '0'
    ) {
        setCurNum(
            String(
                Math.sqrt(
                    parseFloat(prevNum.replace(',', '.').replace('-', ''))
                )
            )
        );
    }
};

export default calcSquareRoot;
