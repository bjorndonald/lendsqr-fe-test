import axios from 'axios'
import ENV from '../constants/env'

export const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(ENV.API_URL + '/users')
            resolve(res)
        } catch (err) {
            reject(err)
        }
    })
}

export const getUser = (id: string | undefined) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(ENV.API_URL + '/user/' + id)
            resolve(res)
        } catch (err) {
            reject(err)
        }
    })
}