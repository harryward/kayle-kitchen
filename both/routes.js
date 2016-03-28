FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("globalLayout", {
            top: "home",
            //sidebar: "sidebar",

        });
    }
});

FlowRouter.route('/item/:id', {
    action: function(params) {
        Session.set('theParam',params)
        BlazeLayout.render("globalLayout", {
            //veryTop: "search",
            top: "itemLanding",
            //sidebar: "sidebar",

        });
    }
});

FlowRouter.route('/menuItem/:id', {
    action: function(params) {
        Session.set('theParam',params)
        BlazeLayout.render("globalLayout", {
            //veryTop: "search",
            top: "menuItem",
            //sidebar: "sidebar",
        });
    }
});


FlowRouter.route('/addItem', {
    action: function(params) {
        Session.set('theParam',params)
        BlazeLayout.render("globalLayout", {
            //veryTop: "search",
            top: "addItem",
            //sidebar: "sidebar",
        });
    }
});

FlowRouter.route('/recipes', {
    action: function(params,queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render("globalLayout", {
            //veryTop: "search",
            top: "recipes",
            //sidebar: "sidebar",
        });
    }
});

FlowRouter.route('/add/recipe', {
    action: function(params,queryParams) {
        Session.set('params',queryParams)
        BlazeLayout.render("globalLayout", {
            //veryTop: "search",
            top: "addRecipe",
            //sidebar: "sidebar",
        });
    }
});