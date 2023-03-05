'use strict';

import { getValue, checkDate } from './helpers';

export const conversion = () => {

    const converterAria = document.querySelector('.converter-aria');

    let convertible = document.querySelector('.currency-value');
    let result = document.querySelector('.currency-value-output');
    let selectInput = document.querySelector('.currency');
    let selectOutput = document.querySelector('.currency-output');
    let changeBtn = document.querySelector('.converter-icon');
    let actualDate = document.querySelector('.actual_date');

    const refreshDate = async () => {
        const date = await checkDate();
        actualDate.innerText = `${date.day}.${date.month}.${date.year}`;
    }

    const convert = async () => {
        let inputIndex = selectInput.selectedIndex;
        let outputIndex = selectOutput.selectedIndex;

        let inputValue = await getValue(`${selectInput[inputIndex].getAttribute('value')}`);
        let outputValue = await getValue(`${selectOutput[outputIndex].getAttribute('value')}`);

        switch (true) {
            case inputIndex === outputIndex:
                result.value = convertible.value;
                return;

            case outputIndex === 0:
                result.value = (convertible.value * inputValue).toFixed(2);
                return;

            case inputIndex === 0:
                result.value = (convertible.value / outputValue).toFixed(2);
                return;

            case outputIndex > 0:
                result.value = ((convertible.value * inputValue) / outputValue).toFixed(2);
                return;
        }
    }
    
    converterAria.addEventListener('click', (e) => {
        if (e.target === changeBtn || e.target === selectInput || e.target === selectOutput) {
            convert();
        }
    })

    convertible.addEventListener('input', convert);

    refreshDate();
};