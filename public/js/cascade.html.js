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
    onBlur: function(sel) {
        console.log(`on blur; value is ${sel.value}, text is ${sel.text}`);
    }
}

let stateListOptions = {
    itemInputId: 'state',        
    url: 'api/states?startswith=',
    size: 8,
    onItemListBlur: function(text, value) {
        let selectedValue = document.getElementById('state').getAttribute('data-value');   
        //cityList.getList(selectedValue);
        document.getElementById('city').focus();        
    },
    onItemListChange: function(value) {
        console.log(`on change; value is ${value}`);
    },    
    onItemFocus: function() {
        console.log('states textbox focused');
        rp$('#city').value = '';        
    }
}

let stateList = new rp.AutoComplete(stateListOptions);

let cityListOptions = {
    itemInputId: 'city',        
    url: 'api/cities?state=',
    size: 8,
    onItemListBlur: function(sel) {
        console.log(sel);
        document.getElementById('rate').focus();
    },
    onItemFocus: function() {
        console.log('cities textbox focused');
        document.getElementById('state').focus();        
    }    
}

// Make city readonly if you use this version! 
// let cityList = new rp.AutoComplete(cityListOptions);


let cityListOptions2 = {
    itemInputId: 'city',        
    url: 'api/city',
    size: 8,
    onSetQueryString: function(searchValue)  {
        let state = rp$('#state').getAttribute('data-value');
        return `?state=${state}&startswith=${searchValue}`;
    },

    onItemListBlur: function(sel) {
        console.log(sel);
        document.getElementById('rate').focus();
    },
    onItemFocus: function() {
        console.log('cities textbox focused');
    }    
}

let cityList2 = new rp.AutoComplete(cityListOptions2);



