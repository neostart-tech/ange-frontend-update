import config from '../config';
import * as axios from 'axios';

const base_url = config.app_local
    ? config.app_api_dev_url
    : config.app_api_deploy_url;


export default defineNuxtPlugin(() => {
    

    axios.default.defaults.baseURL = base_url;

    return {
        provide: {
            axios: axios.default
        }
    }
}) 