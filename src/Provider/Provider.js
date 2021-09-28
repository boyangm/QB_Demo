import React, {useState} from 'react';
import { controlConfig } from '../components/config/controlsconfig';
import { FieldService } from '../Services/MockService';

export const FormState = React.createContext();

export const Provider = (props) => {
    const initialState = controlConfig;
    const fieldValues = FieldService.getField(1);
    const {inputs} = initialState
    const [labelValue, setLabelValue] = useState(fieldValues.label);
    const [lableError, setLabelError] = useState(false);
    const [defaultValue, setDefaultValue] = useState(fieldValues.default)
    const [isMultiSelect, setMultiSelect] = useState(fieldValues.required);
    const [choices,setChoices] = useState(fieldValues.choices)
    const [choicesError, setChoicesError] = useState(false);
    const [choicesError2, setChoicesError2] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(fieldValues.displayAlpha)
    const [disabled, setDisabled] = useState(false);

    const validate = () => {
        
        if(choices.length  >= 50){
            setChoicesError(true)
            setDisabled(true)
            return true
        }
        if(labelValue.length <= 0){
            setLabelError(true)
            return true
        }
        if(hasDuplicates()){
            setDisabled(true)
            return true
        }
        setDisabled(false);
        return false;

    } 


    const hasDuplicates = () =>{
        const duplicates = choices.filter((item,index) => choices.indexOf(item) !== index);
        if(duplicates.length > 0){
            setChoicesError2(true);
            return true
        }
        return false

    }

    // reset the form 
    const reset = () => {
        setLabelValue('');
        
        setDefaultValue(inputs[2].default)
        setMultiSelect(inputs[1].values[0].default)
        setChoices(inputs[2].items)
        setSelectedOrder(inputs[3].options[0]);
    }

    // everytime we change state we are going to re validate the form 
    const handleLabelChange = (value) =>{
        setLabelValue(value)
    }

    const handleMultiSelect = (value) =>{
        setMultiSelect(value);
    }

    const changeDefault = (value) =>{
        setDefaultValue(value)
    }
    const changeChoices = (value) =>{
        setChoices(value);
    }

    const setOrder = (value) => {
        setSelectedOrder(value)
    }

    const addItem = () => {
        if(choices.indexOf(defaultValue) > -1){
            setChoicesError2(true)
            return;
        }
        changeChoices([defaultValue, ...choices])
        setDefaultValue('');
    }
    const removeItem = (matchingItem) => {
        const newList = choices.filter(item => {
            return item !== matchingItem
        })
        changeChoices(newList);
    }
    const handleSubmit = () =>{
        if(!validate()){
       
            const newFormConfig = {
                label: labelValue,
                required: isMultiSelect,
                default: defaultValue.length > 0? defaultValue :choices[0], 
                choices: defaultValue.length > 0? [defaultValue, ...choices] : choices[0], 
                displayAplha:selectedOrder
            }
            console.log(newFormConfig)
            FieldService.saveField(newFormConfig);
        }
    }

    const values = {
        ...initialState,
        inputs: [
            {
            ...initialState.inputs[0],
            value: labelValue,
            showError: lableError,
            onChange: handleLabelChange
        },
        {
            ...initialState.inputs[1],
            values:[{label:'Multi-Select', value:isMultiSelect, default: true, required: true, onChange: handleMultiSelect}]
        },
        {
            ...initialState.inputs[2],
            default: defaultValue,
            items:choices,
            onChangeDefault: changeDefault,
            onChange: changeChoices,
            addItem,
            removeItem,
            showError: choicesError,
            showError2:choicesError2
        },
        {
            ...initialState.inputs[3],
            value: selectedOrder,
            onChange: setOrder
        },
    ],
    handleSubmit,
    reset,
    }




    return (
        <FormState.Provider value={values} >
            {props.children}
        </FormState.Provider>
    )
} 