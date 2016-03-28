Template.addItem.helpers({
   'recipe':function(){
       return Recipes.find({},{sort:{'title':1}}).fetch()
   },
    'saving':function(){
        return Session.get('saving')
    }
});

Template.addItem.events({
    'click .recipeItem':function(event,template){
        console.log('recipe',this)
        Session.set('recipe',this)
        Meteor.call('singleItemAgg',this._id.toString(),function(err,resp){
            console.log('response',resp)
        })
    },
    'submit .addItem':function(event,template){
        event.preventDefault();
        var menuObj = {};
        _.each(template.findAll('.obj'),function(inp,er){
            if(inp.name && inp.value){
            menuObj[inp.name] = inp.value
            }else{
                alert('you are missing required fields')
            }

        })
        m = menuObj
        menuObj.image = Session.get('recipe').imageTwo || Session.get('recipe').image;
        menuObj.imgId = Session.get('recipe').imageTwo || Session.get('recipe').image;
        menuObj.recipe= Session.get('recipe')._id;
        menuObj.daypart = $('.daypart .active').text();
        menuObj.price = parseFloat(m.price)
        menuObj.title= Session.get('recipe').title
        menuObj.type= Session.get('recipe').type
        menuObj.quantity = parseFloat(m.originalQty)
        menuObj.originalQty = parseFloat(m.originalQty)
        menuObj.date= new Date(moment(m.date).format('MM/DD/YYYY'))
        console.log(this._id,menuObj);
        Session.set('saving',true);
        menuObj.user = Meteor.user()._id
        Meteor.call('insertMenu',menuObj,function(err,resp){
            if(resp){
                Session.set('saving',false);
            alert('success')
            }else{
                Session.set('saving',false);
            }
        })
        //alert('saved!')
        //FlowRouter.go('/')
    }
});

Template.addItem.onCreated(function () {
    //add your statement here
    Meteor.subscribe('recipes');
    setTimeout(function(){
        $('.ui.dropdown')
            .dropdown()
        ;
    },1000)
});

Template.addItem.onRendered(function () {

});

Template.addItem.onDestroyed(function () {
    //add your statement here
});

