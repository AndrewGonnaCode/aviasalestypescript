import React from 'react';
import classes from './Filters.module.css';
import {connect} from "react-redux";
import Filter from "../../components/Filter/Filter";
import {changeFilterHandler} from '../../store/actions/tickets';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useAction';
import { FilterType } from '../../types/main';

const Filters:React.FC = () => {

   const {filters} = useTypedSelector(state=>state.tickets)
   const {changeFilterHandler} = useActions()

    const renderFilters = (filters:Array<FilterType>) => {
        return filters.map(filter =>
            <Filter
                key={filter.id}
                text={filter.text}
                change={event => changeFilterHandler(event, filter.id)}
                checked={filter.checked}
            />)
    };
        return (
            <div className={classes.Filters}>
                <div className={classes.Title}>
                    Количество пересадок
                </div>
                <div className={classes.Column}>
                    {
                        renderFilters(filters)
                    }
                </div>
            </div>
            )
    }

 export default Filters
