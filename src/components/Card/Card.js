import React, { useContext }  from 'react'
import { FormState } from '../../Provider/Provider';
import { Input } from '../Input/Input';
import { Toolbar } from '../toolbar/Toolbar'
import './card.scss';

export const Card = (props) => {
    const {toolbar, toolbarName, handleSubmit, reset, inputs} = useContext(FormState);
    return (
        <div className ="card">
            { toolbar && <Toolbar name={toolbarName} ></Toolbar> }
            <div className="card-area">
                <div className="form">
                {
                    inputs.length > 0 && inputs.map( (input, index) => {
                        return (
                            <div key={index}>
                            <Input {...input}></Input>
                            {input.showError && <span className="error">{input.error}</span>}
                            {input.showError2 && <span className="error">{input.error2}</span>}
                            
                            </div>
                        )

                    })
                }
                    <div className="button-group">
                        <button onClick={handleSubmit}>Save Changes</button>
                        <span>Or</span>
                        <button onClick={reset}>Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
