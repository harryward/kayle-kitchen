// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by kayle-kitchen.js.
import { name as packageName } from "meteor/kayle-kitchen";

// Write your tests here!
// Here is an example.
Tinytest.add('kayle-kitchen - example', function (test) {
  test.equal(packageName, "kayle-kitchen");
});
