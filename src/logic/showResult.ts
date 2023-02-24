const showResult = (
    res: string,
    cur: string,
    pre: string,
    op: string | null,
    isEqualPush: boolean
): string => {
    if (res === '0') {
        if (pre === '0' && cur && isEqualPush) {
            return res.replace('.', ',').substring(0, 12);
        }
        if (cur === '' && pre === '') {
            return res.replace('.', ',').substring(0, 12);
        }
        if (cur === '') {
            return pre.replace('.', ',').substring(0, 12);
        }
        return cur.replace('.', ',').substring(0, 12);
    }
    if (cur && pre && !isEqualPush) {
        return cur.replace('.', ',').substring(0, 12);
    }
    if ((res === pre && !isEqualPush) || (res === pre && isEqualPush)) {
        return res.replace('.', ',').substring(0, 12);
    }

    if (res && op === null) {
        return res.replace('.', ',').substring(0, 12);
    }
    return '';
};

export default showResult;
