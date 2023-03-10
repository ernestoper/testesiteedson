import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers'
import { composeWithDevTools } from '@redux-devtools/extension';

const inicialState = {};

const middleware = [thunk];

const store = createStore(

    rootReducer,
    inicialState,
    // Descomentar em deploy
    //applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))


)

export default store