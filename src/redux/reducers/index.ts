import { combineReducers } from '@reduxjs/toolkit'
import appState from './appState'
import userState from './userState'

const rootReducer = combineReducers({
    app: appState,
    user: userState,
})

export default rootReducer