// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import chairsReducer from './chairReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  products: chairsReducer,
  users: userReducer,
  // Add other reducers as needed
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


