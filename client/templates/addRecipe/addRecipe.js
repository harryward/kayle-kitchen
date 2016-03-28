Template.addRecipe.helpers({
    'image':function(){
       if(Session.get('featuredImage')){
        return Images.findOne(Session.get('featuredImage')._id).url()
       }
    },
    'savingRecipe':function(){
        return Session.get('savingRecipe')
    },
    'thisRecipe':function(){
        if(Session.get('params')){
        return Recipes.findOne(Session.get('params').id)
        }

    }
});

Template.addRecipe.events({
    'submit .recipeForm':function(event,template){

        event.preventDefault();
        Session.set('savingRecipe',true)
        recipeObj = {};
        formObj = $(event.target).serializeArray();

        _.each(formObj,function(e,i){
            if(e.name){
            recipeObj[e.name] = e.value;
            }
        });

        recipeObj.buzzwords = [];

        //_.each($('.checkbox.checked'),function(e){
        //    recipeObj.buzzwords.push($(e).val());
        //    console.log(recipeObj.buzzwords)
        //})

        if(Session.get('featuredImage')){
        recipeObj.image = Session.get('featuredImage')._id;
        recipeObj.imageTwo = Session.get('featuredImage')._id;
        recipeObj.imgId = Session.get('featuredImage')._id;
        }

        console.log('recipeObj',recipeObj);

        if(Session.get('params').id){
            Meteor.call('updateRecipe',Session.get('params').id,recipeObj,function(err,resp){
                if(!err){
                    console.log('recipe inserted',resp)
                }else{
                    console.error('error inserting',err)
                }
                Session.set('savingRecipe',false)
                window.history.back();
            })
        }else{
            Meteor.call('insertRecipe',recipeObj,function(err,resp){
                if(!err){
                    console.log('recipe inserted',resp)
                }else{
                    console.error('error inserting',err)
                }
                Session.set('savingRecipe',false)
                FlowRouter.go('/item/'+resp)
            })
        }


    },
    'change #file': function(event, template) {
        theFile = false
        var files = event.target.files;
        Session.set('featuredImage',Images.insert(files[0]))
        Meteor.subscribe('singleImage',Session.get('featuredImage')._id);

    },
});

Template.addRecipe.onCreated(function () {
    if(Session.get('params').id){
        Meteor.subscribe('singleRecipe',Session.get('params').id);
        Session.set('editing',true);
        Tracker.autorun(function(){
            if(Recipes.find(Session.get('params').id).count()){
                Session.set('featuredImage',{'_id':Recipes.findOne(Session.get('params').id).imageTwo})
            }
        })
        //Meteor.subscribe('singleImage',Recipes.findOne(Session.get('params').id).imageTwo || Recipes.findOne(Session.get('params').id).image);

    }
    setTimeout(function(){
        $('.ui.dropdown')
            .dropdown()
        ;

        var buzzArray = []
        Session.set('buzzWords',buzzArray);

        $('.recipeForm .checkbox').checkbox({
                onChecked: function(e) {
                    //console.log('checked',$(this).val())
                    //var theBuzz = $(this).val();
                    //buzzArray.push(theBuzz);
                    //Session.set('buzzWords',buzzArray)
                },
                onUnchecked: function() {

                },
                onEnable: function() {

                },
                onDisable: function() {

                },
                onDeterminate: function() {

                },
                onIndeterminate: function() {

                },
                onChange: function() {

                }
            })
        ;
    },2000)
});

Template.addRecipe.onRendered(function () {
    //add your statement here
});

Template.addRecipe.onDestroyed(function () {
    //add your statement here
});

