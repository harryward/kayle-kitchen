Template.globalLayout.helpers({
    //add you helpers here
});

Template.globalLayout.events({
    'click .showSidebar':function(event,template){
        event.preventDefault();
        $('.ui.sidebar')
            .sidebar('toggle')
        ;
    }
});

Template.globalLayout.onCreated(function () {

});

Template.globalLayout.onRendered(function () {

});

Template.globalLayout.onDestroyed(function () {
    //add your statement here
});

