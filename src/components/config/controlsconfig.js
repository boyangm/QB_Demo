export const controlConfig = {
    toolbar: true,
    toolbarName: 'Field Builder',
    inputs: [
        {
        name: 'Label',
        type: 'text',
        error: 'Please Include Label Field'
    },
    {
        name: 'Type',
        type: 'checkbox',
        values:[{label:'Multi-Select', default: true, required: true}]
    },
    {
        name: 'Default Value',
        type: 'dropdownBuilder',
        default: '',
        items: ["apple"],
        error: 'Please Include Options and Default Value',
        error2: 'No Duplicate Values Allowed',

    },
    {
        name: 'Order',
        type: 'select',
        options: [{label:'Display choices in alphabetical', value: true},{label:'Any Order', value: false}],
        
    },
],
}