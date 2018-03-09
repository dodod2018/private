import common from './common'
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../util/logger.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default  new Vuex.Store({
    modules:{
        common
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})