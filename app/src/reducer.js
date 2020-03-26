import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from '@drizzle/store' //수정
import customReducer from "./reducers/customReducer"

const reducer = combineReducers({
    customReducer: customReducer,
    routing: routerReducer,
    ...drizzleReducers
})

export default reducer;