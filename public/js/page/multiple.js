'use strict';

let rp$ = rp.dom.findEl;

let stateListOptions = {
    itemInputId: 'state',        
    url: 'api/states?startswith=',
    size: 8,
    focusElementIdAfterSearch: 'state', 
    targetValueElementId: 'rate'
}



//let stateList = new rp.AutoComplete(stateListOptions);

let options = [];

for (let i = 0; i < 3; i++) {
    let o = new Object();
    Object.assign(o, stateListOptions);
    o.itemInputId = o.itemInputId + i;
    o.targetValueElementId = o.targetValueElementId + i;

    if (i !== 2) {
        o.focusElementIdAfterSearch = o.focusElementIdAfterSearch + (i + 1);
    }
    else {
        o.focusElementIdAfterSearch = 'last-button';
    }        

    //options.push(o);
    new rp.AutoComplete(o);
}

let x = 'x';