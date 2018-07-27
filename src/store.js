import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk]

//need to spread middleware because we put it inside an array above
const store = createStore(
  rootReducer,
  initialState(
      applyMiddleware(...middleware),
      window._REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
