import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import ProductsReducer from './reducers/productReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  products:ProductsReducer
})

const middleware = [thunk];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))


export default store
