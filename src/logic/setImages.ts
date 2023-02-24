import { SignType } from './types';

import divisionSign from '../assets/icons/division-sign.svg';
import multiplySign from '../assets/icons/multiply-sign.svg';
import minusSign from '../assets/icons/minus-sign.svg';
import plusSign from '../assets/icons/plus-sign.svg';
import equalSign from '../assets/icons/equal-sign.svg';
import percentSign from '../assets/icons/percent-sign.svg';
import commaSign from '../assets/icons/comma-sign.svg';
import plusMinusSign from '../assets/icons/plus-minus-sign.svg';
import squareSign from '../assets/icons/square-sign.svg';
import rootSign from '../assets/icons/root-sign.svg';
import reset from '../assets/icons/reset.svg';

const setImages = (sym: keyof SignType): string => {
    const signs: SignType = {
        C: reset,
        '/': divisionSign,
        x2: squareSign,
        '%': percentSign,
        'x^': rootSign,
        '*': multiplySign,
        '-': minusSign,
        '+': plusSign,
        '+/-': plusMinusSign,
        ',': commaSign,
        '=': equalSign,
    };
    return signs[sym];
};

export default setImages;
