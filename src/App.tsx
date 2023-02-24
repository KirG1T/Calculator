import { useState, useEffect, useRef } from 'react';
import { SignType } from './logic/types';
import setImages from './logic/setImages';
import setAlts from './logic/setAlts';
import {
    mainSettings,
    operatorSelection,
    reset,
    calcResult,
    calcPercent,
    calcSquaring,
    calcSquareRoot,
    showResult,
    showСalculateResult,
} from './logic';

const CALC_SYMBOLS: (keyof SignType)[] = [
    'C',
    'x2',
    'x^',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    ',',
    '=',
];

const App: React.FC = () => {
    const [prevNum, setPrevNum] = useState('');
    const [curNum, setCurNum] = useState('');
    const [operator, setOperator] = useState<string | null>(null);
    const [isEqual, setIsEqual] = useState(false);
    const [result, setResult] = useState('0');
    const [accessZero, setAccessZero] = useState(false);

    const prevCurRef = useRef('');
    const prevOperator = useRef('');
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, []);

    useEffect(() => {
        function handleBlur() {
            if (buttonRef.current) {
                buttonRef.current.focus();
            }
        }

        if (buttonRef.current) {
            buttonRef.current.addEventListener('blur', handleBlur);
        }

        const currentButtonRef = buttonRef.current;

        return () => {
            if (currentButtonRef) {
                currentButtonRef.removeEventListener('blur', handleBlur);
            }
        };
    }, []);

    useEffect(() => {
        prevCurRef.current = prevNum;
        if (operator) {
            prevOperator.current = operator;
        }
    }, [prevNum, operator]);

    const deleteLastSymb = () => {
        if (curNum) {
            setCurNum(curNum.slice(0, -1));
        }
    };

    const eventHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ): void => {
        const { key } = e as React.KeyboardEvent<HTMLButtonElement>;

        let targetContent;
        if (e.type === 'keydown') {
            switch (key) {
                case ' ':
                    e.preventDefault();
                    break;
                case 'Enter':
                    e.preventDefault();
                    targetContent = '=';
                    break;
                case '+':
                    targetContent = '+';
                    break;
                case '-':
                    targetContent = '-';
                    break;
                case '*':
                    targetContent = '*';
                    break;
                case '/':
                    targetContent = '/';
                    break;
                case 'Delete':
                    targetContent = 'C';
                    break;
                case 'Backspace':
                    deleteLastSymb();
                    break;
                case '.':
                    targetContent = ',';
                    break;
                case ',':
                    targetContent = ',';
                    break;

                default:
                    if (!Number.isNaN(Number(key))) {
                        targetContent = key;
                    }
                    break;
            }
        } else if (e.type === 'click') {
            targetContent = (e.target as HTMLButtonElement).dataset.value;

            if (e.target instanceof Element && e.target.tagName === 'IMG') {
                targetContent = e.target.parentElement?.dataset.value;
            }
        }

        if (targetContent) {
            switch (targetContent) {
                case 'C':
                    reset({
                        setPrevNum,
                        setCurNum,
                        setOperator,
                        setIsEqual,
                        setAccessZero,
                        setResult,
                    });
                    break;
                case '*':
                case '/':
                case '+':
                case '-':
                    operatorSelection({
                        targetContent,
                        curNum,
                        prevNum,
                        operator,
                        accessZero,
                        isEqual,
                        setCurNum,
                        setPrevNum,
                        setIsEqual,
                        setOperator,
                    });
                    break;

                case '=':
                    calcResult({
                        curNum,
                        operator,
                        result,
                        prevNum,
                        setIsEqual,
                        setCurNum,
                        setPrevNum,
                        setResult,
                    });
                    break;

                case '%':
                    calcPercent({
                        targetContent,
                        prevNum,
                        curNum,
                        setCurNum,
                        setOperator,
                    });
                    break;

                case 'x2':
                    calcSquaring({
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
                    });
                    break;

                case 'x^':
                    calcSquareRoot({
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
                    });
                    break;

                default:
                    mainSettings({
                        targetContent,
                        accessZero,
                        isEqual,
                        result,
                        operator,
                        curNum,
                        prevNum,
                        setCurNum,
                        setPrevNum,
                        setOperator,
                        setIsEqual,
                        setAccessZero,
                        setResult,
                    });
                    break;
            }
        }
    };

    return (
        <div className="wrapper">
            <div className="calculating">
                {operator
                    ? showСalculateResult(
                          prevNum,
                          curNum,
                          operator,
                          isEqual,
                          setOperator,
                          setCurNum,
                          setPrevNum,
                          prevCurRef,
                          prevOperator
                      )
                    : ''}
            </div>
            <div className="result">
                {showResult(result, curNum, prevNum, operator, isEqual)}
            </div>
            <div className="buttons-area">
                {CALC_SYMBOLS.map((sym) => (
                    <button
                        type="button"
                        ref={buttonRef}
                        onClick={eventHandler}
                        onKeyDown={eventHandler}
                        key={sym}
                        data-value={sym}
                    >
                        {Number.isNaN(+sym) ? (
                            <img src={setImages(sym)} alt={setAlts(sym)} />
                        ) : (
                            sym
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default App;
