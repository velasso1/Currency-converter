'use strict';

export const validation = () => {
    
    const inputFrom = document.querySelector('.currency-value');

    inputFrom.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/gi, '');
    })
}