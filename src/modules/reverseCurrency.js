'use strict';

export const reverseCur = () => {
    const reverseBtn = document.querySelector('.converter-icon');
    const selectIn = document.querySelector('.currency');
    const selectOutput = document.querySelector('.currency-output');

    reverseBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let cache = selectIn.selectedIndex;
        selectIn.selectedIndex = selectOutput.selectedIndex;
        selectOutput.selectedIndex = cache;
    })
}