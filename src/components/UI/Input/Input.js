import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    let inputElement =null;

    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValid && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig} 
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={classes.InputElement} 
                onChange={props.changed}
                {...props.elementConfig} 
                value={props.value}/>;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={classes.InputElement} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} 
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}/>;
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }

    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        {validationError}
    </div>
    );
};

export default Input;