import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as MainActionCreators from '../store/actions/tickets'


export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(MainActionCreators, dispatch)
}