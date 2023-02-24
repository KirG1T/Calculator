import { CalcFn } from '../types';

const calcPercent: CalcFn = ({
    targetContent,
    prevNum,
    curNum,
    setCurNum,
    setOperator,
}) => {
    if (prevNum) {
        if (setCurNum && curNum) {
            setCurNum(
                String(
                    parseFloat(
                        (
                            (Number(curNum.replace(',', '.')) / 100) *
                            Number(prevNum.replace(',', '.'))
                        ).toFixed(4)
                    )
                )
            );
        }
    } else if (setCurNum && curNum) {
        setCurNum(
            String(
                parseFloat((Number(curNum.replace(',', '.')) / 100).toFixed(4))
            )
        );

        if (setOperator && targetContent) {
            setOperator(targetContent);
        }
    }

    if (curNum?.includes('-') && setCurNum) {
        setCurNum('0');
    }
};

export default calcPercent;
