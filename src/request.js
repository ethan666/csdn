import axios from 'axios'
import qs from 'querystring'

export const postParam = '/home/activate'

export const checkFile = '/home/downloadComplete'

export const downloadFile = '/home/returnfile'

export function sendRequest(url, data){
    return axios({
        method: 'post',
        url,
        data
    })
}

export function get(url, param){
    const data = qs.stringify(param)
    return axios({
        method: 'get',
        url,
        data
    })
}