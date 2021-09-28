import React from 'react';
import './DropdownBuilder.scss';

const DropdownBuilder = ({name, type, items,onChange, ...props}) => {
    const handleChange = (event) => { 
        const {value} = event.target;
        props.onChangeDefault(value);
    }

    return (
        < div className="builder-field" >
            <div className="input dropdownBuilder">
                <label htmlFor={name}>{name}</label>
                <div className="dropdown-field">
                    <input className="qbInput" type={type} onChange={handleChange} value={props.default}/>
                    <button onClick={props.addItem}>➕</button>
                </div>
            </div>
            <div className="input dropdownBuilder">
                <label htmlFor="choices">Choices</label>
                <ul className="choices-area">
                    {
                        items.map((item, index) => { 
                            return (
                            <li key={index}>
                                <span>{item}</span>
                                <button onClick={() => props.removeItem(item)}>remove</button>
                            </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default DropdownBuilder
