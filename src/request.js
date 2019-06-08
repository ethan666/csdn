import axios from 'axios'
import qs from 'qs'
import { requestServer } from './env.js'

const activateApi = '/home/activate'

const downloadCompleteApi = '/home/downloadComplete'

const historyApi = '/home/HistoryDown'

const downloadFile = '/home/getdownurl'


export function activate(data){
    const params = qs.stringify(data) 
    return axios({
        method: 'post',
        url: requestServer + activateApi,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: params
    })
}

export function checkDownloadComplete(data){
    const params = qs.stringify(data) 
    return axios({
        method: 'post',
        url: requestServer + downloadCompleteApi,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: params
    })
}

export function getFileUrl(id){
    // const params = qs.stringify(data)
    return axios({
        method: 'get',
        url: requestServer + downloadFile + '/' + id
    })
}

export function historyDown(data){
    const params = qs.stringify(data) 
    return axios({
        method: 'post',
        url: requestServer + historyApi,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: params
    })
}
