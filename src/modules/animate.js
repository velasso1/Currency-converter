'use strict';

import { conversion } from "./conversion";

export const animate = () => {
    const inputValue = document.querySelector('.currency-value');
    const outputValue = document.querySelector('.currency-value-output');
    const converterAria = document.querySelector('.section');

    const changeValue = () => {

        switch (true) {
            case inputValue.value == 1:
                inputValue.value = 12;
                break;
            case inputValue.value == 12:
                inputValue.value = 123;
                break;
            case inputValue.value == 123:
                inputValue.value = '';
                break;
            case inputValue.value == '':
                inputValue.value = 1;
        }

        conversion();
    }

    changeValue();
    let timer = setInterval(changeValue, 1200);

    converterAria.addEventListener('mouseenter', () => {
        clearInterval(timer);

        inputValue.value = '';
        outputValue.value = '';
    })

    converterAria.addEventListener('mouseleave', () => {
        timer = setInterval(changeValue, 1200);
    })

};