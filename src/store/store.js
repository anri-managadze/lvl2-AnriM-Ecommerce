import { createStore,applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const middleware=[thunkMiddleware];
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),

));



export default store