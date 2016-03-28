Template.search.helpers({
    //add you helpers here
});

Template.search.events({
    'click a.result':function(event,template){
        var theItem = $(event.target).text();
        var theRecipe = Recipes.findOne({'title':theItem})
        Session.set('theRecipe',theRecipe._id)
        Session.set('theParam',{'id':theRecipe._id})
        FlowRouter.go('/item/'+ theRecipe._id);
        Meteor.subscribe('singleRecipe',theRecipe.id);
        Meteor.subscribe('singleRecipeMenu',theRecipe.id);

    },
});

Template.search.onCreated(function () {
    menuInsights.remove({})
    Meteor.subscribe('recipes');
    Meteor.call('menuAggregate',function(err,resp){
        content = [];
        _.each(resp,function(item){
            item.percent = item.remaining/item.made
            menuInsights.insert(item)
            Session.set('menuAg',resp)
        })

        setTimeout(function(){
            console.log('content',content)

            $('.ui.search')
                .search({
                    source: content
                })
            ;

        },4000)

    })
});

Template.search.onRendered(function () {

});

Template.search.onDestroyed(function () {
    //add your statement here
});

