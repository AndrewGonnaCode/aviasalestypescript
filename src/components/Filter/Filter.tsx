import classes from './Filter.module.css';
import React, { ChangeEvent } from "react";

interface FilterProps {
    text:string,
    checked:boolean,
    change:(e:ChangeEvent<HTMLInputElement>)=>void
}

const Filter:React.FC<FilterProps> = ({change,text,checked}) => {
    return (
        <div className={classes.Filter}>
            <label className={classes.Checkbox}>{text}
                <input type="checkbox" onChange={change} checked={checked} />
                <span className={classes.Checkmark}></span>
            </label>
        </div>
    )
};

export default Filter;