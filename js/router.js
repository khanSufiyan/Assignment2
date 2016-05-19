var Router = Backbone.Router.extend({
        routes:{
        '': 'home'
        }
      });
      var userList = new UserList();
      var viewRepo = new ViewRepo();
      
      var router = new Router();
      
      router.on('route:home',function(){
      userList.render();
      });
      
    

Backbone.history.start();