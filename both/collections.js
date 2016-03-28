menuItems = new Mongo.Collection("menuitems");
Recipes = new Mongo.Collection("recipes");
menuInsights = new Mongo.Collection(null);
var imageStore = new FS.Store.S3("images", {
    //region: "my-s3-region", //optional in most cases
    accessKeyId: "AKIAIMNQJLQPJ5UJFA6Q", //required if environment variables are not set
    secretAccessKey: "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", //required if environment variables are not set
    bucket: "mors-ads", //required
    //ACL: "myValue", //optional, default is 'private', but you can allow public or secure access routed through your app URL
    //folder: "test", //optional, which folder (key prefix) in the bucket to use
    // The rest are generic store options supported by all storage adapters
    //transformWrite: myTransformWriteFunction, //optional
    //transformRead: myTransformReadFunction, //optional
    maxTries: 1 //optional, default 5
});
Images = new FS.Collection("images", {
    stores: [imageStore]
});