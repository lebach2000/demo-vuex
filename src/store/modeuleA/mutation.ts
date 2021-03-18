import {INCREMENT} from "./mutation-types";
import {DECREASE} from "./mutation-types";

export const mutations = {
    [INCREMENT](state: any) {
        state.count++;
    },

    [DECREASE](state: any) {
        state.count--;
    }
}