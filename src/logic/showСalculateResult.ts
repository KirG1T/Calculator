const showСalculateResult = (
    pre: string,
    cur: string,
    op: string,
    isEqualPush: boolean,
    setOperator: (arg: null | string) => void,
    setCurNum: (arg: string | ((prev: string) => string)) => void,
    setPrevNum: (arg: string) => void,
    prevCurRef: React.MutableRefObject<string>,
    prevOperator: React.MutableRefObject<string>
): string => {
    if ((op === 'x2' || op === '%' || op === 'x^') && pre) {
        if (prevOperator !== null) {
            setOperator(prevOperator.current);
        }
    }
    if (pre === '0,' || (pre === '-0,' && op && !isEqualPush)) {
        setPrevNum('0');
        setCurNum('');
    }

    if (pre && op && !cur && !isEqualPush) {
        return `${pre.replace('.', ',').substring(0, 9)} ${op
            .replace('*', '\u00D7')
            .replace('/', '\u00F7')}`;
    }

    if (pre && cur && op && !isEqualPush) {
        return `${pre.replace('.', ',').substring(0, 9)} ${op
            .replace('*', '\u00D7')
            .replace('/', '\u00F7')} ${cur.replace('.', ',').substring(0, 9)}`;
    }

    if (pre && op && cur && isEqualPush) {
        return `${
            prevCurRef.current.slice(-1).replace('.', ',') === ','
                ? prevCurRef.current
                      .slice(0, -1)
                      .replace('.', ',')
                      .substring(0, 9)
                : prevCurRef.current.replace('.', ',').substring(0, 9)
        } ${op.replace('*', '\u00D7').replace('/', '\u00F7')} ${
            cur.slice(-1) === ','
                ? cur.slice(0, -1).replace('.', ',').substring(0, 9)
                : cur.replace('.', ',').substring(0, 9)
        } =`;
    }

    return '';
};

export default showСalculateResult;
