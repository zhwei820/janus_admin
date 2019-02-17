// const nodeEnv = process.env.VUE_APP_API
const MAIN_CONFIG = window.MAIN_CONFIG

// API Config
export const BACK_API =  MAIN_CONFIG === undefined ? 'http://localhost:8081': MAIN_CONFIG.gateway.janus_admin_api

// token
export const TOKEN_NAME = 'JANUS_TOKEN'
export const USER_INFO = 'JANUS_USER_INFO'

