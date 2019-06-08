import axios from 'axios'
import qs from 'qs'
import { requestServer } from './env.js'

export const postParam = '/home/activate'

export const checkFile = '/home/downloadComplete'

export const historyReq = '/home/HistoryDown'

const downloadFile = '/home/getdownurl'

export function sendRequest(url, data){
    return axios({
        method: 'post',
        url: requestServer + url,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
    })
}

export function getFileUrl(data){
    const params = qs.stringify(data)
    return axios({
        method: 'get',
        url: requestServer + downloadFile + '?' + params
    })
}