import React, {Component} from 'react';
import classes from './Tabs.module.css';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useAction';
import { TabType } from '../../types/main';

const Tabs:React.FC = () => {

    const {tabs} = useTypedSelector(state => state.tickets)
    const {tabsChange} = useActions()

    const renderTabs = (tabs:Array<TabType>) => {
        return tabs.map(tab => (
            <div
                key={tab.id}
                className={`${classes.Element} ${tab.checked ? classes.Checked : ''}`}
                onClick={() => tabsChange(tab.id)}
            >
                <p>{tab.text}</p>
            </div>
        ))
    };
        return (
            <div className={classes.Tabs}>
                {
                    renderTabs(tabs)
                }
            </div>
            )
    }

    export default Tabs