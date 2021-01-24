import mutations from './mutation-types';

export default {
    [mutations.SET_APPLES](state, value){
        state.apples = value;
    },
    [mutations.SET_MOVIES](state, arrayOfMovies){
        state.movies = arrayOfMovies;
    },
    [mutations.SET_GENRES](state, genres){
        state.genres = genres;
    },
}