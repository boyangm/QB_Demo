import React from 'react'
import DropdownBuilder from '../DropdownBuilder.js/DropdownBuilder';
import './Input.scss';
export const Input = ({name,type, onChange, value, ...props}) => {
    const handleChange = (event) => {
            onChange(event.target.value);
    }

    const handleCheckBoxChange = (event, index) =>{
        props.values[index].onChange(event.target.checked);
    }

    return (
        <div className="flex-row-input">
            {type === 'text' && (
                <div className={`input ${type}`}>
                    <label htmlFor={name}>{name}</label>
                    <input className="qbInput" name={name} type={type} onChange={handleChange} value={value}/>
                </div>

            )}
            {type === 'checkbox' && (
                <div className={`input ${type}`}>
                    <label htmlFor={name}>{name}</label>
                    {props.values.map((value, index) => (
                        <div className="checkbox-field" key={value}>
                            <label htmlFor={value.label}>{value.label}</label>
                            <div className="container">
                                <input type={type} name= {value.label} onChange={(event) => handleCheckBoxChange(event,index)} checked={value.value}/>
                                {value.required && <span className="checkbox-required-label">A Value is Required</span>}
                            </div>
                        </div>
                    ))}
                </div>

            )}
            {type === 'dropdownBuilder' && ( <DropdownBuilder name={name} onChange={onChange} {...props}/>)}
            {
                type === 'select' && (
                    <div className={`input ${type}`}>
                    <label htmlFor={name}>{name}</label>
                    <label>
                        <select  value={value} onChange={handleChange} name={name}>
                            {
                                props.options.map( (option, index) => {

                                    return (<option key={index} value={option.value}>{option.label}</option>)
                                })
                            }
                        </select>
                    </label>
                    </div>
                )
            }
        </div>
    )
}
