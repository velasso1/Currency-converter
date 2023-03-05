'use strict';

import { getValue, getCheckDate} from './helpers';

export const conversion = () => {

    const converterAria = document.querySelector('.converter-aria');

    // let btn = document.querySelector('.convert-btn');
    let convertible = document.querySelector('.currency-value');
    let result = document.querySelector('.currency-value-output');
    let selectInput = document.querySelector('.currency');
    let selectOutput = document.querySelector('.currency-output');
    let changeBtn = document.querySelector('.converter-icon');
    let actualDate = document.querySelector('.actually');

    // const refreshDate = () => {
        
    // }

    const convert = async (e) => {
        let inputIndex = selectInput.selectedIndex;
        let outputIndex = selectOutput.selectedIndex;

        if (inputIndex === outputIndex) {
            result.value = convertible.value;
            return;
        }

        if (outputIndex === 0) {
            result.value = convertible.value * (await getValue(`${selectInput[inputIndex].getAttribute('value')}`));
            return;
        }

        if (inputIndex === 0) {
            result.value = convertible.value / await getValue(`${selectOutput[outputIndex].getAttribute('value')}`);
            return;
        }

        if (outputIndex > 0) {
            result.value = 
            (convertible.value * await getValue(`${selectInput[inputIndex].getAttribute('value')}`)) / 
            await getValue(`${selectOutput[outputIndex].getAttribute('value')}`);
            return;
        }
    }
    
    converterAria.addEventListener('click', (e) => {
        if (e.target === changeBtn || 
            e.target === selectInput || 
            e.target === selectOutput) {
            convert();
        }
    })

    changeBtn.addEventListener('click', convert);
    convertible.addEventListener('input', convert);


    getCheckDate();
};