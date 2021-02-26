import {combineReducers} from 'redux';
import tickets from './tickets';

export const rootReducer = combineReducers({
 tickets
});

export type RootState = ReturnType<typeof rootReducer>