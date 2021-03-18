import {ADD} from './mutation-types';
import {DELETE} from './mutation-types';
import {GETALL} from './mutation-types';
import axios from "axios";

export const actions = {

    get_all({commit}: any) {
        axios.get('https://us-central1-edumaster-lt.cloudfunctions.net/Course/list-course')
            .then(res => {
                commit(GETALL, res.data)
            }).catch(err => {
            console.log(err)
        });
    },

    add({commit}: any) {
        commit(ADD)
    },

    delete({commit}: any) {
        commit(DELETE)
    }
}