import Vue from 'vue';
import axios from "axios";

export default {
    request(options) {
        return new Promise((resolve, reject) => {
            GLOBAL.network.http({
                ...options,
                success: res => resolve(res),
                error: err => reject(err)
            });
        })
    },
    http(options){
        const _options = Object.assign({}, {
            type: "get",
            url: "",
            data: {},
            params: {},
            success: 0,
            error: 0,
            timeout: void 0
        }, options);

        const axiosInterceptors = axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return Promise.reject(err)
        })

        Vue.$loadingPrompt.open();

        axios({
            method: _options.type,
            url: _options.url,
            data: _options.data,
            params: _options.params,
            timeout: _options.timeout
        }).then(res=> {
            Vue.$loadingPrompt.close();
            const data = res.data;

            axios.interceptors.request.eject(axiosInterceptors);

            _options.success(data);
        }).catch(err => {
            Vue.$loadingPrompt.close();
        })
    }
}