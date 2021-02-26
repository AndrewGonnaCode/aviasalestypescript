
import axios from "axios";
import { ChangeEvent, Dispatch } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { MainAction, MainActionTypes } from "../../types/main";
import { RootState } from "../reducers/rootReducer";


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export function changeSeacrhId():AppThunk {
    return async (dispatch) => {
        let axiosData = await axios.get('https://front-test.beta.aviasales.ru/search');
        let {searchId} = axiosData.data;
        dispatch({type: MainActionTypes.CHANGE_SEARCHID, payload: searchId});
    }
}

export function subscribe(searchId:number):AppThunk {
    const s = async (dispatch:Dispatch<MainAction>)=> {
        try {
            let response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
            const data = response.data;

            if (data.stop) {
                dispatch({type: MainActionTypes.CHANGE_TICKETS, payload: data.tickets});
                return;
            }
            s(dispatch);
        } catch (e) {
            const newSearchId = await axios.get(`https://front-test.beta.aviasales.ru/search`);
            dispatch({type: MainActionTypes.CHANGE_SEARCHID, payload: newSearchId.data.searchId});
        }
    };
    return s;
}

export function changeFilterHandler(event:ChangeEvent<HTMLInputElement>, id:number):AppThunk {
    return async (dispatch, getState) => {
        let filters = getState().tickets.filters;
        filters.forEach(filter => filter.id === id ? filter.checked = event.target.checked : null);
        if (!filters.find(filter => filter.checked)) {
            filters[0].checked = true;
        }
        console.log('filter');
        dispatch({type:MainActionTypes.CHANGE_FIlTER, payload: filters});
    }
}

export function tabsChange(id:number):AppThunk {
    return (dispatch, getState) => {
        const tabs = [...getState().tickets.tabs];
        tabs.forEach(tab => tab.checked = false);
        tabs.forEach(tab => tab.id === id ? tab.checked = true : null);
        dispatch({
            type: MainActionTypes.CHANGE_TABS,
            tabs
        })
    }
}
