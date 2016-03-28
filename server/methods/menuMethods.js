Meteor.methods({
    'updateMenu':function(menuId,menuObj){
        return menuItems.update({'_id':menuId},{
            $set:menuObj
        })
    },
    'insertMenu':function(menuObj){
        menuObj.vtwo = true
        return menuItems.insert(menuObj)
    }
})