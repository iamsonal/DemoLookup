({
    doInit: function (component, event, helper) {
            helper.loadOptions(component);
    },

    keyPressController: function (component, event, helper) {
        var searchKey = component.get("v.searchKey");
        var searchLookup = component.find("searchLookup");
        if (searchKey.length > 0) {
            $A.util.addClass(searchLookup, 'slds-is-open');
            $A.util.removeClass(searchLookup, 'slds-combobox-lookup');

            var options = component.get("v.listOfOptions");

            var filteredOptions = options.filter(function (el) {
                return el.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            component.set("v.filteredOptions", filteredOptions);
        }
        else {
            $A.util.addClass(searchLookup, 'slds-combobox-lookup');
            $A.util.removeClass(searchLookup, 'slds-is-open');
        }

    },

    clear: function (component, event, heplper) {
        console.log('clear');
        var searchLookup = component.find("searchLookup");
        $A.util.addClass(searchLookup, 'slds-combobox-lookup');

        component.set("v.selectedOption", null);
        component.set("v.searchKey", null);
    },

    selectOption: function (component, event, helper) {
        console.log('selectOption');
        var selectedItem = event.currentTarget.dataset.record;
        console.log(selectedItem);
        component.set("v.selectedOption", selectedItem);

        var searchLookup = component.find("searchLookup");
        $A.util.removeClass(searchLookup, 'slds-is-open');

        component.set("v.searchKey", selectedItem);

    }

})