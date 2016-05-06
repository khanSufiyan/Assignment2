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