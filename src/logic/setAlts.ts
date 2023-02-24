import { SignType } from './types';

const setAlts = (sym: keyof SignType): string => {
    const alts: SignType = {
        C: 'Reset',
        '/': 'Division Sign',
        x2: 'Square Sign',
        '%': 'Percent Sign',
        'x^': 'Root Sign',
        '*': 'Multiply Sign',
        '-': 'Minus Sign',
        '+': 'Plus Sign',
        '+/-': 'Plus Minus Sign',
        ',': 'Comma Sign',
        '=': 'Equal Sign',
    };
    return alts[sym];
};

export default setAlts;
