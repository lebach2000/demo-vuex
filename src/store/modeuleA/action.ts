import {INCREMENT} from './mutation-types';
import {DECREASE} from './mutation-types';

export const actions = {
    increment({commit}: any) {
        commit(INCREMENT)
    },

    decrease({commit}: any) {
        commit(DECREASE)
    }
}