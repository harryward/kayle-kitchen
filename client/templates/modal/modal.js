Template.modal.helpers({
    'menuItem':function(){
        return menuItems.find({'_id':Session.get('menuItem')._id}).fetch()
    },
    'image':function(){
        if(this.imageTwo){
            return Images.findOne(this.imageTwo).url()
        }
    },
});

Template.modal.events({
    //add your events here
});

Template.modal.onCreated(function () {

});

Template.modal.onRendered(function () {
    //add your statement here
});

Template.modal.onDestroyed(function () {
    //add your statement here
});

