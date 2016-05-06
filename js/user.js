var RepoListModel = Backbone.Model.extend({

  });

var UserListModel = Backbone.Model.extend({

  });

var Repos = Backbone.Collection.extend({

	    model: RepoListModel,
	    
		initialize: function(models, options)
			{
			  this.url ='https://api.github.com/users/'+ options.id +'/repos';
			}
	    });
var Users = Backbone.Collection.extend({
    model: UserListModel,
    
    url:'https://api.github.com/users'

      });
var ViewRepo = Backbone.View.extend({
      el:'#myModal',
      
        render:function(id){
         var that = this;
          var repo = new Repos([], { id: id });
          repo.fetch({
          success:function(repo){

           var source = $('#repo-list-template').html();
          var template = Handlebars.compile(source);
          var html = template(repo.toJSON());

         /*  var template = _.template($('#repo-list-template').html(),{repo:repo.models});*/
          that.$el.html(html);
        
            }
        
        });
          
       
       }
      }); 
var UserList = Backbone.View.extend({
    el:'.page',

    events: {
    'click #viewRepo' : "viewRepo",
    },


     viewRepo: function(e){
      var id = $(e.currentTarget).data('id');
                  //update url and pass true to execute route method
              var viewRepo = new ViewRepo();
               viewRepo.render(id);
               $('#myModal').modal('show');
              },

        
          render:function(){
            var that = this;
              var users = new Users();
              users.fetch({
              success:function(users){

            var source = $('#user-list-template').html();
            var template = Handlebars.compile(source);
            var html = template(users.toJSON());
              
              /*var template = _.template($('#user-list-template').html(),{users:users.models});*/
              
              that.$el.html(html);
               $('#userTable').dataTable();

              }
            });
            }
          });
var Router = Backbone.Router.extend({
        routes:{
        '': 'home',
        'repo/:id':'viewRepo'
        }
      });
      var userList = new UserList();
      var viewRepo = new ViewRepo();
      
      var router = new Router();
      
      router.on('route:home',function(){
      userList.render();
      });
      
      router.on('route:viewRepo',function(id){
      viewRepo.render(id);
      });

Backbone.history.start();