var Repos = Backbone.Collection.extend({

	    model: RepoListModel,
	    
		initialize: function(models, options)
			{
			  this.url ='https://api.github.com/users/'+ options.id +'/repos';
			}
	    });