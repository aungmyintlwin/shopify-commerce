import { combineReducers } from '@reduxjs/toolkit'
import appState from './appState'

const rootReducer = combineReducers({
    // counter: counterReducer,
    app: appState,
})

export default rootReducer