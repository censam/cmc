Meteor.methods({
	addCountry: function (country) {
		Countries.insert({
			country:country,
			active:false,
			createdAt: new Date()
		});
	},
	toggleCountry:function(id,status){
		Countries.update(id,{
			$set:{active:!status}
		});
	},
	delCountry:function(id){
		Countries.remove(id);
	}
});