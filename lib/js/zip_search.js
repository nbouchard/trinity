//
// zipSearch JavaScript.
//
// zipSearch()
// ---------------------------------------------
// Adjust the search URL based off of selected parameters

function zipSearch() {
    'use strict';

    var serviceType = document.getElementById('serviceType').value,
        searchZipcode = document.getElementById('searchZipcode').value,
        productType = document.getElementById('productType').value,
        zipcodeRegex = /^\d{5}$/,
        url = '';

    //if a vaild zipcode pattern
    if ( zipcodeRegex.test(searchZipcode) ) {
        if  ( !serviceType ) {
            // if service type does not exist (only happens when a dropdown value hasn't been selected)
            // default to using smallbusiness as service type
            serviceType = 'smallbusiness';
        }

        url = '/shop/' + serviceType + '/' + productType + '/' + searchZipcode + '/' ;

        window.location.href=url;
    }
    else {
        // return focus to zip input box
        document.getElementById('searchZipcode').focus();
    }
}
