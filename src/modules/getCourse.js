'use strict';

import { getValue } from './helpers';

export const getCourse = () => {

    window.addEventListener('load', async (valute) => {
        let course = await getValue(valute);

        return course;
    })

}

