'use strict';

export const getValue = async (valute) => {
    let valutes = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    let course = await valutes.json();

    if (valute === 'RUB') {
       return 1;
    }

    return course.Valute[valute].Value;
}

export const checkDate = async () => {
    let dating = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    let date = await dating.json();

    let year = date.Timestamp.substr(0, 4);
    let month = date.Timestamp.substr(5, 2);
    let day = date.Timestamp.substr(8, 2);

    return { year, month, day };
}