const getRes = (
    opType: string,
    prevNum: string,
    currentNum: string
): string => {
    let res;
    switch (opType) {
        case '/':
            if (
                currentNum === '0' ||
                currentNum === '0,' ||
                currentNum === '-0,'
            ) {
                return 'Error';
            }
            res = String(
                Number(prevNum.replace(',', '.')) /
                    Number(currentNum.replace(',', '.'))
            );
            break;

        case '+':
            res = String(
                Number(prevNum.replace(',', '.')) +
                    Number(currentNum.replace(',', '.'))
            );
            break;

        case '*':
            res = String(
                Number(prevNum.replace(',', '.')) *
                    Number(currentNum.replace(',', '.'))
            );
            break;

        case '-':
            res = String(
                Number(prevNum.replace(',', '.')) -
                    Number(currentNum.replace(',', '.'))
            );
            break;

        default:
            return '';
    }

    return String(parseFloat(Number(res).toFixed(15)));
};

export default getRes;
