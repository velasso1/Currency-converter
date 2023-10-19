'use strict';

import { validation } from './modules/validation'
import { reverseCur } from './modules/reverseCurrency'
import { conversion } from './modules/conversion'
import { animate } from './modules/animate'
import {getCourse} from './modules/getCourse'

validation();
reverseCur();
conversion();
// animate();
getCourse();