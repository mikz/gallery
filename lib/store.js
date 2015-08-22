import {
  createStore, compose
} from 'redux'

import {
  devTools
} from 'redux-devtools'

import {
  combineReducers
} from 'redux-immutable'

import Immutable from 'immutable'
import * as reducers from './reducers'

const finalCreateStore = compose(
  devTools(),
  createStore
)

const state = Immutable.fromJS({ files: [] })
const app = combineReducers(reducers)

export const store = finalCreateStore(app, state)
export default store
