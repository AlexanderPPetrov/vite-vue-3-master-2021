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
    [mutations.ADD_ACTIVE_ACTION](state, actionType){
        state.activeActions.push(actionType);
    },
    [mutations.REMOVE_ACTIVE_ACTION](state, actionType){
        state.activeActions = state.activeActions.filter(action => action !== actionType)
    },
}