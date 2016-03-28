Meteor.methods({
    'menuAggregate':function(){

        var pipeline = [
            {$match:{
                'daypart':'lunch',
                'type':'entree'
            }},
            {$group: {_id: "$recipe",
                made: {$sum: "$originalQty"},
                remaining: {$sum: "$quantity"},
                price: {$avg: "$price"},
            }},
            { $sort : { remaining: -1} }
        ];
        var result = menuItems.aggregate(pipeline);
        return result
    },

    'singleItemAgg':function(singleId){

        var pipeline = [
            {$match:{
                'recipe':singleId
            }},
            {$group: {_id: "$recipe",
                made: {$sum: "$originalQty"},
                remaining: {$sum: "$quantity"},
                price: {$avg: "$price"},
            }},
            { $sort : { remaining: -1} }
        ];
        var result = menuItems.aggregate(pipeline);
        return result
    },

    'menubyday':function(){

        var pipeline = [
            {$match:{
                'date':{$gte:new Date()}
            }},
            {$group: {_id: "$date",
                id: "$_id",
                recipe: "$recipe",
            }},
            { $sort : { remaining: -1} }
        ];
        var result = menuItems.aggregate(pipeline);
        return result
    }
})
