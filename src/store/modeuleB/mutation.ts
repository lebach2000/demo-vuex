import {ADD} from "./mutation-types";
import {DELETE} from "./mutation-types";
import {GETALL} from "./mutation-types";


const user1 = {id: 10, name: 'asdasd'};

export const mutations = {
    [GETALL](state: any, users: any) {
        state.user = users
    },

    [ADD](state: any) {
        state.user.push(user1)
    },

    [DELETE](state: any) {
        state.user.shift(user1)
    }
}