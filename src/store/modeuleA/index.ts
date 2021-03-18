import {mutations} from './mutation';
import {actions} from './action';


export const moduleA = {
    state: {
        count: 0
    },
    mutations: Object.assign({}, mutations),
    actions: Object.assign({}, actions),
    getters: {
        getCounter: (state: any) => {
            return state.count
        }
    },
}
