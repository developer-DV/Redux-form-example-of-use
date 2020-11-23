import { reducer as formReducer } from 'redux-form'
const { createStore, combineReducers } = require("redux")


const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store