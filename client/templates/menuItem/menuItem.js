Template.menuItem.helpers({
    'menuItem':function(){
        return menuItems.find({'_id':Session.get('menuItem')._id}).fetch()
    },
});

Template.menuItem.events({
    'submit .menuItem':function(event,template){
        event.preventDefault();
        var menuObj = {};
        _.each(template.findAll('input'),function(inp,er){
            menuObj[inp.name] = inp.value
        })
        m = menuObj
        menuObj.quantity = parseFloat(m.quantity)
        menuObj.price = parseFloat(m.price)
        menuObj.originalQty = parseFloat(m.originalQty)
        console.log(this._id,menuObj);
        Meteor.call('updateMenu',this._id,menuObj)
        alert('saved!')
        FlowRouter.go('/')
    }
});

Template.menuItem.onCreated(function () {
    Meteor.subscribe('singlePhoto',Session.get('menuItem'))
});

Template.menuItem.onRendered(function () {
    //add your statement here
});

Template.menuItem.onDestroyed(function () {
    //add your statement here
});

