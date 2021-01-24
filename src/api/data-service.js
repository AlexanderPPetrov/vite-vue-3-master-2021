import networkClient from './network-client';

export default {
    getMovies(params, success, failure) {
        networkClient.get('discover/movie', success, failure, params);
    },
    getGenres(params, success, failure) {
        networkClient.get('genre/movie/list', success, failure, params);
    },
}