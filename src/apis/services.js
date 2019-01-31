import request from './request'

export const fetchService = (params = {}) => request.get('/apis', { params })

// export const Apis = payload => request.get('/apis/', payload)
