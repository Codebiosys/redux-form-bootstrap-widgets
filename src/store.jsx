import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from 'reducers';

export default () => createStore(
  combineReducers({
    app: reducer,
    form: formReducer,
  }),
  {}, // initial state
  compose(
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f), // eslint-disable-line
);
