'use strict';

let rp$ = rp.dom.findEl;

let stateListOptions = {
    itemInputId: 'state',        
    url: 'api/states?startswith=',
    incrementalSearch: true,
    size: 8,
    onItemListBlur: function(text, value) {
        let selectedValue = document.getElementById('state').getAttribute('data-value');   
        document.getElementById('city').focus();        
    },
    onItemFocus: function() {
        //let t = this;
        //rp.AutoComplete.clearElement('city');
        this.clearInputItem();
    }
}

let stateList = new rp.AutoComplete(stateListOptions);

let cityListOptions = {
    itemInputId: 'city',        
    url: 'api/city',
    size: 8,
    incrementalSearch: true,
    onSetQueryString: function(searchValue)  {
        let state = rp$('#state').getAttribute('data-value');
        return `?state=${state}&startswith=${searchValue}`;
    },
    onItemListBlur: function(sel) {
        console.log(sel);
        document.getElementById('rate').focus();
    },
    onItemFocus: function() {
        let state = rp$('#state').getAttribute('data-value');
        if (state === undefined || state === '') {
            rp$('#state').focus();
        }
    }    
}

let cityList = new rp.AutoComplete(cityListOptions);



