Template.home.helpers({
    'menuItems': function () {
        return menuItems.find({
            'date':{
                $gte:new Date(moment().subtract(1,'days').format())
            }
        }, {sort: {'date': 1,'daypart':1,'price':1}}).fetch()
    },
    'dollar': function (dol) {
        return numeral(dol).format('$00.00')
    },
    'color': function () {
        var theDate = moment(this.date).format('ddd') === moment().format('ddd')

        if(theDate){
            return 'green'
        }else{
            return 'red'
        }

    },
    'isValid': function () {
        if (this.price > 0) {
            return true
        }
    },
    'thisItem': function () {
        return Recipes.findOne(this._id)
    },
    'menuAg': function () {
        if(Session.get('theRecipe')){

            return menuInsights.find({'_id':Session.get('theRecipe')}, {sort: {'title': 1}}).fetch()

        }else{
            return menuInsights.find({}, {sort: {'title': 1}}).fetch()
        }
    },
    'percent': function () {
        return numeral(this.quantity/this.originalQty).format('00%')
    },
    'date':function(){
        return moment(this.date).format('ddd M/D')
    },
    'dow':function(){
        return moment(this.date).format('ddd')
    }


});

Template.home.events({
    'click a.result':function(event,template){
        event.preventDefault();
        Session.set('theRecipe',this.recipe);
        FlowRouter.go('/item/'+this.recipe);
    },
    'click .editMenu':function(){
        Session.set('menuItem',this)
        Meteor.subscribe('singlePhoto',this.imageTwo)
        FlowRouter.go('/menuItem/'+this._id)
    },
    'click .deleteRecipe':function(event,template){
        event.preventDefault();
        if(confirm('are you absolutely sure you want to delete this? it cannot be undone.')){
        menuItems.remove(this._id)
        }
    }
});

Template.home.onCreated(function () {
    //add your statement here
    Meteor.subscribe('menu');

});

Template.home.onRendered(function () {
    //add your statement here
    //Meteor.subscribe('menu');


});

Template.home.onDestroyed(function () {
    //add your statement here
});

