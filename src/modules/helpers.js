'use strict';

export const getValue = async (valute) => {
    let valutes = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    let courseUSD = await valutes.json();

    return courseUSD.Valute[valute].Value;
}

export const getCheckDate = async () => {
    let dating = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    let date = await dating.json();

    return date.Timestamp;
}