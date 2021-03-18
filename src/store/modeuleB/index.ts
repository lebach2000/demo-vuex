import {mutations} from './mutation';
import {actions} from './action';

export const User = {
    state: {
        user: []
    },
    mutations: Object.assign({}, mutations),
    actions: Object.assign({}, actions),
    getters: {
        getUser: (state: any) => {
            return state.user;
        }
    }
}