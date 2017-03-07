Meteor.methods({
	addCountry: function (countryText) {
		check(countryText,String);
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		Countries.insert({
			country:countryText,
			active:false,
			user_id:Meteor.userId(),
			createdAt: new Date()
		});	
		
	},
	toggleCountry:function(countryData){
		check(countryData,Object);
		if(Meteor.userId() !== countryData.user_id){
			throw new Meteor.Error('not-authorized');
		}
		Countries.update(countryData._id,{
			$set:{active:!countryData.active}
		});
	},
	delCountry:function(countryData){
		check(countryData,Object);
		if(Meteor.userId() !== countryData.user_id){
			throw new Meteor.Error('not-authorized');
		}
		Countries.remove(countryData._id);

	},
	addStatus: function (statusData) {
		check(statusData,String);
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		
		Status.insert({
			title:statusData,
			description:statusData['description'],
			active:true,
			user_id:Meteor.userId(),
			tags:['school','holidays'],
			view_type:statusData['view_type'],
			createdAt: new Date(),
			updatedAt: new Date()
		});	
		
	},
	toggleStatus:function(statusData){
		check(statusData,Object);
		if(Meteor.userId() !== statusData.user_id){
			throw new Meteor.Error('not-authorized');
		}
		Status.update(statusData._id,{
			$set:{active:!statusData.active}
		});
	},
	delStatus:function(statusData){
		check(statusData,Object);
		if(Meteor.userId() !== statusData.user_id){
			throw new Meteor.Error('not-authorized');
		}
		Status.remove(statusData._id);

	}



});