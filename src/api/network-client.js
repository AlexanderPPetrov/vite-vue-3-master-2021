import axios from 'axios';
import constants from '../constants';
import { store } from '../store';
import mutations from '../store/mutation-types';

export default {
    get(url, actionType, params, success, failure) {
        this.request({
            method: 'get',
            url,
            actionType,
            params,
            success,
            failure,
        });
    },
    post(url, actionType, params, success, failure) {
        this.request({
            method: 'post',
            url,
            actionType,
            params,
            success,
            failure,
        });
    },
    //TODO refactor put and delete...
    put(url, data, success, failure) {
        this.request({
            method: 'put',
            url,
            data,
            success,
            failure,
        });
    },
    delete(url, success, failure) {
        this.request({
            method: 'delete',
            url,
            success,
            failure,
        });
    },

    request: (options = {}) => {
        if (!options.url) {
            console.log('URL is required');
            return;
        }

        if (!options.actionType) {
            console.log('actionType is required');
            return;
        }
        let baseURL = constants.baseUrl;
        if(options.params.external){
            baseURL = '';
        }
        const data = Object.assign({}, {
            method: 'get',
            baseURL: baseURL,
        }, options);

        if(!options.params.external){
            data.params = Object.assign(options.params, {api_key: constants.apiKey});
        }
        
        store.commit(mutations.ADD_ACTIVE_ACTION, options.actionType);
        axios(data)
            .then((response) => {
                if (options.success) {
                    options.success(response.data);
                }
            })
            .catch((error) => {
                if (options.failure) {
                    options.failure(error);
                }
            })
            .then(()=> {
                store.commit(mutations.REMOVE_ACTIVE_ACTION, options.actionType);
            })
    },
};