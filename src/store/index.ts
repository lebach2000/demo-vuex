import Vue from 'vue';
import Vuex from 'vuex';
import {moduleA} from './modeuleA';
import {User} from './modeuleB';

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        a: moduleA,
        b: User
    }
})

