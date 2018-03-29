'use strict';

let rp$ = rp.dom.findEl;

let stateListOptionsAdvanced = {
    itemInputId: 'state',        
    url: 'states?startswith=',
    textField: 'name',
    valueField: 'value',
    size: 8,
    display: 'text',  
    divClass: 'autocompleter',

    onChange: function(value) {
        console.log(`on change; value is ${value}`);
    },
    onBlur: function(text, value) {
        console.log(`on blur; value is ${value}, text is ${text}`);
    }
}

let stateListOptions = {
    itemInputId: 'state',        
    url: 'api/states?startswith=',
    size: 8,
    focusElementIdAfterSearch: 'rate', 
    targetValueElementId: 'rate'
}

let stateList = new rp.AutoComplete(stateListOptions);

