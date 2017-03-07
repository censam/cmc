Countries = new Mongo.Collection('countries');
Status = new Mongo.Collection('status');


Meteor.publish('allCountries', function(){
	return Countries.find();
});


Meteor.publish('allStatus', function(){
	return Status.find();
});

Meteor.publish('userStatus', function(){
	return Status.find({user_id:this.userId});
});