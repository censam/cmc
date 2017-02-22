Countries = new Mongo.Collection('countries');

Meteor.publish('allCountries', function(){
	return Countries.find();
});