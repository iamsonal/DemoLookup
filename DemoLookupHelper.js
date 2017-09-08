({
    /*searchHelper : function(component, event, getInputkeyWord) {
        var action = component.get("c.fetchAccount");
        action.setParams({
            'searchKeyWord': getInputkeyWord
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                console.log(storeResponse);
                component.set("v.listOfOptions", storeResponse);
            }
        });
        $A.enqueueAction(action);
    },*/

    loadOptions: function (component) {
        var actionMethod = component.get("v.actionMethod");
        var action = component.get(actionMethod);
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var options = response.getReturnValue();
                console.log(options);
                component.set("v.listOfOptions", options);
            }
        });
        $A.enqueueAction(action);
    },

})