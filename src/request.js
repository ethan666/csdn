import axios from 'axios'
import qs from 'qs'
import { requestServer } from './env.js'

export const postParam = '/home/activate'

export const checkFile = '/home/downloadComplete'

export const downloadFile = '/home/returnfile'

export const historyReq = '/home/HistoryDown'

export function sendRequest(url, data){
    return axios({
        method: 'post',
        url: requestServer + url,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
    })
}
