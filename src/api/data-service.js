import networkClient from './network-client';

export default {
    getMovies(actionType, params, success, failure) {
        networkClient.get('discover/movie', actionType, params, success, failure);
    },
    getGenres(actionType, params, success, failure) {
        networkClient.get('genre/movie/list', actionType, params, success, failure);
    },
}