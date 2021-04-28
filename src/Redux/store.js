import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduce from './reduce'
const store=createStore(reduce,composeWithDevTools())
export default store