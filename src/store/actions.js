import actions from './action-types';
import mutations from './mutation-types';
import dataService from '../api/data-service';

export default {
    [actions.GET_APPLES]({commit}, params){
        console.log(params);
        setTimeout(() => {
            commit(mutations.SET_APPLES, 5);
        }, 1000)
    },
    [actions.GET_MOVIES]({commit}, params){
        dataService.getMovies(
            {
                include_adult: false,
                page: 1,
            },
            (response) => {
                commit(mutations.SET_MOVIES, response.results);
            }
        )
    },
    [actions.GET_GENRES]({commit}, params){
        dataService.getGenres(
            {
                language: 'bg-BG',
            },
            (response) => {
                commit(mutations.SET_GENRES, response.genres);
            }
        )
    },

}